'use client'
import React from "react";
import {motion} from 'framer-motion'
const qoute = {
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren:0.08,
        }
    }
}
const singleWord = {
    initial:{
        opacity:0,
        y:50
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1,
        }
    }
}

const Animatedtext = (props: { text: any; className?: any }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden dark:text-white">
        <motion.h1 className={` inline-block w-full text-black font-bold capitalize dark:text-white text-8xl ${props.className}`}
        variants={qoute}
        initial="initial" 
        animate="animate">
            {props.text.split(" ").map((word:any,index:any)=>
            <motion.span key={word+'-'+index} className="inline-block"
            variants={singleWord}
            >{word}&nbsp;</motion.span>)}
        </motion.h1>
    </div>
  );
};

export default Animatedtext;
