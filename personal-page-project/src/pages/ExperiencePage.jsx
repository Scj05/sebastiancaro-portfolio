import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Skills from "../components/Skills";

const experiences = [
  {
    company: "Best Buy",
    location: "Waterloo, ON",
    date: "Oct 2025 - Jan 2026",
    role: "Retail Sales Specialist – Smart Home, Health and Wearables",
    points: [
      "Helped customers troubleshoot smart home, wearable, and mobile technology by identifying setup issues, explaining product features clearly, and guiding them through device and app connections.",
      "Recommended products by asking targeted questions about customer needs, comparing features, and connecting solutions to real use cases, which helped customers make more confident buying decisions.",
      "Supported a busy retail team by assisting with product demonstrations, customer questions, and sales floor coverage, which helped create a smoother and more reliable customer experience.",
    ],
    skills: [
      "Technical Communication",
      "Customer Support",
      "Product Knowledge",
      "Problem Solving",
    ],
  },
  {
    company: "Pro Concrete",
    location: "Oakville, ON",
    date: "Apr 2026 - Aug 2026",
    role: "Construction Labourer",
    points: [
      "Supported concrete projects by preparing materials, organizing tools, and assisting with site setup, which helped the crew complete work more efficiently.",
      "Maintained safety and accuracy during physically demanding tasks by following instructions, handling equipment carefully, and staying aware of the worksite environment.",
      "Worked closely with crew members during preparation, pouring, cleanup, and finishing tasks, which helped keep projects moving on schedule.",
    ],
    skills: [
      "Discipline",
      "Teamwork",
      "Efficiency",
      "Reliability",
    ],
  },
  {
    company: "Oakville Futsal Club",
    location: "Oakville, ON",
    date: "May 2024 - Aug 2024",
    role: "Coach and Trainer",
    points: [
      "Led youth training sessions by organizing drills, explaining techniques, and giving players direct feedback, which helped athletes improve their skills and confidence.",
      "Managed practices and game situations by communicating expectations clearly, keeping players engaged, and adjusting activities based on skill level.",
      "Supported a positive team environment by encouraging discipline, teamwork, and accountability, which helped players stay focused and motivated.",
    ],
    skills: [
      "Leadership",
      "Coaching",
      "Communication",
      "Decision Making",
    ],
  },
  {
    company: "Loblaws Pharmacy",
    location: "Oakville, ON",
    date: "Jan 2024 - Jun 2024",
    role: "Pharmacy Assistant",
    points: [
      "Supported pharmacy operations by preparing medication packaging, organizing patient information, and completing tasks carefully in a detail-focused environment.",
      "Handled sensitive information by following privacy expectations and maintaining accuracy when working with pharmacy systems and patient records.",
      "Assisted the pharmacy team with daily workflow by staying organized, completing assigned tasks on time, and helping maintain a reliable service environment.",
    ],
    skills: [
      "Attention to Detail",
      "Privacy",
      "Organization",
      "Reliability",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden px-6 pt-32 pb-20">
      
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        <Link
          to="/"
          className="inline-block mb-12 px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
        >
          ← Back Home
        </Link>

        {/* SKILLS HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mb-10 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 pb-2 leading-[1.15] text-transparent bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text">
            Skills & Technologies
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A focused overview of the tools, technologies, and strengths I am
            developing through projects and real-world experience.
          </p>
        </motion.div>

        <Skills />

        {/* EXPERIENCE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-24 mb-10 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 pb-2 leading-[1.15] text-transparent bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text">
            Professional Experience
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real-world experience where I developed discipline, teamwork, and
            technical awareness across different environments.
          </p>
        </motion.div>

        {/* EXPERIENCE CARDS */}
        <div className="space-y-10">
          {experiences.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{job.company}</h3>
                  <p className="text-gray-400">{job.location}</p>
                  <p className="text-purple-300 text-sm">{job.role}</p>
                </div>

                <span className="text-sm text-gray-400">
                  {job.date}
                </span>
              </div>

              <ul className="text-gray-300 space-y-2 mb-4">
                {job.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-purple-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}