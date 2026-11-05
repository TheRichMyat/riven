import { SiteFooter, SiteHeader } from "../SiteChrome.jsx";

/** Shared header and footer for blog pages, matching the home page. */
export default function BlogLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
