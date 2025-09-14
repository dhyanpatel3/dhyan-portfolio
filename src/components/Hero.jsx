import dhyan from "/src/images/mno.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const Typewriter = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, 1000); // Restart after 1 sec pause
    }
  }, [index, text, speed]);

  return (
    <h2   className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl flex"
    style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
      {displayText}
      <span className="animate-blink">|</span>
    </h2>
  );
};


const Hero = () => {
 return (
    <div
      id="home"
        className="px-4 flex flex-col min-h-screen w-full items-center justify-center py-20 sm:px-8 md:px-16 lg:px-32 md:py-40"
    >
      <div className="flex flex-col items-center justify-center gap-3 text-white">
        <motion.div
        initial={{y: -50 , opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.8, delay:0.2}}
        >
           
          <img
            src={dhyan}
            alt=""
            className="w-[250px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[250px] animate-float"          />
        
        </motion.div>
       
        <motion.div 
        initial={{y: 50 , opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.8, delay:0.2}}
        
        className="flex max-w-[600px] flex-col items-center justify-center gap-2 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-4xl font-light md:text-6xl ">
            Dhyan Patel
          </h1>
          <div
      className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl flex"
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
    >
            <Typewriter text="Full Stack Webdeveloper" speed={100} />
    </div>
          <p className="text-sm text-gray-400 md:text-base md:leading-relaxed">
       A Final-year B.Tech IT student passionate about the intersection of web development and AI. I specialize in building intelligent, user-centric web applications that solve complex problems with clean code.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
