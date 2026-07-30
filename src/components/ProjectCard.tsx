'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconExternalLink } from '@tabler/icons-react';

import { Project } from '../data/lifeApi';
import { cn } from '../lib/cn';

interface Props {
  projects: Project[];
}

const MAX_VISIBLE_TAGS = 4;

export const ProjectCard = ({ projects }: Props) => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectTile key={project.title} project={project} />
      ))}
    </div>
  );
};

const ProjectTile = ({ project }: { project: Project }) => {
  const visibleTags = project.techStack.slice(0, MAX_VISIBLE_TAGS);
  const hiddenTagCount = project.techStack.length - visibleTags.length;

  const card = (
    <div
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl p-5',
        'border border-gray-200 dark:border-gray-800',
        'bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl',
        'shadow-lg shadow-gray-900/5 dark:shadow-black/20',
        'transition-shadow duration-300 hover:shadow-xl',
        project.featured && 'sm:col-span-2',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-200 bg-white dark:border-gray-700">
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <h3 className="truncate font-bold text-gray-900 dark:text-white">{project.title}</h3>
        </div>

        {project.link && (
          <IconExternalLink
            className="mt-0.5 h-4 w-4 shrink-0 text-gray-400 transition-colors duration-300 group-hover:text-primary"
            aria-hidden
          />
        )}
      </div>

      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {visibleTags.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-gray-100 px-2 py-0.5 text-[0.7rem] font-medium text-gray-600 dark:bg-white/5 dark:text-gray-400"
          >
            {tech}
          </span>
        ))}
        {hiddenTagCount > 0 && (
          <span className="rounded-md px-2 py-0.5 text-[0.7rem] font-medium text-gray-400 dark:text-gray-500">
            +{hiddenTagCount} more
          </span>
        )}
      </div>
    </div>
  );

  if (!project.link) {
    return card;
  }

  return (
    <Link
      href={project.link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title} (opens in a new tab)`}
      className={cn('block h-full', project.featured && 'sm:col-span-2')}
    >
      {card}
    </Link>
  );
};