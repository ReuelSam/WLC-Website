import type { InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function Input({ label, error, className, id, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <label className="block text-sm font-semibold text-ink" htmlFor={inputId}>
      <span>{label}</span>
      <input
        id={inputId}
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
