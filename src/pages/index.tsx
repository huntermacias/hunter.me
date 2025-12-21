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
import { Glow } from '../components/Glow';

const seoTitle = 'Hunter Macias';
const seoDescription =
  'Software Development Engineer in Test at Costco Travel, focused on building reliable, high-quality consumer applications at scale.';

type Props = {
  latestNotes: Note[];
};

export default function Home({ latestNotes }: Props) {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={process.env.NEXT_PUBLIC_URL}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />

      <Glow>
        {/* ===================== HERO ===================== */}
        <Container className="mt-12 py-6">
          <div className="max-w-5xl">
            <header>
              <PageTitle className="text-4xl font-bold">
                {Name}
              </PageTitle>

              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                Software Development Engineer in Test at Costco Travel, focused on
                building reliable, high-quality consumer applications at scale.
              </p>

              <p className="mt-4 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
                I work at the intersection of engineering, quality, and systems
                design—helping teams ship confidently through automation,
                test strategy, and thoughtful validation.
              </p>
            </header>

            <nav
              aria-label="Social links"
              className="mt-6 flex gap-6"
            >
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


        {/* ===================== PHOTOS ===================== */}
        <Photos />

        {/* ===================== NOTES + RESUME ===================== */}
        <Container className="mt-20">
          <div className="grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-5">
            <section
              aria-labelledby="engineering-notes"
              className="flex flex-col lg:col-span-3"
            >
              <h2
                id="software-projects-releases"
                className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100"
              >
                Software Projects & Releases
              </h2>

              <p className="mb-6 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
                Projects and write-ups documenting how I think through engineering
                problems, tradeoffs, and system design decisions.
              </p>

              {latestNotes.map((blogPost) => (
                <NotePreview
                  key={blogPost.slug}
                  note={blogPost}
                  dense
                />
              ))}
            </section>

            <section
              aria-labelledby="resume"
              className="lg:col-span-2"
            >
              <h2 id="resume" className="sr-only">
                Work Experience
              </h2>
              <Resume />
            </section>
          </div>
        </Container>
      </Glow>
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
