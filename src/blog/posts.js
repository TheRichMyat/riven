/**
 * Blog post registry.
 *
 * Each post has:
 *   - slug:        URL slug (used at /blog/<slug>)
 *   - title:       <h1> + <title> for the post
 *   - description: meta description / excerpt shown on /blog
 *   - date:        ISO date (YYYY-MM-DD)
 *   - readTime:    short string e.g. "5 min read"
 *   - keywords:    primary SEO keywords (used in <meta name="keywords">)
 *   - tags:        category-style tags shown on the post
 *   - sections:    outline of the post — each section is { heading, body }
 *                  body is currently a placeholder; replace with real content later.
 *   - related:     slugs of related posts (used for internal linking)
 *
 * To add a new post: append an entry here, then add its route to scripts/prerender.mjs
 * and a <url> entry to public/sitemap.xml.
 */

export const posts = [
  {
    slug: "seo-friendly-websites-bangkok-clinics",
    title: "Why Every Bangkok Clinic Needs an SEO-Friendly Website in 2026",
    description:
      "Most Bangkok clinics are losing patients to a Google search they never even appear in. Here's why an SEO-friendly website matters more than ever — and what a good one actually looks like.",
    date: "2026-04-28",
    readTime: "6 min read",
    keywords: [
      "clinic website design Bangkok",
      "SEO-friendly website design",
      "web design Bangkok",
    ],
    tags: ["SEO", "Clinics", "Bangkok"],
    sections: [
      {
        heading: "The patient journey starts on Google",
        body: "Outline: explain that 80%+ of clinic patients in Bangkok start with a Google search (e.g. 'dentist near Asok', 'skincare clinic Sukhumvit'). If your clinic doesn't appear, you don't exist for that patient.",
      },
      {
        heading: "What 'SEO-friendly' actually means",
        body: "Outline: breakdown of on-page SEO basics for clinics — semantic HTML, fast loading, mobile-first design, structured data (LocalBusiness + MedicalBusiness), clean URLs, sitemap, internal linking.",
      },
      {
        heading: "Common mistakes Bangkok clinics make",
        body: "Outline: list the recurring problems — slow Wix templates, no Thai/English bilingual setup, missing booking CTA, no Google Business Profile, broken mobile layouts, no real photos.",
      },
      {
        heading: "What a good clinic website looks like",
        body: "Outline: walk through the structure of a high-performing clinic site — hero with clear specialty + location, services with prices, real photos, doctor bios, online booking, trust signals, FAQ, contact map.",
      },
      {
        heading: "Quick wins you can implement this week",
        body: "Outline: 5 fast changes any clinic can make — claim Google Business Profile, add real photos, ensure mobile speed, add bilingual support, add a clear booking button.",
      },
      {
        heading: "Ready to upgrade?",
        body: "Outline: short CTA paragraph. Mention Riven builds clinic websites in Bangkok starting at ฿5,000 (landing page) or ฿10,000 (full portfolio site). Link to /#order and /#portfolio (Siam Skin BKK and Smile Plus Dental).",
      },
    ],
    related: [
      "how-to-choose-freelance-web-designer-thailand",
      "ai-automation-small-business-thailand",
    ],
  },
  {
    slug: "how-to-choose-freelance-web-designer-thailand",
    title: "How to Choose a Freelance Web Designer in Thailand: 7 Things to Check First",
    description:
      "Hiring a freelance web designer in Thailand can save you 50–70% versus an agency — but only if you pick the right one. Here are the 7 things to check before you sign.",
    date: "2026-04-28",
    readTime: "7 min read",
    keywords: [
      "freelance web designer Thailand",
      "web design Bangkok",
      "hire web designer Thailand",
    ],
    tags: ["Freelance", "Hiring", "Thailand"],
    sections: [
      {
        heading: "Why go freelance instead of an agency",
        body: "Outline: cost, communication, speed, ownership of code. When freelance is the right call, when an agency is.",
      },
      {
        heading: "1. A real, live portfolio",
        body: "Outline: not screenshots — actual live URLs you can open and inspect. Look at loading speed, mobile responsiveness, attention to detail.",
      },
      {
        heading: "2. Clear, transparent pricing",
        body: "Outline: red flag if you have to 'request a quote' for a basic landing page. Price should be visible, scope should be defined, payment terms should be normal (50% upfront is standard).",
      },
      {
        heading: "3. SEO awareness baked in",
        body: "Outline: ask whether their sites include semantic HTML, sitemaps, meta tags, structured data — or if SEO is sold as a separate service. Bake-in is correct, upsell is a warning sign.",
      },
      {
        heading: "4. Bilingual capability (if you need it)",
        body: "Outline: for Thai businesses serving locals + tourists, EN/TH support matters. Designer should have shipped at least one bilingual project.",
      },
      {
        heading: "5. Direct communication",
        body: "Outline: you should be talking to the actual builder, not an account manager. Quick replies on LINE/Telegram beat slow email chains.",
      },
      {
        heading: "6. Realistic timelines",
        body: "Outline: 5–14 days for landing pages and portfolio sites is normal. 'Ship in 24 hours' is a red flag, '3 months minimum' is also a red flag (probably booked solid or padding).",
      },
      {
        heading: "7. After-launch support",
        body: "Outline: what happens if something breaks two weeks in? Is there a free fix window? Do they hand off code or hold it hostage?",
      },
      {
        heading: "Bonus: AI automation experience",
        body: "Outline: in 2026, the highest-ROI websites also automate part of your workflow. Designer who can wire up a Telegram/Messenger bot or a smart order form is a multiplier.",
      },
      {
        heading: "Working with Riven",
        body: "Outline: short pitch. Direct LINE/Telegram contact, transparent pricing ฿3,000–฿15,000, SEO baked in, bilingual support, AI automation included on Full Package. Link to /#pricing and /#contact.",
      },
    ],
    related: [
      "seo-friendly-websites-bangkok-clinics",
      "ai-automation-small-business-thailand",
    ],
  },
  {
    slug: "ai-automation-small-business-thailand",
    title: "AI Automation for Small Businesses in Thailand: 5 Workflows That Save Hours Every Week",
    description:
      "AI automation isn't just for big companies. Here are 5 simple workflows that small Thai businesses — restaurants, clinics, salons — can deploy this month to save real hours.",
    date: "2026-04-28",
    readTime: "8 min read",
    keywords: [
      "AI automation Thailand",
      "Telegram bot Thailand",
      "small business automation",
    ],
    tags: ["AI", "Automation", "Small Business"],
    sections: [
      {
        heading: "Why AI automation matters for small businesses",
        body: "Outline: the gap between SMEs and enterprises is closing fast — tools like Claude, GPT, and no-code platforms now let a single freelancer build automations that used to take a 5-person team.",
      },
      {
        heading: "Workflow 1: Auto-reply Messenger / LINE bot for FAQs",
        body: "Outline: 80% of customer messages are repeats — opening hours, location, prices. A simple bot answers them instantly, 24/7, in Thai or English.",
      },
      {
        heading: "Workflow 2: Telegram order intake for restaurants",
        body: "Outline: customers send order via Telegram bot, structured by item/quantity/delivery, pushed straight to kitchen printer or staff dashboard. No more screenshots of LINE chats.",
      },
      {
        heading: "Workflow 3: Booking confirmations + reminders",
        body: "Outline: when a clinic/salon booking is made via website, automation sends confirmation email + SMS, then a reminder 24h before. Reduces no-shows by 30–40%.",
      },
      {
        heading: "Workflow 4: AI-summarized customer feedback",
        body: "Outline: collect Google reviews + form responses, run them through Claude weekly, get a 1-page summary of what customers loved and complained about. No more reading 50 reviews by hand.",
      },
      {
        heading: "Workflow 5: Smart lead qualification",
        body: "Outline: when someone fills out your website's contact form, an AI step categorizes the lead (hot/warm/cold) by analyzing what they wrote, and routes hot leads straight to your phone via Telegram.",
      },
      {
        heading: "How much does this cost in Thailand?",
        body: "Outline: ranges from free (using existing chatbot platforms) to ฿5,000–฿15,000 for a fully custom Telegram or Messenger bot. ROI usually hits in 1–2 months for any business with >10 messages a day.",
      },
      {
        heading: "Where to start",
        body: "Outline: pick the workflow that hurts most this week. If you're spending 30+ minutes a day on the same 5 questions, that's automation #1. Mention Riven offers AI automation as part of the Full Package (฿15,000) or as a standalone build. Link to /#order and /#portfolio (NudgeMe Bot, The Tribes Gallery).",
      },
    ],
    related: [
      "seo-friendly-websites-bangkok-clinics",
      "how-to-choose-freelance-web-designer-thailand",
    ],
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post) {
  if (!post?.related) return [];
  return post.related
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter(Boolean);
}
