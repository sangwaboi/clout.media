import { CAL, MAIL, useReveal, Arrow, PromoBar, Nav, Footer } from './shared';

/* =============================================================================
   CloutSync — FORGE theme · home page (dark / premium / editorial)
   Design language decoded from forgeresidency.com (see /forge/README.md).
   Shared chrome (nav, footer, promo, reveal hook) lives in ./shared.
   ========================================================================== */

const stats = [
  { n: '50M+', l: 'in creator revenue' },
  { n: '250+', l: 'brands transformed' },
  { n: '15+', l: 'industry awards' },
  { n: '4×', l: 'average earnings lift' },
];

// Logos live in /public/brands/. Supply each as a transparent SVG or PNG,
// preferably WHITE / monochrome so they read on the black theme.
const brands = [
  { name: 'Physics Wallah', file: 'physics-wallah.svg' },
  { name: 'Newton School of Technology', file: 'newton-school-of-technology.svg' },
  { name: 'Masai School', file: 'masai-school.svg' },
  { name: 'College Vidya', file: 'college-vidya.svg' },
  { name: 'Rishihood University', file: 'rishihood-university.svg' },
  { name: 'Polaris School of Technology', file: 'polaris-school-of-technology.svg' },
  { name: 'Vedam School of Technology', file: 'vedam-school-of-technology.svg' },
  { name: 'Mirai School of Technology', file: 'mirai-school-of-technology.svg' },
  { name: 'CGC Mohali', file: 'cgc-mohali.svg' },
  { name: 'Zenith School of AI', file: 'zenith-school-of-ai.svg' },
];

const creators = [
  { name: 'kavya karnatac', handle: '@kk.create', followers: '5M+' },
  { name: 'ezsnippet', handle: '@ezsnippet', followers: '3.3M+' },
  { name: 'nitian saurabh', handle: '@nitiansaurabh', followers: '1.31M+' },
  { name: 'shwetabh gangsta', handle: '@gangsta_shwetabh', followers: '1M+' },
  { name: 'vansh ke vichaar', handle: '@vanshkevichaar', followers: '671K+' },
];

const steps = [
  { n: '01', title: 'revenue targeting', body: 'we set a clear monthly revenue goal. current earnings, brand rates, output and niche potential are analysed into a realistic benchmark.' },
  { n: '02', title: 'strategy & planning', body: 'a focused content and brand strategy — formats, scripting direction, pricing, and the high-value brand categories that fit the creator.' },
  { n: '03', title: 'execution & optimization', body: 'we handle scripting support, editing, publishing guidance and brand-deal execution. every collaboration is tracked and optimized.' },
  { n: '04', title: 'scale to 4×', body: 'what works is scaled. we raise pricing, secure long-term deals and replicate proven formats to multiply creator earnings.' },
];

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
        <div className="fg-wrap" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 clamp(1.25rem,5vw,4rem)' }}>
          <p className="fg-eyebrow" style={{ marginBottom: '1.5rem' }}>creator growth studio · india · worldwide</p>
          <h1 className="fg-wordmark" style={{ fontSize: 'clamp(4.5rem, 18vw, 18rem)' }}>
            cloutsync<span className="fg-accent">.</span>
          </h1>
          <p className="fg-serif" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.6rem)', color: 'var(--fg-text)', marginTop: '1.5rem', fontStyle: 'italic', maxWidth: '22ch' }}>
            post at sunrise. close by midnight. compound your clout.
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
        <h2 className="fg-display fg-h2 fg-reveal" data-d="1" style={{ marginTop: '1.25rem' }}>
          attention is the new currency. <span className="fg-accent">we help you mint it.</span>
        </h2>
        <p className="fg-body fg-reveal" data-d="2" style={{ marginTop: '2rem', maxWidth: '62ch' }}>
          cloutsync is a revenue-first studio for creators and the education brands that back
          them. we pair strategic thinking with creative craft — turning reach into recurring
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
  return (
    <section ref={ref} className="fg-section" style={{ background: 'var(--fg-surface-2)', position: 'relative', zIndex: 3 }}>
      <div className="fg-wrap">
        <div style={{ display: 'grid', gap: '1px', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', background: 'var(--fg-hairline)', border: '1px solid var(--fg-hairline)', borderRadius: 20, overflow: 'hidden' }}>
          {stats.map((s, i) => (
            <div key={s.l} className="fg-reveal" data-d={((i % 4) + 1) as unknown as string} style={{ background: 'var(--fg-surface)', padding: 'clamp(1.75rem,3vw,3rem)' }}>
              <div className="fg-serif" style={{ fontSize: 'clamp(3rem,6vw,5rem)', lineHeight: 1, color: 'var(--fg-text)' }}>{s.n}</div>
              <div className="fg-eyebrow" style={{ marginTop: '.75rem' }}>{s.l}</div>
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
  const doubled = [...brands, ...brands];
  return (
    <section id="fg-brands" className="fg-section" style={{ background: 'var(--fg-bg)', position: 'relative', zIndex: 3, paddingTop: 'clamp(2.5rem,5vw,5rem)', paddingBottom: 'clamp(2.5rem,5vw,5rem)' }}>
      <div className="fg-wrap" style={{ marginBottom: '2.5rem' }}>
        <p className="fg-eyebrow">trusted by leading education brands</p>
      </div>
      <div className="fg-marquee">
        <div className="fg-marquee-track">
          {doubled.map((b, i) => (
            <div key={b.file + i} className="fg-logo" title={b.name} style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 clamp(1.5rem,3.5vw,3.5rem)', height: 'clamp(2.75rem,4vw,4rem)' }}>
              <img
                src={`/brands/${b.file}`}
                alt={b.name}
                style={{ maxHeight: '100%', maxWidth: 180, width: 'auto', objectFit: 'contain' }}
                onError={(e) => {
                  // Graceful fallback to a styled name until the logo file is added.
                  const img = e.currentTarget;
                  img.style.display = 'none';
                  const span = img.nextElementSibling as HTMLElement | null;
                  if (span) span.style.display = 'inline';
                }}
              />
              <span className="fg-serif" style={{ display: 'none', fontStyle: 'italic', fontSize: 'clamp(1.25rem,2.2vw,2rem)', color: 'var(--fg-muted)', whiteSpace: 'nowrap' }}>
                {b.name.toLowerCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Creators() {
  const ref = useReveal();
  return (
    <section id="fg-creators" ref={ref} className="fg-section" style={{ background: 'var(--fg-surface-2)', position: 'relative', zIndex: 3 }}>
      <div className="fg-wrap">
        <div style={{ maxWidth: 760, marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
          <p className="fg-eyebrow fg-reveal">the roster</p>
          <h2 className="fg-display fg-h2 fg-reveal" data-d="1" style={{ marginTop: '1rem' }}>creators worth the clout.</h2>
          <p className="fg-body fg-reveal" data-d="2" style={{ marginTop: '1.5rem' }}>
            we work hand-in-hand with the sharpest voices in education and tech — turning their
            reach into results.
          </p>
        </div>
        <div style={{ borderTop: '1px solid var(--fg-hairline)' }}>
          {creators.map((c, i) => (
            <a
              key={c.handle}
              href={`https://www.instagram.com/${c.handle.replace('@', '')}`}
              target="_blank" rel="noreferrer"
              className="fg-reveal"
              data-d={((i % 4) + 1) as unknown as string}
              style={{ display: 'grid', gridTemplateColumns: '2.5rem 1fr auto', gap: '1rem', alignItems: 'center', padding: 'clamp(1rem,2vw,1.5rem) 0', borderBottom: '1px solid var(--fg-hairline)', textDecoration: 'none', color: 'inherit' }}
            >
              <span className="fg-eyebrow" style={{ color: 'var(--fg-faint)' }}>{String(i + 1).padStart(2, '0')}</span>
              <span>
                <span className="fg-serif" style={{ fontSize: 'clamp(1.35rem,2.4vw,2rem)', color: 'var(--fg-text)' }}>{c.name}</span>
                <span className="fg-sans" style={{ display: 'block', color: 'var(--fg-faint)', fontSize: '.85rem' }}>{c.handle}</span>
              </span>
              <span className="fg-sans fg-accent" style={{ fontWeight: 600, fontSize: 'clamp(1rem,1.6vw,1.3rem)' }}>{c.followers}</span>
            </a>
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
          <h2 className="fg-display fg-h2 fg-reveal" data-d="1" style={{ marginTop: '1rem' }}>a revenue-first system.</h2>
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
        <h2 className="fg-display fg-reveal" data-d="1" style={{ fontSize: 'clamp(2.5rem,7vw,6rem)', marginTop: '1rem' }}>
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
