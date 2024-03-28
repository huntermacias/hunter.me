import clsx from 'clsx';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

type Props = {
  className?: string | null;
  href: string;
};

export const ExternalLink = ({
  className = 'underline',
  href,
  children,
  ...otherProps
}: PropsWithChildren<Props>) => {
  return (
    <Link
      className={clsx(className)}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
