import { motion } from "framer-motion";

const skillSections = [
  {
    title: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "C"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "npm",
    ],
  },
  {
    title: "Professional Soft Skills",
    items: [
      "Technical Communication",
      "Problem Solving",
      "Adaptability",
      "Team Collaboration",
      "Leadership",
      "Attention to Detail",
      "Accountability",
      "Customer-Focused Thinking",
      "Time Management",
    ],
  },
];

export default function SkillsDetailed() {
  return (
    <section className="mt-32">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-14"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-6">
          Skills
        </p>

        <h2 className="text-5xl md:text-7xl font-bold leading-tight">
          Languages, Tools <br /> & Professional Strengths
        </h2>
      </motion.div>

      <div className="space-y-8">
        {skillSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.12 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">{section.title}</h3>

            <div className="flex flex-wrap gap-3">
              {section.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-200 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}