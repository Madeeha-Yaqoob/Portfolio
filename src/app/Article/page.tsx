"use client";
import Animatedtext from "@/components/Animatedtext";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import react2 from "public/react2.jpg";
import react3 from "public/react3.jpg";
import { motion } from "framer-motion";
const FramerImage = motion(Image);
const FeaturedArticle = (props: {
  time?: any;
  title?: any;
  summary?: any;
  image?: any;
  link?: any;
}) => {
  return (
    <li className=" col-span-1 w-full p-4 bg-white dark:bg-black border border-solid border-black dark:border-white rounded-2xl relative">
      <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black dark:bg-white rounded-br-3xl" />
      <Link
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
        href={props.link}
        target="_blank"
      >
        <FramerImage
          alt={props.title}
          src={props.image}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw ,(max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={props.link} target="_blank">
        <h2 className=" capitalize dark:text-white text-2xl font-bold my-2 hover:underline underline-offset-2">
          {props.title}
        </h2>
      </Link>
      <p className="text-sm dark:text-white mb-2">{props.summary}</p>
      <span className="text-pink-600 dark:text-emerald-300 font-bold ">
        {props.time}
      </span>
    </li>
  );
};

const page = () => {
  return (
    <>
      <Head>
        <title>Madeeha Mehr | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <Animatedtext text="Words Can Change The World!" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              title={
                "Build A Custom Pagination Component In ReactJS From Scratch"
              }
              summary={
                "Learn how to build a custom pagination component in ReactJS from scratch follow this step-by-step guide to integrate pagination component in your ReactJS project."
              }
              time={" 9 min read "}
              link={"#"}
              image={react2}
            />
            <FeaturedArticle
              title={
                "Build A Custom Pagination Component In ReactJS From Scratch"
              }
              summary={
                "Learn how to build a custom pagination component in ReactJS from scratch follow this step-by-step guide to integrate pagination component in your ReactJS project."
              }
              time={" 9 min read "}
              link={"#"}
              image={react3}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default page;
