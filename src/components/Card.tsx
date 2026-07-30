import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import React from 'react';

const CardRoot = ({
  as: Component = 'div',
  href,
  className,
  children,
}: React.PropsWithChildren<{ as?: React.ElementType; className?: string; href?: string }>) => {
  const content = href ? (
    <Link href={href} passHref
      className="relative z-10 inline-block w-full h-full">{children}
    </Link>
  ) : (
    children
  );

  return (
    <Component
      className={clsx(
        className,
        'group relative flex flex-col p-6 items-start overflow-hidden rounded-2xl shadow-lg shadow-gray-900/5 transition-shadow duration-300 hover:shadow-xl dark:shadow-black/20',
        'backdrop-filter backdrop-blur-md border border-gray-200 dark:border-gray-700',
        'bg-white bg-opacity-20 dark:bg-zinc-600 dark:bg-opacity-20',
        'text-black dark:text-white'
      )}
    >
      {content}
    </Component>
  );
};

const CardLink = ({ children, ...props }: React.PropsWithChildren<LinkProps>) => {
  return (
    <Link {...props} className="relative z-10 inline-block w-full h-full">
      {children}
    </Link>
  );
};

const CARD_TITLE_CLASS = 'text-lg font-bold tracking-tight text-gray-900 dark:text-white';

const CardTitle = ({
  as: Component = 'h2',
  href,
  children,
}: React.PropsWithChildren<{ as?: React.ElementType; href?: string }>) => {
  const content = href ? (
    <Link href={href} passHref
      className={CARD_TITLE_CLASS}>{children}
    </Link>
  ) : (
    children
  );

  return <Component className={href ? undefined : CARD_TITLE_CLASS}>{content}</Component>;
};

const CardDescription = ({ children, classNames }: React.PropsWithChildren<{ classNames?: string }>) => {
  return (
    <div className={clsx('relative z-0 text-sm leading-relaxed text-gray-600 dark:text-gray-300 space-y-3', classNames)}>
      {typeof children === 'string' ? (
        children.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)
      ) : (
        children
      )}
    </div>
  );
};

const CardCta = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-primary transition-colors duration-300 group-hover:text-primary/80"
    >
      {children}
      <span className="ml-1 text-lg transition-transform duration-300 group-hover:translate-x-0.5">→</span>
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
        'relative z-10 order-first mb-3 text-xs font-medium uppercase tracking-wide',
        'text-gray-500 dark:text-gray-400',
        decorate && 'pl-4 before:absolute before:inset-y-0 before:left-0 before:flex before:items-center before:content-[""] before:h-full before:w-0.5 before:rounded-full',
        decorate && 'before:bg-gradient-to-b from-pink-500 to-purple-600 dark:before:bg-gradient-to-b dark:from-pink-500 dark:to-purple-600 animate-pulse',
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
