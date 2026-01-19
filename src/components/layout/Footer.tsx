import Link from 'next/link';

import { church } from '@/data/church';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Who We Are', href: '/about' },
  { label: 'Services & Cell Groups', href: '/services' },
  { label: 'Get Connected', href: '/connect' }
];

export default function Footer() {
  return (
    <footer className="border-t border-clay/50 bg-paper">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl text-ink">{church.churchName}</p>
          <p className="mt-3 text-sm text-ink/70">{church.mission}</p>
          <div className="mt-6 flex items-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full border border-clay/60 px-4 py-2 text-xs font-semibold text-ink/70 transition hover:bg-clay/20 focus-ring"
              href={church.youtubeChannelUrl}
            >
              <span aria-hidden>▶</span>
              YouTube
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="text-ink/70 hover:text-ink" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-moss">
            Sunday Service
          </p>
          <p className="mt-4 text-sm text-ink/70">{church.serviceTime}</p>
          <div className="mt-2 flex items-center justify-between gap-2 text-sm text-ink/70">
            <span>{church.location}</span>
            <a
              className="text-ink/60 transition hover:text-ink focus-ring"
              href={church.mapUrl}
              aria-label="View map location"
            >
              📍
            </a>
          </div>
          <div className="mt-6 text-sm text-ink/70">
            <p>{church.contact.email}</p>
            <p>{church.contact.phone}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-clay/50 px-6 py-5 text-center text-xs text-ink/60">
        © {new Date().getFullYear()} {church.churchName}. All rights reserved.
      </div>
    </footer>
  );
}
