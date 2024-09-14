import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import HunterLogo from '../images/logos/logome.png';


type Props = {
  large?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement>;

export const Avatar = ({ large = false, className, ...props }: Props) => {
  return (
    <Link href="/" aria-label="Home" className={clsx(className, 'pointer-events-auto')} {...props}>
      <div className={clsx(
        'relative overflow-hidden rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110',
        'bg-white/20 dark:bg-black/20 backdrop-filter backdrop-blur-lg',
        large ? 'h-24 w-24' : 'h-12 w-12', // Adjusting the sizes for a clearer distinction
        'border-2 border-white/50 dark:border-gray-700/50',
        'group'
      )}>
        <Image
          src={HunterLogo}
          alt="me"
          layout="fill" // Ensuring the image covers the container properly
          className={clsx('object-cover transition-opacity duration-500 ease-in-out')}
          priority
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-pink-500 mix-blend-multiply opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out"></div> */}
      </div>
    </Link>
  );
};
