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

const seoTitle = `About`;
const seoDescription = `A few words about me.`;

export default function AboutMe() {
  const [randomQuote, setRandomQuote] = useState<{ author: string; content: string }>();

  useEffect(() => {
    setRandomQuote(Quotes[Math.floor(Math.random() * Quotes.length)]);
  }, []);

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/about`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <Container className="mt-10 sm:mt-20 lg:mt-32">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-8">
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
          <div className="lg:order-first lg:row-span-2">
            <PageTitle>Hi, I&apos;m Hunter Macias.</PageTitle>
            <div className="mt-6 text-base">
              {AboutExtended.split('\n').map((paragraph, index) => (
                <div key={index}>
                  <p>{paragraph}</p>
                  <br />

                </div>
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
            <PodcastSection Podcasts={Podcasts}/>
            <BlogsSection Blogs={Blogs} />
            <PeopleWorthFollowing 
              PeopleWorthFollowingOnTwitter={PeopleWorthFollowingOnTwitter} 
            />
            
            {randomQuote && (
              <QuoteSection randomQuote={randomQuote} />
            )}

          </div>
        </div>
      </Container>
    </>
  );
}
