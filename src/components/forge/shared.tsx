import { useEffect, useRef } from 'react';

/* Shared Forge chrome + helpers used by every page (home, manifesto, …). */

export const CAL = 'https://calendly.com/agrawalshashwat640/30min';
export const MAIL = 'mailto:Admin@cloutsync.in';
export const EMAIL = 'Admin@cloutsync.in';
export const TEL = '+917068692189';
export const PHONE = '7068692189';
export const LINKEDIN = 'https://www.linkedin.com/company/cloutsync-media/';

// Absolute hrefs so links work from any subpage. Section anchors resolve on the home page.
export const nav = [
  { label: 'creators', href: '/#fg-creators' },
  { label: 'brands', href: '/#fg-brands' },
  { label: 'process', href: '/#fg-process' },
  { label: 'manifesto', href: '/manifesto' },
  { label: 'contact', href: '/#fg-contact' },
];

/* Reveal-on-scroll via IntersectionObserver */
export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>('.fg-reveal'));
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('is-in')); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } }),
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  return ref;
}

export const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function PromoBar() {
  return (
    <div className="fg-eyebrow" style={{ background: 'var(--fg-tint-green)', textAlign: 'center', padding: '10px 16px', color: 'var(--fg-mint)', borderBottom: '1px solid var(--fg-hairline)' }}>
      now signing — the ’26 roster · <a href={CAL} target="_blank" rel="noreferrer" className="fg-link" style={{ color: 'var(--fg-mint)' }}>apply as a creator →</a>
    </div>
  );
}

export function Nav() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 60, backdropFilter: 'blur(10px)', background: 'rgba(0,0,0,0.55)', borderBottom: '1px solid var(--fg-hairline)' }}>
      <div className="fg-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px clamp(1.25rem,5vw,4rem)' }}>
        <a href="/" className="fg-wordmark" style={{ fontSize: '1.6rem' }}>cloutsync<span className="fg-accent">.</span></a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem,2.4vw,2.2rem)' }}>
          <div className="hidden md:flex" style={{ gap: '2rem' }}>
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="fg-link fg-sans" style={{ fontSize: '.95rem', fontWeight: 500 }}>{n.label}</a>
            ))}
          </div>
          <a href={CAL} target="_blank" rel="noreferrer" className="fg-btn fg-btn--solid">apply now</a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="fg-section" style={{ background: 'var(--fg-bg)', position: 'relative', zIndex: 3, paddingTop: 'clamp(3rem,5vw,5rem)', paddingBottom: '2.5rem', borderTop: '1px solid var(--fg-hairline)' }}>
      <div className="fg-wrap">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ maxWidth: 420 }}>
            <div className="fg-wordmark" style={{ fontSize: '2rem' }}>cloutsync<span className="fg-accent">.</span></div>
            <p className="fg-body" style={{ marginTop: '1rem', fontSize: '1rem' }}>
              creator-led campaigns for education brands that want attention to turn into action.
            </p>
            <address className="fg-body" style={{ marginTop: '1rem', fontSize: '.95rem', fontStyle: 'normal', color: 'var(--fg-faint)' }}>
              CloutSync Media · Noida, Uttar Pradesh, India
            </address>
          </div>
          <div style={{ display: 'flex', gap: 'clamp(2rem,5vw,5rem)', flexWrap: 'wrap' }}>
            <div>
              <p className="fg-eyebrow" style={{ marginBottom: '1rem' }}>explore</p>
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="fg-link fg-sans" style={{ display: 'block', marginBottom: '.6rem', fontSize: '.95rem' }}>{n.label}</a>
              ))}
            </div>
            <div>
              <p className="fg-eyebrow" style={{ marginBottom: '1rem' }}>new business</p>
              <a href={MAIL} className="fg-link fg-sans" style={{ display: 'block', marginBottom: '.6rem', fontSize: '.95rem' }}>{EMAIL}</a>
              <a href={`tel:${TEL}`} className="fg-link fg-sans" style={{ display: 'block', marginBottom: '.6rem', fontSize: '.95rem' }}>{PHONE}</a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="fg-link fg-sans" style={{ display: 'block', marginBottom: '.6rem', fontSize: '.95rem' }}>linkedin ↗</a>
              <a href={CAL} target="_blank" rel="noreferrer" className="fg-link fg-accent fg-sans" style={{ fontSize: '.95rem' }}>book a call →</a>
            </div>
          </div>
        </div>
        <div className="fg-hairline" style={{ marginTop: '3rem', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '.75rem', justifyContent: 'space-between' }}>
          <span className="fg-eyebrow">© 2026 cloutsync media</span>
          <span className="fg-eyebrow">Noida, India · working worldwide</span>
        </div>
      </div>
    </footer>
  );
}
