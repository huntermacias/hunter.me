import Image from 'next/image';
import { Project } from '../data/lifeApi';
import { Badge } from './Badge';
import { Card } from './Card';
import { LinkIcon } from './icons/LinkIcon';

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <Card className="h-full group hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg overflow-hidden">
        <Image
          src={project.logo}
          alt={`Logo of ${project.title}`}
          className="h-full w-full object-contain p-2 transition duration-300 ease-in-out group-hover:scale-110"
          unoptimized
        />
      </div>
      <div className="mt-6">
        {project.link ? (
          <Card.Title href={project.link.href}>
            {project.title}
          </Card.Title>
        ) : (
          <Card.Title>{project.title}</Card.Title>
        )}
      </div>
      <Card.Description >{project.description}</Card.Description>
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
    </Card>
  );
};
