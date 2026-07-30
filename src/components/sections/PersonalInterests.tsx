import React from 'react';
import { ExternalLink } from '../ExternalLink';

type LinkItem = { name: string; link: string };

type Props = {
  books: readonly LinkItem[];
  podcasts: readonly LinkItem[];
  blogs: readonly LinkItem[];
  people: readonly LinkItem[];
};

const List = ({ title, items }: { title: string; items: readonly LinkItem[] }) => (
  <div>
    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{title}</p>
    <ul className="mt-3 space-y-1.5">
      {items.map((item) => (
        <li key={item.name}>
          <ExternalLink
            href={item.link}
            className="text-sm text-gray-600 transition-colors hover:text-primary dark:text-gray-300"
          >
            {item.name}
          </ExternalLink>
        </li>
      ))}
    </ul>
  </div>
);

export const PersonalInterests = ({ books, podcasts, blogs, people }: Props) => {
  return (
    <div className="mt-8 rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-lg shadow-gray-900/5 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/70 dark:shadow-black/20 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">Outside of work</p>
      <h2 className="mt-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        What I read and follow
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <List title="Books worth re-reading" items={books} />
        <List title="Podcasts" items={podcasts} />
        <List title="Blogs" items={blogs} />
        <List title="People with a unique perspective" items={people} />
      </div>
    </div>
  );
};
