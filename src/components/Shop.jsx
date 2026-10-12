import { MessageCircle } from 'lucide-react';
import Reveal from './Reveal';
import ProductModal from './ProductModal';
import { products, formatPrice, orderMessage, brand } from '../data/shop';
import { products as productImages } from '../data/images';
import { waLink } from '../lib/whatsapp';
import { useState } from 'react';

export default function Shop() {
  const [selectedId, setSelectedId] = useState(null);
  const selected = products.find((product) => product.id === selectedId) || null;

  return (
    <section id="shop" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Shop</p>
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">The edit</h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-soft">
            Every piece is available to order directly on WhatsApp. Tap a look to see full details
            and pricing.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={(index % 4) * 70}>
              <article className="group flex h-full flex-col">
                <button
                  type="button"
                  onClick={() => setSelectedId(product.id)}
                  aria-label={`View details for ${product.name}`}
                  className="block w-full text-left"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-line">
                    <img
                      src={productImages[product.id]}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-paper/30" />
                  </div>
                </button>
                <div className="flex flex-1 flex-col pt-4">
                  <p className="text-xs uppercase tracking-widest text-muted">{product.category}</p>
                  <h3 className="mt-1 font-serif text-lg text-ink">{product.name}</h3>
                  <p className="mt-1 flex-1 text-sm text-muted">{product.tagline}</p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="font-serif text-lg text-accent">{formatPrice(product.price)}</span>
                    <a
                      href={waLink(orderMessage(product))}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Order ${product.name} on WhatsApp`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-2 text-xs font-medium text-paper transition-colors hover:bg-accent-strong"
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

        <Reveal delay={100} className="mt-12 text-center">
          <p className="text-sm text-muted">
            Want something in another colour or size?{' '}
            <a
              href={waLink(`Hello ${brand.name}! Could you help me find a piece in another size or colour?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent hover:text-accent-strong"
            >
              Ask us on WhatsApp
            </a>
          </p>
        </Reveal>
      </div>

      <ProductModal product={selected} onClose={() => setSelectedId(null)} />
    </section>
  );
}