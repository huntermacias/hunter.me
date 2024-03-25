import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import React from 'react';


interface CardDescriptionProps extends React.PropsWithChildren<{}> {
  classNames?: string; // Optional prop to allow custom line clamp classes
  
}


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
      'backdrop-filter backdrop-blur-lg border border-gray-200 dark:border-gray-700',
      'bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50', // Light/Dark dynamic backgrounds
      'hover:bg-opacity-60 dark:hover:bg-opacity-60', // Adjusting opacity on hover for both themes
      'text-black dark:text-white' // Text color adjustments for readability
    )}
    >
      {children}
    </Component>
  );
};

const CardLink = ({ children, ...props }: React.PropsWithChildren<LinkProps>) => {
  return (
    <>
     <span className="absolute -inset-y-6 -inset-x-4 z-0 text-gray-800 scale-95 bg-zinc-50 opacity-0 backdrop-filter backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 dark:bg-slate-950 sm:-inset-x-6 sm:rounded-2xl" />
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
    <Component className="text-lg font-semibold tracking-tight text-gray-950/60 dark:text-white">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
};

const CardDescription = ({ children, classNames }: CardDescriptionProps) => {
  return (
    <div className={`relative z-0 mt-4 text-xs leading-relaxed text-gray-800 dark:text-gray-300 space-y-4 ${classNames}`}>
      {typeof children === 'string'
        ? children.split('\n').map((paragraph, index) => (
            <p key={index} className="first-letter:float-left first-letter:text-2xl first-letter:font-bold first-letter:mr-0.5 first-letter:text-red-500 first-letter:text-primary-500">
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
    className="relative z-10 mt-4 flex items-center text-sm font-medium text-primary-500 hover:text-primary-400 group-hover:text-primary-300 transition-colors duration-300"
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
        'text-gray-400 dark:text-gray-500',
        decorate && 'before:bg-gray-500 dark:before:bg-gray-400'
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
