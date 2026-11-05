import BlogLayout from "./BlogLayout.jsx";
import { posts } from "./posts.js";

export default function BlogList() {
  return (
    <BlogLayout>
      <article className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-16">
          <div className="inline-block px-4 py-1 rounded-sm bg-white/5 border border-white/25 mb-6">
            <span className="text-xs font-black tracking-normal text-white">The Riven Blog</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Web design, SEO &amp; AI automation
            <br />
            <span className="text-gray-500">for Thai businesses.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
            Honest articles on web design in Bangkok, hiring freelance designers in Thailand,
            SEO basics for small businesses, and AI automation that actually saves time.
          </p>
        </header>

        <ul className="grid md:grid-cols-2 gap-8 list-none p-0">
          {posts.map((post) => (
            <li key={post.slug}>
              <a
                href={`/blog/${post.slug}`}
                className="group block h-full bg-black border border-white/5 rounded-sm p-8 hover:border-white/50 hover:-translate-y-1 transition-all"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4 text-xs tracking-normal text-gray-500">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold mb-3 leading-tight group-hover:underline transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-400 leading-relaxed mb-6">{post.description}</p>

                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold tracking-normal text-white bg-white/5 border border-white/25 px-3 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center space-x-2 text-white font-bold">
                  <span>Read article</span>
                  <span aria-hidden="true">→</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <aside className="mt-16 p-8 md:p-10 rounded-sm bg-white/5 border border-white/10 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-3">
            Need a website or AI automation built?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm a freelance web designer in Bangkok, available for clinic sites, landing pages,
            portfolio websites and Telegram/Messenger bot work across Thailand.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-black font-bold rounded-sm hover:opacity-90 transition-opacity"
          >
            <span>Start a project</span>
            <span aria-hidden="true">→</span>
          </a>
        </aside>
      </article>
    </BlogLayout>
  );
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}
