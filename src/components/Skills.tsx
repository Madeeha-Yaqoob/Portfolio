'use client'
import { motion } from "framer-motion";


const Skill = (props: { name: string; x: any; y: any }) => {
  return (
    <motion.div
      key={""}
      className="flex items-center justify-center rounded-full font-semibold py-3 px-6 shadow-black bg-black text-white dark:shadow-white dark:bg-white 
      dark:text-black cursor-pointer absolute  "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: props.x, y: props.y ,transition:{duration:1.5}}}
      viewport={{ once: true }}
    >
      {props.name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <div>
      <h1 className="font-bold text-8xl mt-20 w-full text-center ">Skills</h1>
      <div className=" h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold p-8 shadow-black bg-black text-white dark:shadow-white dark:bg-white dark:text-black cursor-pointer "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-20vw" y="2vw"></Skill>
        <Skill name="HTML" x="-6vw" y="-15vw"></Skill>
        <Skill name="Javascript" x="20vw" y="6vw"></Skill>
        <Skill name="Typescript" x="0vw" y="12vw"></Skill>
        <Skill name="React" x="-20vw" y="-15vw"></Skill>
        <Skill name="Tialwind CSS" x="15vw" y="-12vw"></Skill>
        <Skill name="Web Desinger" x="32vw" y="-5vw"></Skill>
        <Skill name="NextJS" x="0vw" y="-20vw"></Skill>
        <Skill name="Wordpress Developer" x="-25vw" y="18vw"></Skill>
        <Skill name="motion-framer" x="18vw" y="18vw"></Skill>
      </div>
      
    </div>
  );
};

export default Skills;
