import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

import { formatDate } from '../../lib/date';
import { Note } from '../../lib/notesApi';
import { Card } from '../Card';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '../../lib/animation';

const MAX_VISIBLE_TAGS = 3;

/* ===================== STATUS BADGE ===================== */

const StatusBadge = ({ inProgress }: { inProgress: boolean }) => (
  <span
    className={clsx(
      'inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.7rem] font-medium',
      inProgress
        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
        : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    )}
  >
    <span className={clsx('h-1.5 w-1.5 rounded-full', inProgress ? 'bg-amber-500' : 'bg-emerald-500')} />
    {inProgress ? 'In progress' : 'Completed'}
  </span>
);

/* ===================== META ROW ===================== */

const MetaRow = ({ note }: { note: Note }) => {
  const visibleTags = note.tags.slice(0, MAX_VISIBLE_TAGS);
  const hiddenTagCount = note.tags.length - visibleTags.length;

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
      <time dateTime={note.publishedAt}>{formatDate(note.publishedAt)}</time>

      <StatusBadge inProgress={note.inProgress} />

      {visibleTags.map((tag) => (
        <span
          key={tag}
          className="rounded-md bg-gray-100 px-2 py-0.5 text-[0.7rem] font-medium text-gray-600 dark:bg-white/5 dark:text-gray-400"
        >
          #{tag}
        </span>
      ))}

      {hiddenTagCount > 0 && (
        <span className="text-[0.7rem] text-gray-400 dark:text-gray-500">+{hiddenTagCount} more</span>
      )}
    </div>
  );
};

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
      <article className={dense ? 'py-2.5' : 'py-3'}>
        <Card
          href={`/notes/${note.slug}`}
          className={dense ? 'p-5' : undefined}
        >
          <Card.Title>{note.title}</Card.Title>

          <Card.Eyebrow
            as="div"
            decorate
            className="!mb-2"
          >
            <MetaRow note={note} />
          </Card.Eyebrow>

          <Card.Description>{note.shortDescription}</Card.Description>

          <Card.Cta>Read note</Card.Cta>
        </Card>
      </article>
    </motion.div>
  );
};
