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
      <div className={clsx('relative overflow-hidden rounded-lg shadow-lg', large ? 'h-20 w-20' : 'h-19 w-19', 'group')}>
        <Image
          src={AvatarImage}
          alt=""
          className={clsx('object-cover')}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-teal-200 mix-blend-multiply opacity-0 group-hover:opacity-60 transition-opacity duration-500 ease-in-out"></div>
      </div>
    </Link>
  );
};
