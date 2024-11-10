/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import {
  // Globe,
  Code,
  Database,
  GitBranch,
  Layout,
  Terminal,
  Box,
  Cpu,
  Server,
  Cloud,
  FileJson,
  Command,
} from "lucide-react";

const SkillCard = ({ icon, name, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.1,
        rotate: [0, -5, 5, -5, 0],
        transition: { duration: 0.3 },
      }}
      className="flex items-center gap-2 bg-[#112240] p-3 rounded-lg"
    >
      {icon}
      <span className="text-gray-300">{name}</span>
    </motion.div>
  );
};

const skills = [
  { icon: <Layout size={20} className="text-[#64ffda]" />, name: "HTML5" },
  { icon: <Box size={20} className="text-[#64ffda]" />, name: "CSS3" },
  {
    icon: <FileJson size={20} className="text-[#64ffda]" />,
    name: "JavaScript",
  },
  { icon: <Code size={20} className="text-[#64ffda]" />, name: "React" },
  { icon: <Terminal size={20} className="text-[#64ffda]" />, name: "Python" },
  { icon: <Cpu size={20} className="text-[#64ffda]" />, name: "Node.js" },
  { icon: <Server size={20} className="text-[#64ffda]" />, name: "Express" },
  { icon: <Database size={20} className="text-[#64ffda]" />, name: "MongoDB" },
  { icon: <Database size={20} className="text-[#64ffda]" />, name: "SQL" },
  { icon: <Cloud size={20} className="text-[#64ffda]" />, name: "AWS" },
  { icon: <GitBranch size={20} className="text-[#64ffda]" />, name: "Git" },
  {
    icon: <Command size={20} className="text-[#64ffda]" />,
    name: "Linux",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-gray-400 text-lg">Introduction</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="order-2 lg:order-1"
        >
          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            I’m a passionate Front-End Developer with experience in building
            dynamic web applications using JavaScript and React. My journey in
            software development began with a curiosity about how things work on
            the internet, leading me to dive deep into front-end technologies.
          </motion.p>
          <motion.p
            className="text-gray-300 text-lg leading-relaxed mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I’m focused on building responsive, user-friendly applications with
            clean code and great performance. When I’m not coding, I’m either
            exploring new tech, traveling to new places, or enjoying a game of
            football.
          </motion.p>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2 grid grid-cols-2 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
