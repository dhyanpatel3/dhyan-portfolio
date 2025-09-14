import image1 from "/src/images/image1.png";
import image2 from "/src/images/image2.png";
import image3 from "/src/images/image3.png";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectsData = [
  {
    image: image1,
    title: "ChitChat",
    description:
      "ChitChat is a real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io. It features user authentication, real-time messaging, online status indicators, and image sharing with Cloudinary.",
    technologies: ["MongoDB","Express","React","Node.js","Socket.io","Cloudinary"],
    link: "https://chit-chat-rose-omega.vercel.app/",
    github: "https://github.com/dhyanpatel3/ChitChat",
  },
  {
    image: image2,
    title: "AI Calculator",
    description:
      "AI Calculator is a full-stack application that interprets and solves mathematical problems drawn on a canvas. It uses a React and TypeScript frontend to capture user drawings and an Express backend with the Google Gemini API to analyze the image and return the solution.",
    technologies: ["Express","React","Node.js","TypeScript","Google Gemini API"],
    link: "https://ai-calculator-frontend-tau.vercel.app/",
    github: "https://github.com/dhyanpatel3/AI-Calculator",
  },
  {
    image: image3,
    title: "AI CodeReview",
    description:
      "AI Code Reviewer is a web-based tool that provides instant, AI-powered feedback on your code. Built with a React frontend and a Node.js/Express backend, it leverages the Google Gemini API to analyze code snippets and offer suggestions for improvement, bug detection, and best practices.",
    technologies: ["Express","React","Node.js","Google Gemini API"],
    link: "https://ai-code-review-xi-eight.vercel.app/",
    github: "https://github.com/dhyanpatel3/AI-CodeReview",
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
            <span
              key={index}
              className="rounded-lg bg-black p-2 text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
          {/* Add the project link and GitHub icon beside the technologies */}
          <div className="flex items-center gap-3 mt-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-300 hover:text-indigo-400"
            >
              <FaExternalLinkAlt className="mr-1" /> Live
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-300 hover:text-indigo-400"
                style={{ marginLeft: "0.5rem" }}
              >
                <FaGithub className="mr-1" /> GitHub
              </a>
            )}
          </div>
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
