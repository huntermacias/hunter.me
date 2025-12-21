import { NextSeo } from 'next-seo';

import { PageLayout } from '../components/PageLayout';
import { Tool } from '../components/tools/Tool';
import { ToolsSection } from '../components/tools/ToolsSection';
import { Tools } from '../data/lifeApi';

const seoTitle = 'Uses';
const seoDescription =
  'Tools, software, and systems I rely on to build, test, and maintain high-quality software.';

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
        title="Tools I Use to Build and Validate Software"
        intro="This is a curated list of tools I rely on to design, test, and maintain reliable systems. I prioritize debuggability, signal quality, and long-term maintainability over trends."
        className="mt-16 sm:mt-32 max-w-xl lg:max-w-6xl mx-auto rounded-lg p-8
        border border-gray-300 shadow-xl shadow-gray-500/20
        bg-white/30 dark:bg-[#0d1117]/30 backdrop-blur-lg dark:border-gray-700"
      >
        <div className="space-y-20">
          {Object.entries(Tools).map(([title, tools]) => (
            <ToolsSection
              key={title}
              title={title}
              description={getSectionDescription(title)}
            >
              {tools.map((tool) => (
                <Tool
                  key={tool.title}
                  title={tool.title}
                  href={tool.href}
                  intent={tool.intent}
                >
                  {tool.description}
                </Tool>
              ))}
            </ToolsSection>
          ))}
        </div>

        <p className="mt-20 text-xs text-zinc-500 dark:text-zinc-400">
          Tooling evolves over time. I focus on fundamentals—observability,
          determinism, and feedback quality—rather than chasing short-lived trends.
        </p>
      </PageLayout>
    </>
  );
}

/**
 * Optional section-level rationale.
 * This is intentionally opinionated and senior-coded.
 */
function getSectionDescription(title: string) {
  switch (title) {
    case 'Testing & Automation':
      return 'Tools I use to reduce risk, increase confidence, and surface failures early in the development lifecycle.';
    case 'Languages & Frameworks':
      return 'Core technologies I rely on for building maintainable, production-grade systems.';
    case 'Infrastructure & Tooling':
      return 'Supporting tools that improve visibility, feedback loops, and developer experience.';
    default:
      return undefined;
  }
}
