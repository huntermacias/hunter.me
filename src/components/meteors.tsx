import clsx from "clsx";
import React from "react";
import { cn } from "src/lib/cn";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
    {meteors.map((el, idx) => (
  <span
    key={"meteor" + idx}
    className={`
      animate-meteor-effect absolute top-1/2 left-1/2 h-1 w-1 rounded-full
      shadow-lg ${'dark:shadow-pink-500/50'} 
      before:content-[''] before:absolute before:-top-0 before:opacity-40 before:left-1/2 before:-translate-x-1/2 before:rotate-45 
      before:border-t-4 before:border-r-4 before:border-transparent 
      before:border-t-pink-500 before:border-r-pink-500
      after:content-[''] after:absolute after:opacity-30 after:bottom-0 after:right-0 after:h-0.5 after:w-12 after:rounded-full 
      ${'dark:after:bg-gradient-to-r dark:after:from-pink-500 '}
      ${className}
    `}
    style={{
      animationTimingFunction: "ease-out",
      top: `${Math.random() * -10}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 0.1 + 0.1}s`, // Random start times
      animationDuration: `${Math.random() * 10 + 1}s`, // Random speeds
    }}
  ></span>
))}


    </>
  );
};
