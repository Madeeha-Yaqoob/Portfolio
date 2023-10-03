'use client';
import React from "react";
import Image from "next/image";
import madi from "public/madi.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
// import MadeehaYaqoobCV from "@/cv/MadeehaYaqoobCV.pdf";
import { ExternalLink } from "lucide-react";
import Hireme from "./Hireme";
import Animatedtext from "./Animatedtext";
import Layout from "./Layout";
import Head from "next/head";


const Hero = () => {
  return (
    <>
      <Head>
        <title>Madeeha Mehr | Home Page</title>
        <meta name="description" content="madeeha" />
      </Head>
      <main className="flex ">
        <div>
          <Hireme/>
        </div>
        <div className="flex items-center  w-full min-h-screen dark:text-white ">
          <Layout className=" ">
            <div className="flex items-center justify-between w-full">
              <div className="w-1/2 flex flex-col items-center self-center ">
                <Animatedtext
                  text={"Turning Vision Into Reality With Code And Design."}
                  className="!text-6xl !text-left"
                />
                <p className=" my-4 text-base  font-medium">
                  As a skilled full-stack & wordpress developer , I am dedicated
                  to turning ideas into innovation web application, explore my
                  latest projects and articles, showcasing my expertise in
                  React.js , wordpress & Web Application
                </p>

                <div className="flex items-center self-start mt-2">
                  <Link
                    href="/dummy.pdf"
                    target="_blank"
                    className="flex items-center hover:dark:border-white bg-black p-2.5 dark:bg-white dark:text-black text-white px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-black hover:dark:bg-black hover:dark:text-white border-2 border-solid border-transparent hover:border-black  "
                    download={true}
                  >
                    Resume
                    <ExternalLink className="ml-1 w-6" />
                  </Link>
                  <Link
                    href="mailto:213838bs@gmail.com"
                    target="_blank"
                    className="ml-4 flex items-center text-lg font-medium capitalize text-black underline dark:text-white "
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className=" w-1/2 flex items-center justify-center ">
                <Image
                  src={madi}
                  alt="picture"
                  className=" flex-grow-0 rounded-full h-[400px] w-[400px] "
                  priority
                  sizes="(max-width: 768px) 100vw ,(max-width: 1200px) 50vw, 50vw"
                />
              </div>
            </div>
          </Layout>
        </div>
      </main>
    </>
  );
};

export default Hero;
