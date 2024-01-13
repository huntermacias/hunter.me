import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import AvatarImage from '../../public/assets/blog/authors/me.jpg';
import { Container } from '../components/Container';
import { ExternalLink } from '../components/ExternalLink';
import { PageTitle } from '../components/PageTitle';
import { Quote } from '../components/Quote';
import { Section } from '../components/Section';
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
// import { testUtil } from '../lib/testUtil';

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
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={AvatarImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <PageTitle>Hi, I&apos;m Hunter Macias.</PageTitle>
            <div className="mt-6 text-base">{AboutExtended}</div>
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

            <Section>
              <Section.Title as="h2">Work</Section.Title>
              <Section.Content>
              Hey there! I&apos;m Hunter Macias Rocha, a software developer based in San Francisco, 
              weaving magic in tech with my fingertips. I might be a recent CS grad, but don&apos;t
              let that fool you – I&apos;ve got a rich tapestry of experiences under my belt. 
              I&apos;m currently shaping young minds as a Coding Coach at The Coder School, where I 
              blend my love for Python, JavaScript, and React with a passion for teaching. 
              Before this, I was the Lead Instructor at Mission Bit, where I spearheaded an 
              innovative Python curriculum, guiding over 100 students through the intricacies of web design and Unity.
                <br />
                <br />
                But wait, there&apos;s more to my story. I&apos;ve had a thrilling stint as a 
                Web Application Developer at Leadbird Agency in New York, where I developed a 
                sophisticated React-based web dashboard for top executives. It was all about 
                transforming complex data into intuitive insights – think Python-powered web scraping, 
                Google Sheets integration, and an interactive dashboard that made data look sexy.
                <br />
                <br />
                My project portfolio? It&apos;s a kaleidoscope of innovation. From a music recommendation 
                engine that marries machine learning with Python, to Notionary – a Notion-inspired web app built 
                with Next.js and Supabase. And let&apos;s not forget my ChatGPT Messaging Platform, 
                a testament to my prowess in AI, real-time messaging, and sleek frontend development. 
                Evently, my event management app, combines robust backend development with modern UI/UX design, 
                providing a comprehensive solution for event organizers and attendees alike.
                <br />
                <br />
                When I&apos;m not teaching or building, I&apos;m diving deep into technical proficiencies like HTML, 
                CSS, React.js, Next.js, and database management with MySQL, MongoDB, and Firebase. Frameworks? 
                Libraries? APIs? Cloud Services? You name it, I&apos;ve dabbled in it – always with an eye towards 
                cutting-edge solutions and cloud-based efficiencies.
                <br />
                <br />
                So, if you&apos;re on the hunt for a developer who combines technical know-how with a flair for 
                innovative solutions and a dash of mentorship, let&apos;s connect. You can DM me on Twitter or just email me. 
                Let&apos;s create something awesome together!
              </Section.Content>
            </Section>
            <Section>
              <Section.Title as="h2">Books worth re-reading</Section.Title>
              <Section.Content>
                <ul className="mt-1 list-disc list-inside">
                  {Books.map((book) => (
                    <li key={book.name}>
                      <ExternalLink href={book.link}>{book.name}</ExternalLink>
                    </li>
                  ))}
                </ul>
              </Section.Content>
            </Section>
            <Section>
              <Section.Title as="h2">Podcasts I listen to</Section.Title>
              <Section.Content>
                <ul className="mt-1 list-disc list-inside">
                  {Podcasts.map((podcast) => (
                    <li key={podcast.name}>
                      <ExternalLink href={podcast.link}>{podcast.name}</ExternalLink>
                    </li>
                  ))}
                </ul>
              </Section.Content>
            </Section>
            <Section>
              <Section.Title as="h2">Blogs I read</Section.Title>
              <Section.Content>
                <ul className="mt-1 list-disc list-inside">
                  {Blogs.map((blog) => (
                    <li key={blog.name}>
                      <ExternalLink href={blog.link}>{blog.name}</ExternalLink>
                    </li>
                  ))}
                </ul>
              </Section.Content>
            </Section>
            {/* <Section>
              <Section.Title as="h2">Videos worth watching</Section.Title>
              <Section.Content>
                <ul className="mt-1 list-disc list-inside">
                  {VideosWorthWatching.map((video) => (
                    <li key={video.name}>
                      <ExternalLink href={video.link}>{video.name}</ExternalLink>
                    </li>
                  ))}
                </ul>
              </Section.Content>
            </Section> */}
            <Section>
              <Section.Title as="h2">People with unique perspective I follow</Section.Title>
              <Section.Content>
                {PeopleWorthFollowingOnTwitter.map<React.ReactNode>((personOnTwitter) => (
                  <ExternalLink key={personOnTwitter.name} href={personOnTwitter.link}>
                    {personOnTwitter.name}
                  </ExternalLink>
                )).reduce((prev, curr) => [prev, ', ', curr])}
                .
              </Section.Content>
            </Section>
            {randomQuote && (
              <Section>
                <Section.Title as="h2">Quote worth thinking about</Section.Title>
                <Section.Content>
                  <div className="mt-8">
                    <Quote quote={randomQuote.content} author={randomQuote.author} />
                  </div>
                </Section.Content>
              </Section>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
