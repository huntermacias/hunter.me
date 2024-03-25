import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

import { formatDate } from '../../lib/date';
import { Note } from '../../lib/notesApi';
import { Card } from '../Card';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '../../lib/animation';

const StaticBadge = ({ className, children }: React.PropsWithChildren<{ className?: string }>) => (
  <span
    className={clsx(
      className,
      'inline-flex items-center rounded-md bg-primary px-2 py-0 text-xs font-medium text-white',
    )}
  >
    {children}
  </span>
);

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
      <article className="md:grid md:grid-cols-4 md:items-baseline gap-4 p-4 backdrop-filter backdrop-blur-xl bg-opacity-30 dark:bg-opacity-30 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 hover:bg-opacity-40 dark:hover:bg-opacity-40">
        <Card className="md:col-span-3 bg-white/60 dark:bg-black/60">
          <Card.Title href={`/notes/${note.slug}`}>{note.title}</Card.Title>
          <Card.Eyebrow
            as="time"
            dateTime={note.publishedAt}
            className={clsx(!dense && 'md:hidden')}            
            decorate
          >
            {formatDate(note.publishedAt)}
            {/* Display "Work in progress" or "Completed" based on note.inProgress */}
            {note.inProgress ? (
              <StaticBadge className="ml-4">Work in progress</StaticBadge>
            ) : (
              <StaticBadge className="ml-4 bg-pink-500">Completed</StaticBadge> // Change the badge color for completed items
            )}
          </Card.Eyebrow>
          <Card.Description>{note.shortDescription}</Card.Description>
          <Card.Cta>Read note</Card.Cta>
        </Card>
        {!dense && (
          <Card.Eyebrow as="time" dateTime={note.publishedAt} className="mt-1 hidden md:block">
            {formatDate(note.publishedAt)}
            {/* Adjust badge for non-dense view as well */}
            {note.inProgress ? (
              <StaticBadge className="mt-2">Work in progress</StaticBadge>
            ) : (
              <StaticBadge className="mt-2 bg-green-500">Completed</StaticBadge> // Adjusting for the completed state in a non-dense layout
            )}
          </Card.Eyebrow>
        )}
      </article>
    </motion.div>
  );
};
