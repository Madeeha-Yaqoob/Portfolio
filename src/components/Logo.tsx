'use client';
import React from "react";
import Image from "next/image";
import nvcxwoww from "/public/nvcxwoww.png";
import Link from "next/link";
import { motion } from "framer-motion";
const MotionLink = motion(Link);
const Logo = () => {
  return (
    <motion.div>
      <MotionLink
        className="flex gap-1   "
        href={"/"}
        whileHover={{ scale: 1.5 }}
      >
        <Image
          className="rounded-full"
          alt="logo"
          src={nvcxwoww}
          height={30}
        ></Image>
        <h1 className=" text-3xl font-blod  dark:text-white ">Madeeha Yaqoob</h1>
      </MotionLink>
    </motion.div>
  );
};

export default Logo;
