import classNames from 'classnames';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

const styles = `
  inline-flex items-center rounded-md
  px-2.5 py-0.5 text-xs leading-2 font-base 
  bg-white/30 dark:bg-black/30 
  text-zinc-600 dark:text-zinc-200 
  hover:bg-blue-500/20 dark:hover:bg-blue-500/20
  hover:text-blue-500 dark:hover:text-blue-500
  shadow-sm dark:shadow-white/20
  backdrop-blur-sm border border-gray-950
  dark:border-gray-700/50
  transition-all duration-300 ease-in-out
`;

type Props = (
  | {
      onClick?: () => void;
    }
  | {
      href: string;
    }
) & { className?: string };

export const Badge = ({ className, children, ...otherProps }: PropsWithChildren<Props>) => {
  if ('href' in otherProps)
    return (
      <Link className={classNames(styles, className)} {...otherProps}>
        {children}
      </Link>
    );

  return (
    <button className={classNames(styles, className)} {...otherProps}>
      {children}
    </button>
  );
};
