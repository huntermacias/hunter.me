import { NextSeo } from 'next-seo';
import {
  IconCode,
  IconDeviceLaptop,
  IconServer2,
  IconTestPipe,
  IconTools,
  IconUsers,
} from '@tabler/icons-react';

import { PageLayout } from '../components/PageLayout';
import { Tool } from '../components/tools/Tool';
import { ToolsSection } from '../components/tools/ToolsSection';
import { Tools } from '../data/lifeApi';

const seoTitle = 'Uses';
const seoDescription =
  'Tools, software, and systems I rely on to build, test, and maintain high-quality software.';

const USES_LAST_REVIEWED = 'July 2026';

const CATEGORY_ICON: Record<string, React.ElementType> = {
  Workstation: IconDeviceLaptop,
  'Languages & Frameworks': IconCode,
  'Testing & Automation': IconTestPipe,
  'CI, Observability & Infrastructure': IconServer2,
  'Developer Tools & Productivity': IconTools,
  'Design & Collaboration': IconUsers,
};

const CATEGORY_DESCRIPTION: Record<string, string> = {
  Workstation:
    'The machine everything else runs on — chosen for enough headroom to run automation suites, containers, and multiple browsers at once without slowing down.',
  'Languages & Frameworks':
    'Core technologies I rely on for building maintainable, production-grade systems.',
  'Testing & Automation':
    'Tools I use to reduce risk, increase confidence, and surface failures early in the development lifecycle.',
  'CI, Observability & Infrastructure':
    'Where a test result becomes a decision — running automation at scale, seeing what actually happened in production, and coordinating the release around it.',
  'Developer Tools & Productivity':
    'The tools I write, document, and think in day to day.',
  'Design & Collaboration':
    'For staying in sync with the people I build with, not just the code.',
};

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const toolCount = Object.values(Tools).reduce((total, tools) => total + tools.length, 0);
const categoryCount = Object.keys(Tools).length;

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
        <p className="text-xs font-medium text-gray-400 dark:text-gray-500">
          Last reviewed {USES_LAST_REVIEWED} · {toolCount} tools across {categoryCount} categories
        </p>

        <nav aria-label="Jump to a tool category" className="mt-6 flex flex-wrap gap-2">
          {Object.keys(Tools).map((title) => (
            <a
              key={title}
              href={`#${slugify(title)}`}
              className="rounded-full border border-gray-200 bg-white/60 px-3 py-1.5 text-xs font-medium text-gray-600 backdrop-blur transition-colors hover:border-primary/40 hover:text-primary dark:border-gray-700 dark:bg-gray-950/40 dark:text-gray-300"
            >
              {title}
            </a>
          ))}
        </nav>

        <div className="mt-16 space-y-20">
          {Object.entries(Tools).map(([title, tools]) => (
            <ToolsSection
              key={title}
              id={slugify(title)}
              title={title}
              description={CATEGORY_DESCRIPTION[title]}
              icon={CATEGORY_ICON[title]}
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
