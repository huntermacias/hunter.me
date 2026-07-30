import Image from 'next/image';
import Link from 'next/link';
import CostcoTravelLogo from '../images/logos/costcotravel.webp';
import { ProfessionalRole } from '../data/lifeApi';
import { formatPeriod } from '../lib/tenure';

type Props = {
  role: ProfessionalRole;
  /** Compact renders header + stats/highlights only, with a link out to the full page. */
  compact?: boolean;
};

export const ProfessionalWork = ({ role, compact = false }: Props) => {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl
        border border-gray-200 dark:border-gray-800
        bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl
        shadow-lg shadow-gray-900/5 dark:shadow-black/20
        transition-shadow duration-300 hover:shadow-xl
      "
    >
      {/* subtle top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-sky-400 to-primary/40" />

      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-200 bg-white dark:border-gray-700">
              <Image src={CostcoTravelLogo} alt="Costco Travel logo" fill sizes="40px" className="object-cover" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{role.role}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{formatPeriod(role.start, role.end)}</p>
            </div>
          </div>

          {role.current && (
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[0.7rem] font-medium text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Current
            </span>
          )}
        </div>

        <h3 className="mt-5 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
          {role.title}
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {role.summary}
        </p>

        {!compact && role.details && (
          <div className="mt-8 space-y-5 border-t border-gray-200/70 pt-6 dark:border-gray-800">
            {role.details.map((detail) => (
              <div key={detail.label} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{detail.label}</p>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {detail.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {role.stats && (
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-gray-200/70 pt-6 dark:border-gray-800 sm:grid-cols-4">
            {role.stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-[0.7rem] font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        )}

        {role.highlights && (
          <div className="mt-8 border-t border-gray-200/70 pt-6 dark:border-gray-800">
            <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Shipped
            </p>
            <div className="flex flex-wrap gap-2">
              {role.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-white/5 dark:text-gray-300"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        )}

        {compact && (
          <div className="mt-6 border-t border-gray-200/70 pt-4 dark:border-gray-800">
            <Link
              href="/creating"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              See the full breakdown
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
