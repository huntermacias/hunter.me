import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import React from 'react';


interface CardDescriptionProps extends React.PropsWithChildren<{}> {
  classNames?: string; // Optional prop to allow custom line clamp classes
  
}


const CardRoot = ({
  as: Component = 'div',
  href,
  className,
  children,
}: React.PropsWithChildren<{ as?: React.ElementType; className?: string; href?: string }>) => {
  return (
    <Component
      
      className={clsx(
        className,
        'group relative flex flex-col p-6 items-start overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105',
        'backdrop-filter backdrop-blur-2xl border border-gray-200 dark:border-gray-700',
        'bg-white bg-opacity-60 dark:bg-black dark:bg-opacity-20', // Enhanced Light/Dark dynamic backgrounds
        'text-black dark:text-white' // Text color adjustments for readability
      )}
    >
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
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

const CardTitle = ({
  as: Component = 'h2',
  href,
  children,
}: React.PropsWithChildren<{ as?: React.ElementType; href?: string }>) => {
  return (
    <Component className="text-xl font-bold tracking-tight ">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
};

const CardDescription = ({ children, classNames }: CardDescriptionProps) => {
  return (
    <div className={`relative z-0 text-sm leading-relaxed text-gray-800 dark:text-gray-300 space-y-4 ${classNames}`}>
      {typeof children === 'string'
        ? children.split('\n').map((paragraph, index) => (
            <p key={index} className="first-letter:float-left first-letter:text-3xl first-letter:font-bold first-letter:mr-2 first-letter:text-primary-500">
              {paragraph}
            </p>
          ))
        : children}
    </div>
  );
};

const CardCta = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-primary-500 hover:text-primary-400 transition-colors duration-300"
    >
      {children}
      <span className="ml-1 text-xl transition-transform duration-300 group-hover:translate-x-2">→</span>
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
        'text-gray-400 dark:text-gray-500',
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
