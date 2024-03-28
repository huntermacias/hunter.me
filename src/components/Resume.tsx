import Image from 'next/image';
import { Work } from '../data/lifeApi';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

export const Resume = () => {
  return (
    <div className=" dark:border-white/[0.2] 
    bg-white  justify-between flex flex-col space-y-4 rounded-lg p-6
    border border-gray-300 shadow-xl shadow-gray-500/20 transition-all duration-500
    bg-white/30 dark:bg-[#0d1117]/30 backdrop-filter backdrop-blur-sm dark:border-gray-700">
  <h2 className="flex items-center text-lg font-semibold text-zinc-900 dark:text-zinc-100">
    <BriefcaseIcon className="mr-3 h-6 w-6 flex-none" />
    Work Experience
  </h2>
  <ol className="mt-6 divide-y divide-zinc-200 dark:divide-zinc-700">
    {Work.map((role, roleIndex) => (
      <li key={roleIndex} className="py-4 first:pt-0 last:pb-0">
        <div className="flex gap-4">
          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 backdrop-blur-md">
            <Image
              src={role.logo}
              alt={`${role.company} logo`}
              className="h-7 w-7 rounded-full object-cover"
              unoptimized
              layout="fill"
            />
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-2 items-center">
            <dt className="sr-only">Company</dt>
            <dd className="flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {role.company}
            </dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="ml-auto text-xs text-zinc-600 dark:text-zinc-500"
              aria-label={`${role.start} until ${role.end}`}
            >
              <time dateTime={role.start}>{role.start}</time> <span aria-hidden="true">—</span>{' '}
              <time dateTime={role.end}>{role.end}</time>
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="w-full text-xs text-zinc-600 dark:text-zinc-400">{role.title}</dd>
          </dl>
        </div>
      </li>
    ))}
  </ol>
</div>

  );
};
