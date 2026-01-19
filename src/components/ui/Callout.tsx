import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type CalloutProps = HTMLAttributes<HTMLDivElement> & {
  tone?: 'warm' | 'neutral';
};

const toneStyles = {
  warm: 'border-sunrise/40 bg-sunrise/10',
  neutral: 'border-clay/60 bg-white/70'
};

export default function Callout({
  tone = 'warm',
  className,
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border px-5 py-4 text-sm text-ink/80 shadow-soft',
        toneStyles[tone],
        className
      )}
      {...props}
    />
  );
}
