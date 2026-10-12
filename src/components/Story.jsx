import Reveal from './Reveal';
import { story } from '../data/images';

export default function Story() {
  return (
    <section id="story" className="px-6 py-20 sm:px-10 lg:py-28 lg:pl-14 lg:pr-16">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
            N°04 — Story
          </p>
          <h2 className="text-balance font-serif text-3xl leading-snug text-ink sm:text-4xl lg:text-[2.75rem]">
            “Edited, not overdone — <span className="italic text-accent">pieces that live with
            you</span>, season after season.”
          </h2>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-line pt-6 text-xs text-muted">
            <div>
              <p className="font-serif text-xl text-ink">Slow</p>
              <p className="mt-1">Considered curation</p>
            </div>
            <div>
              <p className="font-serif text-xl text-ink">Real</p>
              <p className="mt-1">Quality fabrics &amp; finish</p>
            </div>
            <div>
              <p className="font-serif text-xl text-ink">Direct</p>
              <p className="mt-1">WhatsApp-first ordering</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <div className="relative">
            <img
              src={story}
              alt="Inside the Maison Élise boutique"
              className="aspect-[16/11] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-paper/50 via-transparent to-transparent" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Every piece in the shop is chosen to pair with the things you already own — no excess,
            no rush, just quiet confidence.
          </p>
        </Reveal>
      </div>
    </section>
  );
}