import "./styles.css";

const environment = import.meta.env.VITE_PUBLIC_ENVIRONMENT || "local";
const version = import.meta.env.VITE_PUBLIC_VERSION || "dev-local";

const notes = [
  "Lint, tests y build como compuertas",
  "Promocion por Pull Request",
  "Despliegue de staging en GitHub Pages"
];

export default function App() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Laboratorio 2 · Promocion controlada</p>
        <h1>Release Board V2</h1>
        <p className="hero-copy">
          Aplicacion minima para practicar validacion automatica y promocion
          controlada entre entornos.
        </p>
      </section>

      <section className="grid">
        <article className="card card-accent">
          <h2>Entorno actual</h2>
          <p className="badge">{environment}</p>
          <p>Este valor cambia segun el entorno que construye el pipeline.</p>
        </article>

        <article className="card">
          <h2>Version visible</h2>
          <p className="mono">{version}</p>
          <p>
            Usaremos el SHA corto del commit para identificar que version llego
            a staging.
          </p>
        </article>

        <article className="card">
          <h2>Que controla el pipeline</h2>
          <ul>
            {notes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}

