import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { brand } from '../data/shop';
import { waLink } from '../lib/whatsapp';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Collection', href: '#collection' },
  { label: 'Shop', href: '#shop' },
  { label: 'Our Story', href: '#story' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <div className="bg-ink px-4 py-2.5 text-center text-xs text-paper/90">
        Complimentary shipping on orders above ₹2,000 · Every piece carefully packed
      </div>
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
          scrolled ? 'border-line bg-paper/90 backdrop-blur-xl' : 'border-transparent bg-paper'
        }`}
      >
        <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-20">
          <a href="#home" className="font-serif text-xl tracking-tight text-ink">
            {brand.name}
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full relative"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={waLink(`Hello ${brand.name}! I'd like to know more about your collection.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-whatsapp-strong"
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div id="mobile-menu" className="border-t border-line bg-paper px-6 py-6 md:hidden">
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 font-serif text-2xl text-ink hover:bg-paper-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-3">
                <a
                  href={waLink(`Hello ${brand.name}! I'd like to know more about your collection.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 text-sm font-medium text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Order on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}