import Image, { type StaticImageData } from 'next/image';
import { Work } from '../data/lifeApi';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

type RoleType = {
  title: string;
  start: string;
  end?: string;
};

type CompanyType = {
  company: string;
  logo: StaticImageData;
  roles: readonly RoleType[];
};

const Role = ({ role }: { role: RoleType }) => (
  <li className="relative pl-6 ml-6 border-l border-gray-300 dark:border-gray-700">
    <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-gray-400 dark:bg-gray-600" />

    <article>
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        {role.title}
      </h4>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        <time>{role.start}</time> —{' '}
        <time>{role.end ?? 'Present'}</time>
      </p>
    </article>
  </li>
);

const Company = ({ item }: { item: CompanyType }) => (
  <li className="group space-y-3">
    <div className="flex items-center gap-4">
      <div className="relative h-9 w-9 shrink-0 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900">
        <Image
          src={item.logo}
          alt={`${item.company} logo`}
          fill
          sizes="36px"
          className="rounded-full object-cover"
        />
      </div>

      <h3 className="text-lg font-extrabold text-gray-900 dark:text-gray-100 group-hover:text-secondary transition-colors">
        {item.company}
      </h3>
    </div>

    <ol className="space-y-4">
      {item.roles.map((role) => (
        <Role
          key={`${role.title}-${role.start}`}
          role={role}
        />
      ))}
    </ol>
  </li>
);

export const Resume = () => (
  <section
    aria-labelledby="work-experience"
    className="px-6 py-12 sm:px-8 md:px-12"
  >
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-950/60 p-6 shadow-xl backdrop-blur-sm">
      <header className="mb-8 flex items-center gap-4">
        <BriefcaseIcon className="h-9 w-9 text-primary" />
        <h2
          id="work-experience"
          className="text-2xl font-extrabold text-gray-900 dark:text-white"
        >
          Work Experience
        </h2>
      </header>

      <ol className="space-y-8">
        {Work.map((item) => (
          <Company
            key={item.company}
            item={item}
          />
        ))}
      </ol>
    </div>
  </section>
);
