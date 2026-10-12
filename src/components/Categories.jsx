import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { categories } from '../data/shop';
import { categories as images } from '../data/images';

export default function Categories() {
  return (
    <section id="collection" className="px-6 py-20 sm:px-10 lg:py-28 lg:pl-14 lg:pr-16">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
            N°02 — Collection
          </p>
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">Shop by edit</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Five curated edits. Hover a row to preview, click to jump straight into the shop.
        </p>
      </Reveal>

      <div className="mt-10 border-t border-line">
        {categories.map((category, index) => (
          <Reveal key={category.id} delay={index * 40}>
            <a
              href="#shop"
              className="group flex items-center justify-between gap-6 border-b border-line py-6 transition-colors hover:bg-paper-2 sm:py-7"
            >
              <div className="flex items-baseline gap-5 sm:gap-8">
                <span className="text-xs text-accent">0{index + 1}</span>
                <div>
                  <h3 className="font-serif text-2xl text-ink transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent sm:text-3xl">
                    {category.label}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{category.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <span className="hidden text-xs uppercase tracking-[0.2em] text-muted sm:block">
                  {category.count}
                </span>
                <img
                  src={images[category.id]}
                  alt=""
                  aria-hidden="true"
                  className="hidden h-20 w-16 rounded-none object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100 md:block"
                />
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors group-hover:border-accent group-hover:text-accent">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}