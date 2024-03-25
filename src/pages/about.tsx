import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import AvatarImage from '../../public/assets/blog/authors/me_ai.png';
import { Container } from '../components/Container';
import { PageTitle } from '../components/PageTitle';
import { SocialLink } from '../components/SocialLink';
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
import BooksSection from 'src/components/sections/BooksSection';
import PodcastSection from 'src/components/sections/PodcastSection';
import BlogsSection from 'src/components/sections/BlogsSection';
import PeopleWorthFollowing from 'src/components/sections/PeopleWorthFollowing';
import QuoteSection from 'src/components/sections/QuoteSection';
import { PageLayout } from 'src/components/PageLayout';

const seoTitle = `About`;
const seoDescription = `A few words about me.`;

export default function AboutMe() {
  const [randomQuote, setRandomQuote] = useState<{ author: string; content: string }>();

  useEffect(() => {
    setRandomQuote(Quotes[Math.floor(Math.random() * Quotes.length)]);
  }, []);

  return (
    <>
      <NextSeo title={seoTitle} description={seoDescription} canonical={`${process.env.NEXT_PUBLIC_URL}/about`} />
      <PageLayout
        title='Digitally Distinctive, Technically Eclectic.'
        intro='Learn more about me.'
        className='mt-16 sm:mt-32 max-w-xl lg:max-w-5xl mx-auto backdrop-blur-xl bg-white/30  dark:bg-transparent rounded-lg p-8 shadow-lg border border-gray-200 dark:border-slate-800 transition-all duration-300 hover:bg-opacity-40 dark:hover:bg-opacity-40'
      >
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
            <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white">Hi, I'm Hunter Macias.</h1>
            <div className="mt-6 text-base space-y-4">
              {AboutExtended.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex gap-6">
              {SocialMedia.map((socialProfile) => (
                  <SocialLink
                    key={socialProfile.name}
                    aria-label={`Follow on ${socialProfile.name}`}
                    href={socialProfile.link}
                    icon={socialProfile.icon}
                  />                
              ))}
            </div>

            <WorkStation />
            <BooksSection Books={Books} />
            <PodcastSection Podcasts={Podcasts} />
            <BlogsSection Blogs={Blogs} />
            <PeopleWorthFollowing PeopleWorthFollowingOnTwitter={PeopleWorthFollowingOnTwitter} />
            
            {randomQuote && (
              <div className="mt-6 italic">{randomQuote.content}</div>
            )}
          </div>
        </div>
      </PageLayout>
    </>
  );
};

