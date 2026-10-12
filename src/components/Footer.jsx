import { MessageCircle, Mail } from 'lucide-react';
import { brand } from '../data/shop';
import { waLink } from '../lib/whatsapp';

const links = [
  { label: 'Collection', href: '#collection' },
  { label: 'Shop', href: '#shop' },
  { label: 'Our Story', href: '#story' },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-paper py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="font-serif text-xl text-ink">
              {brand.name}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Elegant clothing and accessories, made to order and delivered with care.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs uppercase tracking-widest text-muted">Browse</p>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ink-soft hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted">Ordering</p>
            <div className="mt-4 space-y-3">
              <a
                href={waLink(`Hello ${brand.name}! I'd like to place an order.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-ink-soft hover:text-accent"
              >
                <MessageCircle className="h-4 w-4 text-accent" />
                Order on WhatsApp
              </a>
              <a href={`mailto:${brand.email}`} className="flex items-center gap-3 text-sm text-ink-soft hover:text-accent">
                <Mail className="h-4 w-4 text-accent" />
                {brand.email}
              </a>
              <p className="text-sm text-muted">Replies within a working day.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p>Demo project · Built by <span className="text-ink-soft">Nishtha Arora</span>.</p>
        </div>
      </div>
    </footer>
  );
}