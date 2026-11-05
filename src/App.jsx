import HomePage from "./HomePage.jsx";
import BlogList from "./blog/BlogList.jsx";
import BlogPost from "./blog/BlogPost.jsx";
import { getPostBySlug } from "./blog/posts.js";

/**
 * Tiny path-based router.
 *
 * Each route is prerendered to its own dist/<route>/index.html
 * by scripts/prerender.mjs, so SPA navigation isn't needed —
 * regular <a href> links work because every route ships as
 * a static, fully-rendered HTML document.
 */
export default function App({ path = "/" }) {
  const clean = path.replace(/\/+$/, "") || "/";

  if (clean === "/") {
    return <HomePage />;
  }

  if (clean === "/blog") {
    return <BlogList />;
  }

  if (clean.startsWith("/blog/")) {
    const slug = clean.slice("/blog/".length);
    const post = getPostBySlug(slug);
    return <BlogPost post={post} />;
  }

  // Unknown route — fall back to homepage rather than a hard 404.
  return <HomePage />;
}
