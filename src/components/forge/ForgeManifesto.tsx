import { useEffect, useRef } from 'react';
import { CAL, useReveal, Arrow, PromoBar, Nav, Footer } from './shared';

/* =============================================================================
   CloutSync — FORGE theme · /manifesto
   Long-form editorial page in the Forge style (see /forge/README.md):
   black canvas, Cormorant headers + Lora serif body, mono labels, lowercase,
   contrarian/poetic voice, a scroll-progress rail that fills as you read.
   Copy is original CloutSync — same voice, our own words.
   ========================================================================== */

const code = [
  'craft over clout',
  'revenue over vanity',
  'long games over viral spikes',
  'honesty, said plainly',
  'the creator owns the upside',
  'more given than taken',
];

const faqs = [
  { q: 'do i need a huge following?', a: 'No. We care how much your audience trusts you, not how many there are. A small, believing audience beats a large, indifferent one every time.' },
  { q: 'is this an mcn or a talent agency?', a: 'Neither, in the old sense. We do not just chase brand deals and take a cut. We build the whole revenue system with you — and we only win when you do.' },
  { q: 'what does it cost?', a: 'We work on performance. We take a share of the growth we create, not a fee for showing up.' },
  { q: 'what kind of creators?', a: 'Mostly education and tech — people teaching something real. But the door is open to anyone whose work has genuine substance.' },
];

/* Scroll-progress rail that fills as the reader descends. */
function Rail() {
  const fill = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const pct = max > 0 ? (el.scrollTop / max) * 100 : 0;
      if (fill.current) fill.current.style.height = `${pct}%`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  return (
    <div className="fg-rail" aria-hidden="true"><div ref={fill} className="fg-rail__fill" /></div>
  );
}

function Block({ label, head, children, quote }: { label: string; head: string; children: React.ReactNode; quote?: React.ReactNode }) {
  const ref = useReveal();
  return (
    <section ref={ref} className="fg-section" style={{ background: 'var(--fg-bg)', paddingTop: 'clamp(3rem,6vw,6rem)', paddingBottom: 'clamp(3rem,6vw,6rem)' }}>
      <div className="fg-wrap" style={{ maxWidth: 760 }}>
        <p className="fg-mono fg-reveal">{label}</p>
        <h2 className="fg-mhead fg-reveal" data-d="1" style={{ marginTop: '1rem', marginBottom: '1.75rem' }}>{head}</h2>
        <div className="fg-prose fg-reveal" data-d="2">{children}</div>
        {quote && <p className="fg-pullquote fg-reveal" data-d="3" style={{ marginTop: '2.25rem' }}>{quote}</p>}
      </div>
    </section>
  );
}

function Hero() {
  const ref = useReveal();
  return (
    <section ref={ref} className="fg-section" style={{ background: 'var(--fg-bg)', paddingTop: 'clamp(5rem,10vw,9rem)', paddingBottom: 'clamp(2rem,4vw,4rem)' }}>
      <div className="fg-wrap" style={{ maxWidth: 900 }}>
        <p className="fg-mono fg-reveal">manifesto · cloutsync</p>
        <h1 className="fg-mhead fg-reveal" data-d="1" style={{ marginTop: '1.25rem', fontSize: 'clamp(2.5rem,6.5vw,5.5rem)' }}>
          attention is the raw material. <span className="fg-accent">a career is what we forge from it.</span>
        </h1>
        <p className="fg-hand fg-reveal" data-d="2" style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)', marginTop: '1.5rem' }}>read to the end.</p>
      </div>
    </section>
  );
}

function StudioCode() {
  const ref = useReveal();
  return (
    <section ref={ref} className="fg-section" style={{ background: 'var(--fg-surface-2)', paddingTop: 'clamp(3rem,6vw,6rem)', paddingBottom: 'clamp(3rem,6vw,6rem)' }}>
      <div className="fg-wrap" style={{ maxWidth: 760 }}>
        <p className="fg-mono fg-reveal">the studio code</p>
        <h2 className="fg-mhead fg-reveal" data-d="1" style={{ marginTop: '1rem', marginBottom: '1.75rem' }}>how we work, plainly.</h2>
        <ul className="fg-code-list fg-reveal" data-d="2">
          {code.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  const ref = useReveal();
  return (
    <section ref={ref} className="fg-section" style={{ background: 'var(--fg-bg)', paddingTop: 'clamp(3rem,6vw,6rem)', paddingBottom: 'clamp(3rem,6vw,6rem)' }}>
      <div className="fg-wrap" style={{ maxWidth: 760 }}>
        <p className="fg-mono fg-reveal">answers to common questions</p>
        <h2 className="fg-mhead fg-reveal" data-d="1" style={{ marginTop: '1rem', marginBottom: '2rem' }}>before you apply.</h2>
        <div style={{ borderTop: '1px solid var(--fg-hairline)' }}>
          {faqs.map((f, i) => (
            <div key={f.q} className="fg-reveal" data-d={((i % 3) + 1) as unknown as string} style={{ padding: 'clamp(1.25rem,2vw,1.75rem) 0', borderBottom: '1px solid var(--fg-hairline)' }}>
              <h3 className="fg-serif" style={{ fontSize: 'clamp(1.3rem,2.2vw,1.85rem)', color: '#fff', fontStyle: 'italic' }}>{f.q}</h3>
              <p className="fg-lora" style={{ color: '#cfd3d8', marginTop: '.6rem', lineHeight: 1.7, fontSize: '1.05rem' }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CloseCTA() {
  const ref = useReveal();
  return (
    <section ref={ref} className="fg-section fg-grain" style={{ background: 'linear-gradient(180deg, #05130b, #000)', textAlign: 'center' }}>
      <div className="fg-wrap" style={{ maxWidth: 820 }}>
        <p className="fg-pullquote fg-reveal" style={{ fontStyle: 'normal' }}>
          to forge clout is to make attention <span className="fg-accent">permanent.</span>
        </p>
        <h2 className="fg-mhead fg-reveal" data-d="1" style={{ marginTop: '1.5rem', fontSize: 'clamp(2.25rem,6vw,4.5rem)' }}>let&rsquo;s build the career.</h2>
        <div className="fg-reveal" data-d="2" style={{ marginTop: '2.25rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={CAL} target="_blank" rel="noreferrer" className="fg-btn fg-btn--solid">apply as a creator <Arrow /></a>
          <a href="/#fg-process" className="fg-btn fg-btn--ghost">see the process</a>
        </div>
      </div>
    </section>
  );
}

export default function ForgeManifesto() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="forge-root">
      <Rail />
      <PromoBar />
      <Nav />
      <Hero />

      <Block label="talent · distribution" head="it was never the algorithm."
        quote={<>being seen is not the same as being <span className="fg-accent">paid.</span></>}>
        <p>talent is everywhere. a teenager in kota explains calculus better than most professors. a self-taught engineer in indore ships tutorials sharper than any textbook. what is scarce is not ability — it is the machinery that turns ability into a living.</p>
        <p>for most creators, the algorithm hands out reach and keeps the rest. views arrive. income does not follow. the gap between being watched and being paid is where careers quietly die.</p>
      </Block>

      <Block label="not vanity · revenue" head="move the number."
        quote={<>a spike is luck. a <span className="fg-accent">system</span> is a living.</>}>
        <p>we do not chase virality. virality is weather — it arrives, it leaves, it owes you nothing. we build systems instead.</p>
        <p>we start from a number: what a creator needs to earn for this to be a real career, not a side hustle. then we work backwards — formats, pricing, brand categories, cadence — until that number stops being a hope and becomes a plan.</p>
      </Block>

      <Block label="the hardest gap" head="minus one to zero.">
        <p>the market pays creators once they are already obvious — once the followers, the rate card and the case studies exist. but the hardest, loneliest stretch comes before that: the creator with real taste and no idea how to charge for it.</p>
        <p>that gap — from talented-but-invisible to a business with its own momentum — is exactly where we stand.</p>
      </Block>

      <Block label="read the record" head="we back the person."
        quote={<>we back the creator, not the <span className="fg-accent">trend.</span></>}>
        <p>we do not read a media kit alone. we read what a follower count cannot hold: the comment section that treats you like a friend, the dms asking for more, the topic you cannot stop making videos about at 2am.</p>
        <p>numbers are a symptom. trust is the thing. we invest in trust.</p>
      </Block>

      <StudioCode />
      <Faq />
      <CloseCTA />
      <Footer />
    </div>
  );
}
