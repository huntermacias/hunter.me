import {
  IconChartDots,
  IconLayersLinked,
  IconRocket,
  IconUsers,
} from '@tabler/icons-react';

type Principle = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const PRINCIPLES: Principle[] = [
  {
    icon: IconRocket,
    title: 'Own the outcome',
    description:
      'I do not stop at identifying a problem. I work across code, tooling, performance, and delivery until the team has a practical path forward.',
  },
  {
    icon: IconLayersLinked,
    title: 'Build for leverage',
    description:
      'I look for opportunities to replace repeated manual work with reusable systems, automation, and self-service tools that help the entire team move faster.',
  },
  {
    icon: IconChartDots,
    title: 'Use evidence to decide',
    description:
      'I turn vague concerns into measurable signals—latency, reliability, risk, adoption, and trends—so decisions are grounded in evidence rather than assumptions.',
  },
  {
    icon: IconUsers,
    title: 'Make the team stronger',
    description:
      'I share context, document decisions, mentor others, and explain the reasoning behind the work so improvements continue beyond a single project.',
  },
];

export const QualityPrinciples = () => (
  <section aria-labelledby="working-principles-heading">
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
      How I work
    </p>

    <div className="mt-2 max-w-3xl">
      <h2
        id="working-principles-heading"
        className="text-2xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-3xl"
      >
        I build systems that help teams move with more confidence
      </h2>

      <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base">
        My work sits at the intersection of engineering, quality, performance,
        and developer experience.
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {PRINCIPLES.map((principle) => {
        const Icon = principle.icon;

        return (
          <article
            key={principle.title}
            className="group rounded-2xl border border-gray-200/80 bg-white/70 p-6 shadow-sm shadow-gray-900/5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-gray-900/10 dark:border-gray-800 dark:bg-gray-950/70 dark:shadow-black/20"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>

              <div>
                <h3 className="text-base font-bold tracking-tight text-gray-950 dark:text-white">
                  {principle.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {principle.description}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  </section>
);