import BlogLayout from "./BlogLayout.jsx";
import { getRelatedPosts } from "./posts.js";

export default function BlogPost({ post }) {
  if (!post) {
    return (
      <BlogLayout>
        <div className="max-w-3xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-black mb-4">Post not found</h1>
          <p className="text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
          <a href="/blog" className="inline-flex items-center space-x-2 text-white font-bold">
            <span aria-hidden="true">←</span>
            <span>Back to all posts</span>
          </a>
        </div>
      </BlogLayout>
    );
  }

  const related = getRelatedPosts(post);

  return (
    <BlogLayout>
      <article className="max-w-3xl mx-auto px-6 py-16">
        <a href="/blog" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white text-sm font-bold mb-10 transition-colors">
          <span aria-hidden="true">←</span>
          <span>All articles</span>
        </a>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6 text-xs tracking-normal text-gray-500">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">{post.title}</h1>

          <p className="text-xl text-gray-400 leading-relaxed">{post.description}</p>

          <div className="flex flex-wrap items-center gap-2 mt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-bold tracking-normal text-white bg-white/5 border border-white/25 px-3 py-1 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Outline / structure — replace section.body with full prose later */}
        <div className="prose prose-invert max-w-none space-y-10">
          {post.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
                {section.heading}
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">{section.body}</p>
            </section>
          ))}
        </div>

        {/* CTA */}
        <aside className="mt-16 p-8 md:p-10 rounded-sm bg-white/5 border border-white/10">
          <h2 className="text-2xl md:text-3xl font-black mb-3">Want help applying this to your business?</h2>
          <p className="text-gray-400 mb-6">
            I'm Riven — a freelance web designer in Bangkok offering SEO-friendly websites, clinic
            websites and AI automation across Thailand. Tell me what you're working on and I'll
            reply within 24 hours.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/#contact" className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-black font-bold rounded-sm hover:opacity-90 transition-opacity">
              <span>Start a project</span>
              <span aria-hidden="true">→</span>
            </a>
            <a href="/#work" className="inline-flex items-center space-x-2 px-6 py-3 border border-white/20 font-bold rounded-sm hover:bg-white/5 transition-colors">
              <span>See my work</span>
            </a>
          </div>
        </aside>

        {/* Related posts (internal linking) */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-xs font-black tracking-normal text-gray-500 mb-6">
              Continue reading
            </h2>
            <ul className="grid md:grid-cols-2 gap-6 list-none p-0">
              {related.map((r) => (
                <li key={r.slug}>
                  <a
                    href={`/blog/${r.slug}`}
                    className="group block h-full bg-black border border-white/5 rounded-sm p-6 hover:border-white/50 transition-all"
                  >
                    <h3 className="text-lg font-bold mb-2 leading-tight group-hover:underline transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{r.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </BlogLayout>
  );
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}
