'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

export type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export default function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.title}
            className="rounded-2xl border border-clay/60 bg-white/90"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink focus-ring"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span className="text-xl text-moss" aria-hidden>
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div
              className={cn(
                'overflow-hidden px-5 pb-4 text-sm text-ink/80 transition-[max-height,opacity]',
                isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
