import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Soletrym – minimalistisk landingsside
 * Stack: Next.js + TailwindCSS + Framer Motion
 * Design: jordlige farger, myke overganger, ren typografi
 */

const palette = {
  sand: '#E7DFD5',
  clay: '#C7B198',
  moss: '#6B8F71',
  pine: '#2F4F4F',
  ocean: '#2E5868',
  cream: '#FAF8F3',
  ink: '#1B1B1B',
};

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`relative w-full ${className}`}>{children}</section>
);

const Container = ({ className = '', children }) => (
  <div className={`mx-auto w-full max-w-7xl px-6 md:px-10 ${className}`}>{children}</div>
);

const Button = ({ children, href = '#', variant = 'primary', onClick }) => {
  const base =
    'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm md:text-base font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const styles = {
    primary: `bg-[${palette.moss}] text-white hover:opacity-90 focus-visible:ring-[${palette.moss}]`,
    ghost: `bg-transparent text-[${palette.ocean}] hover:bg-[${palette.sand}]/60 focus-visible:ring-[${palette.ocean}]`,
    clay: `bg-[${palette.clay}] text-[${palette.ink}] hover:brightness-95 focus-visible:ring-[${palette.clay}]`,
  };
  const Comp = href ? 'a' : 'button';
  return (
    <Comp href={href} onClick={onClick} className={`${base} ${styles[variant]} shadow-sm`}>
      {children}
    </Comp>
  );
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  const links = [
    { href: '#kolleksjon', label: 'Kolleksjon' },
    { href: '#om', label: 'Om Soletrym' },
    { href: '#baerekraft', label: 'Bærekraft' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5">
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3" aria-label="Soletrym hjem">
          <Logo className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-wide" style={{color: palette.ocean}}>Soletrym</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-black/70 hover:text-black transition-colors">
              {l.label}
            </a>
          ))}
          <Button href="#kolleksjon">Handle nå</Button>
        </div>
        <button
          className="md:hidden h-10 w-10 grid place-items-center rounded-xl border border-black/10"
          aria-label="Åpne meny"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Meny</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-black" />
            <span className="block h-0.5 w-6 bg-black" />
            <span className="block h-0.5 w-6 bg-black" />
          </div>
        </button>
      </Container>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-black/5 bg-white"
          >
            <Container className="py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-base">
                  {l.label}
                </a>
              ))}
              <Button href="#kolleksjon" onClick={() => setOpen(false)}>Handle nå</Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <Section id="hjem" className="overflow-hidden">
    <div
      className="absolute inset-0 -z-10"
      aria-hidden
      style={{
        background:
          `radial-gradient(60% 60% at 10% 10%, ${palette.sand} 0%, transparent 60%),` +
          `radial-gradient(50% 50% at 90% 10%, ${palette.clay} 0%, transparent 55%),` +
          `radial-gradient(60% 60% at 50% 100%, ${palette.cream} 0%, transparent 60%)`,
      }}
    />
    <Container className="py-20 md:py-28">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight" style={{color: palette.pine}}>
          Skandinavisk ro. <span className="text-black">Hverdagens plagg.</span>
        </h1>
        <p className="mt-5 text-lg text-black/70">
          Soletrym er en liten kleskolleksjon inspirert av natur, lys og enkle former. Print-on-demand, produsert på bestilling – mindre svinn, mer omtanke.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#kolleksjon">Se kolleksjon</Button>
          <Button href="#baerekraft" variant="ghost">Les om bærekraft</Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {['T-skjorter', 'Hettegensere', 'Caps', 'Totebags'].map((t) => (
          <div key={t} className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-sm">
            <p className="text-sm text-black/60">Kategori</p>
            <p className="text-lg font-medium">{t}</p>
          </div>
        ))}
      </motion.div>
    </Container>
  </Section>
);

const ProductCard = ({ title, subtitle, price, image, badge }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5 }}
    className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm"
  >
    <div className="aspect-[4/5] w-full bg-[color:var(--ph)]" style={{'--ph': palette.sand}}>
      {/* Placeholder – bytt til faktiske produktbilder fra Gelato */}
      <svg viewBox="0 0 600 750" className="h-full w-full">
        <rect width="100%" height="100%" fill={palette.cream} />
        <g opacity="0.08">
          <circle cx="500" cy="130" r="90" fill={palette.ocean} />
          <path d="M80 600 Q 180 540 280 600 T 480 600 T 680 600" stroke={palette.moss} strokeWidth="20" fill="none" />
        </g>
      </svg>
    </div>
    <div className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-black/60">{subtitle}</p>
        </div>
        {badge && (
          <span className="rounded-full bg-black/5 px-3 py-1 text-xs">{badge}</span>
        )}
      </div>
      <div className="mt-4 flex items-center justify_between">
        <p className="text-base font-semibold">{price}</p>
        <Button href="#" variant="clay">Legg i kurv</Button>
      </div>
    </div>
  </motion.div>
);

const Collection = () => (
  <Section id="kolleksjon" className="py-20 md:py-28 bg-[color:var(--bg)]" style={{'--bg': `${palette.cream}`}}>
    <Container>
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-semibold mb-8" style={{color: palette.ocean}}>
        Kolleksjon
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <ProductCard title="Sun & Sea Tee" subtitle="Økologisk bomull" price="399 kr" badge="Ny" />
        <ProductCard title="Mountain Air Hoodie" subtitle="Unisex" price="699 kr" />
        <ProductCard title="Waves of Calm Tote" subtitle="Resirkulert bomull" price="249 kr" />
      </div>
      <p className="mt-6 text-sm text_black/60">*Prisene er eksempel – koble Gelato-produkter for sanne priser/varianter.</p>
    </Container>
  </Section>
);

const About = () => (
  <Section id="om" className="py-20 md:py-28">
    <Container className="grid md:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl md:text-4xl font-semibold" style={{color: palette.pine}}>Historien om Soletrym</h2>
        <p className="mt-4 text-black/70 leading-relaxed">
          Vi lager tidløse basisplagg med subtil grafikk inspirert av nordisk natur. Hvert plagg trykkes på bestilling gjennom partnere som Gelato –
          slik unngår vi overproduksjon og kan fokusere på kvalitet fremfor kvantitet.
        </p>
        <div className="mt-6 flex gap-3">
          <Button href="#baerekraft">Bærekraft</Button>
          <Button href="#kontakt" variant="ghost">Kontakt</Button>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
          <svg viewBox="0 0 700 440" className="w-full h-auto">
            <defs>
              <linearGradient id="grad" x1="0" x2="1">
                <stop offset="0%" stopColor={palette.sand} />
                <stop offset="100%" stopColor={palette.clay} />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad)" rx="24" />
            <g opacity="0.15">
              <circle cx="560" cy="90" r="70" fill={palette.ocean} />
              <path d="M40 360 Q 160 300 280 360 T 520 360 T 760 360" stroke={palette.pine} strokeWidth="18" fill="none" />
            </g>
          </svg>
        </div>
      </motion.div>
    </Container>
  </Section>
);

const Sustainability = () => (
  <Section id="baerekraft" className="py-20 md:py-28 bg-[color:var(--bg)]" style={{'--bg': `${palette.sand}33`}}>
    <Container>
      <h2 className="text-3xl md:text-4xl font-semibold" style={{color: palette.ocean}}>Bærekraft i praksis</h2>
      <ul className="mt-6 grid md:grid-cols-3 gap-6">
        {[
          { t: 'On-demand produksjon', d: 'Vi trykker kun ved bestilling – mindre svinn og lager.' },
          { t: 'Materialvalg', d: 'Vi prioriterer økologisk og resirkulert bomull når mulig.' },
          { t: 'Kortreist', d: 'Produksjon nær kundene reduserer transport og utslipp.' },
        ].map((i) => (
          <li key={i.t} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <p className="text-lg font-medium">{i.t}</p>
            <p className="mt-2 text-black/70">{i.d}</p>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

const Newsletter = () => (
  <Section id="kontakt" className="py-20 md:py-28">
    <Container>
      <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-10 shadow-sm">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold" style={{color: palette.pine}}>Få beskjed om nye drops</h3>
            <p className="mt-2 text-black/70">Meld deg på nyhetsbrevet for eksklusive forhåndsbestillinger og tilbud.</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); alert('Takk! Du står nå på listen.'); }} className="flex w-full flex-col sm:flex-row gap-3">
            <input type="email" required placeholder="din@epost.no" className="w-full rounded-2xl border border-black/10 bg-[color:var(--bg)] px-4 py-3 outline-none focus:ring-2" style={{'--bg': palette.cream}} />
            <Button href="" onClick={(e)=>e?.preventDefault?.()}>Meld meg på</Button>
          </form>
        </div>
      </div>
    </Container>
  </Section>
);

const Footer = () => (
  <footer className="border-t border-black/10 bg_white">
    <Container className="py-10 grid md:grid-cols-3 gap-6">
      <div className="flex items-center gap-3">
        <Logo className="h-8 w-8" />
        <span className="font-semibold" style={{color: palette.ocean}}>Soletrym</span>
      </div>
      <p className="text-sm text-black/60">© {new Date().getFullYear()} Soletrym. Alle rettigheter forbeholdt.</p>
      <div className="flex gap-4 md:justify-end">
        <a href="#" className="text-sm hover:underline">Kjøpsvilkår</a>
        <a href="#" className="text-sm hover:underline">Personvern</a>
        <a href="#" className="text_sm hover:underline">Kontakt</a>
      </div>
    </Container>
  </footer>
);

function Logo({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Soletrym logo">
      <circle cx="32" cy="32" r="16" fill={palette.moss} />
      <g stroke={palette.clay} strokeWidth="2" strokeLinecap="round" opacity="0.9">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI) / 6;
          const x1 = 32 + Math.cos(a) * 22;
          const y1 = 32 + Math.sin(a) * 22;
          const x2 = 32 + Math.cos(a) * 28;
          const y2 = 32 + Math.sin(a) * 28;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
    </svg>
  );
}

export default function Home() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const l = (e) => setReduced(e.matches);
    mq.addEventListener?.('change', l);
    return () => mq.removeEventListener?.('change', l);
  }, []);

  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]" style={{'--ink': palette.ink}}>
      <Nav />
      <Hero />
      <Collection />
      <About />
      <Sustainability />
      <Newsletter />
      <Footer />
      <div className="pointer-events-none fixed inset-0 -z-20 opacity-70" aria-hidden>
        <svg className="absolute -top-32 -left-24 w-[50rem]" viewBox="0 0 600 600">
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={palette.sand} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="300" cy="300" r="300" fill="url(#g1)" />
        </svg>
        <svg className="absolute -bottom-40 -right-32 w-[55rem]" viewBox="0 0 600 600">
          <defs>
            <radialGradient id="g2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={palette.clay} />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="300" cy="300" r="300" fill="url(#g2)" />
        </svg>
      </div>
    </main>
  );
}
