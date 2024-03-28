import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

import { MoonIcon } from './icons/MoonIcon';
import { SunIcon } from './icons/SunIcon';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-full p-1 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-indigo-500 dark:to-pink-500 shadow-lg shadow-cyan-500/50 dark:shadow-purple-500/50 backdrop-blur-sm"
      >
        <button
          aria-label="Toggle dark mode"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 dark:bg-black/80"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
   
          <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-primary [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-primary-dark" />
          <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-primary" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
