import image1 from "/src/images/image1.png";
import image2 from "/src/images/image2.png";
import image3 from "/src/images/image3.png";
import image4 from "/src/images/image4.png";
import image5 from "/src/images/image5.png";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";


const ProjectsData = [
  {
    image: image1,
    title: "Weather App",
    description:
      "A Weather App built with React, providing real-time weather updates. It offers users an intuitive interface to check current weather conditions, forecasts, and other relevant information for any location globally.",
    technologies: ["React"],
    link: "https://weather-mtyf8leqg-dhyan-patels-projects-58fd379d.vercel.app/",
  },
  {
    image: image2,
    title: "Tic Tac Toe",
    description:
      "A classic Tic-Tac-Toe game developed with React. It allows users to play against a friend or the computer, featuring an interactive grid and dynamic gameplay with win/lose notifications.",
    technologies: ["React"],
    link: "https://tic-tac-toe-alpha-rosy.vercel.app/",
  },
  {
    image: image3,
    title: "Face Detection",
    description:
      "A Face Detection app built with JavaScript and a face detection library. It identifies and marks faces in real-time, showcasing advanced facial recognition capabilities with a user-friendly interface.",
    technologies: ["HTML", "JavaScript"],
    link:"https://face-detection-js-ashy.vercel.app/",
  },
  {
    image: image4,
    title: "To Do App",
    description:
      "A simple To-Do app built with HTML, CSS, and JavaScript. It allows users to add, edit, and delete tasks, providing an intuitive interface for managing daily activities efficiently.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link:"https://to-do-list-virid-pi.vercel.app/",
  },
  {
    image: image5,
    title: "Simon Says Game",
    description:
      "A fun Simon Says game created with HTML, CSS, and JavaScript. The game challenges users to repeat a sequence of colors, improving memory and concentration skills while providing interactive gameplay.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://simon-says-game-ruby-one.vercel.app/",
  },
];

const scrollRevealVariants = {
  hidden: { opacity: 0, y: 50 }, // Start state
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Animation duration
      ease: "easeInOut", // Smooth easing
    },
  },
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={scrollRevealVariants} // Attach animation variants
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }} // Allow animation on every scroll into view
      className="flex flex-col items-center gap-8 md:flex-row"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full cursor-pointer rounded-2xl transition-transform duration-300 hover:scale-105 md:w-[300px]"
      />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {project.technologies.map((tech, index) => (
            <span key={index} className="rounded-lg bg-black p-2 text-sm text-gray-300">
              {tech}
            </span>
          ))}
          {/* Add the project link beside the technologies */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-300 hover:text-indigo-400 mt-2"
          >
            <FaExternalLinkAlt className="mr-2" /> Project Link
          </a>
        </div>
      </div>
    </motion.div>
  );
};


const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <motion.h1
        variants={scrollRevealVariants} // Animation for title
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }} // Allow title animation to retrigger
        className="text-4xl font-light text-white md:text-6xl text-center"
      >
        My Projects
      </motion.h1>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {ProjectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
