import { cn } from '@/lib/utils';

type FieldErrorProps = {
  message?: string;
  className?: string;
};

export default function FieldError({ message, className }: FieldErrorProps) {
  if (!message) return null;
  return (
    <p className={cn('mt-1 text-xs font-semibold text-sunrise', className)}>
      {message}
    </p>
  );
}
