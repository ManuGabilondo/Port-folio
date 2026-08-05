import "./App.css";
import profile from "./assets/profile.jpg";
import captura1 from "./assets/syphus/captura1.jpg";
import captura2 from "./assets/syphus/captura2.jpg";

export default function App() {
  return (
    <div className="app">
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

        {/* COMPETENCIAS */}
        <section className="card">
          <h2>Competencias técnicas</h2>
          <div className="chips">
            <span>AL / Business Central</span>
            <span>NAV OnPrem</span>
            <span>Excel</span>
            <span>PHP</span>
            <span>React Native</span>
            <span>JavaScript</span>
          </div>
        </section>

       {/* PROYECTOS */}
<section className="card">
  <h2>Proyectos</h2>

  <div className="project">
    <h3>Syphus — Plataforma web para gestión de entrenamientos</h3>
    <p>
      Aplicación web desarrollada para un gimnasio orientado a deportes de alto rendimiento.
      Incluye gestión de usuarios, planificación de sesiones, seguimiento de progreso y
      administración interna. Diseñada con enfoque en usabilidad, rendimiento y claridad
      visual para facilitar el trabajo tanto de entrenadores como de deportistas.
    </p>

   
  <div className="project-images">
    <img src={captura1} alt="Syphus captura 1" />
    <img src={captura2} alt="Syphus captura 2" />
  </div>
  </div>

  <ul className="list">
    <li>Más proyectos disponibles próximamente.</li>
  </ul>
</section>


       {/* EXPERIENCIA PROFESIONAL */}
<section className="card">
  <h2>Experiencia profesional</h2>
  <ul className="list">
    <li><strong> D4b Solutions/Dimneo SL</strong> · Nov 2023 - Actualidad</li>
    <li>
      Desarrollo de soluciones digitales para empresas, incluyendo páginas web,
      herramientas internas y aplicaciones adaptadas a sus necesidades.
    </li>
    <li>
      Creación de interfaces claras y fáciles de usar para que cualquier persona
      pueda trabajar con ellas sin complicaciones.
    </li>
    <li>
      Adaptación y modernización de sistemas antiguos para que funcionen de forma
      más rápida, segura y actual.
    </li>
    <li>
      Colaboración con equipos y clientes para transformar ideas en productos
      digitales reales y funcionales.
    </li>
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
      </main>

      <footer className="footer">© 2026 Manuel Gabilondo</footer>
    </div>
  );
}
