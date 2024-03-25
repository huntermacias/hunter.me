import { Analytics } from '@vercel/analytics/react';
import 'focus-visible';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import React, { useEffect, useRef } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import '../styles/index.css';
import '../styles/prism.css';

function usePrevious(value: string) {
  let ref = useRef<string>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default function App({ Component, pageProps, router }: AppProps) {
  let previousPathname = usePrevious(router.pathname);

  return (
    <>
      <ThemeProvider attribute="class">
        <div className={`${GeistSans.className} bg-zinc-50 dark:bg-[#0d1117]/60`}>
          {/* Enhanced dark gradient background */}
          <div className="fixed inset-0 flex justify-center sm:px-8 backdrop-blur-[2px]">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full backdrop-blur-[15px] bg-[#dbdee4]/60 dark:bg-[#20232a]/10 rounded-lg shadow-lg border border-gray-700/80 ring-1 ring-gray-700/50">
                {/* Enhanced glass effect card with deeper shadows and richer background */}
              </div>
            </div>
          </div>
          <div className="relative">
            <Header />
            <main>
              <Component previousPathname={previousPathname} {...pageProps} />
            </main>
            <Footer />
          </div>
          <Analytics />
        </div>
      </ThemeProvider>


    </>
  );
}

