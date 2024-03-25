'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '../data/lifeApi';
import { Badge } from './Badge';
import { Card } from './Card';
import { LinkIcon } from './icons/LinkIcon';
import { motion } from 'framer-motion';

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);

  const toggleDescription = () => setDescriptionExpanded(!isDescriptionExpanded);

  return (
    <motion.div
      className="group hover:scale-105 transition-transform duration-300 ease-in-out"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex flex-col">
        <div className="relative z-10 flex-shrink-0 h-20 w-20 items-center justify-center rounded-full bg-opacity-50 backdrop-filter backdrop-blur-lg bg-gray-950 shadow-lg overflow-hidden">
          <Image
            src={project.logo}
            alt={`Logo of ${project.title}`}
            className="h-full w-full object-contain scale-150 p-2 transition duration-300 ease-in-out group-hover:scale-110"
            unoptimized
          />
        </div>
        <div className="flex-grow mt-6 overflow-hidden">
          {project.link ? (
            <Card.Title href={project.link.href}>
              {project.title}
            </Card.Title>
          ) : (
            <Card.Title>{project.title}</Card.Title>
          )}
        <Card.Description classNames={`${isDescriptionExpanded ? '' : 'line-clamp-4'}`}>
            {project.description}
          </Card.Description>
          <button
            className="text-xs relative text-primary mt-2 hover:underline"
            onClick={toggleDescription}
          >
            {isDescriptionExpanded ? 'Read less' : 'Read more'}
          </button>
        </div>
        <div className="mt-6 font-mono flex flex-wrap gap-1 z-10 mb-6">
          {project.techStack.map((techStackItem) => (
            <Badge key={techStackItem}>{techStackItem}</Badge>
          ))}
        </div>
        <div className="relative z-10 mt-auto flex text-sm font-medium text-zinc-400 transition group-hover:text-primary dark:text-zinc-200">
          {project.link ? (
            <a href={project.link.href} className="flex items-center group-hover:text-primary">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
              <span className="ml-2 rounded-full bg-green-700 w-1 h-1" />
            </a>
          ) : (
            <p className="flex items-center gap-x-2">
              Shut down <span className="rounded-full bg-red-700 w-1 h-1" />
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
