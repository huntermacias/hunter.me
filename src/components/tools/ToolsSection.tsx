import { useId } from 'react';

export const ToolsSection = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => {
  const id = useId();

  return (
    <section
      aria-labelledby={id}
      className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-6 md:grid-cols-4">
        <div>
          <h2
            id={id}
            className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
          >
            {title}
          </h2>

          {description && (
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {description}
            </p>
          )}
        </div>

        <div className="md:col-span-3">
          <ul role="list" className="space-y-12">
            {children}
          </ul>
        </div>
      </div>
    </section>
  );
};
