import { MessageCircle } from 'lucide-react';
import Reveal from './Reveal';
import ProductModal from './ProductModal';
import { products, formatPrice, orderMessage, brand } from '../data/shop';
import { products as productImages } from '../data/images';
import { waLink } from '../lib/whatsapp';
import { useState } from 'react';

const aspects = ['aspect-[3/4]', 'aspect-[4/5]', 'aspect-[3/4]', 'aspect-[4/5]'];

export default function Shop() {
  const [selectedId, setSelectedId] = useState(null);
  const selected = products.find((product) => product.id === selectedId) || null;

  return (
    <section id="shop" className="bg-paper-2 px-6 py-20 sm:px-10 lg:py-28 lg:pl-14 lg:pr-16">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
            N°03 — Shop
          </p>
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">The edit</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Tap any look for full details. Every piece ships with complimentary finishing — order
          directly on WhatsApp.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Reveal key={product.id} delay={(index % 3) * 60}>
            <article className="group flex h-full flex-col">
              <button
                type="button"
                onClick={() => setSelectedId(product.id)}
                aria-label={`View details for ${product.name}`}
                className="block w-full text-left"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={productImages[product.id]}
                    alt=""
                    aria-hidden="true"
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${aspects[index % aspects.length]}`}
                  />
                  <span className="absolute left-4 top-4 bg-paper/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink backdrop-blur">
                    0{index + 1}
                  </span>
                </div>
              </button>
              <div className="flex flex-1 flex-col pt-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted">{product.category}</p>
                <h3 className="mt-1.5 font-serif text-xl text-ink">{product.name}</h3>
                <p className="mt-1 flex-1 text-sm text-muted">{product.tagline}</p>
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-4">
                  <span className="font-serif text-lg text-accent">{formatPrice(product.price)}</span>
                  <a
                    href={waLink(orderMessage(product))}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Order ${product.name} on WhatsApp`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:text-accent"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    Order
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100} className="mt-14 border border-line px-6 py-8 text-center">
        <p className="font-serif text-2xl text-ink">Looking for something specific?</p>
        <p className="mt-2 text-sm text-muted">
          Send us a reference or a colour — we source pieces on request.
        </p>
        <a
          href={waLink(`Hello ${brand.name}! Could you help me find a piece in another size or colour?`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 border border-line-strong px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <MessageCircle className="h-4 w-4" />
          Ask on WhatsApp
        </a>
      </Reveal>

      <ProductModal product={selected} onClose={() => setSelectedId(null)} />
    </section>
  );
}