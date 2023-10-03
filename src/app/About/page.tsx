'use client';
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import aboutpic from "/public/aboutpic.jpg"; // Updated import path for TypeScript
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Layout from "@/components/Layout";
import Animatedtext from "@/components/Animatedtext";

interface AnimatedNumberProps {
  value: number;
}

const AnimatedNumber = (props: { value: any }) => {
  const ref = useRef<HTMLSpanElement | null>(null); // Define ref type
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 4000 });
  const isInview = useInView(ref, { once: true });

  useEffect(() => {
    if (isInview) {
      motionValue.set(props.value);
    }
  }, [isInview, props.value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= props.value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, props.value, ref]);

  return <span ref={ref}></span>;
};

const About: React.FC = () => {
  return (
    <>
      <head>
        <title>Madeeha Mehr | About Page</title>
        <meta name="description" content="any description" />
      </head>
      <main className="flex justify-center dark:text-white flex-col items-center w-full">
        <Layout>
          <Animatedtext text={"Passion Fuels Purpose"} />
          <div className="grid w-full mt-28 grid-cols-8 gap-14">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase dark:text-white/75 text-black/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Madeeha Yaqoob, a Web & WordPress Developer and UI/UX
                designer with a passion for creating beautiful, functional, and
                user-centered digital experiences. With 4 years of experience in
                the field, I am always looking for new and innovative ways to
                bring my clients' vision to life.
              </p>
              <p className="font-medium">
                I believe that design is about more than just making things look
                pretty—it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="mt-32 col-span-3 relative h-max rounded-2xl border-2 border-solid border-black dark:border-white dark:bg-black bg-white p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black dark:bg-white" />
              <Image
                key={"image"}
                src={aboutpic}
                alt="pic"
                className="w-full h-auto  rounded-2xl"
                width={600} // Adjust the width and height as needed
                height={400}
                priority
                  sizes="(max-width: 768px) 100vw ,(max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber key={"value"} value={50} />+
                </span>
                <h1 className="text-xl font-medium capitalize dark:text-white text-black/75">
                  satisfied clients
                </h1>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber key={"value"} value={40} />+
                </span>
                <h1 className="text-xl font-medium dark:text-white  capitalize text-black/75">
                  projects completed
                </h1>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber key={"value"} value={4} />+
                </span>
                <h1 className="text-xl  font-medium dark:text-white capitalize text-black/75">
                  year of experience
                </h1>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
