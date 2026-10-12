import { ArrowRight, MessageCircle } from 'lucide-react';
import { brand } from '../data/shop';
import { hero } from '../data/images';
import { waLink } from '../lib/whatsapp';

export default function Hero() {
  return (
    <section id="home" className="relative grid lg:min-h-[92vh] lg:grid-cols-2">
      <div className="order-2 flex flex-col justify-center px-6 py-16 sm:px-10 lg:order-1 lg:py-0 lg:pl-14 lg:pr-16">
        <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
          N°01 — New Season
        </p>
        <h1 className="text-balance font-serif text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
          Dress quiet.
          <br />
          <span className="italic text-accent">Stay unforgettable.</span>
        </h1>
        <p className="mt-7 max-w-md text-pretty leading-relaxed text-ink-soft">
          {brand.tagline} A carefully edited collection of ethnic, western and everyday pieces —
          ordered in minutes over WhatsApp.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#shop"
            className="group inline-flex items-center gap-2 rounded-none bg-accent px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-accent-strong"
          >
            Shop the edit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={waLink(`Hello ${brand.name}! I'd like to see the latest arrivals.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-line-strong px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp us
          </a>
        </div>

        <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6 text-xs text-muted">
          <div>
            <p className="font-serif text-xl text-ink">75+</p>
            <p className="mt-1">Curated pieces</p>
          </div>
          <div>
            <p className="font-serif text-xl text-ink">5 Edits</p>
            <p className="mt-1">Shop by category</p>
          </div>
          <div>
            <p className="font-serif text-xl text-ink">24h</p>
            <p className="mt-1">WhatsApp replies</p>
          </div>
        </div>
      </div>

      <div className="relative order-1 h-[52vh] border-b border-line lg:order-2 lg:h-auto lg:border-b-0 lg:border-l">
        <img
          src={hero}
          alt="Model showcasing the latest Maison Élise collection"
          className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-paper/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-paper/40 lg:via-transparent lg:to-transparent" />
        <p className="absolute bottom-5 right-6 text-[10px] uppercase tracking-[0.3em] text-ink/70">
          The Autumn Edit
        </p>
      </div>
    </section>
  );
}