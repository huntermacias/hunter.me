import { ProfessionalRole } from '../data/lifeApi';
import { ProfessionalWork } from './ProfessionalWork';

type Props = {
  experience: ProfessionalRole[];
};

export const ProfessionalTimeline = ({ experience }: Props) => {
  return (
    <div className="mt-8">
      {experience.map((role, index) => (
        <div key={role.role} className="grid grid-cols-[1.5rem_1fr] gap-x-4">
          <div className="flex flex-col items-center">
            <span className="mt-3 h-3 w-3 shrink-0 rounded-full bg-primary ring-4 ring-primary/20" />
            {index < experience.length - 1 && (
              <span className="mt-1 w-px flex-1 bg-gray-200 dark:bg-gray-800" aria-hidden />
            )}
          </div>

          <div className={index < experience.length - 1 ? 'pb-8' : ''}>
            <ProfessionalWork role={role} />
          </div>
        </div>
      ))}
    </div>
  );
};
