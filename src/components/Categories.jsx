import Reveal from './Reveal';
import { categories } from '../data/shop';
import { categories as images } from '../data/images';

export default function Categories() {
  return (
    <section id="collection" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Collection</p>
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">Styled by edit</h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-soft">
            Four edits to simplify your wardrobe. From festive evenings to everyday essentials, each
            category is curated to pair beautifully together.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category, index) => (
            <Reveal key={category.id} delay={index * 60}>
              <a
                href="#shop"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={images[category.id]}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-paper/70" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-ink">{category.label}</h3>
                  <p className="mt-1 text-sm text-muted">{category.description}</p>
                  <p className="mt-3 text-xs text-accent">{category.count}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}