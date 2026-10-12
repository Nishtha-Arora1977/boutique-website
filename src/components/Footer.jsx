import { MessageCircle, Mail } from 'lucide-react';
import { brand } from '../data/shop';
import { waLink } from '../lib/whatsapp';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Collection', href: '#collection' },
  { label: 'Shop', href: '#shop' },
  { label: 'Story', href: '#story' },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <p
        aria-hidden="true"
        className="text-outline select-none px-4 pt-10 text-center font-serif text-[13vw] leading-none tracking-tight lg:text-[9vw]"
      >
        ÉLISE
      </p>

      <div className="grid gap-10 px-6 py-12 sm:px-10 md:grid-cols-3 lg:pl-14 lg:pr-16">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted">Boutique</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            {brand.tagline} Ethnic, western and everyday pieces — ordered in minutes over WhatsApp.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted">Explore</p>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-ink-soft transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div id="contact">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted">Contact</p>
          <div className="mt-4 space-y-3">
            <a
              href={waLink(`Hello ${brand.name}! I'd like to know more about your collection.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-ink-soft transition-colors hover:text-accent"
            >
              <MessageCircle className="h-4 w-4 text-accent" />
              WhatsApp us
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-3 text-sm text-ink-soft transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4 text-accent" />
              {brand.email}
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-line px-6 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:pl-14 lg:pr-16">
        <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        <p>Demo project · Built by <span className="text-ink-soft">Nishtha Arora</span>.</p>
      </div>
    </footer>
  );
}