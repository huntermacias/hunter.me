import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

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
  },
  {
    name: 'Resume',
    href: 'https://hunters-resume.vercel.app/',
    type: 'external',
  }
] as const;

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
    <li>
     <Link
        href={href}
        className={clsx(
          'relative block px-4 py-2 rounded-lg transition-all duration-300',
          'hover:bg-white/30 dark:hover:bg-black/30 backdrop-blur',
          isActive ? 'text-primary font-semibold' : 'hover:text-primary',
        )}
      >
        {children}
      </Link>
    </li>
  );
};

export const MobileNavItem = ({ href, children }: React.PropsWithChildren<{ href: string }>) => {
  return (
    <li>
     <Popover.Button as={Fragment}>
        <Link href={href} className="block py-2 text-base hover:text-primary transition-colors duration-300">
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
      <Popover.Button className="group flex items-center rounded-full bg-white/30 dark:bg-black/30 px-4 py-2 text-sm font-medium text-zinc-800 dark:text-zinc-200 backdrop-blur-lg shadow-lg ring-1 ring-gray-200/10 dark:ring-gray-700/50 transition-all duration-300">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-5 text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-400 transition-colors duration-300" />
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
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium">Navigation</h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                {NavigationItems.map((item) => (
                  <MobileNavItem key={item.href} href={item.href}>
                    {item.name}
                  </MobileNavItem>
                ))}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
};
