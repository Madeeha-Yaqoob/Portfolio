'use client'
import React from "react";
import Head from "next/head";
import Image from "next/image";
import capture from "public/capture.png";
import Layout from "@/components/Layout";
import Animatedtext from "@/components/Animatedtext";
import Link from "next/link";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
const FramerImage = motion(Image);
const FeaturedProjects = (props: {
  type: any;
  title: any;
  summary: any;
  image: any;
  link: any;
  githup: any;
}) => {
  return (
    <article className="w-full flex p-2 items-center justify-center rounded-br-2xl rounded-3xl border border-solid border-black bg-white dark:border-white dark:bg-black shadow-2xl ">
      
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        href={props.link}
        target="_blank"
      >
        <FramerImage alt={props.title} src={props.image} className="w-full h-auto"
        whileHover={{scale:1.05}}
        transition={{duration:0.2}} />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-pink-600 dark:text-emerald-300 font-medium text-xl">{props.type}</span>
        <Link
          href={props.link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left dark:text-white text-4xl font-bold">
            {props.title}
          </h2>
        </Link>
        <p className=" my-2 font text-black dark:text-white ">{props.summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={props.githup} target="_blank" className="w-10">
            <Github className="bg-black text-white dark:bg-white dark:text-black h-8 w-8 rounded-full" />
          </Link>
          <Link
            href={props.link}
            target="_blank"
            className=" ml-4 rounded-lg bg-black text-white dark:bg-white dark:text-black p-2 px-6 text-lg font-semibold  "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project1 = (props: {
  type: any;

  title: any;
  image: any;
  link: any;
  githup: any;
}) => {
  return (
    <article className="w-full flex flex-col h-auto items-center rounded-2xl border border-solid border-black bg-white dark:border-white dark:bg-black p-6 shadow-2xl">
   
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={props.link}
        target="_blank"
      >
        <FramerImage alt={props.title} src={props.image} className="w-full h-auto" whileHover={{scale:1.05}}
        transition={{duration:0.2}} />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-pink-600 dark:text-emerald-300 font-medium text-xl">{props.type}</span>
        <Link
          href={props.link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full dark:text-white text-left text-3xl font-bold">
            {props.title}
          </h2>
        </Link>

        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={props.link}
            target="_blank"
            className=" underline dark:text-white  text-lg font-semibold  "
          >
            Visit
          </Link>
          <Link href={props.githup} target="_blank" className="w-8">
            <Github className="bg-black text-white dark:bg-white dark:text-black h-8 w-8 rounded-full" />
          </Link>
        </div>
      </div>
    </article>
  );
};
const Projects = ({}) => {};

const Project = () => {
  return (
    <>
      <Head>
        <title>Madeeha Mehr | Project</title>
        <meta name="description" content="any description" />
      </Head>
      <main>
        <Layout>
          <Animatedtext
            text={"Imagination Trumps Knowledge!"}
            className="mb-16"
          ></Animatedtext>
          <div className="grid grid-col-12 gap-24">
            <div className="col-span-12">
              <FeaturedProjects
                type={"Feature Project"}
                title={"E-commerence Application"}
                summary={
                  "Product sellig and buying applicaton created by html, css tailwind, react, javascript. "
                }
                image={capture}
                link={"https://dine-market-eta.vercel.app/"}
                githup={"https://github.com/Madeeha-Yaqoob/Dine-Market"}
              />
            </div>
            <div className="col-span-6">
              <Project1
                type={"Feature Project"}
                title={"E-commerence Application"}
                image={capture}
                link={"https://dine-market-eta.vercel.app/"}
                githup={"https://github.com/Madeeha-Yaqoob/Dine-Market"}
              />
            </div>
            <div className="col-span-6">
              <Project1
                type={"Feature Project"}
                title={"E-commerence Application"}
                image={capture}
                link={"https://dine-market-eta.vercel.app/"}
                githup={"https://github.com/Madeeha-Yaqoob/Dine-Market"}
              />
            </div>
            <div className="col-span-12"> <FeaturedProjects
                type={"Feature Project"}
                title={"E-commerence Application"}
                summary={
                  "Product sellig and buying applicaton created by html, css tailwind, react, javascript. "
                }
                image={capture}
                link={"https://dine-market-eta.vercel.app/"}
                githup={"https://github.com/Madeeha-Yaqoob/Dine-Market"}
              /></div>
            <div className="col-span-6"><Project1
                type={"Feature Project"}
                title={"E-commerence Application"}
                image={capture}
                link={"https://dine-market-eta.vercel.app/"}
                githup={"https://github.com/Madeeha-Yaqoob/Dine-Market"}
              /></div>
            <div className="col-span-6"><Project1
                type={"Feature Project"}
                title={"E-commerence Application"}
                image={capture}
                link={"https://dine-market-eta.vercel.app/"}
                githup={"https://github.com/Madeeha-Yaqoob/Dine-Market"}
              /></div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Project;
