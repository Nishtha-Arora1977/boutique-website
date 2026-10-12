import Reveal from './Reveal';
import ProductArt from './ProductArt';
import { Gem, Flower2 } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="bg-paper-2 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <ProductArt icon={Flower2} tone={['#eecfc6', '#f6e3dc']} className="aspect-[3/4] rounded-2xl" />
            <ProductArt icon={Gem} tone={['#dce5d6', '#ecf0e2']} className="aspect-[3/4] translate-y-6 rounded-2xl" />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Our Story
          </p>
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">Small-batch, hand-finished, made for you</h2>
          <div className="mt-6 space-y-5 text-pretty text-lg leading-relaxed text-muted">
            <p>
              Maison Élise began with a simple idea — everyday pieces that feel special. Each
              garment and accessory is made in small batches and checked by hand before it&apos;s
              packed.
            </p>
            <p>
              Because every order is handled personally, the easiest way to shop with us is on
              WhatsApp. Ask about sizes, colours, or a piece for a special occasion — we respond
              the same day.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}