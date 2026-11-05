import { useState } from "react";
import { MONO_PATH, MONO_VIEWBOX, WORD_PATH, WORD_VIEWBOX } from "./brand.js";

const LINKS = [
  ["Work", "/#work"],
  ["About", "/#about"],
];

export function Logo() {
  return (
    <a href="/" className="brand" aria-label="Riven, home">
      <svg className="brand__mono" viewBox={MONO_VIEWBOX} aria-hidden="true"><path fillRule="evenodd" d={MONO_PATH} /></svg>
      <svg className="brand__word" viewBox={WORD_VIEWBOX} aria-hidden="true"><path fillRule="evenodd" d={WORD_PATH} /></svg>
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-head">
      <div className="wrap site-head__row">
        <Logo />
        <button type="button" className="menu-btn" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={`site-nav${open ? " is-open" : ""}`} aria-label="Primary">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="btn btn--small btn--solid-light" href="/#contact" onClick={() => setOpen(false)}>Start a project</a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-foot">
      <div className="wrap site-foot__row">
        <Logo />
        <nav aria-label="Footer">
          {LINKS.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a href="/#contact">Contact</a>
        </nav>
        <span>© 2026 Riven Web Design &amp; AI Automation</span>
      </div>
    </footer>
  );
}
