import dhyan from "/src/images/mno.png";
import { motion } from "framer-motion";

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
          <motion.h3
  className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl flex"
  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1, // Time between character reveals
        repeat: Infinity,
        repeatDelay: 1, // Pause before restarting
      },
    },
    hidden: {},
  }}
>
  <motion.span
    variants={{
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
    }}
  >
    {"{"}
  </motion.span>
  {[..."WebDeveloper"].map((char, index) => (
    <motion.span
      key={index}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 }, // Characters start slightly below and invisible
      }}
    >
      {char}
    </motion.span>
  ))}
  <motion.span
    variants={{
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
    }}
  >
    {"}"}
  </motion.span>
</motion.h3>

          <p className="text-sm text-gray-400 md:text-base md:leading-relaxed">
          As a third-year B.Tech IT student with a passion for web development, I create innovative and user-friendly web applications. Eager to learn and grow, I strive to enhance my skills and contribute to impactful projects.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
