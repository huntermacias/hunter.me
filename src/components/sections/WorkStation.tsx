import React from 'react';
import Link from 'next/link';

const EMAIL = 'huntermacias20@gmail.com';

const WorkStation = () => {
  return (
    <div className="mt-8 rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-lg shadow-gray-900/5 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/70 dark:shadow-black/20 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">Work</p>
      <h2 className="mt-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
        Quality Engineer II at Costco Travel
      </h2>

      <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
        <p>
          I own quality, performance, and release confidence for the ongoing modernization of
          Costco Travel&apos;s cruise search platform. Most
          of what I build lives upstream of the bug: a shift-left contract testing practice, a
          self-service performance platform on k6 and Jenkins that validated 63–99% latency
          reductions across key search endpoints, and CI-integrated dependency monitoring that
          catches vulnerabilities before they become org-wide advisories. The full breakdown,
          with the reasoning behind each one, is on the{' '}
          <Link href="/creating" className="text-primary hover:underline">
            Creating
          </Link>{' '}
          page.
        </p>

        <p>
          Before that, I spent 16 months as a Software Development Engineer in Test writing
          automated and manual tests in Java, JavaScript, and SQL across the full testing stack
          — API, observability, and UI regression — shipping QA coverage behind several of the
          bigger launches on the roadmap, including a new market launch and a full CMS
          migration.
        </p>

        <p>
          Outside of work I still build, usually with the same stack I use professionally.
          Before quality engineering was the job, teaching was — a few years as a coding
          instructor at TheCoderSchool and Mission Bit, which is probably where the habit of
          explaining my reasoning, not just stating a result, comes from. If you want to talk
          shop about test strategy or performance engineering, I&apos;m reachable on{' '}
          <a
            href="https://www.linkedin.com/in/huntermacias/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            LinkedIn
          </a>{' '}
          or by{' '}
          <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">
            email
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default WorkStation;
