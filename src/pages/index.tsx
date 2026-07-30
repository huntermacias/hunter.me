import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '../components/Container';
import { PageTitle } from '../components/PageTitle';
import { Photos } from '../components/Photos';
import { QualityPrinciples } from '../components/QualityPrinciples';
import { Resume } from '../components/Resume';
import { SocialLink } from '../components/SocialLink';
import { Button } from '../components/Button';
import { ProfessionalWork } from '../components/ProfessionalWork';
import { NotePreview } from '../components/notes/NotePreview';
import { Name, ProfessionalExperience, SocialMedia } from '../data/lifeApi';
import { Note, notesApi } from '../lib/notesApi';
import { Glow } from '../components/Glow';
import AvatarImage from '../images/logos/logome.png';

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
        <Container className="md:py-6">
          <div className="max-w-5xl -mt-[70px] sm:mt-0">
            <header>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-gray-200/80 shadow-lg shadow-gray-900/10 dark:border-gray-700/80 sm:h-24 sm:w-24">
                  <Image
                    src={AvatarImage}
                    alt="Hunter Macias"
                    fill
                    sizes="96px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Quality Engineer II · Costco Travel
                  </span>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
                Software Development Engineer in Test at Costco Travel, focused on
                building reliable, high-quality consumer applications at scale.
              </p>

              <p className="mt-4 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
                I work at the intersection of engineering, quality, and systems
                design—helping teams ship confidently through automation,
                test strategy, and thoughtful validation.
              </p>
            </header>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button as={Link} href="/creating" variant="primary">
                See my work
              </Button>
              <Button as={Link} href="/about" variant="secondary">
                About me
              </Button>

              <nav aria-label="Social links" className="flex gap-5 pl-1">
                {SocialMedia.map((socialProfile) => (
                  <SocialLink
                    key={socialProfile.name}
                    aria-label={`Follow on ${socialProfile.name}`}
                    href={socialProfile.link}
                    className="text-zinc-500 transition-colors duration-300 hover:text-primary dark:text-zinc-400 dark:hover:text-primary"
                    icon={socialProfile.icon}
                  />
                ))}
              </nav>
            </div>
          </div>
        </Container>

        {/* ===================== HOW I WORK ===================== */}
        <Container className="mt-16">
          <div className="max-w-5xl border-t border-dashed border-gray-300 pt-16 dark:border-gray-700">
            <QualityPrinciples />
          </div>
        </Container>

        {/* ===================== CURRENTLY ===================== */}
        <Container className="mt-16">
          <div className="max-w-5xl border-t border-dashed border-gray-300 pt-16 dark:border-gray-700">
            <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-primary">
              Currently
            </p>
            <ProfessionalWork role={ProfessionalExperience[0]} compact />
          </div>
        </Container>

        {/* ===================== PHOTOS ===================== */}
        <div className="mt-16">
          <Container>
            <div className="flex items-baseline justify-between gap-4 border-t border-dashed border-gray-300 pt-16 dark:border-gray-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Tools &amp; technologies I reach for daily
              </p>
              <Link
                href="/uses"
                className="whitespace-nowrap text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Full toolkit →
              </Link>
            </div>
          </Container>
          <Photos />
        </div>

        {/* ===================== NOTES + RESUME ===================== */}
        <Container className="mt-4">
          <div className="grid max-w-7xl grid-cols-1 gap-8 border-t border-dashed border-gray-300 pt-16 dark:border-gray-700 lg:grid-cols-5">
            <section
              aria-labelledby="notes"
              className="flex flex-col lg:col-span-3"
            >
              <div className="mb-2 flex items-baseline justify-between gap-4">
                <h2
                  id="notes"
                  className="text-xl font-bold text-gray-900 dark:text-gray-100"
                >
                  Notes
                </h2>
                <Link
                  href="/notes"
                  className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  View all
                </Link>
              </div>

              <p className="mb-6 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
                Write-ups on how I think through engineering problems, testing
                tradeoffs, and system design decisions.
              </p>

              {latestNotes.length > 0 ? (
                latestNotes.map((blogPost) => (
                  <NotePreview
                    key={blogPost.slug}
                    note={blogPost}
                    dense
                  />
                ))
              ) : (
                <p className="rounded-lg border border-dashed border-gray-300 p-6 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
                  Nothing published yet — check back soon.
                </p>
              )}
            </section>

            <div className="lg:col-span-2">
              <Resume />
            </div>
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
