import clsx from 'clsx';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

export const Prose = ({ children, className }: Props) => {
  // Check if children is a string (potentially Markdown content)
  // and render it with ReactMarkdown for Markdown support.
  // Otherwise, just render the children directly.
  const contentIsString = typeof children === 'string';

  return (
    <div
      className={clsx(className, 'md:prose-md xl:prose-lg prose prose-zinc w-full dark:prose-dark')}
    >
      {contentIsString ? (
        <ReactMarkdown >{children}</ReactMarkdown>
      ) : (
        children
      )}
    </div>
  );
};
