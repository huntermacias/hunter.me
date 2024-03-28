import { cn } from "src/lib/cn";
import { Meteors } from "./meteors";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows grid-cols-1 md:grid-cols-3 gap-6 mt-8",
        className
      )}
    >

      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `relative overflow-hidden row-span-1 group 
         bg-white dark:bg-[#0d1117] justify-between flex flex-col space-y-4 rounded-lg p-3
         border border-gray-300 dark:border-white/[0.2] shadow-xl shadow-gray-500/20 
         transition-all duration-500 ease-in-out backdrop-filter backdrop-blur-sm
         hover:scale-105 hover:shadow-2xl`,
        className
      )}
    >
      <Meteors number={20} />
      <div className="z-10">{header}</div>
      <div className="flex flex-col space-y-2 z-10">
        <div className="flex items-center justify-between">
          {icon}
          <div className="font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
        </div>
        <div className="text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
