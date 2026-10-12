import { ArrowRight, MessageCircle } from 'lucide-react';
import { brand } from '../data/shop';
import { hero } from '../data/images';
import { waLink } from '../lib/whatsapp';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img src={hero} alt="" aria-hidden="true" className="h-full w-full object-cover object-[50%_35%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/20 via-paper/80 to-paper" />
        <div className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/8 blur-[90px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            New collection
          </p>
          <h1 className="text-balance font-serif text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-[5rem]">
            {brand.name}
            <br />
            <span className="italic text-accent">quiet luxury in motion.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
            {brand.tagline} Carefully edited silhouettes, refined fabrics and timeless details —
            chosen to live seamlessly in your wardrobe.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#shop"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-paper transition-all hover:bg-accent-strong"
            >
              Explore the collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={waLink(`Hello ${brand.name}! I'd like to see the latest arrivals.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-accent"
            >
              <MessageCircle className="h-4 w-4 text-accent" />
              Enquire on WhatsApp
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <span>Complimentary shipping on ₹2,000+</span>
            <span>Secure WhatsApp ordering</span>
            <span>Hand-picked &amp; curated</span>
          </div>
        </div>
      </div>
    </section>
  );
}