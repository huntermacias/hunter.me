import { Analytics } from '@vercel/analytics/react';
import 'focus-visible';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { GeistSans } from 'geist/font/sans';
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
        <div className={`${GeistSans.className}`}>
          <div className="fixed inset-0 flex justify-center sm:px-8 backdrop-blur-[20px]">
            <div className="flex w-screen">
              {/* Enhanced container with conditional styling and transition effects */}
              <div className="
                relative h-full w-full bg-[#F0F0F3]/90 dark:bg-[#0b0b0b] transition duration-500 ease-in-out 
                hover:bg-[#E0E0E3]/90 dark:hover:bg-[#16181D]/90 before:absolute before:inset-0 
                before:bg-[linear-gradient(135deg,rgba(209,200,201,0.9),rgba(141,145,109,0.5))] 
                dark:before:bg-[linear-gradient(135deg,rgba(6,8,9,1),rgba(9,7,14,1))] 
                // dark:after:bg-[image:radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)]
                after:absolute after:inset-0 after:bg-[length:20px_20px] 
                after:bg-[image:radial-gradient(circle,rgba(0,0,0,0.2)_1px,transparent_1px)]"
                >
                {/* Enhanced custom lines for visibility with subtle animation */}
                <div className="
                  absolute bottom-0 h-[50rem] w-screen left-0 right-0 top-0 
                  bg-[length:20px_20px] bg-[image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] 
                  dark:bg-[image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] animate-pulseSlow"
                >
                </div>
                {/* Subtle radial gradient with enhanced dynamic effect */}
                <div className="absolute left-0 right-0 top-[-10%] h-[40rem] w-screen rounded-md 
                bg-[radial-gradient(circle_300px_at_50%_10%,rgba(24,23,27,0.3),transparent)] 
                dark:bg-[radial-gradient(circle_300px_at_50%_10%,rgba(255,255,255,0.3),transparent)]">
                </div>
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

