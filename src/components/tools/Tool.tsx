import clsx from 'clsx';
import { Card } from '../Card';

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
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>

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

  return null;
};
