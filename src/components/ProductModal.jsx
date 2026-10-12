import { useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import ProductArt from './ProductArt';
import { formatPrice, orderMessage } from '../data/shop';
import { waLink } from '../lib/whatsapp';

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    if (!product) return;
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} details`}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-paper sm:rounded-3xl"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-4 sm:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-muted">Product details</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close product details"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink hover:bg-paper-2"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-8 p-6 sm:grid-cols-2 sm:p-8">
          <ProductArt icon={product.icon} tone={product.tone} className="aspect-[3/4] w-full rounded-2xl border border-line" />

          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-widest text-muted">{product.category}</p>
            <h2 className="mt-2 font-serif text-3xl text-ink">{product.name}</h2>
            <p className="mt-3 text-lg text-accent">{formatPrice(product.price)}</p>
            <p className="mt-4 text-pretty leading-relaxed text-muted">{product.description}</p>

            <div className="mt-auto pt-8">
              <a
                href={waLink(orderMessage(product))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-whatsapp-strong"
              >
                <MessageCircle className="h-4 w-4" />
                Order this on WhatsApp
              </a>
              <p className="mt-3 text-center text-xs text-muted">
                Tapping opens WhatsApp with your order ready to send.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}