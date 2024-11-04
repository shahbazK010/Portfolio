import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "To-Do App",
    description:
      "A a responsive task management app with sorting options for task prioritization (high, medium, low) to enhance usability across devices. Leveraged React’s state management for dynamic updates and Vite for optimized build times and hot module replacement, improving performance. Deployed on Netlify to enable continuous integration and delivery, ensuring smooth and seamless updates.",
    image:
      "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "JavaScript", "Tailwind", "MaterialUI"],
    github: "https://github.com/shahbazK010/To-do",
    demo: "https://to-doists.netlify.app/",
  },
  {
    title: "Portfolio",
    description:
      "An e-commerce platform with a modern UI, shopping cart functionality, and secure payment integration.",
    image:
      "https://eu-images.contentstack.com/v3/assets/blt892f41c9788ae399/blt359b7573743cbb3d/6578407cec5371040a94bb6b/frontend_developer_portfolio_main_banner.webp",
    tags: ["React", "JavaScript", "Tailwind", "EmailJs", "ThreeJs"],
    github: "https://github.com/shahbazK010/Portfolio",
    demo: "https://sahabazkhan771.netlify.app",
  },
  // {
  //   title: "Project Two",
  //   description:
  //     "An e-commerce platform with a modern UI, shopping cart functionality, and secure payment integration.",
  //   image:
  //     "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  //   tags: ["React", "Tailwind CSS", "Stripe", "Firebase"],
  //   github: "https://github.com",
  //   demo: "https://example.com",
  // },
  // {
  //   title: "Project Two",
  //   description:
  //     "An e-commerce platform with a modern UI, shopping cart functionality, and secure payment integration.",
  //   image:
  //     "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  //   tags: ["React", "Tailwind CSS", "Stripe", "Firebase"],
  //   github: "https://github.com",
  //   demo: "https://example.com",
  // },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
        <p className="text-gray-400 text-lg">My recent work</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1d2d4f] rounded-xl overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#915EFF] px-3 py-1 rounded-full text-sm text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-[#915EFF] transition-colors"
                >
                  <Github size={20} />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-[#915EFF] transition-colors"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
