import "./App.css";
import profile from "./assets/profile.jpg";

export default function App() {
  return (
    <div className="app">
      <header className="header header-row">
        <div className="header-text">
          <h1 className="name">Manuel Gabilondo</h1>
          <p className="role">Desarrollador Web · Microsoft 365</p>
        </div>

        <img src={profile} alt="Foto de Manuel" className="photo photo-right" />
      </header>

      <main className="main">
        {/* PERFIL PROFESIONAL */}
        <section className="card">
          <h2>Perfil profesional</h2>
          <p>
            Profesional especializado en el desarrollo y mantenimiento de soluciones
            empresariales basadas en Business Central y AL. Con experiencia en la
            modernización de sistemas NAV OnPrem hacia Business Central Cloud,
            aplicando prácticas orientadas a la eficiencia, la escalabilidad y la
            mejora continua de procesos internos.
          </p>
        </section>

        {/* COMPETENCIAS */}
        <section className="card">
          <h2>Competencias técnicas</h2>
          <div className="chips">
            <span>AL / Business Central</span>
            <span>NAV OnPrem</span>
            <span>Manufacturing</span>
            <span>ExcelBuffer</span>
            <span>React Native</span>
            <span>JavaScript</span>
          </div>
        </section>

        {/* PROYECTOS */}
        <section className="card">
          <h2>Proyectos</h2>
          <p>Listado de proyectos en desarrollo o pendientes de publicación.</p>
          <ul className="list">
            <li>No hay proyectos publicados actualmente.</li>
          </ul>
        </section>

        {/* EXPERIENCIA */}
        <section className="card">
          <h2>Experiencia profesional</h2>
          <ul className="list">
            <li>
              <strong>d4b</strong> — Participación en procesos de migración desde
              NAV OnPrem hacia Business Central Cloud, incorporando mejoras en
              reportes, páginas y codeunits para adaptarlos a entornos modernos.
            </li>
            <li>
              Optimización de rendimiento mediante técnicas como FindSet,
              estrategias de caching y reducción de operaciones Modify.
            </li>
            <li>
              Experiencia en módulos de fabricación: Routing, BOM,
              CalculateProdOrder y TransferRouting.
            </li>
            <li>
              Desarrollo de automatizaciones para importaciones CIRCULA y
              generación de documentos Excel mediante ExcelBuffer.
            </li>
          </ul>
        </section>

        {/* CONTACTO */}
        <section className="card">
          <h2>Contacto</h2>
          <div className="contact">
            <a href="mailto:tu-email@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/tu-perfil" target="_blank">
              LinkedIn
            </a>
            <a href="https://github.com/tu-usuario" target="_blank">
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">© 2026 Manuel</footer>
    </div>
  );
}
