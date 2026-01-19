'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { church } from '@/data/church';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Who We Are', href: '/about' },
  { label: 'Services & Cell Groups', href: '/services' },
  { label: 'Get Connected', href: '/connect' }
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-clay/50 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pine text-sm font-bold text-paper">
            W
          </span>
          <div>
            <p className="font-display text-lg text-ink">{church.churchName}</p>
            <p className="text-xs text-ink/60">{church.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-semibold text-ink/70 transition hover:text-ink',
                  isActive ? 'text-ink underline decoration-sunrise/70 underline-offset-8' : ''
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Button as={Link} href="/connect" variant="outline" className="text-xs">
            Plan a Visit
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-clay/70 p-2 text-ink md:hidden focus-ring"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="text-lg">☰</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-clay/50 bg-paper px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'rounded-xl px-3 py-2 text-sm font-semibold text-ink/70 hover:bg-clay/30',
                    isActive ? 'bg-clay/30 text-ink' : ''
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
