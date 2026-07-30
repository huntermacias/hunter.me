import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import {
  IconCode,
  IconHome2,
  IconNotes,
  IconTool,
  IconUserCircle,
} from '@tabler/icons-react';

import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { CloseIcon } from './icons/CloseIcon';

export const NavigationItems = [
  {
    name: 'Home',
    href: '/',
    type: 'internal',
  },
  {
    name: 'Notes',
    href: '/notes',
    type: 'internal',
  },
  {
    name: 'Creating',
    href: '/creating',
    type: 'internal',
  },
  {
    name: 'Uses',
    href: '/uses',
    type: 'internal',
  },
  {
    name: 'About',
    href: '/about',
    type: 'internal',
  }
  // {
  //   name: 'Resume',
  //   href: '/viewResume',
  //   type: 'internal',
  // }
] as const;

const MOBILE_NAV_ICONS: Record<string, React.ElementType> = {
  Home: IconHome2,
  Notes: IconNotes,
  Creating: IconCode,
  Uses: IconTool,
  About: IconUserCircle,
};

export const NavLink = ({ href, children }: React.PropsWithChildren<{ href: string }>) => {
  return (
    <Link href={href} className="transition hover:text-primary">
      {children}
    </Link>
  );
};

const NavItem = ({ href, children }: React.PropsWithChildren<{ href: string }>) => {
  const isActive = useRouter().pathname === href;

  return (
    <li className="relative">
      {isActive && (
        <motion.span
          layoutId="desktop-nav-active-pill"
          className="absolute inset-0 rounded-lg bg-primary/10 dark:bg-primary/15"
          transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
        />
      )}
      <Link
        href={href}
        className={clsx(
          'relative z-10 block rounded-lg px-4 py-2 transition-colors duration-300',
          isActive
            ? 'text-primary font-semibold'
            : 'text-zinc-700 hover:bg-zinc-900/5 hover:text-primary dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-primary',
        )}
      >
        {children}
      </Link>
    </li>
  );
};

export const MobileNavItem = ({
  href,
  icon: Icon,
  children,
}: React.PropsWithChildren<{ href: string; icon?: React.ElementType }>) => {
  const isActive = useRouter().pathname === href;

  return (
    <li>
      <Popover.Button as={Fragment}>
        <Link
          href={href}
          className={clsx(
            'flex items-center gap-3 rounded-xl px-3 py-2.5 text-base font-medium transition-colors duration-200',
            isActive
              ? 'bg-primary/10 text-primary'
              : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/5',
          )}
        >
          {Icon && (
            <Icon
              className={clsx(
                'h-5 w-5 shrink-0',
                isActive ? 'text-primary' : 'text-zinc-400 dark:text-zinc-500',
              )}
            />
          )}
          {children}
        </Link>
      </Popover.Button>
    </li>
  );
};

export const DesktopNavigation = (
  props: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>,
) => {
  return (
    <nav {...props}>
      <ul className="flex space-x-1 items-center rounded-full bg-white/30 dark:bg-black/30 px-4 py-2 backdrop-blur-lg shadow-lg border border-transparent ring-1 ring-gray-200/10 dark:ring-gray-700/50 transition-all duration-300">
        {NavigationItems.map((item) => {
          if (item.type === 'internal') {
            return (
              <NavItem key={item.href} href={item.href}>
                {item.name}
              </NavItem>
            );
          }

          return (
            <Link
              key={item.href}
              className="transition hover:text-primary px-3 py-2"
              href={item.href}
              target="_blank"
            >
              {item.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export const MobileNavigation = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Popover {...props}>
      {({ open }) => (
        <>
          <Popover.Button
            className={clsx(
              'group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-lg shadow-lg ring-1 transition-all duration-300',
              open
                ? 'bg-white/80 text-primary ring-primary/30 dark:bg-black/60 dark:ring-primary/40'
                : 'bg-white/30 text-zinc-800 ring-gray-200/10 hover:bg-white/50 dark:bg-black/30 dark:text-zinc-200 dark:ring-gray-700/50 dark:hover:bg-black/50',
            )}
          >
            Menu
            <ChevronDownIcon
              className={clsx(
                'h-auto w-4 transition-transform duration-300',
                open
                  ? 'rotate-180 text-primary'
                  : 'text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-400',
              )}
            />
          </Popover.Button>

          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-md dark:bg-black/70" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95 -translate-y-2"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 -translate-y-2"
            >
              <Popover.Panel
                focus
                className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl border border-gray-200/70 bg-white/90 p-6 shadow-2xl shadow-gray-900/10 backdrop-blur-2xl dark:border-zinc-800 dark:bg-zinc-900/90 dark:shadow-black/40"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                    Navigation
                  </h2>
                  <Popover.Button
                    aria-label="Close menu"
                    className="rounded-full p-1.5 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-zinc-200"
                  >
                    <CloseIcon className="h-5 w-5" />
                  </Popover.Button>
                </div>

                <nav className="mt-4">
                  <ul className="space-y-1 text-base text-zinc-800 dark:text-zinc-300">
                    {NavigationItems.map((item) => (
                      <MobileNavItem
                        key={item.href}
                        href={item.href}
                        icon={MOBILE_NAV_ICONS[item.name]}
                      >
                        {item.name}
                      </MobileNavItem>
                    ))}
                  </ul>
                </nav>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  );
};
