import { NextSeo } from 'next-seo';
import Link from 'next/link';

import { PageLayout } from '../components/PageLayout';
import { ProjectCard } from '../components/ProjectCard';
import { ProfessionalTimeline } from '../components/ProfessionalTimeline';
import { CoreSkills, MyCurrentProjects, MyPastProjects, ProfessionalExperience } from '../data/lifeApi';

const seoTitle = 'Creating';
const seoDescription = "Professional work at Costco Travel, plus the side projects I've built along the way.";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => (
  <div className="max-w-2xl">
    <p className="text-xs font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
    <h2 className="mt-1 text-2xl font-bold tracking-tight text-black dark:text-white">{title}</h2>
    <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const SectionDivider = () => (
  <div className="mt-24 border-t border-gray-200/70 pt-24 dark:border-gray-800" />
);

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
        title="What I build — at work, and on my own time."
        intro="Quality and performance engineering at Costco Travel, plus the side projects I build to stay sharp on the rest of the stack."
        className='m-16 sm:mt-32 max-w-2xl  lg:max-w-6xl mx-auto rounded-lg p-8
        border border-gray-300 shadow-xl shadow-gray-500/20 transition-all duration-500
        bg-white/30 dark:bg-[#0d1117]/30 backdrop-filter backdrop-blur-lg dark:border-gray-700'
      >

        {/* Professional Work Section */}
        <div className="mt-12">
          <SectionHeader
            eyebrow="Professional"
            title="My time at Costco Travel"
            description="Both roles I've held so far — what I own now, and what I shipped to get here."
          />

          <p className="mt-4 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            Costco Travel is Costco Wholesale&apos;s travel booking platform — cruises, hotels,
            vacation packages, and rental cars for Costco members.
          </p>

          <div className="max-w-4xl">
            <ProfessionalTimeline experience={ProfessionalExperience} />
          </div>

          <div className="mt-8 max-w-4xl rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-lg shadow-gray-900/5 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/70 dark:shadow-black/20 sm:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Core skills acquired</p>
              <Link
                href="/uses"
                className="whitespace-nowrap text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Full toolkit →
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {CoreSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-white/5 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-dashed border-gray-300 dark:border-gray-700" />

        {/* Current Projects Section */}
        <div className="mt-16">
          <SectionHeader
            eyebrow="Side projects — now"
            title="What I'm building on my own time"
            description="Recent projects, ranked roughly by how current they are. The first one's the most involved."
          />

          <ProjectCard projects={MyCurrentProjects} />
        </div>

        <SectionDivider />

        {/* Past Projects Section */}
        <div>
          <SectionHeader
            eyebrow="Side projects — past"
            title="Earlier work"
            description="Older side projects, kept here for context. Not all of them are still online."
          />

          <ProjectCard projects={MyPastProjects} />
        </div>
      </PageLayout>
    </>
  );
}
