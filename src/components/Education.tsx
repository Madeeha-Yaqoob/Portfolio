'use client'
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";
const Details = (props: {
  typy: any;
  time: any;
  place: any;
  info: any;
  
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
          {props.typy}
        </h3>
        <span className=" capitalize font-medium text-black/50 dark:text-white/50">
          {props.time} | {props.place}
        </span>
        <p className="font-medium w-full">{props.info}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-20">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Education
      </h2>
      <div className="w-[75%] mx-auto relative ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-1 w-[4px] h-full bg-black dark:bg-white origin-top"
        ></motion.div>
        <ul>
          <Details
          typy={"Bachelor Of Science In Information Technology"}
            place={"Punjab University (PU)"}
            
            
            time={"2021-2025"}
            info={"Ralevent courses include Web 3.0 & Metaverse, Wordpress development & Artificail Intelligence. "}
            
          />
          <Details
          typy={"Intermediate In ICS(physics)"}
            place={"Gulberg For Women Collage, Lahore"}
            
            
            time={"2019-2020"}
            info={"Activity include sport team member  "}
            
          />
          <Details
          typy={"Matriculation with Computer Science"}
            place={"Gorvt High School, Lahore "}
            
            
            time={"2017-2019"}
            info={"Ralevent courses include Web 3.0 & Metaverse, Wordpress development & Artificail Intelligence. "}
            
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
