import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    date: "Cybersecurity Project",
    title: "PassGuard",
    description:
      "A password strength checker that analyzes password quality, detects weak patterns, and provides stronger security recommendations.",
    fullDescription:
      "PassGuard was built to help users understand why a password is weak or strong. It focuses on password structure, common patterns, length, and security feedback so users can make better password decisions.",
    learned:
      "This project helped me strengthen my understanding of cybersecurity basics, password security, conditional logic, user feedback design, and building tools that explain technical results clearly.",
    tech: ["Python", "Security Logic", "Password Analysis", "Pattern Detection"],
    skills: ["Cybersecurity Thinking", "Input Validation", "Security Feedback"],
    link: "https://passguard-kappa.vercel.app/",
    icon: "🔒",
  },
  {
    date: "Hackathon Project",
    title: "SU Golden Talks",
    description:
      "Full-stack student platform for Wilfrid Laurier students with posts, marketplace listings, messaging, search, profiles, and authentication.",
    fullDescription:
      "SU Golden Talks was built during a hackathon as a student community platform where Laurier students could connect, post, sell items, message others, and discover campus activity.",
    learned:
      "This project helped me learn how to connect frontend components to backend services, work with databases, build with React, and collaborate under strict time constraints.",
    tech: ["React", "TypeScript", "Supabase", "SQL"],
    skills: ["Frontend Integration", "Database Design", "Team Collaboration"],
    link: "#",
    icon: "🏫",
  },
  {
    date: "Personal Project",
    title: "Chess Game",
    description:
      "Interactive chess project focused on board logic, move validation, game state, and clean user interaction.",
    fullDescription:
      "The chess project focused on building game logic, managing board state, validating moves, and creating a structured interactive experience.",
    learned:
      "This project helped me improve my problem-solving, object-oriented programming, algorithmic thinking, and ability to break complex rules into smaller logic systems.",
    tech: ["Python", "OOP", "Game Logic"],
    skills: ["Algorithmic Thinking", "OOP", "State Management"],
    link: "#",
    icon: "♟️",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-32 px-6 bg-black text-white overflow-hidden"
    >
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 pb-2 leading-[1.15] text-transparent bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text">
            Projects
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of technical projects that show what I can build,
            learn, and improve through hands-on development. Please click on them to check them out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
  {projects.map((project, index) => (
    <motion.button
      type="button"
      key={project.title}
      onClick={() => setSelectedProject(project)}
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="group h-full flex flex-col text-left rounded-[1.75rem] border border-white/10 bg-white/[0.04] overflow-hidden backdrop-blur-xl shadow-2xl"
    >
      <div className="h-36 bg-gradient-to-br from-purple-500/30 to-blue-500/20 flex items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition">
          {project.icon}
        </div>
      </div>

      <div className="p-7 flex flex-col flex-grow">
        <p className="text-xs uppercase tracking-[0.25em] text-purple-300 font-bold mb-3">
          {project.date}
        </p>

        <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-200 transition">
          {project.title}
        </h3>

        <p className="text-gray-300 leading-relaxed mb-8 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-2 rounded-full text-xs text-purple-200 bg-white/5 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  ))}
</div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-black/90 p-8 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-6 mb-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-purple-300 font-bold mb-3">
                    {selectedProject.date}
                  </p>

                  <h3 className="text-4xl font-bold mb-4">
                    {selectedProject.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="shrink-0 w-10 h-10 rounded-full border border-white/10 hover:bg-white/10 transition"
                >
                  ×
                </button>
              </div>

              <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-gray-500 font-bold mb-3">
                  What I Learned
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.learned}
                </p>
              </div>

              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.25em] text-gray-500 font-bold mb-4">
                  Skills Applied
                </p>

                <div className="flex flex-wrap gap-3">
                  {selectedProject.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full text-sm text-purple-200 bg-white/5 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {selectedProject.link !== "#" && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-[1.03] transition"
                  >
                    Visit Site
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}