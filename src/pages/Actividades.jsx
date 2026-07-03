import { useNavigate } from 'react-router-dom';
import activitiesData from '../data/activities.json';

export default function Actividades() {
  const navigate = useNavigate();
  const activities = activitiesData;

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
                <div style={{ background: 'var(--color-bg-alt)', height: 190 }} />
                <div className="activity-card__body">
                  <div className="activity-card__date">{act.dates}</div>
                  <h3>{act.title}</h3>
                  <p>{act.desc}</p>
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
