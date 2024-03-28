import { compareDesc } from 'date-fns';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import { Container } from '../components/Container';
import { PageTitle } from '../components/PageTitle';
import { Photos } from '../components/Photos';
import { Resume } from '../components/Resume';
import { SocialLink } from '../components/SocialLink';
import { NotePreview } from '../components/notes/NotePreview';
import { About, Name, SocialMedia } from '../data/lifeApi';
import { Note, notesApi } from '../lib/notesApi';

const seoTitle = 'Hunter Macias';
const seoDescription =
  'A passionate software developer with an eye for details based in Seattle, Washington.';

type Props = {
  latestNotes: Note[];
};

export default function Home({ latestNotes }: Props) {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      
      {/* Main content container with more padding for better spacing */}
      <Container className="mt-9 py-6">
        <div className="max-w-7xl">
          {/* Page Title with increased font size for emphasis */}
          <PageTitle className="text-4xl font-bold">{Name}</PageTitle>
          {/* About section with improved readability */}
          <p className="m-8 sm:m-16 max-w-2xl lg:max-w-7xl rounded-lg p-8
    border border-gray-300 shadow-xl shadow-gray-500/20 transition-all duration-500
    bg-white/30 dark:bg-[#0d1117]/30 backdrop-filter backdrop-blur-sm dark:border-gray-700">{About}</p>
          {/* Social Media Links with increased interactivity */}
          <nav className="mt-6 flex gap-6">
            {SocialMedia.map((socialProfile) => (
              <SocialLink
                key={socialProfile.name}
                aria-label={`Follow on ${socialProfile.name}`}
                href={socialProfile.link}
                className="transition-colors duration-300 hover:text-primary-500 dark:hover:text-primary-400"
                icon={socialProfile.icon}
              />
            ))}
          </nav>
        </div>
      </Container>
      <Photos />

      {/* Projects and Resume Section with improved layout */}
      <Container className="mt-12">
        <div className="grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Latest Notes with more visual hierarchy */}
          <div className="flex flex-col lg:col-span-3">
            {latestNotes.map((blogPost) => (
              <NotePreview key={blogPost.slug} note={blogPost} dense />
            ))}
          </div>
          {/* Resume Section with distinct background for focus */}
          <div className="lg:col-span-2">
            <Resume />
          </div>
        </div>
      </Container>
    </>

  );
}

const NEWEST_POSTS_TO_DISPLAY = 5;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const latestNotes = await notesApi.getNotes('desc', NEWEST_POSTS_TO_DISPLAY);

  return {
    props: { latestNotes },
    revalidate: 10,
  };
};
