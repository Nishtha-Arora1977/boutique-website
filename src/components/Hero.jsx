import { ArrowRight, ArrowUpRight, Shirt, ShoppingBag, Gem } from 'lucide-react';
import ProductArt from './ProductArt';
import { brand } from '../data/shop';
import { waLink } from '../lib/whatsapp';

const cards = [
  { icon: Shirt, tone: ['#eecfc6', '#f6e3dc'] },
  { icon: Gem, tone: ['#efe0c4', '#f7edda'] },
  { icon: ShoppingBag, tone: ['#dce5d6', '#ecf0e2'] },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-20 lg:pt-20 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-accent-soft/70 blur-[110px]" />
        <div className="absolute bottom-0 left-[-15%] h-80 w-80 rounded-full bg-paper-2 blur-[90px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Online boutique · Women&apos;s clothing & accessories
          </p>
          <h1 className="text-balance font-serif text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-[4rem]">
            {brand.tagline.split(',')[0]},
            <br />
            <span className="italic text-accent">made to be lived in.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            Curated clothing, jewellery and essentials — designed for comfort, finished with care,
            and packed by hand. Browse the gallery, then order in under a minute on WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#shop"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-all hover:bg-accent-strong"
            >
              Shop the collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={waLink(`Hello ${brand.name}! I'd like to ask about the new collection.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/70 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Order on WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <span>Made-to-order pieces</span>
            <span>Free shipping over ₹2,000</span>
            <span>Order directly on WhatsApp</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <ProductArt
              key={index}
              icon={card.icon}
              tone={card.tone}
              className={`aspect-[3/4] rounded-2xl shadow-[0_25px_50px_-30px_rgba(33,29,26,0.45)] ${
                index === 1 ? 'lg:-translate-y-6' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}