import type { TextareaHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export default function Textarea({
  label,
  error,
  className,
  id,
  ...props
}: TextareaProps) {
  const textareaId = id ?? props.name;

  return (
    <label className="block text-sm font-semibold text-ink" htmlFor={textareaId}>
      <span>{label}</span>
      <textarea
        id={textareaId}
        className={cn(
          'mt-2 min-h-[120px] w-full rounded-xl border border-clay/70 bg-white px-3 py-2 text-sm text-ink shadow-sm focus-ring',
          error ? 'border-sunrise' : 'border-clay/70',
          className
        )}
        {...props}
      />
    </label>
  );
}
