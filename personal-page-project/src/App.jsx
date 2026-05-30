import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./pages/Resume";
import ExperiencePage from "./pages/ExperiencePage";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}