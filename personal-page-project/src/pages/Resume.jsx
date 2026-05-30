import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-32 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-3">
              Resume
            </p>
            <h1 className="text-5xl md:text-7xl font-bold">My Resume</h1>
          </div>

          <div className="flex gap-4">
            <Link
              to="/"
              className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
            >
              ← Back Home
            </Link>

            <a
              href="/resume.pdf"
              download
              className="px-5 py-2 rounded-full bg-white text-black font-medium hover:opacity-80 transition"
            >
              Download
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl shadow-2xl">
          <iframe
            src="/resume.pdf"
            title="Sebastian Caro Resume"
            className="w-full h-[900px] rounded-[1.5rem] bg-white"
          />
        </div>
      </div>
    </main>
  );
}