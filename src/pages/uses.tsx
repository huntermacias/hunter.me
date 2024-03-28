import { NextSeo } from 'next-seo';

import { PageLayout } from '../components/PageLayout';
import { Tool } from '../components/tools/Tool';
import { ToolsSection } from '../components/tools/ToolsSection';
import { Tools } from '../data/lifeApi';

const seoTitle = 'Uses';
const seoDescription = 'Software I use, gadgets I love, and other things I recommend.';

export default function Uses() {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/uses`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <PageLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="Here's a big list of all of my favorite stuff."
        className='mt-16 sm:mt-32 max-w-xl lg:max-w-6xl mx-auto rounded-lg p-8
        border border-gray-300 shadow-xl shadow-gray-500/20 transition-all duration-500
        bg-white/30 dark:bg-[#0d1117]/30 backdrop-filter backdrop-blur-lg dark:border-gray-700'
        
      >
        <div className="space-y-20">
          {Object.entries(Tools).map(([title, tools]) => (
            <ToolsSection key={title} title={title}>
              {tools.map((tool) => (
                <Tool key={tool.title} title={tool.title} href={tool.href}>
                  {tool.description}
                </Tool>
              ))}
            </ToolsSection>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
