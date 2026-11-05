import { useState } from "react";
import { SiteFooter, SiteHeader } from "./SiteChrome.jsx";

// Web3Forms access key (public by design, same one as the previous site)
const WEB3FORMS_KEY = "78946486-6bdc-43aa-8313-72a6bedf505a";

const WORK = [
  {
    name: "Atelier JK&WA",
    kind: "Client project, Singapore",
    url: "https://jkwa.netlify.app",
    urlLabel: "Visit jkwa.netlify.app",
    image: "/work/jkwa-site.jpg",
    alt: "Atelier JK&WA home page with a Japanese-inspired living room",
    text: "A portfolio website for a Japanese-inspired interior design and build firm. The client's team updates projects, hero images and company details from their own admin panel. I also wrote the admin guide and set up hosting and the domain.",
    stack: "Next.js, Supabase, Netlify",
  },
  {
    name: "Wide-Eleven",
    kind: "Client project, Bangkok",
    url: "https://www.wide-eleven.com/",
    urlLabel: "Visit wide-eleven.com",
    image: "/work/wide-eleven-site.jpg",
    alt: "Wide-Eleven home page with hotel and office interiors",
    text: "A company website for an interior design and construction firm. Their team manages projects, categories, client logos and job openings without a developer.",
    stack: "Next.js, Supabase, Resend",
  },
  {
    name: "Siam Voyage",
    kind: "Tour booking platform, Thailand",
    url: "https://siamvoyage.netlify.app/",
    urlLabel: "Visit siamvoyage.netlify.app",
    image: "/work/siamvoyage-site.jpg",
    alt: "Siam Voyage home page with a Thai temple and a destination search",
    text: "A tour booking website with packages, a booking form, booking IDs, email confirmations and an office dashboard. Bookings are stored in Google Sheets.",
    stack: "React, TypeScript, Google Apps Script, Netlify",
  },
  {
    name: "SiamSkin",
    kind: "Personal project, not a real clinic",
    url: "https://siamskin.vercel.app",
    urlLabel: "Visit siamskin.vercel.app",
    image: "/work/siamskin-site.jpg",
    alt: "SiamSkin clinic concept home page with a portrait and booking buttons",
    text: "A website I designed for an imaginary Bangkok skin clinic, to show what a premium clinic site can feel like: treatments, before and after results, reviews and booking through LINE.",
    stack: "Next.js, Framer Motion, Vercel",
  },
];

const BUILDS = [
  ["Sproutful", "Web app connected to Google Sheets.", "https://sproutful.vercel.app/s/riven_fams255"],
  ["The Tribes Gallery", "AI studio that uses Claude to write art prompts and Etsy listings.", "https://the-tribes-gallery.netlify.app/"],
  ["Smile Plus Dental", "Bilingual dental clinic concept with online booking.", "https://smileplus-dentalclinic.netlify.app/"],
  ["NudgeMe Bot", "Telegram bot with plain-language reminders, snooze and time zones.", "https://t.me/nudgeme_riven_bot"],
];

const NEEDS = ["Not sure yet", "Business website", "Website with admin panel", "AI automation", "Graphic design"];

const EMPTY_FORM = { name: "", email: "", contact: "", projectType: "Not sure yet", description: "" };

export default function HomePage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New project request from ${form.name}`,
          from_name: "Riven Portfolio",
          name: form.name,
          email: form.email,
          "Contact Info": form.contact,
          "Project Type": form.projectType,
          "Project Description": form.description,
        }),
      });
      const result = await res.json();
      if (!result.success) throw new Error("rejected");
      setStatus("sent");
      setForm(EMPTY_FORM);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" id="home">
          <div className="wrap hero__grid">
            <div>
              <h1>Websites you can update yourself.</h1>
              <p className="hero__lead">
                I'm Riven, a web designer in Bangkok. I design and build business websites, connect your domain,
                and add an admin panel when you need one, so a new project or photo never has to wait for a developer.
              </p>
              <div className="hero__actions">
                <a className="btn btn--solid-light" href="#work">See my work</a>
                <a className="btn btn--ghost-light" href="#contact">Start a project</a>
              </div>
            </div>
            <div className="hero__visual">
              <img className="hero__portrait" src="/work/riven-portrait.webp" alt="Riven holding a laptop, surrounded by web, video, AI and social media tool icons" width="1223" height="1286" />
            </div>
          </div>
        </section>

        <section className="band" id="work">
          <div className="wrap">
            <h2>Selected work</h2>
            <div className="work">
              {WORK.map((p) => (
                <article className="work-row" key={p.name}>
                  <a className="work-row__media" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={p.urlLabel}>
                    <img src={p.image} alt={p.alt} width="1440" height="900" loading="lazy" />
                  </a>
                  <div>
                    <p className="work-kind">{p.kind}</p>
                    <h3>{p.name}</h3>
                    <p>{p.text}</p>
                    <p className="work-stack">{p.stack}</p>
                    <a className="text-link" href={p.url} target="_blank" rel="noopener noreferrer">{p.urlLabel}</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band band--mist">
          <div className="wrap">
            <h2>Other builds</h2>
            <div className="rows">
              {BUILDS.map(([name, text, url]) => (
                <div className="row row--build" key={name}>
                  <h3>{name}</h3>
                  <p>{text}</p>
                  <a className="text-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${name}`}>Open</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band" id="about">
          <div className="wrap about">
            <h2>About me</h2>
            <div>
              <p>My name is Aung Kaung Myat. Clients know me as Riven. I studied computing and IT at Victoria University College, then graphic design at ATBC International College.</p>
              <p>I build with AI tools, including Claude Code, which lets me move quickly. I still make the design decisions, test the result and handle the launch myself.</p>
              <p>You can talk to me in Burmese or English, and I speak conversational Thai.</p>
            </div>
          </div>
        </section>

        <section className="band band--ink" id="contact">
          <div className="wrap contact">
            <div>
              <h2>Tell me about your project</h2>
              <p className="contact__lead">Send a few details about your business and what you need. A rough idea is enough.</p>
              <ul className="channels">
                <li><span>WhatsApp</span><a href="https://wa.me/66950287983">+66 95 028 7983</a></li>
                <li><span>Telegram</span><a href="https://t.me/Riven_Myat">@Riven_Myat</a></li>
                <li><span>Facebook</span><a href="https://www.facebook.com/aungkmyattt">Riven Myat</a></li>
                <li><span>Email</span><a href="mailto:aungkaungmyat.vuc2020@gmail.com">aungkaungmyat.vuc2020@gmail.com</a></li>
              </ul>
              <div className="line-qr">
                <img src="/LineQR.jpg" alt="QR code to add Riven on LINE" width="104" height="104" loading="lazy" />
                <span>Scan to message me on LINE</span>
              </div>
            </div>
            <form className="form" onSubmit={submit}>
              <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" required autoComplete="name" value={form.name} onChange={update} /></div>
              <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={update} /></div>
              <div className="field"><label htmlFor="contact">Phone, LINE or WhatsApp (optional)</label><input id="contact" name="contact" value={form.contact} onChange={update} /></div>
              <div className="field">
                <label htmlFor="projectType">What do you need?</label>
                <select id="projectType" name="projectType" value={form.projectType} onChange={update}>
                  {NEEDS.map((need) => <option key={need}>{need}</option>)}
                </select>
              </div>
              <div className="field field--wide"><label htmlFor="description">About your project</label><textarea id="description" name="description" rows="5" required value={form.description} onChange={update} /></div>
              <div className="form__foot">
                <button className="btn btn--solid-light" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send project details"}</button>
                <p className="form__msg" role="status">
                  {status === "sent" && "Sent. I'll reply to your email or phone."}
                  {status === "error" && "That didn't send. Check your connection and try again, or message me on WhatsApp."}
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
