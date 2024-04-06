import Image from 'next/image';
import { Work } from '../data/lifeApi';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

export const Resume = () => {
  return (
    <div className="dark:border-white/[0.2] bg-white justify-between flex flex-col space-y-4 rounded-lg p-6 border border-gray-300 shadow-xl shadow-gray-500/20 transition-all duration-500 bg-white/30 dark:bg-[#0d1117]/30 backdrop-filter backdrop-blur-sm dark:border-gray-700">
      <h2 className="flex items-center text-xl font-bold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="mr-3 h-6 w-6 flex-none" />
        Work Experience
      </h2>
      <ol className="mt-6 divide-y divide-zinc-200 dark:divide-zinc-700">
        {Work.map((item, index) => (
          <li key={index} className="pt-4 pb-4 first:pt-0 last:pb-0">
            <div className="flex gap-4">
              <div className="relative flex h-10 w-10 ring-2 ring-black dark:ring-white flex-none items-center justify-center rounded-full shadow-lg">
                <Image
                  src={item.logo}
                  alt={`${item.company} logo`}
                  className="h-9 w-9 rounded-full object-cover"
                  unoptimized
                  layout="fill"
                />
              </div>
              <div className="flex flex-auto flex-col gap-y-1">
                <dd className="text-md tracking-wider font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.company}
                </dd>
                {(item.roles || []).length > 0 ? (
                  item.roles.map((role, roleIndex) => (
                    <div key={`role-${roleIndex}`} className="pl-4 border-l-2 border-gray-600 dark:border-gray-400 border-opacity-30">
                      <h3 className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{role.title}</h3>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400">
                        <time dateTime={role.start}>{role.start}</time> – <time dateTime={role.end}>{role.end}</time>
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="pl-4 border-l-2 border-gray-600 dark:border-gray-400 border-opacity-30">
                    <h3 className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{item.title}</h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      <time dateTime={item.start}>{item.start}</time> – <time dateTime={item.end}>{item.end}</time>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
