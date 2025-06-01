import '/src/styles/global.css';
import logo from '/src/assets/logo.svg';
import html5Icon from '/src/assets/html5.svg';
import cssIcon from '/src/assets/css.svg';
import reactIcon from '/src/assets/react.svg';
import tailwindIcon from '/src/assets/tailwind.svg';
import githubIcon from '/src/assets/github.svg';
import figmaIcon from '/src/assets/figma.svg';
import javascriptIcon from '/src/assets/javascript.svg';
import gitIcon from '/src/assets/git.svg';
import { useState, useEffect } from 'react';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <main className="font-sans bg-[#FFC8DD] min-h-screen">
      <nav className="w-full bg-white shadow-md py-4 px-6 flex flex-wrap items-center justify-between text-pink-700 font-medium">
        <div className="flex items-center justify-between w-full md:w-auto">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          {/* Burger menu button for mobile */}
          <button
            className="md:hidden text-pink-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <div className={`md:flex md:items-center md:gap-6 md:w-auto ${isMenuOpen ? "flex flex-col items-center justify-center text-center w-full mt-4 gap-4" : "hidden"}`}>
          <a
            href="#about"
            className="block md:inline text-lg px-4 py-2 transition text-[#E4CA4B] hover:bg-[#FFF5C2] rounded"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="block md:inline text-lg px-4 py-2 transition text-[#A0E0D8] hover:bg-[#DDF7F5] rounded"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block md:inline text-lg px-4 py-2 transition text-[#E076A9] hover:bg-[#FAD6E7] rounded"
          >
            Technologies
          </a>
          <a
            href="#contact"
            className="block md:inline text-lg px-4 py-2 transition text-[#E7C0E9] hover:bg-[#F7E4F5] rounded"
          >
            Contact
          </a>
        </div>
      </nav>
      <section id="home" className="h-screen bg-pink-100 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-pink-900 font-['DynaPuff']">
          Hey, I'm Adriana Palacios
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-pink-700 max-w-2xl">
          Frontend Developer focused on UI/UX and designing meaningful digital experiences.
        </p>
        <button className="mt-10 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-md transition">
          PROJECTS
        </button>
      </section>

      <section id="about" className="min-h-screen bg-pink-100 px-6 md:px-20 py-24 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 flex justify-center">
          <div className="relative transform rotate-[-3deg]">
            <div className="absolute bottom-0 right-0 w-64 md:w-80 h-80 bg-[#E7C0E9] translate-x-4 translate-y-4 rounded z-0" />
            <div className="w-64 md:w-80 h-80 bg-white border-4 border-white rounded shadow-lg flex items-center justify-center text-pink-300 text-xl italic z-10">
              Imagen
            </div>
          </div>
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-semibold text-pink-800 mb-2 font-['DynaPuff']">
            About Me
          </h2>
          <p className="text-pink-700 text-lg leading-relaxed mb-6">
            I'm Adriana, a frontend designer specialized in UI/UX. I love designing digital interfaces that are both visually appealing and functional.
            My focus is on understanding how users think, what they need, and how to enhance their digital experience 
            so every interaction is clear, accessible, and enjoyable.
            Design, to me, is a way to communicate and connect with people effectively.
          </p>
          <button className="bg-[#A0E0D8] text-pink-900 font-semibold py-2 px-5 rounded-full hover:bg-[#76c7ba] transition shadow">
            Contact Me →
          </button>
        </div>
      </section>

      <section id="skills" className="min-h-screen bg-[url('/src/assets/fondo.svg')] bg-cover bg-center px-6 md:px-20 py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-pink-800 mb-6 mt-4 font-['DynaPuff']">
          My Frontend Skills
        </h2>
        <p className="text-pink-700 text-base md:text-lg max-w-xl mx-auto mb-10">
          These are the tools and technologies I use to create responsive, accessible, and beautiful user interfaces.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 justify-items-center">
          {[
            { name: "HTML", color: "#E4CA4B", icon: html5Icon },
            { name: "CSS", color: "#A0E0D8", icon: cssIcon },
            { name: "React", color: "#E076A9", icon: reactIcon },
            { name: "Tailwind", color: "#FEC6C1", icon: tailwindIcon },
            { name: "GitHub", color: "#E7C0E9", icon: githubIcon },
            { name: "Figma", color: "#F49F51", icon: figmaIcon },
            { name: "JavaScript", color: "#ffce68", icon: javascriptIcon },
            { name: "Git", color: "#E076A9", icon: gitIcon }
          ].map((tech, index) => (
            <span
              key={index}
              className="w-40 h-16 flex items-center justify-center gap-2 rounded-full text-lg font-medium text-white border-2 transition-all duration-300 hover:border-white/40 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: tech.color, borderColor: tech.color }}
            >
              <img src={tech.icon} alt={tech.name} className="w-6 h-6 invert brightness-0" />
              {tech.name}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
