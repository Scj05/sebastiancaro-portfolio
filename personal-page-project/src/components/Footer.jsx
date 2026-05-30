export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold tracking-wide text-white">
            Sebastian Caro
          </h3>
          <p className="text-sm text-purple-300 tracking-[0.2em] uppercase">
            Scale with purpose
          </p>
        </div>

        <div className="flex justify-center gap-8 text-sm text-gray-400">
          <a
            href="https://www.linkedin.com/in/sebastian-caro-32774a325/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/YOUR-INSTAGRAM/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            Instagram
          </a>

          <a
            href="mailto:scarojauregui2005@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}