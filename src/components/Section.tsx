import React, { PropsWithChildren, ReactNode } from 'react';

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps {
  as?: Heading;
  action?: React.ReactNode;
  children?: ReactNode;
}

const Title = ({ as: TitleComponent = 'h1', action, children }: TitleProps) => {
  return (
    <header className="mt-16 flex flex-row items-center justify-between border-b-2 border-gradient-br-indigo-pink dark:border-gradient-br-blue-green pb-4">
      <TitleComponent className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-gradient-br-indigo-pink dark:text-gradient-br-blue-green">
        {children}
      </TitleComponent>
      {action && <div className="flex-shrink-0">{action}</div>}
    </header>
  );
};

const Content = ({ children }: PropsWithChildren) => {
  return <div className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">{children}</div>;
};

const SectionRoot = ({ children }: PropsWithChildren) => {
  return <section className="py-8 px-4 md:px-0">{children}</section>;
};

export const Section = Object.assign(SectionRoot, { Title, Content });
