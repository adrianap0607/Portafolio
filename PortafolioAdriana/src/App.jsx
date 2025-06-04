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
import { useState, useEffect, useRef } from 'react';
import camaraImg from '/src/assets/camara.jpg';
import chatImg from '/src/assets/chat.svg';
import memory from "/src/assets/memoria.svg";
import calculadora from "/src/assets/calculadora.svg";
import inventario from "/src/assets/inventario.svg";
import foto from "./assets/foto.jpg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.1 });

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(sectionRefs.current).forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  return (
    <main className="relative font-sans bg-[#FFC8DD] min-h-screen">
      <nav className="w-full bg-white shadow-md py-4 px-6 flex flex-wrap items-center justify-between text-pink-700 font-medium">
        <div className="flex items-center justify-between w-full md:w-auto">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
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
            Skills
          </a>
          <a
            href="#footer"
            className="block md:inline text-lg px-4 py-2 transition text-[#E7C0E9] hover:bg-[#F7E4F5] rounded"
          >
            Contact
          </a>
        </div>
      </nav>
      <div
        ref={el => sectionRefs.current["home"] = el}
        id="home"
        className={`transition-all duration-700 ease-in-out transform ${
          visibleSections["home"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <section className="h-screen bg-[url('/src/assets/fondo.svg')] bg-cover bg-center flex flex-col items-center justify-center text-center px-4">
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
      </div>

      <div
        ref={el => sectionRefs.current["about"] = el}
        id="about"
        className={`transition-all duration-700 ease-in-out transform ${
          visibleSections["about"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <section className="min-h-screen bg-[#ffecef] px-6 md:px-20 py-24 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative transform rotate-[-3deg]">
              <div className="absolute bottom-0 right-0 w-64 md:w-80 h-80 bg-[#E7C0E9] translate-x-4 translate-y-4 rounded z-[-10]" />
              <div className="w-64 md:w-80 h-80 bg-white border-4 border-white rounded shadow-lg overflow-hidden ">
                <img src={foto} alt="Adriana Palacios" className="w-full h-full object-cover object-top" />
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
            <a href="#footer" className="bg-[#A0E0D8] text-pink-900 font-semibold py-2 px-5 rounded-full hover:bg-[#76c7ba] transition shadow inline-block">
              Contact Me →
            </a>
          </div>
        </section>
      </div>

      <div
        ref={el => sectionRefs.current["skills"] = el}
        id="skills"
        className={`transition-all duration-700 ease-in-out transform ${
          visibleSections["skills"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <section className="min-h-screen bg-[#ffe5ea] px-6 md:px-20 pt-44 pb-32 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-pink-800 mb-6 mt-4 font-['DynaPuff']">
            My Frontend Skills
          </h2>
          <p className="text-pink-700 text-base md:text-lg max-w-xl mx-auto mb-10">
            These are the tools and skills I use to create responsive, accessible, and beautiful user interfaces.
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
                className="w-40 h-16 flex items-center justify-center gap-2 rounded-full text-lg font-medium text-white border-2 transition-all duration-300 hover:brightness-110 hover:scale-105"
                style={{
                  backgroundColor: tech.color,
                  borderColor: tech.color,
                  boxShadow: `0 0 0 transparent`,
                  transition: 'all 0.3s ease-in-out',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 10px ${tech.color}`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = `0 0 0 transparent`}
              >
                <img src={tech.icon} alt={tech.name} className="w-6 h-6 invert brightness-0" />
                {tech.name}
              </span>
            ))}
          </div>
        </section>
      </div>

      <div
        ref={el => sectionRefs.current["projects"] = el}
        id="projects"
        className={`transition-all duration-700 ease-in-out transform ${
          visibleSections["projects"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <section className="min-h-screen bg-[#ffdfE5] px-6 md:px-20 py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-pink-800 mb-6 font-['DynaPuff']">
            My Projects
          </h2>
          <p className="text-pink-700 text-base md:text-lg max-w-xl mx-auto mb-10">
            These are some of the projects I've worked on.
          </p>
          <div className="grid md:grid-cols-3 gap-6 justify-items-center">
            <a
              href="https://github.com/adrianap0607/labcss"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#FEC6C1] rounded-2xl shadow-md overflow-hidden transform transition-transform hover:scale-[1.02] hover:shadow-[0_4px_20px_#f99db6] w-full max-w-sm mx-auto"
            >
              <img src={camaraImg} alt="Camara Polaroid CSS" className="w-full aspect-square object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end items-start text-left">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">Cámara Polaroid</h3>
                <p className="text-white text-xs mb-2 line-clamp-2">
                  A fully responsive Polaroid-style camera built using pure CSS.
                </p>
                <span className="inline-block text-white text-xs font-medium px-4 py-1 rounded-full mt-2 w-fit bg-[rgba(254,198,193,0.75)]">CSS</span>
              </div>
            </a>
            <a
              href="https://github.com/adrianap0607/labjs"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#E7C0E9] rounded-2xl shadow-md overflow-hidden transform transition-transform hover:scale-[1.02] hover:shadow-[0_4px_20px_#e084c8] w-full max-w-sm mx-auto"
            >
              <img src={chatImg} alt="Chat JS Project" className="w-full aspect-square object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end items-start text-left">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">Chat</h3>
                <p className="text-white text-xs mb-2 line-clamp-2">
                  A real-time chat application using only JavaScript, featuring dynamic message display and input validation.
                </p>
                <span className="inline-block text-white text-xs font-medium px-4 py-1 rounded-full mt-2 w-fit bg-[rgba(231,192,233,0.75)]">JavaScript</span>
              </div>
            </a>
            <a
              href="https://github.com/adrianap0607/labmemoria"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#ffc0cb] rounded-2xl shadow-md overflow-hidden transform transition-transform hover:scale-[1.02] hover:shadow-[0_4px_20px_#ff85a2] w-full max-w-sm mx-auto"
            >
              <img src={memory} alt="Memory Game" className="w-full aspect-square object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end items-start text-left">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">Memory Game</h3>
                <p className="text-white text-xs mb-2 line-clamp-2">
                  An memory card game developed with React, featuring smooth animations and styled with modern design.
                </p>
                <div className="flex gap-2 flex-wrap mt-2">
                  {["React", "HTML", "CSS", "JavaScript"].map((tech, index) => (
                    <span
                      key={tech}
                      className="inline-block text-white text-xs font-medium px-4 py-1 rounded-full"
                      style={{
                        backgroundColor: [
                          "rgba(228, 202, 75, 0.75)",
                          "rgba(160, 224, 216, 0.75)",
                          "rgba(224, 118, 169, 0.75)",
                          "rgba(244, 159, 81, 0.75)"
                        ][index]
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-1 md:gap-2 mt-2 md:mt-4">
            <a
              href="https://github.com/adrianap0607/Proyecto1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#fbaac1] rounded-2xl shadow-md overflow-hidden transform transition-transform hover:scale-[1.02] hover:shadow-[0_4px_20px_#fb83a8] w-full max-w-sm mx-auto"
            >
              <img src={calculadora} alt="Calculadora" className="w-full aspect-square object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end items-start text-left">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">Calculadora</h3>
                <p className="text-white text-xs mb-2 line-clamp-2">
                  A beautiful and creative web calculator with components, custom hooks, and built-in tests.
                </p>
                <div className="flex gap-2 flex-wrap mt-2">
                  {["React", "HTML", "CSS", "JavaScript"].map((tech, index) => (
                    <span
                      key={tech}
                      className="inline-block text-white text-xs font-medium px-4 py-1 rounded-full"
                      style={{
                        backgroundColor: [
                          "rgba(228, 202, 75, 0.75)",
                          "rgba(160, 224, 216, 0.75)",
                          "rgba(224, 118, 169, 0.75)",
                          "rgba(244, 159, 81, 0.75)"
                        ][index]
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
            <a
              href="https://github.com/Bamo0507/SistemaReportes"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#d4b0ff] rounded-2xl shadow-md overflow-hidden transform transition-transform hover:scale-[1.02] hover:shadow-[0_4px_20px_#b088ff] w-full max-w-sm mx-auto"
            >
              <img src={inventario} alt="Inventory Report System" className="w-full aspect-square object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end items-start text-left">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">Inventory Report System</h3>
                <p className="text-white text-xs mb-2 line-clamp-2">
                  A data-driven system that integrates reports from PostgreSQL using Express.js and React to visualize inventory and client insights.
                </p>
                <div className="flex gap-2 flex-wrap mt-2">
                  {["React", "Express.js", "PostgreSQL"].map((tech, index) => (
                    <span
                      key={tech}
                      className="inline-block text-white text-xs font-medium px-4 py-1 rounded-full"
                      style={{
                        backgroundColor: [
                          "rgba(228, 202, 75, 0.75)",
                          "rgba(160, 224, 216, 0.75)",
                          "rgba(224, 118, 169, 0.75)"
                        ][index]
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
      <div
        ref={el => sectionRefs.current["footer"] = el}
        id="footer"
        className={`transition-all duration-700 ease-in-out transform ${
          visibleSections["footer"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <footer className="bg-[#ffecef] text-pink-700 px-6 md:px-20 py-12 font-medium">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-semibold mb-1 font-['DynaPuff'] text-pink-700">Let’s Connect!</h3>
              <p className="mb-2 text-sm text-pink-700">
                Would you like to work with me or have a project in mind?<br />
                I’m ready to hear from you! 
              </p>
              <p className="text-base text-pink-700">adrianaP2670@gmail.com</p>
              <p className="text-base text-pink-700">+502 4642-8883</p>
            </div>
            <a
              href="https://github.com/adrianap0607"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition text-pink-700"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="w-10 h-10 text-pink-700"
                style={{ filter: "invert(41%) sepia(16%) saturate(1564%) hue-rotate(294deg) brightness(92%) contrast(92%)" }}
              />
            </a>
          </div>
          <p className="text-sm text-pink-700 text-center mt-6">© {new Date().getFullYear()} Adriana Palacios. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}

export default App;
