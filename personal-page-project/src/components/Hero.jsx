import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const roles = [
  "Computer Science Student",
  "Frontend Developer",
  "Software Engineer",
  "AI & Cybersecurity Learner",
  "Full-Stack Developer",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 overflow-hidden bg-black text-white"
    >
      {/* background glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400 mb-5">
            Portfolio
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6 tracking-tight">
            Sebastian <br />
            Caro
          </h1>

          {/* WHO I AM */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">
              Who I Am
            </p>

            {/* Animated roles */}
            <div className="h-10 overflow-hidden mb-4">
              <motion.div
                animate={{ y: ["0%", "-20%", "-40%", "-60%", "-80%", "0%"] }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex flex-col"
              >
                {roles.map((role) => (
                  <p
                    key={role}
                    className="h-10 text-xl md:text-2xl font-semibold tracking-wide text-transparent bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text"
                  >
                    {role}
                  </p>
                ))}
              </motion.div>
            </div>

            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              A Computer Science student focused on growth, with a strong
              interest in artificial intelligence and cybersecurity.
            </p>
          </div>

          {/* WHAT I DO */}
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">
              What I Do
            </p>

            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              I design and build clean, modern applications across frontend and
              backend. If you have an idea or opportunity where I can contribute
              and grow, we should connect.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-[1.03] transition"
            >
              Contact Me
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/sebastian-caro-32774a325/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 hover:scale-[1.03] transition"
            >
              LinkedIn
            </motion.a>

            <motion.a
              href="/resume"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-full border border-purple-400/40 text-purple-200 hover:bg-purple-500/10 hover:scale-[1.03] transition"
            >
              Resume
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 backdrop-blur-xl shadow-2xl">
            <img
              src={profile}
              alt="Sebastian Caro"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-[1.5rem]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}