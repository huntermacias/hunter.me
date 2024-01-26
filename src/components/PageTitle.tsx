import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export const PageTitle = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={clsx(className, "inline-block relative")}>
      <h1
        className={clsx(
          'text-4xl font-bold tracking-tight mb-2 text-zinc-800 dark:text-zinc-100 text-balance relative z-10',
        )}
      >
        {children}
      </h1>
      <svg className="absolute bottom-0 left-0 right-0 z-0 h-6 w-full text-pink-700" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 20 C50 10, 150 10, 200 20" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  );
};
