import { useNavigate } from 'react-router-dom';
import xpLogo from '../assets/images/xp-lev.png';
import khlogo from '../assets/images/karposhub.png';
import ignisLogo from '../assets/images/proyecto-ignis.webp';
import logosLogo from '../assets/images/proyecto-ignis-et-logos.webp';

export default function Proyectos() {
  const navigate = useNavigate();

  return (
    <>
      <section className="page-header">
        <div className="eyebrow eyebrow--section">Proyectos</div>
        <h1>Con quién caminamos</h1>
        <p>
          Además de la escuela, caminamos junto a otros proyectos que anuncian a Jesús desde
          distintos lenguajes: moda, redes y experiencias de encuentro.
        </p>
      </section>

      <section className="section">
        <div className="project-list">
          <div className="project-card">
            <img src={xpLogo} alt="Logo XP Lev" />
            <div className="project-card__content">
              <div className="project-card__tag">Evangelización por públicos</div>
              <h3>XP Lev</h3>
              <p>
                Retiros, talleres y adoraciones pensados para distintos públicos — hombres, mujeres,
                jóvenes, niños, servidores y comunidad — cada uno un camino (Dérej) de encuentro con
                Cristo.
              </p>
              <button className="btn-link-dark" onClick={() => navigate('/proyectos/xp-lev')}>
                Ver todos los caminos →
              </button>
            </div>
          </div>

          <div className="project-card">
            <img src={khlogo} alt="Logo XP Lev" />
            <div className="project-card__content">
              <div className="project-card__tag">Red profesional · Comunidad católica</div>
              <h3>Karpos Hub</h3>
              <p>
                "Tu vocación, tu red profesional católica": un espacio para que profesionales y
                empresas conecten, hagan networking y vivan su fe también en el ámbito laboral.
              </p>
              <div className="project-card__links">
                <a href="https://karposhub.com" target="_blank" rel="noreferrer" className="btn-link-dark">
                  Visitar karposhub.com →
                </a>
                <a
                  href="https://karposhub.com/como-funciona"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link-outline"
                >
                  Cómo funciona
                </a>
                <a
                  href="https://karposhub.com/profesionales"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link-outline"
                >
                  Profesionales
                </a>
                <a
                  href="https://karposhub.com/empresas"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link-outline"
                >
                  Empresas
                </a>
                <a
                  href="https://karposhub.com/nosotros"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link-outline"
                >
                  Nosotros
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={ignisLogo} alt="Logo Ignis" />
            <div className="project-card__content">
              <div className="project-card__tag">Tienda · Ropa urbana católica</div>
              <h3>Ignis</h3>
              <p>
                Streetwear con identidad católica: piezas que unen fe y estilo urbano para
                expresar tu fe todos los días.
              </p>
              <a href="https://ignisv.com.mx" target="_blank" rel="noreferrer" className="btn-link-dark">
                Visitar ignisv.com.mx →
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={logosLogo} alt="Logo Ignis et Logos" />
            <div className="project-card__content">
              <div className="project-card__tag">Redes sociales · Evangelización en medios</div>
              <h3>Ignis et Logos</h3>
              <p>Contenido para anunciar a Jesús en redes: reels y videos que llevan el Evangelio al lenguaje digital.</p>
              <div className="project-card__links">
                <a
                  href="https://instagram.com/ignis.et.logos"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link-dark"
                >
                  Instagram @ignis.et.logos
                </a>
                <a
                  href="https://www.tiktok.com/@ignis.et.logos"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link-outline"
                >
                  TikTok @ignis.et.logos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
