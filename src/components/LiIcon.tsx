'use client'
import React from "react";
import { motion, useScroll } from "framer-motion";
const LiIcon = ({ reference }:any) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className=" absolute left-0 stroke-black dark:stroke-white">
      <svg className="-rotate-90" height="75" width="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className=" stroke-pink-600 dark:stroke-emerald-400 stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="  stroke-[5px] fill-white dark:fill-black"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-pink-600 dark:fill-emerald-400"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
