import { useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { formatPrice, orderMessage } from '../data/shop';
import { products as productImages } from '../data/images';
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
      className="fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-line bg-surface"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted">Details</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close product details"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink hover:border-accent hover:text-accent"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="aspect-[3/4] w-full overflow-hidden">
            <img
              src={productImages[product.id]}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
          </div>

          <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-muted">{product.category}</p>
          <h2 className="mt-2 font-serif text-3xl text-ink">{product.name}</h2>
          <p className="mt-2 font-serif text-xl text-accent">{formatPrice(product.price)}</p>
          <p className="mt-4 text-pretty leading-relaxed text-muted">{product.description}</p>
        </div>

        <div className="border-t border-line px-6 py-5">
          <a
            href={waLink(orderMessage(product))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 bg-accent px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-accent-strong"
          >
            <MessageCircle className="h-4 w-4" />
            Order on WhatsApp
          </a>
          <p className="mt-3 text-center text-xs text-muted">
            Opens WhatsApp with your order ready to send.
          </p>
        </div>
      </div>
    </div>
  );
}