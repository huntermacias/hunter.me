import Image from 'next/image';
import { Work } from '../data/lifeApi';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

export const Resume = () => {
  return (
    <div className="relative px-6 py-12 sm:px-8 md:px-12">
      {/* Content */}
      <div className="bg-white dark:bg-gray-950 bg-opacity-40 dark:bg-opacity-40 rounded-2xl p-10 shadow-2xl backdrop-blur-lg border border-gray-200 dark:border-gray-800 transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-3xl">
        <h2 className="flex items-center text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          <BriefcaseIcon className="mr-4 h-10 w-10 flex-none text-blue-500 dark:text-blue-400" />
          Work Experience
        </h2>
        <ol className="space-y-2 mt-10">
          {Work.map((item, index) => (
            <li key={index} className="space-y-2 group">
              <div className="flex items-center space-x-6">
                <div className=" rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600 group-hover:ring-4 group-hover:ring-blue-500 dark:group-hover:ring-blue-400 transition-all duration-300">
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    layout=""
                    width={48}
                    height={48}
                    className="object-cover transition-all duration-500 transform group-hover:scale-110"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-light text-gray-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-all duration-300">
                    {item.company}
                  </h3>
                </div>
              </div>

              <div className="ml-20 space-y-2 border-l-4 border-gray-300 dark:border-gray-700 pl-6">
                {item.roles.map((role, roleIndex) => (
                  <div key={`role-${roleIndex}`} className="m-3 transform transition-transform duration-300 hover:translate-x-2">
                    <h4 className="text-md font-semibold text-gray-800 dark:text-gray-300">
                      {role.title}
                    </h4>
                    <p className="text-md text-gray-500 dark:text-gray-400">
                      <time dateTime={role.start}>{role.start}</time> –{' '}
                      <time dateTime={role.end || 'Present'}>{role.end || 'Present'}</time>
                    </p>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
