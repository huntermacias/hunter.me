export const ToolsSection = ({
  id,
  title,
  description,
  icon: Icon,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  icon?: React.ElementType;
  children: React.ReactNode;
}) => {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-28 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            {Icon && (
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </span>
            )}
            <h2
              id={headingId}
              className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
            >
              {title}
            </h2>
          </div>

          {description && (
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
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
