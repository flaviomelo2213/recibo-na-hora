'use client';

import React from 'react';

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`bg-white rounded-2xl border border-slate-200 shadow-sm ${className}`}
      {...props}
    />
  )
);
Card.displayName = 'Card';

export { Card };
