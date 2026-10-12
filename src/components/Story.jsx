import Reveal from './Reveal';
import { story } from '../data/images';
import { brand } from '../data/shop';

export default function Story() {
  return (
    <section id="story" className="bg-paper-2 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-line">
              <img src={story} alt="" aria-hidden="true" className="aspect-[16/10] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-paper/30" />
            </div>
          </Reveal>
          <Reveal delay={70}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Our Story</p>
            <h2 className="font-serif text-4xl text-ink sm:text-5xl">Edited, not overdone</h2>
            <p className="mt-6 text-pretty leading-relaxed text-ink-soft">
              {brand.name} is built around the idea of a well-edited wardrobe. We favour clean lines,
              thoughtful details and pieces that pair with the things you already own. Every edit is
              chosen with longevity in mind — designed to be worn often, and worn well.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
              The result is a quiet confidence. No excess, no rush — just pieces that feel effortless,
              season after season.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <span>Slow, considered curation</span>
              <span>Quality fabrics &amp; finish</span>
              <span>WhatsApp-first ordering</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}