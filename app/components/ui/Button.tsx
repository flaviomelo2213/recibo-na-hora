'use client';

import React from 'react';

// 1. Tipagem explícita para as props do botão
type Variant = 'primary' | 'secondary' | 'ghost' | 'success';
type Size = 'sm' | 'md' | 'lg';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children?: React.ReactNode;
};

// 2. Função auxiliar para concatenar classes do Tailwind
function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ');
}

// 3. Componente Button com variantes e tamanhos manuais
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    className, 
    children, 
    ...props 
  }, ref) => {

    const baseClasses =
      'inline-flex items-center justify-center rounded-2xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none';

    const variantClasses: Record<Variant, string> = {
      primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 shadow-sm',
      success: 'bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-400 shadow-sm',
      secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 focus:ring-indigo-500',
      ghost: 'bg-transparent text-slate-900 hover:bg-slate-100 focus:ring-indigo-500',
    };

    const sizeClasses: Record<Size, string> = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-4 text-sm',
      lg: 'h-12 px-5 text-base',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

// Exports for default and named compatibility
export default Button;
export { Button };
