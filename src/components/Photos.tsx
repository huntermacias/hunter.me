import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

import { travelImages } from '../images/travel';

const possibleRotations = [1.3, -1.3, 1.3, -1.3, 1.3, -1.3];

const Photo = ({
  img,
  title,
  alt,
  idx,
}: {
  img: StaticImageData;
  title: string;
  alt: string;
  idx: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      key={img.src}
      initial={{ scale: 1, rotate: possibleRotations[idx % possibleRotations.length], opacity: 0 }}
      whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.25 } }}
      whileInView={{ opacity: 1, transition: { delay: idx * 0.05, duration: 0.5 } }}
      viewport={{ once: true }}
      onHoverStart={() => setIsVisible(true)}
      onHoverEnd={() => setIsVisible(false)}
      className={clsx(
        'relative aspect-[4/3] w-48 flex-none overflow-hidden rounded-xl shadow-lg',
        'bg-zinc-200/30 dark:bg-zinc-900/30 backdrop-filter backdrop-blur-xl transition-all duration-300 ease-out',
        'border border-gray-200 dark:border-gray-700/50'
      )}
    >
      <Image
        src={img.src}
        alt={alt}
        layout="fill"
        className="object-cover transition-transform duration-300 ease-out transform group-hover:scale-110"
        // placeholder="blur"
      />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-end backdrop-filter backdrop-blur-md"
          >
            <h3 className="w-full bg-black/60 text-white px-3 py-2 text-xs font-bold">{title}</h3>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Photos = () => {
  return (
    <div className="my-8">
      <div className="hide-scrollbar -my-4 flex gap-8 overflow-x-auto py-4 px-8">
        {travelImages.map((travelImage, index) => (
          <Photo
            key={travelImage.img.src}
            img={travelImage.img}
            title={travelImage.title}
            alt={travelImage.alt}
            idx={index}
          />
        ))}
      </div>
    </div>
  );
};
