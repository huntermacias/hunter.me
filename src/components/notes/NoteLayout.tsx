import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import { formatDate } from '../../lib/date';
import { Container } from '../Container';
import { Prose } from '../Prose';
import { ArrowLeftIcon } from '../icons/ArrowLeftIcon';
import { Button } from '../Button';

interface Props {
  children: React.ReactNode;
  meta: {
    title: string;
    description: string;
    date: string;
  };
  previousPathname?: string;
}

export const NoteLayout = ({ children, meta, previousPathname }: Props) => {
  let router = useRouter();

  return (
    <Container
    className="sm:mt-32 mt-8 max-w-xl lg:max-w-6xl mx-auto rounded-lg p-8
    border border-gray-300 shadow-xl shadow-gray-500/20 transition-all duration-500
    bg-white/30 dark:bg-[#0d1117]/30 backdrop-filter backdrop-blur-lg dark:border-gray-700">
    <div className="xl:relative">
      <div className="mx-auto max-w-5xl">
        {true && (
          <Button
            type="button"
            onClick={() => router.back()}
            aria-label="Go back"
            className="flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 mb-6"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-gray-700 hover:stroke-gray-900 dark:stroke-gray-400 dark:hover:stroke-white" />
            Go back
          </Button>
        )}
        <article>
          <header className="flex flex-col">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-5xl">
              {meta.title}
            </h1>
            <time
              dateTime={meta.date}
              className="order-first flex items-center text-base text-gray-800 dark:text-gray-400"
            >
              <span className="h-4 w-0.5 rounded-full bg-gray-300 dark:bg-gray-600" />
              <span className="ml-3">{formatDate(meta.date)}</span>
            </time>
          </header>
          <Prose className="">
            {children}
          </Prose>
        </article>
      </div>
    </div>
  </Container>
  
  );
};
