import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IconMail } from '@tabler/icons-react';

import AvatarImage from '../images/logos/logome.png';
import { SocialLink } from '../components/SocialLink';
import { Button } from '../components/Button';
import { Quote } from '../components/Quote';
import {
  AboutExtended,
  Blogs,
  Books,
  PeopleWorthFollowingOnTwitter,
  Podcasts,
  Quotes,
  SocialMedia,
} from '../data/lifeApi';
import WorkStation from 'src/components/sections/WorkStation';
import { PersonalInterests } from 'src/components/sections/PersonalInterests';
import { PageLayout } from 'src/components/PageLayout';

const seoTitle = `About`;
const seoDescription = `Quality Engineer at Costco Travel. Here's the longer version of what that means, plus what I build on my own time.`;

const EMAIL = 'huntermacias20@gmail.com';

// Keep this page's primary contact row focused on professional channels.
const ProfessionalSocials = SocialMedia.filter((profile) => profile.name !== 'Instagram');

export default function AboutMe() {
  const [randomQuote, setRandomQuote] = useState<{ author: string; content: string }>();

  useEffect(() => {
    setRandomQuote(Quotes[Math.floor(Math.random() * Quotes.length)]);
  }, []);

  return (
    <>
      <NextSeo title={seoTitle} description={seoDescription} canonical={`${process.env.NEXT_PUBLIC_URL}/about`} />
      <PageLayout
        title='Quality-obsessed. Still building on the side.'
        intro='The short version: I test things for a living at Costco Travel, and I build things for fun.'
        className='mt-16 sm:mt-32 max-w-xl lg:max-w-6xl mx-auto rounded-lg p-8
        border border-gray-300 shadow-xl shadow-gray-500/20 transition-all duration-500
        bg-white/30 dark:bg-[#0d1117]/30 backdrop-filter backdrop-blur-lg dark:border-gray-700'>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Image
              src={AvatarImage}
              alt="Hunter Macias"
              width={200}
              height={200}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>

          <div className="lg:col-span-3">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">
                Hi, I&apos;m Hunter Macias.
              </h2>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Quality Engineer II · Costco Travel
              </span>
            </div>

            <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
              {AboutExtended.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button as="a" href={`mailto:${EMAIL}`} variant="primary">
                <IconMail className="h-4 w-4" />
                Email me
              </Button>
              <Button as={Link} href="/creating" variant="secondary">
                See my work
              </Button>

              <nav aria-label="Social links" className="flex gap-5 pl-1">
                {ProfessionalSocials.map((socialProfile) => (
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

            <WorkStation />

            <PersonalInterests
              books={Books}
              podcasts={Podcasts}
              blogs={Blogs}
              people={PeopleWorthFollowingOnTwitter}
            />

            {randomQuote && (
              <div className="mt-8">
                <Quote quote={randomQuote.content} author={randomQuote.author} />
              </div>
            )}
          </div>
        </div>
      </PageLayout>
    </>
  );
}
