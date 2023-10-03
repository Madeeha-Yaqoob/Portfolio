'use client';
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Span from "./Span";
import {
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  Github,
  SunIcon,
  MoonIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import useThemeSwicher from "./hooks/useThemeSwicher";
const MotionLink = motion(Link);

const Header = () => {
  const [mode, setMode] = useThemeSwicher();
  return (
    <header className="flex justify-between items-center w-full dark:text-white px-28  py-8 font-medium">
      <nav className="flex gap-10">
        <Link href={"/"} className="relative group">
          Home
          <Span />
        </Link>
        <Link href={"/About"} className="relative group">
          About
          <Span />
        </Link>
        <Link href={"/Project"} className="relative group">
          Projects
          <Span />
        </Link>
        <Link href={"/Article"} className="relative group">
          Skills
          <Span />
        </Link>
      </nav>
      <Logo />
      <motion.nav className=" flex gap-x-4">
        <MotionLink
          href={"https://twitter.com/MadeehaMeh55475"}
          target={"_blank"}
          className="bg-blue-500 h-10 w-10 rounded-full relative  "
          whileHover={{ y: -2 }}
          whileTap={{ scale: 1 }}
        >
          <Twitter className="flex items-center justify-center absolute top-2 right-2.5 text-white " />
        </MotionLink>
        <MotionLink
          href={"https://www.facebook.com/aurrick.jahan"}
          target={"_blank"}
          className="bg-blue-600 rounded-full h-10 w-10 relative "
          whileHover={{ y: -2 }}
          whileTap={{ scale: 1 }}
        >
          <Facebook className="text-white absolute top-2 right-2.5 flex justify-center items-center text-center " />
        </MotionLink>
        <MotionLink
          href={"https://www.youtube.com/@amishfarooqmehr8087/featured"}
          target={"_blank"}
          className="bg-red-600 rounded-full h-10 w-10 relative "
          whileHover={{ y: -2 }}
          whileTap={{ scale: 1 }}
        >
          <Youtube className="flex items-center justify-center absolute top-2 right-2.5  text-white " />
        </MotionLink>
        <MotionLink
          href={"https://www.linkedin.com/in/madeeha-mehr-a6437628a/"}
          target={"_blank"}
          className="bg-blue-400 rounded-full h-10 w-10 relative "
          whileHover={{ y: -2 }}
          whileTap={{ scale: 1 }}
        >
          <Linkedin className="flex items-center justify-center absolute top-2 right-2.5  text-white " />
        </MotionLink>
        <MotionLink
          href={"https://github.com/Madeeha-Yaqoob"}
          target={"_blank"}
          className="bg-gray-700 rounded-full h-10 w-10 relative "
          whileHover={{ y: -2 }}
          whileTap={{ scale: 1 }}
        >
          <Github className="flex items-center justify-center absolute top-2 right-2.5  text-white " />
        </MotionLink>
      </motion.nav>
      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className={`ml-3 flex items-center justify-center rounded-full p-1 ${
          mode === "light" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {mode === "dark" ? (
          <SunIcon className={"fill-black"} />
        ) : (
          <MoonIcon className={"fill-black"} />
        )}
      </button>
    </header>
  );
};

export default Header;
