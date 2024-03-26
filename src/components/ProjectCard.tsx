'use client';

import React from 'react';
import { Project } from '../data/lifeApi';
import { IconClipboardCopy } from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from './bento-grid';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  projects: Project[];
}

export const ProjectCard = ({ projects }: Props) => {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {projects.map((project, index) => (
        <BentoGridItem
          className={index === 3 || index === 6 ? "md:col-span-2" : 
          `border border-gray-400 dark:border-slate-250 
          transition-all duration-300 hover:bg-opacity-40 dark:hover:bg-opacity-40`}
          key={project.title}
          title={project.title}
          description={project.description.substring(0, 150) + '...'}
          header={<ProjectImage image={project.logo} alt={project.title} />}
          icon={
            <Link href={project.link!.href} target="_blank" rel="noopener noreferrer">
              <IconClipboardCopy className="w-5 h-5 hover:text-primary-600 transition-colors duration-300" />
            </Link>
          }
        />

      ))}
    </BentoGrid>
  );
};


const ProjectImage = ({ image, alt }: any) => (
  <div className="z-10 flex-shrink-0 h-24 w-24 items-center justify-center rounded-full  backdrop-filter overflow-hidden">
    <Image
      src={image}
      alt={`Logo of ${alt}`}
      className="h-full w-full object-contain scale-150 p-2 transition duration-300 ease-in-out group-hover:scale-110"
      unoptimized
    />
  </div>
);
