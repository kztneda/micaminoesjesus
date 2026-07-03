import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/images/hero.webp';
import isotipo from '../assets/logos/isotipo.png';
import activitiesData from '../data/activities.json';

export default function Home() {
  const navigate = useNavigate();
  const featuredActivity = activitiesData[0];

  return (
    <>
      <section className="hero">
        <div className="hero__blob-top" />
        <div className="hero__blob-bottom" />
        <div className="hero__grid">
          <div>
            <div className="eyebrow">Escuela de Evangelización Joven</div>
            <h1>
              Mi Camino es
              <br />
              <span className="highlight">Jesús</span>
            </h1>
            <p className="lead">
              Una escuela católica para jóvenes que buscan un encuentro real con Jesús, en
              comunidad, formación y misión.
            </p>
            <div className="verse-badge">&ldquo;Sé fuerte y valiente&rdquo; — Josué 1:6</div>
            <div style={{ display: 'flex', gap: 16, marginTop: 36, flexWrap: 'wrap' }}>
              <button className="btn btn-outline" onClick={() => navigate('/nosotros')}>
                Conócenos
              </button>
            </div>
          </div>
          <div className="hero__image-wrap">
            <div className="hero__image-glow" />
            <img src={heroImage} alt="Jóvenes en un retiro" className="hero__image" />
            <img src={isotipo} alt="" className="hero__isotipo" />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-card__bar" style={{ background: 'var(--color-gold)' }} />
            <div
              className="feature-card__num"
              style={{ background: 'var(--color-cream)', color: 'var(--color-red)' }}
            >
              01
            </div>
            <h3>Encuentro</h3>
            <p>Un espacio real para encontrarte con Jesús, sin máscaras ni prisas.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card__bar" style={{ background: 'var(--color-red)' }} />
            <div
              className="feature-card__num"
              style={{ background: 'rgba(139,30,43,0.12)', color: 'var(--color-red)' }}
            >
              02
            </div>
            <h3>Comunidad</h3>
            <p>Caminamos acompañados: nadie recorre este camino solo.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card__bar" style={{ background: 'var(--color-ink)' }} />
            <div
              className="feature-card__num"
              style={{ background: 'rgba(20,41,58,0.1)', color: 'var(--color-ink)' }}
            >
              03
            </div>
            <h3>Misión</h3>
            <p>Formamos discípulos que llevan el Evangelio a donde están sus amigos.</p>
          </div>
        </div>
      </section>

      {featuredActivity && (
        <section className="section section--alt">
          <div className="teaser-card">
            <div>
              <div className="teaser-card__tag">Próxima actividad</div>
              <h3>{featuredActivity.title}</h3>
              <div className="teaser-card__dates">{featuredActivity.dates}</div>
              <p>{featuredActivity.desc}</p>
            </div>
            <button className="btn btn-dark" onClick={() => navigate('/actividades')}>
              Ver todas las actividades →
            </button>
          </div>
        </section>
      )}
    </>
  );
}
