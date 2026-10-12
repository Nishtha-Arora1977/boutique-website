import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { brand } from '../data/shop';
import { waLink } from '../lib/whatsapp';

const links = [
  { n: '01', label: 'Home', href: '#home' },
  { n: '02', label: 'Collection', href: '#collection' },
  { n: '03', label: 'Shop', href: '#shop' },
  { n: '04', label: 'Story', href: '#story' },
  { n: '05', label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Desktop: fixed left rail */}
      <aside className="fixed left-0 top-0 z-50 hidden h-full w-20 flex-col items-center justify-between border-r border-line bg-paper py-8 lg:flex">
        <a
          href="#home"
          className="font-serif text-lg text-ink [writing-mode:vertical-rl] rotate-180 tracking-wide"
        >
          {brand.name}
        </a>

        <nav aria-label="Primary" className="flex flex-col items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex flex-col items-center gap-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
            >
              <span className="text-[9px] text-line-strong group-hover:text-accent">{link.n}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink(`Hello ${brand.name}! I'd like to know more about your collection.`)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on WhatsApp"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <MessageCircle className="h-4 w-4" />
        </a>
      </aside>

      {/* Mobile: top bar */}
      <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-line bg-paper/90 px-5 backdrop-blur-xl lg:hidden">
        <a href="#home" className="font-serif text-lg text-ink">
          {brand.name}
        </a>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </header>

      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-40 bg-paper px-8 pt-24 lg:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-line">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-5 font-serif text-3xl text-ink"
                >
                  <span className="text-xs text-accent">{link.n}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waLink(`Hello ${brand.name}! I'd like to know more about your collection.`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-8 flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-paper"
          >
            <MessageCircle className="h-4 w-4" />
            Order on WhatsApp
          </a>
        </div>
      )}
    </>
  );
}