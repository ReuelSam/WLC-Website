import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
};

export default function Section({
  eyebrow,
  title,
  description,
  className,
  children
}: SectionProps) {
  return (
    <section className={cn('mx-auto w-full max-w-6xl px-6 py-14', className)}>
      <div className="mb-8 max-w-2xl">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-ink/80">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
