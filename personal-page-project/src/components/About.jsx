import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-black text-white relative overflow-hidden"
    >
      <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/10 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-6">
          About Me
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-10 leading-tight">
          Eager to learn, build, and grow.
        </h2>

        <div className="space-y-6 text-xl text-gray-300 leading-relaxed">
          <p>
            I am a Computer Science student who is eager to learn, improve, and
            contribute to meaningful projects. I enjoy solving problems, helping
            others, and building software that creates real value.
          </p>

          <p>
            I am currently seeking internship opportunities where I can
            strengthen my technical skills, gain real-world experience, and work
            with teams that are passionate about building impactful technology.
          </p>

          <p>
            My long-term goal is to grow into the fields of artificial
            intelligence and cybersecurity while continuing to develop strong
            foundations in software engineering and full-stack development.
          </p>
        </div>
      </motion.div>
    </section>
  );
}