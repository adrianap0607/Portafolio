import '/src/styles/global.css';

function App() {
  return (
    <main className="font-sans bg-[#fef2f2] min-h-screen">
      <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-center gap-10 text-pink-700 font-medium">
        <a href="#about" className="hover:text-pink-900 transition">About Me</a>
        <a href="#projects" className="hover:text-pink-900 transition">Projects</a>
        <a href="#skills" className="hover:text-pink-900 transition">Technologies</a>
        <a href="#contact" className="hover:text-pink-900 transition">Contact</a>
      </nav>
      <section className="relative bg-pink-200 px-6 md:px-20 h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-16 overflow-hidden">
        <div className="md:w-1/2 flex justify-center">
          <div className="w-52 h-52 bg-pink-300 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300">
          </div>
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-800 leading-tight font-['DynaPuff']">
            Hello, I'm Adriana.
          </h1>
          <p className="mt-3 text-pink-700 text-base md:text-lg max-w-md">
            Frontend Developer focused on UI/UX, intuitive experiences, and human-centered design.
          </p>
          <button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full transition">
            Explore my portfolio
          </button>
        </div>

      </section>

      <section id="about" className="bg-pink-100 px-6 md:px-20 py-24 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 flex justify-center">
          <div className="relative transform rotate-[-3deg]">
            <div className="w-64 md:w-80 h-80 bg-white border-4 border-white rounded shadow-lg flex items-center justify-center text-pink-300 text-xl italic">
              Imagen
            </div>
            <div className="absolute bottom-0 right-0 w-64 md:w-80 h-80 bg-[#E7C0E9] -z-10 translate-x-4 translate-y-4 rounded" />
          </div>
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-800 mb-2 font-['DynaPuff']">
            About Me
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-pink-700 mb-4">
            I'm Adriana, a frontend designer specialized in UI/UX.
          </h3>
          <p className="text-pink-700 text-lg leading-relaxed mb-6">
            I love designing digital interfaces that are both visually appealing and functional.
            My focus is on understanding how users think, what they need, and how to enhance their digital experience 
            so every interaction is clear, accessible, and enjoyable.
            Design, to me, is a way to communicate and connect with people effectively.
          </p>
          <button className="bg-[#A0E0D8] text-pink-900 font-semibold py-2 px-5 rounded-full hover:bg-[#76c7ba] transition shadow">
            Contact Me →
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
