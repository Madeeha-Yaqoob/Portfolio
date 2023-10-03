'use client'
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";
const Details = (props: {
  position: any;
  company: any;
  companyLink: any;
  time: any;
  address: any;
  work: any;
}) => {
  const ref=useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between mt-4 ">
      <LiIcon key={"ref"} reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5,type:"spring"}}>
        <h3 className=" capitalize font-bold text-2xl">
          {props.position}&nbsp;
          <a
            href={props.companyLink}
            target="_blank"
            className=" capitalize text-pink-600 dark:text-emerald-400"
          >
            @{props.company}
          </a>
        </h3>
        <span className=" capitalize font-medium text-black/50 dark:text-white/50">
          {props.time} | {props.address}
        </span>
        <p className="font-medium w-full">{props.work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-20">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-1 w-[4px] h-full bg-black dark:bg-white origin-top"
        ></motion.div>
        <ul>
          <Details
            companyLink={"https://pitb.gov.pk/astp"}
            position={"WordPress Developer, Web Designer"}
            company={"Arfa Software Technology"}
            time={"2023-Present"}
            address={"346-B, Ferozepur Road"}
            work={
              "Worked on a team responsible for developing new features, improving the accuracy and relevance of search results and developing new tools for Data ananlysis and visualization. "
            }
          ></Details>
          <Details
            companyLink={"https://pitb.gov.pk/astp"}
            position={"WordPress Developer, Web Designer"}
            company={"Arfa Software Technology"}
            time={"2023-Present"}
            address={"346-B, Ferozepur Road"}
            work={
              "Worked on a team responsible for developing new features, improving the accuracy and relevance of search results and developing new tools for Data ananlysis and visualization. "
            }
          ></Details>
          <Details
            companyLink={"https://pitb.gov.pk/astp"}
            position={"WordPress Developer, Web Designer"}
            company={"Arfa Software Technology"}
            time={"2023-Present"}
            address={"346-B, Ferozepur Road"}
            work={
              "Worked on a team responsible for developing new features, improving the accuracy and relevance of search results and developing new tools for Data ananlysis and visualization. "
            }
          ></Details>
          <Details
            companyLink={"https://pitb.gov.pk/astp"}
            position={"WordPress Developer, Web Designer"}
            company={"Arfa Software Technology"}
            time={"2023-Present"}
            address={"346-B, Ferozepur Road"}
            work={
              "Worked on a team responsible for developing new features, improving the accuracy and relevance of search results and developing new tools for Data ananlysis and visualization. "
            }
          ></Details>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
