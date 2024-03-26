

import React from 'react';

import { Container } from './Container';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  intro: string;
}

export const PageLayout = ({ title, intro, children, ...rest }: React.PropsWithChildren<Props>) => {
  return (
    <Container
      className="mt-16 sm:mt-32 max-w-xl lg:max-w-7xl mx-auto  rounded-lg p-8 shadow-lg border border-gray-200 "
      {...rest}
    >
      <header className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
          {title}
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          {intro}
        </p>
      </header>
      <div className=" sm:mt-20">
        {children}
      </div>
    </Container>
  );
};
