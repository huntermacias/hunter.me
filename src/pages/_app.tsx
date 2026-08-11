import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import 'focus-visible';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { GeistSans } from 'geist/font/sans';
import { useEffect, useRef } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import '../styles/index.css';
import '../styles/prism.css';

/* ===================== HOOKS ===================== */

function usePrevious<T>(value: T) {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

/* ===================== BACKGROUND ===================== */

const AppBackground = () => (
  <div className="fixed inset-0 z-0 flex justify-center sm:px-8 backdrop-blur-[20px]">
    <div className="flex w-screen">
      <div
        className="
          relative h-full w-full
          bg-[#F0F0F3]/90 dark:bg-[#0b0b0b]
          transition-colors duration-500 ease-in-out
          hover:bg-[#E0E0E3]/90 dark:hover:bg-[#16181D]/90
        "
      >
        {/* Gradient wash */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[linear-gradient(135deg,rgba(209,200,201,0.9),rgba(141,145,109,0.5))]
            dark:bg-[linear-gradient(135deg,rgba(6,8,9,1),rgba(9,7,14,1))]
          "
        />

        {/* Grid texture */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[length:20px_20px]
            bg-[image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]
            dark:bg-[image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
            animate-pulseSlow
          "
        />

        {/* Radial highlight */}
        <div
          className="
            pointer-events-none absolute left-0 right-0 top-[-10%]
            h-[40rem] w-screen rounded-md
            bg-[radial-gradient(circle_300px_at_50%_10%,rgba(24,23,27,0.3),transparent)]
            dark:bg-[radial-gradient(circle_300px_at_50%_10%,rgba(255,255,255,0.3),transparent)]
          "
        />
      </div>
    </div>
  </div>
);

/* ===================== APP ===================== */

export default function App({ Component, pageProps, router }: AppProps) {
  const previousPathname = usePrevious(router.pathname);

  return (
    <ThemeProvider attribute="class">
      <div className={GeistSans.className}>
        {/* Global background */}
        <AppBackground />

        {/* Foreground content */}
        <div className="relative z-10">
          <Header />

          <main>
            <Component
              previousPathname={previousPathname}
              {...pageProps}
            />
          </main>

          <Footer />
        </div>

        <Analytics />
        <SpeedInsights />
      </div>
    </ThemeProvider>
  );
}
