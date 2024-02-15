import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import React from 'react';

const CardRoot = ({
  as: Component = 'div',
  className,
  children,
}: React.PropsWithChildren<{ as?: React.ElementType; className?: string }>) => {
  return (
    <Component
      className={clsx(
        className,
        'group relative flex flex-col p-4 items-start overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300',
        'bg-white dark:bg-zinc-800'
      )}
    >
      {children}
    </Component>
  );
};

const CardLink = ({ children, ...props }: React.PropsWithChildren<LinkProps>) => {
  return (
    <>
      <span className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-700 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}
        className="relative z-10 inline-block w-full h-full">
          {children}
      </Link>
    </>
  );
};

const CardTitle = ({
  as: Component = 'h2',
  href,
  children,
}: React.PropsWithChildren<{ as?: React.ElementType; href?: string }>) => {
  return (
    <Component className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
};

const CardDescription = ({ children }: React.PropsWithChildren) => {
  return <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{children}</p>;
};

const CardCta = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-primary group-hover:text-primary-dark transition-colors duration-300"
    >
      {children}
      <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
    </div>
  );
};

const CardEyebrow = ({
  as: Component = 'p',
  decorate = false,
  className,
  children,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    decorate?: boolean;
    className?: string;
  } & React.AllHTMLAttributes<HTMLElement>
>) => {
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-xs font-medium uppercase tracking-wide',
        decorate && 'pl-3.5 before:absolute before:inset-y-0 before:left-0 before:flex before:items-center before:content-[""] before:h-4 before:w-0.5 before:rounded-full',
        'text-zinc-500 dark:text-zinc-400',
        decorate && 'before:bg-zinc-300 dark:before:bg-zinc-600'
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Card = Object.assign(CardRoot, {
  Link: CardLink,
  Title: CardTitle,
  Description: CardDescription,
  Cta: CardCta,
  Eyebrow: CardEyebrow,
});
