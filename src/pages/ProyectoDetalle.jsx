import { useNavigate, useParams, Navigate } from 'react-router-dom';
import {
  getRetreatById, SEQUENCES, SEASONS, DEREJ, TIPO_LABELS,
  derejGibor, derejKavod,
} from '../data/retreats';

const ROUTE_ITEMS = { guibor: derejGibor, kavod: derejKavod };
const ROUTE_COLOR = { guibor: 'var(--color-red)', kavod: 'var(--color-gold)' };
const CTA_PHRASE = { retiro: 'este retiro', taller: 'este taller', hora_santa: 'esta adoración' };
const TIPO_ARTICLE = {
  retiro: 'del Retiro',
  taller: 'del Taller',
  hora_santa: 'de la Adoración',
  vivencial: 'del Vivencial',
  experiencial: 'del Experiencial',
};
const NUMBER_WORDS = { 1: 'Uno', 2: 'Dos', 3: 'Tres', 4: 'Cuatro', 5: 'Cinco', 6: 'Seis', 7: 'Siete', 8: 'Ocho' };

// Íconos de la ficha técnica, tomados de la referencia de diseño (tmp.html).
const FICHA_ICONS = {
  clock: (
    <path
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  ),
  people: (
    <path
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  ),
  building: (
    <path
      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  ),
};

function FichaIcon({ name }) {
  const path = FICHA_ICONS[name];
  if (!path) return null;
  return (
    <svg className="detalle-ficha__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {path}
    </svg>
  );
}

export default function ProyectoDetalle() {
  const navigate = useNavigate();
  const { id } = useParams();
  const retiro = getRetreatById(id);

  if (!retiro) {
    return <Navigate to="/proyectos/xp-lev" replace />;
  }

  const hasBasadoEn = !!retiro.basadoEn;
  const hasConcepto = !!retiro.conceptoCentral;
  const hasImage = !!retiro.image;
  const hasChips = !!(retiro.chips && retiro.chips.length);
  const hasBloques = !!(retiro.bloques && retiro.bloques.length);
  const hasTemas = !!(retiro.temas && retiro.temas.length);
  const temasCount = retiro.temas ? retiro.temas.length : 0;
  const pedagogiaTitulo = `Los ${NUMBER_WORDS[temasCount] || temasCount} Temas ${TIPO_ARTICLE[retiro.tipo] || 'del Encuentro'}`;
  const hasFichaTecnica = !!(retiro.fichaTecnica && retiro.fichaTecnica.length);
  const isPending = retiro.estado === 'proximamente';
  const sequenceInfo = retiro.sequence ? SEQUENCES[retiro.sequence] : null;
  const derejInfo = retiro.derej ? DEREJ[retiro.derej] : null;
  const hasSecondarySeasons = !!(retiro.seasonSecondary && retiro.seasonSecondary.length);
  const tagLabel = retiro.category || TIPO_LABELS[retiro.tipo] || 'Proyecto';
  const audience = derejInfo?.audience;

  const routeItems = retiro.derej ? ROUTE_ITEMS[retiro.derej] : null;
  const showRoute = !!(routeItems && routeItems.length && derejInfo?.esquema === 'secuencial');
  const routeColor = (retiro.derej && ROUTE_COLOR[retiro.derej]) || 'var(--color-red)';
  const ctaPhrase = CTA_PHRASE[retiro.tipo] || 'esta experiencia';

  return (
    <>
      <section className="page-header">
        <div className="detalle-header">
          <div className="detalle-tag">{tagLabel} · XP Lev</div>
          {sequenceInfo && (
            <div className="detalle-sequence">
              {sequenceInfo.name} · {sequenceInfo.subtitle} — Paso {retiro.sequenceStep} de {sequenceInfo.total}
              {retiro.sequenceTheme ? ` · ${retiro.sequenceTheme}` : ''}
            </div>
          )}
          {!sequenceInfo && derejInfo && (
            <div className="detalle-sequence">
              {derejInfo.name} · {derejInfo.subtitle}
              {retiro.paso && derejInfo.pasoTotal ? ` — Paso ${retiro.paso} de ${derejInfo.pasoTotal}` : ''}
              {retiro.paso && !derejInfo.pasoTotal ? ` — orden sugerido ${retiro.paso}` : ''}
            </div>
          )}
          <h1>{retiro.title}</h1>
          {isPending && (
            <div style={{ marginTop: 10 }}>
              <span className="badge-estado badge-estado--proximamente">Próximamente</span>
            </div>
          )}
          <div className="detalle-pills">
            {retiro.season && (
              <span className={`badge-season badge-season--${retiro.season}`}>
                {SEASONS[retiro.season].name}
              </span>
            )}
            {hasSecondarySeasons &&
              retiro.seasonSecondary.map((s) => (
                <span key={s} className={`badge-season badge-season--secondary badge-season--${s}`}>
                  {SEASONS[s].name}
                </span>
              ))}
            {retiro.tipo && TIPO_LABELS[retiro.tipo] && (
              <span className="detalle-pill detalle-pill--tipo">{TIPO_LABELS[retiro.tipo]}</span>
            )}
            {audience && <span className="detalle-pill">{audience}</span>}
          </div>
          {hasBasadoEn && <p className="detalle-basado">Basado en {retiro.basadoEn}</p>}
          {hasConcepto && <p className="detalle-concepto">{retiro.conceptoCentral}</p>}
        </div>
      </section>

      <section style={{ padding: '0 clamp(20px,6vw,48px) clamp(56px,7vw,80px)' }}>
        <div className="detalle-image-wrap">
          {hasImage ? (
            <img src={retiro.image} alt={`Foto de ${retiro.title}`} className="detalle-image" />
          ) : (
            <div className="detalle-image detalle-image--placeholder">
              [Imagen pendiente: {retiro.codigo || retiro.id} — {retiro.title}]
            </div>
          )}
        </div>
      </section>

      <section style={{ padding: '0 clamp(20px,6vw,48px) clamp(56px,7vw,80px)' }}>
        <div className="detalle-body">
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

          {!hasBloques && !hasTemas && (
            <p className="detalle-preparacion">Este contenido está en preparación.</p>
          )}

          {hasBloques && (
            <div className="detalle-modules">
              {retiro.bloques.map((bloque) => (
                <div className="detalle-bloque detalle-bloque--card" key={bloque.title}>
                  <h3>{bloque.title}</h3>
                  <p>{bloque.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {showRoute && (
        <section style={{ padding: '0 clamp(20px,6vw,48px) clamp(56px,7vw,80px)' }}>
          <div className="detalle-route">
            <div className="detalle-route__header">
              <div>
                <span className="detalle-route__eyebrow" style={{ color: routeColor }}>
                  Itinerario Formativo Integral
                </span>
                <h2 className="detalle-route__title">
                  {derejInfo.name}: {derejInfo.subtitle}
                </h2>
              </div>
              <p className="detalle-route__desc">
                Ruta de {derejInfo.pasoTotal} pasos diseñada para madurar el camino de{' '}
                {(audience || '').toLowerCase()}.
              </p>
            </div>
            <div className="detalle-route__grid">
              {routeItems.map((item) => {
                const stepPending = item.estado === 'proximamente';
                const isCurrent = item.id === retiro.id;
                const clickable = !stepPending && !isCurrent;
                return (
                  <div
                    key={item.id}
                    className={`detalle-route__step${isCurrent ? ' is-current' : ''}${stepPending ? ' is-pending' : ''}`}
                    style={isCurrent ? { borderColor: routeColor } : undefined}
                    onClick={clickable ? () => navigate(`/proyectos/${item.id}`) : undefined}
                    role={clickable ? 'button' : undefined}
                    tabIndex={clickable ? 0 : undefined}
                  >
                    <div className="detalle-route__step-top">
                      <span
                        className="detalle-route__num"
                        style={isCurrent ? { background: routeColor, color: '#fff' } : undefined}
                      >
                        {item.sequenceStep}
                      </span>
                      {isCurrent && <span className="detalle-route__current-tag">Actual</span>}
                    </div>
                    <p className="detalle-route__step-title">{item.title}</p>
                    {item.conceptoCentral && <p className="detalle-route__step-desc">{item.conceptoCentral}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {hasTemas && (
        <section style={{ padding: '0 clamp(20px,6vw,48px) clamp(56px,7vw,80px)' }}>
          <div className="detalle-pedagogia">
            <div className="detalle-pedagogia__header">
              <span className="detalle-pedagogia__eyebrow">Pedagogía Vivencial</span>
              <h2 className="detalle-pedagogia__title">{pedagogiaTitulo}</h2>
              <p className="detalle-pedagogia__desc">
                Cada tema combina una evocación, un contenido bíblico y una experiencia concreta que lo hace vida.
              </p>
            </div>
            <div className="detalle-pedagogia__grid">
              {retiro.temas.map((tema, i) => (
                <div className="detalle-pedagogia__card" key={tema.titulo}>
                  <div className="detalle-pedagogia__card-top">
                    <span className="detalle-pedagogia__badge">T{i + 1}</span>
                    <span className="detalle-pedagogia__label">Tema {i + 1} de {temasCount}</span>
                  </div>
                  <h3 className="detalle-pedagogia__card-title">{tema.titulo}</h3>
                  {tema.resumen ? (
                    <>
                      <p>{tema.resumen}</p>
                      {!!(tema.puntos && tema.puntos.length) && (
                        <ul className="detalle-pedagogia__points">
                          {tema.puntos.map((punto) => (
                            <li key={punto}>{punto}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <>
                      {tema.evocacion && <p><em>Evocación:</em> {tema.evocacion}</p>}
                      {tema.actividadIntroductoria && <p><em>Actividad:</em> {tema.actividadIntroductoria}</p>}
                      {tema.contenido && <p>{tema.contenido}</p>}
                      {tema.actividadesAdicionales && <p><em>Actividad adicional:</em> {tema.actividadesAdicionales}</p>}
                      {!!(tema.simbolos && tema.simbolos.length) && (
                        <p><em>Símbolos:</em> {tema.simbolos.join(' · ')}</p>
                      )}
                      {tema.reflexion && <p className="detalle-reflexion">{tema.reflexion}</p>}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {hasFichaTecnica && (
        <section style={{ padding: '0 clamp(20px,6vw,48px) clamp(56px,7vw,80px)' }}>
          <div className="detalle-ficha">
            <div className="detalle-ficha__header">
              <span className="detalle-ficha__eyebrow">Organización Parroquial &amp; Logística</span>
              <h2 className="detalle-ficha__title">Ficha Técnica</h2>
            </div>
            <div className="detalle-ficha__grid">
              {retiro.fichaTecnica.map((item) => (
                <div className="detalle-ficha__card" key={item.label}>
                  <FichaIcon name={item.icon} />
                  <div className="detalle-ficha__label">{item.label}</div>
                  <div className="detalle-ficha__value">{item.value}</div>
                  {item.desc && <p className="detalle-ficha__desc">{item.desc}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cta-banner cta-banner--tight">
        <h3>¿Quieres llevar {ctaPhrase} a tu parroquia o comunidad?</h3>
        <button className="btn btn-gold" onClick={() => navigate('/contacto')}>
          Contáctanos
        </button>
      </section>
    </>
  );
}
