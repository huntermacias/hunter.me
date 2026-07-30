import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { MoonIcon } from './icons/MoonIcon';
import { SunIcon } from './icons/SunIcon';

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Reserve the same footprint so nothing shifts once the real toggle mounts.
    return <div className="h-10 w-10" aria-hidden />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-gray-200/80 bg-white/60 shadow-lg shadow-gray-900/5 backdrop-blur-lg transition-colors duration-300 hover:border-primary/40 dark:border-gray-700/80 dark:bg-black/40 dark:shadow-black/20 dark:hover:border-primary/40"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ y: -10, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 10, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex"
          >
            <MoonIcon className="h-5 w-5 fill-indigo-200 stroke-indigo-400" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ y: -10, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 10, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex"
          >
            <SunIcon className="h-5 w-5 fill-amber-100 stroke-amber-500" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};
