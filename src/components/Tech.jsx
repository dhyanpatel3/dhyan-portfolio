import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import java from "/src/images/java.png";
import python from "/src/images/python.png";
import mysql from "/src/images/mysql.png";
import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32 scroll-mt-24"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoMongodb className="cursor-pointer text-[40px] text-green-600 transition-all duration-300 hover:scale-110 hover:brightness-125 sm:text-[40px] md:text-[120px] animate-float1 hover:shadow-lg" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiExpress className="cursor-pointer text-[40px] text-white transition-all duration-300 hover:scale-110 hover:brightness-125 sm:text-[40px] md:text-[120px] animate-float2 hover:shadow-lg" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiReact className="cursor-pointer text-[40px] text-blue-400 transition-all duration-300 hover:scale-110 hover:brightness-125 sm:text-[40px] md:text-[120px] animate-float1 hover:shadow-lg" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <FaNodeJs className="cursor-pointer text-[40px] text-green-500 transition-all duration-300 hover:scale-110 hover:brightness-125 sm:text-[40px] md:text-[120px] animate-float1 hover:shadow-lg" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <FaJs className="cursor-pointer text-[40px] text-yellow-300 transition-all duration-300 hover:scale-110 hover:brightness-125 sm:text-[40px] md:text-[120px] animate-float2 hover:shadow-lg" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <img
            src={java}
            alt=""
            className="w-[40px] cursor-pointer text-[50px] transition-all duration-300 hover:scale-110 hover:brightness-125 md:w-[120px] animate-float2 hover:shadow-lg"
          />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <img
            src={python}
            alt=""
            className="w-[40px] cursor-pointer text-[50px] transition-all duration-300 hover:scale-110 hover:brightness-125 md:w-[120px] animate-float1 hover:shadow-lg"
          />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <img
            src={mysql}
            alt=""
            className="w-[40px] cursor-pointer text-[50px] transition-all duration-300 hover:scale-110 hover:brightness-125 md:w-[120px] animate-float2 hover:shadow-lg"
          />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <RiTailwindCssFill className="cursor-pointer text-[40px] text-blue-600 transition-all duration-300 hover:scale-110 hover:brightness-125 sm:text-[40px] md:text-[120px] animate-float1 hover:shadow-lg" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <FaGitAlt className="cursor-pointer text-[40px] text-red-600 transition-all duration-300 hover:scale-110 hover:brightness-125 sm:text-[40px] md:text-[120px] animate-float2 hover:shadow-lg" />
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
