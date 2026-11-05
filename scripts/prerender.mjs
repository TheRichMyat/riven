#!/usr/bin/env node
/**
 * Multi-route static pre-rendering.
 *
 * Run AFTER `vite build`:
 *   1. Builds an SSR bundle of `src/entry-server.jsx`.
 *   2. Loads the bundle, then for each route in ROUTES:
 *      - Calls render(route) to produce the page HTML.
 *      - Patches the index.html template with per-route meta tags
 *        (title, description, canonical, OG/Twitter URL+title+description).
 *      - Injects the rendered HTML into the <!--app-html--> placeholder.
 *      - Writes the result to dist/<route>/index.html.
 *   3. Removes the temporary SSR build directory.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build as viteBuild } from 'vite'
import { posts } from '../src/blog/posts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(distDir, 'server')

const SITE_URL = 'https://riven-worldclass.vercel.app'

// Default site-level metadata (matches the homepage values in index.html).
const DEFAULTS = {
  title: 'Freelance Web Designer Bangkok | Riven — SEO-Friendly Web Design Thailand',
  description:
    'Riven is a freelance web designer in Bangkok offering SEO-friendly website design for clinics, restaurants, salons and small businesses across Thailand. Custom landing pages, portfolio websites and AI automation — built to rank on Google.',
}

// Per-route metadata. For posts, derived from posts.js.
const ROUTES = [
  {
    path: '/',
    title: DEFAULTS.title,
    description: DEFAULTS.description,
  },
  {
    path: '/blog',
    title: 'The Riven Blog | Web Design, SEO & AI Automation for Thai Businesses',
    description:
      'Honest articles on web design in Bangkok, hiring freelance designers in Thailand, SEO basics for small businesses, and AI automation that actually saves time.',
  },
  ...posts.map((post) => ({
    path: `/blog/${post.slug}`,
    title: `${post.title} | Riven Blog`,
    description: post.description,
  })),
]

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function applyRouteMeta(template, route) {
  const url = `${SITE_URL}${route.path === '/' ? '/' : route.path}`
  const title = escapeHtml(route.title)
  const description = escapeHtml(route.description)

  return template
    // <title>
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    // <meta name="title">
    .replace(
      /<meta name="title" content="[^"]*"\s*\/?>/,
      `<meta name="title" content="${title}" />`
    )
    // <meta name="description">
    .replace(
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${description}" />`
    )
    // canonical
    .replace(
      /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${url}" />`
    )
    // OG url / title / description
    .replace(
      /<meta property="og:url" content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${url}" />`
    )
    .replace(
      /<meta property="og:title" content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${title}" />`
    )
    .replace(
      /<meta property="og:description" content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${description}" />`
    )
    // Twitter url / title / description
    .replace(
      /<meta name="twitter:url" content="[^"]*"\s*\/?>/,
      `<meta name="twitter:url" content="${url}" />`
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${title}" />`
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${description}" />`
    )
}

function outputPathFor(routePath) {
  if (routePath === '/' || routePath === '') {
    return path.join(distDir, 'index.html')
  }
  // Strip leading slash, build dist/<segments>/index.html
  const segments = routePath.replace(/^\/+/, '').split('/').filter(Boolean)
  return path.join(distDir, ...segments, 'index.html')
}

async function main() {
  console.log('▶ Building SSR bundle...')
  await viteBuild({
    root,
    logLevel: 'warn',
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: 'dist/server',
      emptyOutDir: true,
      rollupOptions: {
        output: {
          format: 'esm',
          entryFileNames: 'entry-server.mjs',
        },
      },
    },
  })

  const ssrEntry = path.join(ssrDir, 'entry-server.mjs')
  const { render } = await import(pathToFileURL(ssrEntry).href)

  // The ORIGINAL template that vite produced (for the homepage).
  // We'll patch this per-route rather than mutate it in place.
  const originalTemplate = fs.readFileSync(
    path.join(distDir, 'index.html'),
    'utf-8'
  )

  for (const route of ROUTES) {
    const appHtml = render(route.path)
    let html = applyRouteMeta(originalTemplate, route)
    html = html.includes('<!--app-html-->')
      ? html.replace('<!--app-html-->', appHtml)
      : html.replace(/<div id="root">\s*<\/div>/, `<div id="root">${appHtml}</div>`)

    const outPath = outputPathFor(route.path)
    fs.mkdirSync(path.dirname(outPath), { recursive: true })
    fs.writeFileSync(outPath, html)
    console.log(`  ✔ ${route.path.padEnd(50)} → ${path.relative(root, outPath)}`)
  }

  fs.rmSync(ssrDir, { recursive: true, force: true })
  console.log('✔ Cleaned up SSR build artifacts')
  console.log(`✔ Pre-rendered ${ROUTES.length} routes`)
}

main().catch((err) => {
  console.error('Pre-render failed:', err)
  process.exit(1)
})
