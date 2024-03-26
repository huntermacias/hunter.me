import { motion, useMotionValue } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { MouseEvent } from 'react';

import { PageLayout } from '../components/PageLayout';
import { ProjectCard } from '../components/ProjectCard';
import { MyCurrentProjects, MyPastProjects } from '../data/lifeApi';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '../lib/animation';
import { BentoGrid } from 'src/components/bento-grid';

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
        className="mt-16 sm:mt-32 max-w-xl lg:max-w-6xl mx-auto rounded-lg p-8
        border border-gray-200 shadow-lg transition-all duration-300
        bg-white/60 dark:bg-inherit backdrop-blur-lg"
      >

        {/* Current Projects Section */}
        <div className="mt-12">

          <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">Now</h2>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-400">Projects I currently work on.</p>


          <ProjectCard projects={MyCurrentProjects} />

        </div>


        {/* Past Projects Section */}
        <div className="mt-24">

          <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">Past</h2>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-400">Projects I worked on. Due to the nature of internet businesses, not all of them are still online.</p>

          <ProjectCard projects={MyCurrentProjects} />
        </div>
      </PageLayout>
    </>
  );
}