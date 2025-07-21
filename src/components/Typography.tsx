import React, { type JSX } from 'react';
import classNames from 'classnames';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption';
  className?: string;
  children: React.ReactNode;
  isTextWhite?: boolean;
}

const Typography = ({ variant = 'body', className, children, isTextWhite = false }: TypographyProps) => {
  const variants = {
    h1: "text-4xl md:text-6xl font-700 tracking-tight",
    h2: "text-3xl md:text-4xl font-700 tracking-tight",
    h3: "text-2xl md:text-3xl font-700",
    h4: "text-xl md:text-2xl font-medium",
    body: "text-base font-inter md:text-lg leading-relaxed",
    caption: "text-sm font-inter text-muted-foreground"
  };

  const Component = variant.startsWith('h') ? variant as keyof JSX.IntrinsicElements : 'p';

  const whiteText = isTextWhite ? 'text-white' : 'text-blue-darkmode';

  return (
    <Component
    	className={classNames(whiteText, variants[variant], className)}
		>
      {children}
    </Component>
  );
};

export default Typography;