import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <motion.div
  whileHover={{ scale: 1.06 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <Link to="/" className="group flex flex-col leading-none">
    <span className="text-xl font-black tracking-wide bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
      Sebastian Caro
    </span>
    <span className="text-[10px] uppercase tracking-[0.35em] text-purple-300 group-hover:text-white transition">
      Scale with purpose
    </span>
  </Link>
</motion.div>

          <div className="hidden md:flex gap-8 text-sm text-gray-300 items-center">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>

            <Link to="/experience" className="hover:text-white transition">
              Experience
            </Link>

            <Link to="/resume" className="hover:text-white transition">
              Resume
            </Link>

            <motion.button
              onClick={() => setContactOpen(true)}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 25px rgba(168, 85, 247, 0.65)",
              }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(168, 85, 247, 0.2)",
                  "0 0 18px rgba(168, 85, 247, 0.5)",
                  "0 0 0px rgba(168, 85, 247, 0.2)",
                ],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="px-5 py-2 rounded-full bg-purple-500 text-white font-medium border border-purple-300/40"
            >
              Contact Me
            </motion.button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {contactOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setContactOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-[2rem] border border-white/10 bg-black/90 p-8 shadow-2xl"
            >
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.35em] text-purple-300 mb-4">
                  Contact
                </p>

                <h2 className="text-3xl font-bold mb-3">
                  Let’s build something meaningful.
                </h2>

                <p className="text-gray-300 leading-relaxed">
                  Whether it’s an internship opportunity, a project idea, or a
                  quick conversation about technology, I’d be happy to connect.
                </p>
              </div>

              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "mailto:scarojauregui2005@gmail.com?subject=Portfolio Inquiry";
                }}
              >
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Inquiry Request
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tell me what you would like to connect about..."
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-purple-400 resize-none"
                  />
                </div>

                <div className="flex gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 rounded-full bg-white text-black px-5 py-3 font-medium hover:opacity-80 transition"
                  >
                    Send Inquiry
                  </button>

                  <button
                    type="button"
                    onClick={() => setContactOpen(false)}
                    className="rounded-full border border-white/20 px-5 py-3 hover:bg-white/10 transition"
                  >
                    Close
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}