import { NextSeo } from 'next-seo';

import { PageLayout } from '../components/PageLayout';
import { ProjectCard } from '../components/ProjectCard';
import { MyCurrentProjects, MyPastProjects } from '../data/lifeApi';

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
        className='m-16 sm:mt-32 max-w-2xl  lg:max-w-6xl mx-auto rounded-lg p-8
        border border-gray-300 shadow-xl shadow-gray-500/20 transition-all duration-500
        bg-white/30 dark:bg-[#0d1117]/30 backdrop-filter backdrop-blur-lg dark:border-gray-700'
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

          <ProjectCard projects={MyPastProjects} />
          
        </div>
      </PageLayout>
    </>
  );
}