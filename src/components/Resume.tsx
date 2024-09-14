import Image from 'next/image';
import { Work } from '../data/lifeApi';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

const Role = ({ role }:any) => (
  <article className="border-l border-gray-300 dark:border-gray-700 pl-6 ml-6">
    <header>
      <h4 className="text-sm font-semibold">
        {role.title}
      </h4>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        <time dateTime={role.start}>{role.start}</time> –{' '}
        <time dateTime={role.end || 'Present'}>{role.end || 'Present'}</time>
      </p>
    </header>
  </article>
);

const Company = ({ item }:any) => (
  <li className="group">
    <div className="flex items-center space-x-4">
      <div className="relative w-8 h-8">
        <Image
          src={item.logo}
          alt={`${item.company} logo`}
          layout="fill"
          className="rounded-full border border-gray-300 dark:border-gray-600 object-cover"
        />
      </div>
      <h3 className="text-lg font-extrabold transition-colors duration-200">
        {item.company}
      </h3>
    </div>
    <div className="mt-1 space-y-4">
      {item.roles.map((role:any, index:any) => (
        <Role key={index} role={role} />
      ))}
    </div>
  </li>
);

export const Resume = () => (
  <section className="px-6 py-12 sm:px-8 md:px-12">
    <div className="bg-white dark:bg-gray-950 bg-opacity-60 dark:bg-opacity-60 rounded-2xl p-5 shadow-xl backdrop-blur-sm border border-gray-200 dark:border-gray-800">
      <header className="flex items-center mb-8">
        <BriefcaseIcon className="h-10 w-10 mr-4" />
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
          Work Experience
        </h2>
      </header>
      <ol className="space-y-3">
        {Work.map((item, index) => (
          <Company key={index} item={item} />
        ))}
      </ol>
    </div>
  </section>
);
