import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

import { formatDate } from '../../lib/date';
import { Note } from '../../lib/notesApi';
import { Card } from '../Card';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '../../lib/animation';

/* ===================== STATUS BADGE ===================== */

const StatusBadge = ({
  status,
  portfolio,
}: {
  status: 'in-progress' | 'completed';
  portfolio?: 'shopping';
}) => {
  const base =
    'inline-flex items-center rounded-md px-2 py-0 text-xs font-medium text-white';

  if (status === 'in-progress') {
    return (
      <span className={clsx(base, 'bg-teal-600')}>
        In progress
      </span>
    );
  }

  return (
    <span className={clsx(base, 'bg-emerald-600')}>
      Completed
    </span>
  );
};

/* ===================== META ROW ===================== */

const MetaRow = ({
  note,
  dense,
}: {
  note: Note;
  dense?: boolean;
}) => (
  <div
    className={clsx(
      'flex flex-wrap items-center gap-3 text-sm',
      dense && 'md:hidden'
    )}
  >
    <time dateTime={note.publishedAt}>
      {formatDate(note.publishedAt)}
    </time>

    <StatusBadge
      status={note.inProgress ? 'in-progress' : 'completed'}
      portfolio="shopping"
    />

    {/* Quiet portfolio signal */}
    <span className="rounded-md bg-zinc-200 px-2 py-0 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
      Shopping
    </span>
  </div>
);

/* ===================== NOTE PREVIEW ===================== */

interface Props {
  note: Note;
  dense?: boolean;
}

export const NotePreview = ({ note, dense }: Props) => {
  return (
    <motion.div
      initial={ANIMATION_FROM_PROPS}
      whileInView={ANIMATION_TO_PROPS}
      viewport={{ once: true }}
    >
      <article className="py-3">
        <Card
          className="border-2 shadow-xl"
          href={`/notes/${note.slug}`}
        >
          <Card.Title>{note.title}</Card.Title>

          <Card.Eyebrow as="div" decorate>
            <MetaRow note={note} dense={dense} />
          </Card.Eyebrow>

          <Card.Description>
            {note.shortDescription}
          </Card.Description>

          <Card.Cta>Read note</Card.Cta>
        </Card>

        {!dense && (
          <Card.Eyebrow
            as="div"
            className="mt-1 hidden md:block"
          >
            <MetaRow note={note} />
          </Card.Eyebrow>
        )}
      </article>
    </motion.div>
  );
};
