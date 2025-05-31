import '/src/styles/global.css';

function App() {
  return (
    <main className="font-sans bg-pink-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-pink-100 px-6 md:px-20 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Texto */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-800 leading-tight">
            Hola, soy Adriana.<br />
            Diseñadora de ideas y <br />
            desarrolladora frontend.
          </h1>
          <p className="mt-4 text-pink-700 text-lg">
            Combino creatividad con código para crear experiencias web lindas y funcionales.
          </p>
          <button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full transition">
            Explorar mi portafolio
          </button>
        </div>

        {/* Imagen circular */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/img/tu-imagen.png"
            alt="Foto de Adriana"
            className="w-64 h-64 object-cover rounded-full border-4 border-pink-300 shadow-md"
          />
        </div>
      </section>
    </main>
  );
}

export default App;
