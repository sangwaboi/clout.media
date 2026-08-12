import { useEffect, useRef, useState } from 'react';
import { CAL, MAIL, useReveal, Arrow, PromoBar, Nav, Footer } from './shared';

/* =============================================================================
   CloutSync — FORGE theme · home page (dark / premium / editorial)
   Design language decoded from forgeresidency.com (see /forge/README.md).
   Shared chrome (nav, footer, promo, reveal hook) lives in ./shared.
   ========================================================================== */

const stats = [
  { n: '5 Cr+', l: 'in creator revenue' },
  { n: '35+', l: 'brands transformed' },
  { n: '20M+', l: 'clout under management' },
  { n: '4×', l: 'avg earning lift of a creator' },
];

// Logos in /public/brands/. `invert` darkens a white logo so it reads on the white plaque.
// BRAND NAMING RULE: partner/brand names are always written with their proper
// capitalization (first letters capital), e.g. "Physics Wallah", "Newton School
// of Technology", "Masai School". Never lowercase a partner brand's name.
const brands = [
  { name: 'Physics Wallah', file: 'physics-wallah.png', invert: false },
  { name: 'Newton School of Technology', file: 'newton-school-of-technology.png', invert: true },
  { name: 'Masai School', file: 'masai-school.jpg', invert: false },
  { name: 'College Vidya', file: 'college-vidya.jpg', invert: false },
  { name: 'Rishihood University', file: 'rishihood-university.png', invert: false },
  { name: 'Polaris School of Technology', file: 'polaris-school-of-technology.png', invert: false },
  { name: 'Vedam School of Technology', file: 'vedam-school-of-technology.png', invert: false },
  { name: 'Mirai School of Technology', file: 'mirai-school-of-technology.jpg', invert: false },
  { name: 'CGC Mohali', file: 'cgc-mohali.svg', invert: true },
  { name: 'Zenith School of AI', file: 'zenith-school-of-ai.jpg', invert: false },
  { name: 'Open Trade', file: 'open-trade.png', invert: false },
];

// Photos live in /public/creators. `note` = neutral profile line (placeholder) —
// replace with the real quote each creator gave about CloutSync.
const creators = [
  { name: 'kavya karnatac', handle: '@kk.create', followers: '4.5M+', img: '/creators/kavya-karnatac.jpg', note: 'part of the cloutsync roster — a multi-million audience turned into a durable business.' },
  { name: 'shwetabh gangsta', handle: '@gangsta_shwetabh', followers: '1M+', img: '/creators/gangsta-shwetabh.jpg', note: 'partnered with cloutsync to build a real revenue system around a million-strong community.' },
  { name: 'vansh ke vichaar', handle: '@vanshkevichaar', followers: '671K+', img: '/creators/vansh-ke-vichaar.jpg', note: 'managed with cloutsync — content, pricing and brand deals under one roof.' },
  { name: 'career with avi', handle: '@careerwithavi', followers: '394K+', img: '/creators/career-with-avi.jpg', note: 'part of the cloutsync roster — reach engineered into recurring income.' },
  { name: 'ritik patel', handle: '@edu.ritikpatel', followers: '385K+', img: '/creators/ritik-patel.jpg', note: 'partnered with cloutsync to script, publish and monetise with intent.' },
  { name: 'saunex', handle: '@saunex_', followers: '354K+', img: '/creators/saunex.jpg', note: 'managed with cloutsync — where attention becomes a career, not a side hustle.' },
  { name: 'jazbaati saxena', handle: '@jazbaati.saxena', followers: '316K+', img: '/creators/jazbaati-saxena.jpg', note: 'part of the cloutsync roster — a loyal audience with a real business behind it.' },
  { name: 'aditya', handle: '@codebyaditya', followers: '147K+', img: '/creators/codebyaditya.jpg', note: 'partnered with cloutsync to turn a tech following into partnerships that convert.' },
  { name: 'shruti sonawane', handle: '@shruti.sonawane._', followers: '147K+', img: '/creators/shruti-sonawane.jpg', note: 'managed with cloutsync — steady, compounding growth over viral spikes.' },
  { name: 'samit knows', handle: '@samitknows', followers: '106K+', img: '/creators/samit-knows.jpg', note: 'part of the cloutsync roster — building the long game, one deal at a time.' },
];

const steps = [
  { n: '01', title: 'revenue targeting', body: 'we set a clear monthly revenue goal. current earnings, brand rates, output and niche potential are analysed into a realistic benchmark.' },
  { n: '02', title: 'strategy & planning', body: 'a focused content and brand strategy — formats, scripting direction, pricing, and the high-value brand categories that fit the creator.' },
  { n: '03', title: 'execution & optimization', body: 'we handle scripting support, editing, publishing guidance and brand-deal execution. every collaboration is tracked and optimized.' },
  { n: '04', title: 'scale to 4×', body: 'what works is scaled. we raise pricing, secure long-term deals and replicate proven formats to multiply creator earnings.' },
];

/* Official Y Combinator mark: orange square with the white "Y" (exact YC letterform).
   The provided asset is a filled square with the Y as a cut-out; we colour the square
   YC-orange and reveal a white Y from a layer behind the cut-out. */

// Renders text where each letter uppercases on hover (see .fg-hover-caps in forge.css).
function HoverCaps({ text }: { text: string }) {
  return (
    <>
      {text.split('').map((ch, i) =>
        ch === ' '
          ? <span key={i}> </span>
          : <span key={i} className="fg-hover-caps">{ch}</span>
      )}
    </>
  );
}

// "Serving <YC> Startups" hero badge. The asset (/yc-logo.png) is a white square
// with the Y cut out; we mask an orange layer with it over a white backing so it
// renders as the official Y Combinator mark (orange square, white Y).
function YCBadge() {
  return (
    <span className="fg-sans" style={{ display: 'inline-flex', alignItems: 'center', gap: 16, fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)', fontWeight: 600, letterSpacing: '0.01em', color: '#fff' }}>
      serving
      <img src="/yc-logo.png" alt="Y Combinator" style={{ height: 46, width: 'auto', objectFit: 'contain', display: 'inline-block' }} />
      startups
    </span>
  );
}

function Hero() {
  return (
    <section id="fg-top" className="fg-hero-pin fg-grain fg-vignette" aria-label="hero">
      {/* full-bleed painterly hero image (Creation of Adam — reaching hands) */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/forge-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 42%', transform: 'scale(1.06)', filter: 'saturate(0.92)' }} />
      {/* cinematic dark scrim so white type reads over the bright sky */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.20) 34%, rgba(3,10,6,0.62) 76%, #000 100%)' }} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(115% 95% at 50% 44%, transparent 42%, rgba(0,0,0,0.6) 100%)', mixBlendMode: 'multiply' }} />
      {/* ambient drifting orbs */}
      <div className="fg-drift" style={{ position: 'absolute', top: '18%', left: '12%', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(22,168,90,0.16), transparent 70%)', filter: 'blur(26px)' }} />
      <div className="fg-drift" style={{ position: 'absolute', bottom: '10%', right: '8%', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(183,68,50,0.12), transparent 70%)', filter: 'blur(30px)', animationDelay: '3s' }} />

      <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 'clamp(62px, 7vh, 90px)' }}>
          <YCBadge />
        </div>
        <div className="fg-wrap" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 clamp(1.25rem,5vw,4rem)' }}>
          <h1 className="fg-wordmark" style={{ fontSize: 'clamp(4.5rem, 18vw, 18rem)', marginTop: '-5vh', transform: 'translateY(-3vh)' }}>
            cloutsync<span className="fg-accent">.</span>
          </h1>
          <p className="fg-serif" style={{ fontSize: 'clamp(2.2rem, 4.6vw, 4rem)', color: 'var(--fg-text)', marginTop: 'clamp(1.25rem, 2.5vh, 2rem)', maxWidth: '22ch', lineHeight: 1.02, letterSpacing: '-0.04em' }}>
            <HoverCaps text="we turn clout" /><br /><HoverCaps text="into influence." />
          </p>
        </div>
        {/* meta row pinned to hero base */}
        <div className="fg-wrap fg-hairline" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', padding: 'clamp(1rem,2vw,1.75rem) clamp(1.25rem,5vw,4rem)' }}>
          <span className="fg-eyebrow">a studio for exceptional creators</span>
          <span className="fg-eyebrow">strategy · scripting · brand deals · scale</span>
          <span className="fg-eyebrow" style={{ color: 'var(--fg-mint)' }}>scroll to enter ↓</span>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  const ref = useReveal();
  return (
    <section ref={ref} className="fg-section" style={{ background: 'var(--fg-bg)', position: 'relative', zIndex: 3 }}>
      <div className="fg-wrap" style={{ maxWidth: 980 }}>
        <p className="fg-eyebrow fg-reveal">what we do</p>
        <h2 className="fg-head fg-h2 fg-reveal" data-d="1" style={{ marginTop: '1.25rem' }}>
          attention is the new currency. <span className="fg-accent">we help you mint it.</span>
        </h2>
        <p className="fg-body fg-reveal" data-d="2" style={{ marginTop: '2rem', maxWidth: '62ch' }}>
          cloutsync media is a revenue-first studio for creators and the education brands that back
          them. based in noida, india, we pair strategic thinking with creative craft — turning reach into recurring
          income, and audiences into movements. attention only matters when it turns into action.
        </p>
        <div className="fg-reveal" data-d="3" style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#fg-process" className="fg-btn fg-btn--solid">see the method <Arrow /></a>
          <a href="#fg-creators" className="fg-btn fg-btn--ghost">meet the creators</a>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const ref = useReveal();
  const img = '/forge-hero.jpg';
  return (
    <section ref={ref} className="fg-section" style={{ background: 'var(--fg-surface-2)', position: 'relative', zIndex: 3, paddingBottom: 'clamp(2rem, 4.5vw, 4.5rem)' }}>
      <div className="fg-wrap">
        <div className="fg-results-top">
          <h2 className="fg-results-head fg-reveal">results so far<span style={{ color: 'rgba(255,255,255,0.25)' }}>.</span></h2>
          <p className="fg-body fg-reveal" data-d="1" style={{ maxWidth: '34ch' }}>
            creator revenue facilitated, brands transformed, clout under management, and the average earnings lift.
          </p>
        </div>
        <div className="fg-stats-grid fg-reveal" data-d="2" style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
          {stats.map((s) => (
            <div key={s.l} className="fg-stat">
              <div className="fg-stat__img" style={{ backgroundImage: `url(${img})` }} />
              <span className="fg-stat__label">{s.l}</span>
              <span className="fg-stat__num">{s.n}</span>
            </div>
          ))}
        </div>
        <p className="fg-body fg-reveal" style={{ marginTop: '1.75rem', color: 'var(--fg-faint)' }}>
          selective by design — we take on the creators we can genuinely 4×.
        </p>
      </div>
    </section>
  );
}

function Brands() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<'pin' | 'native'>('pin');

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const narrow = window.matchMedia('(max-width: 767px)').matches;
    if (reduce || narrow) { setMode('native'); return; }
    const wrap = wrapRef.current, track = trackRef.current;
    if (!wrap || !track) return;
    let maxX = 0;
    const setup = () => {
      maxX = Math.max(0, track.scrollWidth - window.innerWidth);
      wrap.style.height = `${window.innerHeight + maxX}px`;
    };
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const top = wrap.getBoundingClientRect().top;
        const p = maxX > 0 ? Math.min(Math.max(-top / maxX, 0), 1) : 0;
        track.style.transform = `translate3d(${(-p * maxX).toFixed(1)}px,0,0)`;
      });
    };
    setup(); onScroll();
    const onResize = () => { setup(); onScroll(); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); cancelAnimationFrame(raf); };
  }, []);

  const cards = brands.map((b, i) => (
    <div key={b.name} className="fg-brand-card">
      <span className="fg-brand-index fg-mono">{String(i + 1).padStart(2, '0')}</span>
      <div className={`fg-brand-logo ${b.file ? 'fg-brand-logo--filled' : 'fg-brand-logo--empty'}`}>
        {b.file && <img src={`/brands/${b.file}`} alt={b.name} className={b.invert ? 'fg-logo-invert' : undefined} loading="lazy" />}
      </div>
      <span className="fg-brand-name">{b.name}</span>
    </div>
  ));

  if (mode === 'native') {
    return (
      <section id="fg-brands" className="fg-section" style={{ background: 'var(--fg-bg)', position: 'relative', zIndex: 3, paddingTop: 'clamp(1.25rem,2.5vw,2.5rem)', paddingBottom: 'clamp(2.5rem,5vw,5rem)' }}>
        <div className="fg-wrap" style={{ marginBottom: '2.75rem' }}>
          <h2 className="fg-brands-head">trusted by leading education Brands<span style={{ color: 'rgba(255,255,255,0.25)' }}>.</span></h2>
        </div>
        <div className="fg-brand-native">{cards}</div>
      </section>
    );
  }

  return (
    <section id="fg-brands" ref={wrapRef} style={{ position: 'relative', background: 'var(--fg-bg)', zIndex: 3 }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '6vh' }}>
        <div className="fg-wrap" style={{ marginBottom: 'clamp(2.5rem,6vh,5rem)' }}>
          <h2 className="fg-brands-head">trusted by leading education Brands<span style={{ color: 'rgba(255,255,255,0.25)' }}>.</span></h2>
        </div>
        <div ref={trackRef} className="fg-hbrands-track">{cards}</div>
      </div>
    </section>
  );
}

function Creators() {
  const ref = useReveal();
  const [active, setActive] = useState(0);
  const c = creators[active];
  const igUrl = (h: string) => `https://www.instagram.com/${h.replace('@', '')}`;
  const go = (d: number) => setActive((a) => (a + d + creators.length) % creators.length);

  // Only start rotating once the section scrolls into view (not on page load/refresh).
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setStarted(true); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setStarted(true); io.disconnect(); } }),
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);

  // Once started, advance to the next creator every 3s. Depending on `active`
  // means any manual selection (arrows or thumbnails) resets the 3s timer.
  useEffect(() => {
    if (!started) return;
    const id = setInterval(() => setActive((a) => (a + 1) % creators.length), 3000);
    return () => clearInterval(id);
  }, [active, started]);

  return (
    <section id="fg-creators" ref={ref} className="fg-section fg-iv" style={{ position: 'relative', zIndex: 3 }}>
      <div className="fg-wrap">
        <div className="fg-iv-top fg-reveal">
          <h2 className="fg-iv-head" style={{ maxWidth: '13ch' }}>creators worth the clout<span style={{ color: 'rgba(0,0,0,0.18)' }}>.</span></h2>
          <p className="fg-iv-sub">Creators describe what they built — and what changed when they started working with us.</p>
        </div>

        <div className="fg-iv-stats fg-reveal" data-d="1">
          <div className="fg-iv-stat"><div className="fg-iv-stat__l">creators managed</div><div className="fg-iv-stat__v">20+</div></div>
          <div className="fg-iv-stat"><div className="fg-iv-stat__l">combined following</div><div className="fg-iv-stat__v">10M+</div></div>
          <div className="fg-iv-stat"><div className="fg-iv-stat__l">avg earnings lift</div><div className="fg-iv-stat__v">4×</div></div>
        </div>

        {/* Featured interview */}
        <div className="fg-iv-feature fg-reveal" data-d="2">
          <div className="fg-iv-panel">
            <span className="fg-iv-kicker">in their words</span>
            <blockquote className="fg-iv-quote">{c.note}</blockquote>
            <div className="fg-iv-foot">
              <div className="fg-iv-bignum">{c.followers}<span className="fg-iv-bignum__u">followers</span></div>
              <div className="fg-iv-nav">
                <button className="fg-iv-navbtn" onClick={() => go(-1)} aria-label="Previous creator">←</button>
                <button className="fg-iv-navbtn" onClick={() => go(1)} aria-label="Next creator">→</button>
              </div>
            </div>
          </div>
          <div className="fg-iv-media">
            <img className="fg-iv-media__img" src={c.img} alt={c.name} />
            <div className="fg-iv-media__grad" />
            <div className="fg-iv-media__cap">
              <a className="fg-iv-name" href={igUrl(c.handle)} target="_blank" rel="noreferrer">{c.name} <span style={{ fontSize: '0.6em', opacity: 0.6 }}>↗</span></a>
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="fg-iv-strip">
          {creators.map((t, i) => (
            <button
              key={t.handle}
              className="fg-iv-thumb"
              aria-current={i === active}
              onClick={() => setActive(i)}
              aria-label={`Show ${t.name}`}
            >
              <img src={t.img} alt={t.name} loading="lazy" />
              <div className="fg-iv-thumb__grad" />
              <div className="fg-iv-thumb__cap">
                <div className="fg-iv-thumb__name">{t.name}</div>
                <div className="fg-iv-thumb__foll">{t.followers}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const ref = useReveal();
  return (
    <section id="fg-process" ref={ref} className="fg-section" style={{ background: 'var(--fg-bg)', position: 'relative', zIndex: 3 }}>
      <div className="fg-wrap">
        <div style={{ maxWidth: 760, marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
          <p className="fg-eyebrow fg-reveal">the method</p>
          <h2 className="fg-head fg-h2 fg-reveal" data-d="1" style={{ marginTop: '1rem' }}>a revenue-first system.</h2>
          <p className="fg-body fg-reveal" data-d="2" style={{ marginTop: '1.5rem' }}>designed to scale creator earnings — one deliberate step at a time.</p>
        </div>
        <div style={{ display: 'grid', gap: 'clamp(1rem,1.6vw,1.5rem)', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
          {steps.map((s, i) => (
            <div key={s.n} className="fg-card fg-reveal" data-d={((i % 4) + 1) as unknown as string} style={{ padding: 'clamp(1.75rem,2.5vw,2.5rem)' }}>
              <div className="fg-serif" style={{ fontSize: '2.5rem', lineHeight: 1, color: 'var(--fg-accent)' }}>{s.n}</div>
              <h3 className="fg-display" style={{ fontSize: 'clamp(1.5rem,2.2vw,2rem)', marginTop: '1rem', color: 'var(--fg-text)' }}>{s.title}</h3>
              <p className="fg-body" style={{ marginTop: '.75rem', fontSize: '1rem' }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const ref = useReveal();
  return (
    <section id="fg-contact" ref={ref} className="fg-section fg-grain" style={{ background: 'linear-gradient(180deg, #05130b, #000)', position: 'relative', zIndex: 3, textAlign: 'center' }}>
      <div className="fg-wrap" style={{ maxWidth: 900 }}>
        <p className="fg-eyebrow fg-reveal">start a conversation</p>
        <h2 className="fg-head fg-reveal" data-d="1" style={{ fontSize: 'clamp(2.5rem,7vw,6rem)', marginTop: '1rem' }}>
          let’s build something <span className="fg-accent">bold.</span>
        </h2>
        <p className="fg-body fg-reveal" data-d="2" style={{ margin: '1.75rem auto 0', maxWidth: '52ch' }}>
          ready to turn your clout into a career? tell us your vision and we’ll show you the path to 4×.
        </p>
        <div className="fg-reveal" data-d="3" style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={CAL} target="_blank" rel="noreferrer" className="fg-btn fg-btn--solid">apply as a creator <Arrow /></a>
          <a href={MAIL} className="fg-btn fg-btn--ghost">work with us</a>
        </div>
      </div>
    </section>
  );
}

export default function LandingForge() {
  return (
    <div className="forge-root">
      <PromoBar />
      <Nav />
      <Hero />
      {/* content scrolls up over the pinned hero */}
      <div style={{ position: 'relative', zIndex: 3 }}>
        <Intro />
        <Stats />
        <Brands />
        <Creators />
        <Process />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
