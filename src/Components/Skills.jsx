/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  Globe,
  Code,
  Database,
  GitBranch,
  Layout,
  Terminal,
  Box,
  Cpu,
  Server,
  Layers,
  FileJson,
  Cloud,
  Monitor,
  Command,
} from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    icon: <Globe className="w-16 h-16 text-[#915EFF]" />,
    skills: [
      { name: "HTML5", icon: <Layout className="w-5 h-5" /> },
      { name: "CSS3", icon: <Box className="w-5 h-5" /> },
      { name: "JavaScript", icon: <FileJson className="w-5 h-5" /> },
      { name: "React", icon: <Layers className="w-5 h-5" /> },
      { name: "Tailwind CSS", icon: <Code className="w-5 h-5" /> },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-16 h-16 text-[#915EFF]" />,
    skills: [
      { name: "Python", icon: <Terminal className="w-5 h-5" /> },
      { name: "Node.js", icon: <Cpu className="w-5 h-5" /> },
      { name: "Express(Baics)", icon: <Server className="w-5 h-5" /> },
    ],
  },
  {
    title: "Database",
    icon: <Database className="w-16 h-16 text-[#915EFF]" />,
    skills: [
      { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
      { name: "SQL", icon: <Database className="w-5 h-5" /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-16 h-16 text-[#915EFF]" />,
    skills: [
      { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
      { name: "GitHub", icon: <Code className="w-5 h-5" /> },
      { name: "AWS(Basics)", icon: <Cloud className="w-5 h-5" /> },
      { name: "Linux", icon: <Command className="w-5 h-5" /> },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
        <p className="text-gray-400 text-lg">My technical expertise</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#1d2d4f] p-6 rounded-xl hover:scale-105 transition-transform"
          >
            <div className="flex flex-col items-center">
              {skill.icon}
              <h3 className="text-xl font-semibold text-white mt-4 mb-3">
                {skill.title}
              </h3>
              <ul className="text-gray-400 w-full">
                {skill.skills.map((item, i) => (
                  <li key={i} className="mb-2 flex items-center gap-2">
                    {item.icon}
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
