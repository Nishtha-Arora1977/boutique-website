import Reveal from './Reveal';
import { categories, brand } from '../data/shop';
import { waLink } from '../lib/whatsapp';

export default function Categories() {
  return (
    <section id="collection" className="bg-paper-2 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            The Collection
          </p>
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">Shop by category</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.id} delay={index * 60}>
                <a
                  href={`#shop`}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_30px_60px_-35px_rgba(33,29,26,0.4)]"
                >
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-accent-soft p-3.5 text-accent">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 font-serif text-xl text-ink">{category.label}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {category.description}
                  </p>
                  <p className="mt-5 text-xs uppercase tracking-widest text-muted">
                    {category.count}
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100} className="mt-10 text-center">
          <a
            href={waLink(`Hello ${brand.name}! I'd like help choosing something from the collection.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-strong"
          >
            Not sure where to start? Ask us on WhatsApp →
          </a>
        </Reveal>
      </div>
    </section>
  );
}