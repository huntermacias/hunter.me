import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { Work } from '../data/lifeApi';
import { BriefcaseIcon } from './icons/BriefcaseIcon';
import { formatDuration, monthsBetween } from '../lib/tenure';

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

const isCurrent = (item: CompanyType) => item.roles.some((role) => !role.end || role.end === 'Present');

/** The Work data uses a literal `'Present'` string for ongoing roles; tenure.ts wants `undefined`. */
const normalizeEnd = (end?: string) => (end && end !== 'Present' ? end : undefined);

const CurrentBadge = () => (
  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] font-medium text-emerald-600 dark:text-emerald-400">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
    Current
  </span>
);

const Role = ({ role }: { role: RoleType }) => {
  const duration = formatDuration(monthsBetween(role.start, normalizeEnd(role.end)));

  return (
    <li>
      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{role.title}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        <time>{role.start}</time> – <time>{role.end ?? 'Present'}</time>
        <span className="text-gray-400 dark:text-gray-500"> · {duration}</span>
      </p>
    </li>
  );
};

const Company = ({ item }: { item: CompanyType }) => {
  const current = isCurrent(item);

  return (
    <li className="relative flex gap-4">
      <div
        className={clsx(
          'relative z-10 h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 bg-white shadow-sm dark:bg-gray-900 dark:border-gray-950',
          current && 'ring-2 ring-primary/40',
        )}
      >
        <Image
          src={item.logo}
          alt={`${item.company} logo`}
          fill
          sizes="36px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1 pb-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-bold text-gray-900 dark:text-gray-100">{item.company}</h3>
          {current && <CurrentBadge />}
        </div>

        <ol className="mt-2 space-y-2.5">
          {item.roles.map((role) => (
            <Role key={`${role.title}-${role.start}`} role={role} />
          ))}
        </ol>
      </div>
    </li>
  );
};

export const Resume = () => (
  <section aria-labelledby="work-experience">
    <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-lg shadow-gray-900/5 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/70 dark:shadow-black/20 sm:p-8">
      <header className="mb-8 flex items-center gap-2">
        <BriefcaseIcon className="h-4 w-4 text-primary" />
        <h2
          id="work-experience"
          className="text-xs font-semibold uppercase tracking-wide text-primary"
        >
          Work Experience
        </h2>
      </header>

      <div className="relative">
        <div
          aria-hidden
          className="absolute bottom-1 left-[17px] top-1 w-px bg-gray-200 dark:bg-gray-800"
        />

        <ol className="space-y-8">
          {Work.map((item) => (
            <Company key={item.company} item={item} />
          ))}
        </ol>
      </div>

      <div className="mt-8 border-t border-gray-200/70 pt-4 dark:border-gray-800">
        <Link
          href="/creating"
          className="group inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          See the full professional story
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </div>
  </section>
);
