import { motion } from "framer-motion";

const skillCards = [
  {
    title: "Frontend Development",
    desc: "Building clean, responsive interfaces with React, Tailwind, and modern UI patterns.",
  },
  {
    title: "Full-Stack Development",
    desc: "Connecting frontend applications to databases, authentication, APIs, and backend services.",
  },
  {
    title: "AI & Cybersecurity",
    desc: "Expanding knowledge in artificial intelligence, cybersecurity, and secure software systems.",
  },
];

const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "SQL", "Java", "HTML/CSS", "C"],
  },
  {
    label: "Frameworks",
    items: ["React", "Tailwind", "Vite"],
  },
  {
    label: "Databases & Cloud",
    items: ["PostgreSQL", "Supabase", "Vercel"],
  },
  {
    label: "Tools",
    items: ["GitHub", "VS Code", "Microsoft 365", "Excel"],
  },
];

export default function Skills() {
  return (
    <section className="relative py-20 px-6 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {skillCards.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">
                {skill.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* TECH GROUPS */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl shadow-2xl"
        >
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="grid md:grid-cols-[180px_1fr] gap-4 py-5 border-b border-white/10 last:border-b-0"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-bold">
                {group.label}
              </p>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full text-sm text-purple-200 bg-white/5 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}