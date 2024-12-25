import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

const Card = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border bg-white shadow-sm',
        className
      )}
      {...props}
    />
  );
});

Card.displayName = 'Card';

export { Card };