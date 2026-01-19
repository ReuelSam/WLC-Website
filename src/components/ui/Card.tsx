import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type CardProps = HTMLAttributes<HTMLDivElement>;

export default function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-clay/60 bg-white/80 p-6 shadow-soft backdrop-blur',
        className
      )}
      {...props}
    />
  );
}
