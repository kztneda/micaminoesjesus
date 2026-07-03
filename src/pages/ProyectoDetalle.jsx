import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { getRetreatById } from '../data/retreats';

export default function ProyectoDetalle() {
  const navigate = useNavigate();
  const { id } = useParams();
  const retiro = getRetreatById(id);

  if (!retiro) {
    return <Navigate to="/proyectos" replace />;
  }

  const hasBasadoEn = !!retiro.basadoEn;
  const hasVerses = !!(retiro.verses && retiro.verses.length);
  const hasChips = !!(retiro.chips && retiro.chips.length);

  return (
    <>
      <section className="page-header">
        <button className="detalle-back" onClick={() => navigate('/proyectos')}>
          ← Volver a Proyectos
        </button>
        <div className="detalle-header">
          <div className="detalle-tag">{retiro.category} · XP Project</div>
          <h1>{retiro.title}</h1>
          {hasBasadoEn && <p className="detalle-basado">Basado en {retiro.basadoEn}</p>}
          <p className="detalle-concepto">{retiro.conceptoCentral}</p>
        </div>
      </section>

      <section style={{ padding: 'clamp(36px,5vw,56px) clamp(20px,6vw,48px) 0' }}>
        <div className="detalle-image-wrap">
          <img src={retiro.image} alt={`Foto de ${retiro.title}`} className="detalle-image" />
        </div>
      </section>

      <section style={{ padding: 'clamp(32px,5vw,48px) clamp(20px,6vw,48px) clamp(56px,7vw,80px)' }}>
        <div className="detalle-body">
          {hasVerses && (
            <div className="detalle-verses">
              {retiro.verses.map((verse) => (
                <div className="detalle-verse" key={verse}>
                  {verse}
                </div>
              ))}
            </div>
          )}

          {hasChips && (
            <div style={{ marginBottom: 28 }}>
              <div className="detalle-chips-label">{retiro.chipsLabel}</div>
              <div className="detalle-chips">
                {retiro.chips.map((chip) => (
                  <span className="detalle-chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          )}

          {retiro.bloques.map((bloque) => (
            <div className="detalle-bloque" key={bloque.title}>
              <h3>{bloque.title}</h3>
              <p>{bloque.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner cta-banner--tight">
        <h3>¿Quieres más información sobre {retiro.title}?</h3>
        <button className="btn btn-gold" onClick={() => navigate('/contacto')}>
          Contáctanos
        </button>
      </section>
    </>
  );
}
