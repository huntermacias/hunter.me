import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import AvatarImage from '../../public/assets/blog/authors/me_ai.png';

type Props = {
  large?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement>;

export const Avatar = ({ large = false, className, ...props }: Props) => {
  return (
    <Link href="/" aria-label="Home" className={clsx(className, 'pointer-events-auto')} {...props}>
      <div className={clsx(
        'relative overflow-hidden rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105',
        large ? 'h-24 w-24' : 'h-12 w-12', // Adjusting the sizes for a clearer distinction
        'group'
      )}>
        <Image
          src={AvatarImage}
          alt="me"
          layout="fill" // Ensuring the image covers the container properly
          className={clsx('object-cover transition-opacity duration-500 ease-in-out')}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 mix-blend-multiply opacity-0 group-hover:opacity-60 transition-opacity duration-500 ease-in-out"></div>
      </div>
    </Link>
  );
};
