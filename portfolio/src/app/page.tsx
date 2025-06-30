import Image from "next/image";

const trabajos = [
  {
    titulo: "Sistema de Gestión Escolar",
    descripcion:
      "Plataforma web para administración de alumnos, docentes y calificaciones.",
    link: "#",
  },
  {
    titulo: "E-commerce de Electrónica",
    descripcion: "Tienda online con carrito, pagos y panel de administración.",
    link: "#",
  },
  {
    titulo: "App de Tareas Colaborativas",
    descripcion: "Aplicación para organizar tareas y proyectos en equipo.",
    link: "#",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
      <header className="mb-8 text-center">
        <Image
          src="/profile.png"
          alt="Foto de perfil"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-4 border-4 border-blue-300 shadow-lg"
        />
        <h1 className="text-4xl font-bold text-blue-800 mb-2">
          ¡Hola! Soy Ismael
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Soy estudiante de la Universidad de La Punta (ULP), cursando la
          Tecnicatura en Desarrollo de Software. Me apasiona analizar,
          planificar y crear sistemas digitales modernos, accesibles y
          atractivos. Busco crecer profesionalmente y aportar soluciones
          innovadoras a través de la tecnología.
        </p>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Tecnologías que conozco
          </h2>
          <ul className="flex flex-wrap justify-center gap-3">
            <li className="bg-blue-200 text-blue-800 px-4 py-1 rounded-full font-semibold">
              Java
            </li>
            <li className="bg-yellow-200 text-yellow-800 px-4 py-1 rounded-full font-semibold">
              JavaScript
            </li>
            <li className="bg-green-200 text-green-800 px-4 py-1 rounded-full font-semibold">
              NodeJS
            </li>
            <li className="bg-pink-200 text-pink-800 px-4 py-1 rounded-full font-semibold">
              SQL
            </li>
            <li className="bg-purple-200 text-purple-800 px-4 py-1 rounded-full font-semibold">
              PUG
            </li>
            <li className="bg-orange-200 text-orange-800 px-4 py-1 rounded-full font-semibold">
              HTML
            </li>
            <li className="bg-blue-100 text-blue-900 px-4 py-1 rounded-full font-semibold">
              CSS
            </li>
            <li className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full font-semibold">
              JS
            </li>
            <li className="bg-red-200 text-red-800 px-4 py-1 rounded-full font-semibold">
              GIT
            </li>
          </ul>
        </div>
      </header>
      <main className="flex flex-col items-center w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4 mt-8">
          Mis trabajos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {trabajos.map((trabajo, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-400 flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  {trabajo.titulo}
                </h3>
                <p className="text-gray-700 mb-4">{trabajo.descripcion}</p>
              </div>
              <a
                href={trabajo.link}
                className="text-blue-600 hover:underline text-sm font-semibold mt-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver más
              </a>
            </div>
          ))}
        </div>
      </main>
      <section className="w-full max-w-2xl mt-16 mb-8 bg-white rounded-lg shadow p-8 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Contacto</h2>
        <div className="flex gap-6 justify-center">
          <a
            href="https://www.linkedin.com/in/angel-ismael-orozco/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <img
              src="linkedinIcon.svg"
              alt="LinkedIn"
              className="w-10 h-10 mb-1 group-hover:scale-110 transition"
            />
            <span className="text-xs text-blue-700">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Angeli04"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <img
              src="/githubIcon.svg"
              alt="GitHub"
              className="w-10 h-10 mb-1 group-hover:scale-110 transition"
            />
            <span className="text-xs text-gray-700">GitHub</span>
          </a>
          <a
            href="mailto:ismaelaorozco0@gmail.com"
            className="flex flex-col items-center group"
          >
            <img
              src="/gmailIcon.svg"
              alt="Email"
              className="w-10 h-10 mb-1 group-hover:scale-110 transition"
            />
            <span className="text-xs text-red-700">Email</span>
          </a>
        </div>
      </section>
      <footer className="mt-12 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Ismael Orozco | Portfolio personal
      </footer>
    </div>
  );
}
