import { useNavigate } from 'react-router-dom';
import xpLogo from '../assets/images/proyecto-xp.webp';
import ignisLogo from '../assets/images/proyecto-ignis.webp';
import logosLogo from '../assets/images/proyecto-ignis-et-logos.webp';
import { retiros, talleres } from '../data/retreats';

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
            <img src={xpLogo} alt="Logo XP Project" />
            <div className="project-card__content">
              <div className="project-card__tag">Evangelización por públicos</div>
              <h3>XP Project</h3>
              <p>
                Retiros y talleres pensados para distintos públicos, cada uno una experiencia de
                encuentro con Cristo.
              </p>
              <div className="project-card__nav-grid">
                <div>
                  <div className="project-card__nav-label" style={{ color: 'var(--color-red)' }}>
                    Retiros
                  </div>
                  <div className="project-card__nav-list">
                    {retiros.map((r) => (
                      <button
                        key={r.id}
                        className="project-card__nav-link"
                        onClick={() => navigate(`/proyectos/${r.id}`)}
                      >
                        {r.title} →
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="project-card__nav-label" style={{ color: 'var(--color-gold)' }}>
                    Talleres
                  </div>
                  <div className="project-card__nav-list">
                    {talleres.map((t) => (
                      <button
                        key={t.id}
                        className="project-card__nav-link"
                        onClick={() => navigate(`/proyectos/${t.id}`)}
                      >
                        {t.title} →
                      </button>
                    ))}
                  </div>
                </div>
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
