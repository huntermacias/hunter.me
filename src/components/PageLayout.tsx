

import React from 'react';

import { Container } from './Container';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  intro: string;
}

export const PageLayout = ({ title, intro, children, ...rest }: React.PropsWithChildren<Props>) => {
  return (
    <Container
      className="mt-16 sm:mt-32 max-w-xl lg:max-w-5xl mx-auto backdrop-blur-xl bg-white/30 dark:bg-black/50 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-slate-800 transition-all duration-300 hover:bg-opacity-40 dark:hover:bg-opacity-40"
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
