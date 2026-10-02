import "./App.css";
import profile from "./assets/profile.jpg";
import captura1 from "./assets/syphus/captura1.jpg";
import captura2 from "./assets/syphus/captura2.jpg";
import montoro1 from "./assets/montoro/montoro1.png";
import montoro2 from "./assets/montoro/montoro2.png";

export default function App() {
  return (
    <div className="app">
      <div className="container">

        <header className="header header-row">
          <div className="header-text">
            <h1 className="name">Manuel Gabilondo</h1>
            <p className="role">Desarrollador Web · Microsoft 365 Developer</p>
          </div>

          <img src={profile} alt="Foto de Manuel" className="photo photo-right" />
        </header>

        <main className="main">

          {/* PERFIL PROFESIONAL */}
          <section className="card">
            <h2>Perfil profesional</h2>
            <p>
              +3 años como profesional especializado en el desarrollo y mantenimiento de soluciones
              empresariales y diseño y desarrollo de páginas y aplicaciones web. Con experiencia en la
              modernización de sistemas.
            </p>
          </section>

          

          {/* PROYECTOS */}
          <section className="card">
            <h2>Proyectos profesionales</h2>

            <div className="project">
              <h3>Syphus — Plataforma web para gestión de entrenamientos</h3>
              <p>
                Aplicación web desarrollada para un gimnasio orientado a deportes de alto rendimiento.
                Incluye gestión de usuarios, planificación de sesiones, seguimiento de progreso y
                administración interna.
              </p>

              <div className="project-images">
                <img src={captura1} alt="Syphus captura 1" />
                <img src={captura2} alt="Syphus captura 2" />
              </div>
            </div>

            <div className="project">
              <h3>Montoro — Web para joyería y relojería</h3>
              <p>
                Página web de presentación para una joyería y relojería local. Incluye quiénes son,
                a qué se dedican, horario, ubicación con enlace a cómo llegar, y contacto por email
                e Instagram.
              </p>

              <div className="project-images">
                <img src={montoro1} alt="Montoro — página de inicio" />
                <img src={montoro2} alt="Montoro — sección de contacto" />
              </div>

              <p>
                <a href="https://manugabilondo.github.io/montoro-web/" target="_blank" rel="noopener noreferrer">
                  Ver sitio en vivo
                </a>
              </p>
            </div>

            <ul className="list">
              <li>Más proyectos disponibles próximamente.</li>
            </ul>
          </section>

          {/* EXPERIENCIA PROFESIONAL */}
          <section className="card">
            <h2>Experiencia profesional</h2>
            <ul className="list">
              <li><strong>D4b Solutions/Dimneo SL</strong> · Nov 2023 - Actualidad</li>
              <li>Desarrollo de soluciones digitales para empresas.</li>
              <li>Creación de interfaces claras y fáciles de usar.</li>
              <li>Modernización de sistemas antiguos.</li>
              <li>Colaboración con equipos y clientes.</li>
            </ul>
          </section>

          {/* CONTACTO */}
          <section className="card">
            <h2>Contacto</h2>
            <div className="contact">
              <a href="mailto:mngabilondo@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/manuel-gabilondo-echuaka-87827a259/" target="_blank">
                LinkedIn
              </a>
              <a href="https://github.com/ManuGabilondo" target="_blank">
                GitHub
              </a>
            </div>
          </section>
{/* COMPETENCIAS */}
          <section className="card">
            <h2>Competencias técnicas</h2>
            <div className="chips">
              <span>AL / Business Central</span>
              <span>NAV OnPrem</span>
              <span>C/AL</span>
              <span>Excel</span>
              <span>Power BI</span>
              <span>Power Automate</span>
              <span>SQL Server / T-SQL</span>
              <span>PHP</span>
              <span>React Native</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>HTML5 / CSS3</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>Laravel / Symfony</span>
              <span>MySQL / PostgreSQL</span>
              <span>API REST / OData</span>
              <span>Git / Azure DevOps</span>
            </div>
          </section>
        </main>

        <footer className="footer">© 2026 Manuel Gabilondo</footer>

      </div>
    </div>
  );
}

