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
        src={img}
        alt={alt}
        layout="fill"
        className="object-cover transition-transform duration-300 ease-out transform group-hover:scale-110"
        placeholder="blur"
        blurDataURL={img.blurDataURL}
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
const techImages = [
'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D',
'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2h8ZW58MHx8MHx8fDA%3D',
'https://plus.unsplash.com/premium_photo-1687119905837-0900281ea2c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2h8ZW58MHx8MHx8fDA%3D',
'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2h8ZW58MHx8MHx8fDA%3D',
'https://images.unsplash.com/photo-1624357676666-4cca3b657627?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbnRhZ2UlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D',
'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
'https://images.unsplash.com/photo-1541185934-01b600ea069c?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNwYWNleHxlbnwwfHwwfHx8MA%3D%3D',
'https://images.unsplash.com/photo-1707665501064-807feb2ecb32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eHxlbnwwfHwwfHx8MA%3D%3D',
'https://images.unsplash.com/photo-1531390770335-d94a0dacd992?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
'https://images.unsplash.com/photo-1611262588019-db6cc2032da3?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]
export const Photos = () => {
  return (
    <div className="my-8">
      <div className="hide-scrollbar -my-4 flex gap-8 overflow-x-auto py-4 px-8">
        {techImages.map((travelImage) => (
          <img
            src={travelImage}
            alt={travelImage}
            width={200}
            height={100}
            className="object-cover transition-transform duration-300 ease-out transform group-hover:scale-110"
            
        
         
          />
        ))}
      </div>
    </div>
  );
};
