import { motion, useMotionValue } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { MouseEvent } from 'react';

import { PageLayout } from '../components/PageLayout';
import { ProjectCard } from '../components/ProjectCard';
import { MyCurrentProjects, MyPastProjects } from '../data/lifeApi';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '../lib/animation';

const seoTitle = 'Creating';
const seoDescription = "Things I've made trying to put my dent in the universe.";

export default function Creating() {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/creating`}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_URL}/creating`,
          title: seoTitle,
          description: seoDescription,
          images: [{ url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}` }],
        }}
      />
      <PageLayout
        title="Things I've made trying to put my dent in the universe."
        intro="A list of projects I've worked on, I'm working on, and I will work on."
        className='mt-16 sm:mt-32 max-w-xl lg:max-w-5xl mx-auto backdrop-blur-xl bg-white/30  dark:bg-transparent rounded-lg p-8 shadow-lg border border-gray-200 dark:border-slate-800 transition-all duration-300 hover:bg-opacity-40 dark:hover:bg-opacity-40'

      >
        {/* Current Projects Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">Now</h2>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-400">Projects I currently work on.</p>
          <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 space-y-8 ">
            {MyCurrentProjects.map((project) => (
              <motion.li
                key={project.title}
                initial={ANIMATION_FROM_PROPS}
                whileInView={ANIMATION_TO_PROPS}
                viewport={{ once: true }}
                className="backdrop-filter backdrop-blur-xl p-4  rounded-lg  hover:shadow-2xl transition-all duration-500"
              >
                <ProjectCard project={project} />
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Past Projects Section */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">Past</h2>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-400">Projects I worked on. Due to the nature of internet businesses, not all of them are still online.</p>
          <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {MyPastProjects.map((project) => (
              <motion.li
                key={project.title}
                initial={ANIMATION_FROM_PROPS}
                whileInView={ANIMATION_TO_PROPS}
                viewport={{ once: true }}
                className="backdrop-filter backdrop-blur-xl bg-white/30 dark:bg-[#121212]/50 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <ProjectCard project={project} />
              </motion.li>
            ))}
          </ul>
        </div>
      </PageLayout>
    </>
  );
}