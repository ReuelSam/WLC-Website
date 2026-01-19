import type { ComponentPropsWithoutRef, ElementType } from 'react';

import { cn } from '@/lib/utils';

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-ring disabled:pointer-events-none disabled:opacity-50';

const variants = {
  primary: 'bg-pine text-paper hover:bg-ink',
  secondary: 'bg-sunrise text-ink hover:bg-clay',
  outline: 'border border-pine text-pine hover:bg-pine hover:text-paper'
};

type ButtonProps<C extends ElementType> = {
  as?: C;
  variant?: keyof typeof variants;
  className?: string;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'className'>;

export default function Button<C extends ElementType = 'button'>({
  as,
  variant = 'primary',
  className,
  ...props
}: ButtonProps<C>) {
  const Component = as ?? 'button';

  return (
    <Component className={cn(baseStyles, variants[variant], className)} {...props} />
  );
}
