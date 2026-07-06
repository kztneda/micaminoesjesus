import { useNavigate } from 'react-router-dom';
import activitiesData from '../data/activities.json';

const activityImages = import.meta.glob('../assets/images/*.{webp,jpg,jpeg,png,avif}', { eager: true });
const getImage = (filename) => {
  if (!filename) return null;
  const entry = activityImages[`../assets/images/${filename}`];
  return entry?.default ?? null;
};

export default function Actividades() {
  const navigate = useNavigate();
  const activities = activitiesData.filter((a) => a.stat === 'active');

  return (
    <>
      <section className="page-header">
        <div className="eyebrow eyebrow--section">Actividades y retiros</div>
        <h1>Vive tu fe en comunidad</h1>
        <p>
          Cada semana y en fechas especiales del año ofrecemos espacios para encontrarte con
          Jesús, formarte y servir junto a otros jóvenes.
        </p>
      </section>

      <section className="section">
        {activities.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--color-gray)', padding: '40px 0' }}>
            Próximamente nuevas actividades. ¡Mantente al pendiente!
          </p>
        ) : (
          <div className="activity-grid">
            {activities.map((act) => (
              <div className="activity-card" key={act.id}>
                {getImage(act.img)
                  ? <div className="activity-card__img"><img src={getImage(act.img)} alt={act.title} /></div>
                  : <div className="activity-card__img--placeholder" />
                }
                <div className="activity-card__body">
                  <div className="activity-card__date">{act.dates}</div>
                  <h3>{act.title}</h3>
                  <p>{act.desc}</p>
                  {act.url && (
                    <a className="btn btn-gold" href={act.url} target="_blank" rel="noopener noreferrer">
                      Inscribirme
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="cta-banner">
        <h3>¿Quieres inscribirte a una actividad?</h3>
        <button className="btn btn-gold" onClick={() => navigate('/contacto')}>
          Contáctanos
        </button>
      </section>
    </>
  );
}
