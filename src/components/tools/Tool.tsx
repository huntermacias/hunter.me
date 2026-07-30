import clsx from 'clsx';
import { IconExternalLink } from '@tabler/icons-react';
import { Card } from '../Card';
import { ExternalLink } from '../ExternalLink';

type ToolIntent = 'primary' | 'supporting' | 'experimental';

export const Tool = ({
  title,
  href,
  intent = 'supporting',
  children,
}: {
  title: string;
  href?: string;
  intent?: ToolIntent;
  children: React.ReactNode;
}) => {
  return (
    <Card
      as="li"
      className={clsx(
        'transition-colors',
        intent === 'primary' &&
          'ring-1 ring-primary/30 dark:ring-primary/40',
        intent === 'experimental' && 'opacity-80'
      )}
    >
      {href ? (
        <ExternalLink
          href={href}
          className="group/tool inline-flex items-center gap-1.5 text-lg font-bold tracking-tight text-gray-900 transition-colors hover:text-primary dark:text-white"
        >
          {title}
          <IconExternalLink
            className="h-3.5 w-3.5 shrink-0 text-gray-400 transition-colors group-hover/tool:text-primary"
            aria-hidden
          />
        </ExternalLink>
      ) : (
        <Card.Title as="h3">{title}</Card.Title>
      )}

      <Card.Description>{children}</Card.Description>

      <IntentLabel intent={intent} />
    </Card>
  );
};

const IntentLabel = ({ intent }: { intent: ToolIntent }) => {
  if (intent === 'primary') {
    return (
      <span className="mt-2 inline-block text-xs font-medium text-primary">
        Core tool
      </span>
    );
  }

  if (intent === 'experimental') {
    return (
      <span className="mt-2 inline-block text-xs text-zinc-500">
        Experimental
      </span>
    );
  }

  return (
    <span className="mt-2 inline-block text-xs text-zinc-400 dark:text-zinc-500">
      Also reach for
    </span>
  );
};
