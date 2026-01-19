import type { SelectHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
};

export default function Select({ label, error, className, id, ...props }: SelectProps) {
  const selectId = id ?? props.name;

  return (
    <label className="block text-sm font-semibold text-ink" htmlFor={selectId}>
      <span>{label}</span>
      <select
        id={selectId}
        className={cn(
          'mt-2 w-full rounded-xl border border-clay/70 bg-white px-3 py-2 text-sm text-ink shadow-sm focus-ring',
          error ? 'border-sunrise' : 'border-clay/70',
          className
        )}
        {...props}
      />
    </label>
  );
}
