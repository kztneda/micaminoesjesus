import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  derejGibor, derejKavod, derejMesharet, derejOz, derejJaim,
  SEQUENCES, SEASONS, DEREJ, TIPO_LABELS, TIPO_ABBR,
} from '../data/retreats';

const TABS = [
  { key: 'all', label: 'Todos los Caminos' },
  { key: 'gibor', label: 'Hombres · Dérej Gibor', color: 'var(--color-red)' },
  { key: 'kavod', label: 'Mujeres · Dérej Kavod', color: 'var(--color-gold)' },
  { key: 'oz', label: 'Jóvenes (13-30) · Dérej Oz', color: 'var(--color-gold)' },
  { key: 'simja', label: 'Niños · Dérej Simjá', color: 'var(--color-red)' },
  { key: 'mesharet', label: 'Servidores · Dérej Mesharét', color: 'var(--color-gold)' },
  { key: 'jaim', label: 'Comunidad · Dérej Jaím', color: 'var(--color-red)' },
];

const SEQUENCE_FOOTNOTES = {
  'derej-gibor': { note: 'Formato pedagógico secuencial recomendado', route: 'Ruta Hombría Bíblica' },
  'derej-kavod': { note: 'Secuencia formativa de autodescubrimiento y sanación', route: 'Ruta Mujer Nueva' },
};

function SeasonDot({ season }) {
  if (!season || !SEASONS[season]) return null;
  return <span className={`season-dot season-dot--${season}`} title={SEASONS[season].name} />;
}

function TipoTag({ tipo, category }) {
  const label = category || TIPO_LABELS[tipo];
  const abbr = TIPO_ABBR[tipo];
  if (!label || !abbr) return null;
  return <sup className="tipo-tag" title={label}>{abbr}</sup>;
}

function StatusPill({ estado }) {
  if (estado === 'proximamente') {
    return <span className="xplev-pill xplev-pill--pending">Próximamente</span>;
  }
  return <span className="xplev-pill xplev-pill--available">Disponible</span>;
}

// Agrupa una lista de estaciones por su tipo (retiro/taller/hora_santa); lo que no
// tiene tipo asignado (contenido aún sin redactar) cae en un grupo "En preparación".
function groupByTipo(items) {
  const order = ['retiro', 'taller', 'hora_santa'];
  const groups = order
    .map((tipo) => ({
      tipo,
      label: `${TIPO_LABELS[tipo]}s`,
      items: items.filter((item) => item.tipo === tipo),
    }))
    .filter((group) => group.items.length > 0);
  const rest = items.filter((item) => !order.includes(item.tipo));
  if (rest.length) {
    groups.push({ tipo: null, label: 'En preparación', items: rest });
  }
  return groups;
}

// Dérej Gibor/Kavod: secuencia obligatoria de 6 pasos, mostrada como una línea de
// tiempo vertical con nodos numerados.
function DerejSequentialCard({ sequenceKey, colorVar, items, navigate }) {
  const info = SEQUENCES[sequenceKey];
  const footnote = SEQUENCE_FOOTNOTES[sequenceKey];
  return (
    <section id={`xplev-${sequenceKey === 'derej-gibor' ? 'gibor' : 'kavod'}`} className="xplev-card">
      <div className="xplev-card__header">
        <div>
          <span className="xplev-eyebrow" style={{ color: colorVar }}>{info.subtitle}</span>
          <h2 className="xplev-card__title">{info.name}</h2>
          <p className="xplev-card__audience">Audiencia: {info.audience}</p>
        </div>
        <span className="xplev-count-badge">{info.total} Estaciones</span>
      </div>

      <div className="xplev-timeline">
        {items.map((item) => {
          const isPending = item.estado === 'proximamente';
          return (
            <div key={item.id} className={`xplev-timeline__step${isPending ? ' is-pending' : ''}`}>
              <span className={`xplev-timeline__node${isPending ? '' : ' is-active'}`}>{item.paso}</span>
              <div className={`xplev-timeline__content${isPending ? '' : ' is-active'}`}>
                <div className="xplev-timeline__row">
                  <div className="xplev-timeline__title-group">
                    <TipoTag tipo={item.tipo} category={item.category} />
                    <h3>{item.title}</h3>
                  </div>
                  <StatusPill estado={item.estado} />
                </div>
                <div className="xplev-timeline__meta">
                  <SeasonDot season={item.season} />
                  <span>{SEASONS[item.season]?.name}</span>
                  {item.conceptoCentral && <span>• {item.conceptoCentral}</span>}
                </div>
                {!isPending && (
                  <button className="xplev-timeline__cta" onClick={() => navigate(`/proyectos/${item.id}`)}>
                    Ver ficha y temario
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="xplev-card__footer">
        <span>{footnote.note}</span>
        <span className="xplev-card__route" style={{ color: colorVar }}>{footnote.route}</span>
      </div>
    </section>
  );
}

// Dérej Oz: progresión sugerida en 10 hitos, mostrada como una cuadrícula continua
// (no una escalera obligatoria): el orden es orientativo, no una regla dura.
function DerejOzCard({ items, navigate }) {
  const info = DEREJ.oz;
  const counts = items.reduce((acc, item) => {
    if (item.tipo) acc[item.tipo] = (acc[item.tipo] || 0) + 1;
    return acc;
  }, {});
  const countsLabel = ['retiro', 'taller', 'hora_santa']
    .filter((tipo) => counts[tipo])
    .map((tipo) => `${counts[tipo]} ${TIPO_LABELS[tipo]}${counts[tipo] > 1 ? 's' : ''}`)
    .join(' · ');

  return (
    <section id="xplev-oz" className="xplev-card xplev-card--wide">
      <div className="xplev-oz-header">
        <div>
          <span className="xplev-eyebrow" style={{ color: 'var(--color-gold)' }}>{info.subtitle}</span>
          <h2 className="xplev-card__title">{info.name} · {info.audience}</h2>
          <p className="xplev-oz-header__desc">
            Desde el llamado inicial y la confrontación de ideales, pasando por la maduración del
            discipulado, hasta el fuego vivo de Pentecostés. Orden sugerido, no obligatorio.
          </p>
        </div>
        {countsLabel && <span className="xplev-oz-counts">{items.length} experiencias · {countsLabel}</span>}
      </div>

      <div className="xplev-hito-grid">
        {items.map((item) => {
          const isPending = item.estado === 'proximamente';
          return (
            <div key={item.id} className={`xplev-hito${isPending ? ' is-pending' : ' is-active'}`}>
              <div>
                <div className="xplev-hito__top">
                  <span className="xplev-hito__num">{String(item.paso).padStart(2, '0')}</span>
                  <StatusPill estado={item.estado} />
                </div>
                <div className="xplev-timeline__title-group">
                  <TipoTag tipo={item.tipo} category={item.category} />
                  <h3>{item.title}</h3>
                </div>
                {item.conceptoCentral && <p>{item.conceptoCentral}</p>}
              </div>
              <div className="xplev-hito__footer">
                <span>{TIPO_LABELS[item.tipo] || 'Estación'}</span>
                {isPending ? (
                  <span>#{item.paso}</span>
                ) : (
                  <button className="xplev-hito__link" onClick={() => navigate(`/proyectos/${item.id}`)}>
                    Ver programa →
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="xplev-oz-footnote">
        <p>
          <strong>Nota Pastoral:</strong> aunque Dérej Oz tiene un orden pedagógico sugerido, cada
          parroquia puede implementar las estaciones de forma modular según su ciclo pastoral anual.
        </p>
        <button className="btn btn-dark" onClick={() => navigate('/contacto')}>
          Solicitar Guía de Pastoral Juvenil
        </button>
      </div>
    </section>
  );
}

// Dérej Simjá: aún sin estaciones publicadas — placeholder de "próximamente".
function DerejSimjaCard({ navigate }) {
  const info = DEREJ.simja;
  return (
    <section id="xplev-simja" className="xplev-card xplev-card--wide">
      <div className="xplev-card__header" style={{ border: 'none', marginBottom: 0 }}>
        <div>
          <span className="xplev-eyebrow" style={{ color: 'var(--color-red)' }}>{info.subtitle}</span>
          <h2 className="xplev-card__title">{info.name} · {info.audience}</h2>
          <p className="xplev-card__audience">Pedagogía bíblica, asombro y oración para infancia misionera y catequesis.</p>
        </div>
        <span className="xplev-open-tag">En fase de diseño pedagógico</span>
      </div>
      <div className="xplev-empty">
        <div className="xplev-empty__icon">🌱</div>
        <h3>Próximamente — Estaciones en preparación</h3>
        <p>
          Estamos afinando experiencias lúdicas, vivenciales y eucarísticas adaptadas a la
          sensibilidad y etapas de maduración de los más pequeños.
        </p>
        <button className="btn btn-outline" style={{ marginTop: 16 }} onClick={() => navigate('/contacto')}>
          Notificarme cuando esté listo
        </button>
      </div>
    </section>
  );
}

// Dérej Mesharét / Dérej Jaím: catálogos abiertos, sin orden — agrupados por tipo
// de experiencia (retiro / taller / hora santa) como nube de chips.
function DerejOpenCatalogCard({ derejKey, colorVar, items, description, navigate }) {
  const info = DEREJ[derejKey];
  const groups = groupByTipo(items);
  return (
    <section id={`xplev-${derejKey}`} className="xplev-card">
      <div className="xplev-card__header">
        <div>
          <span className="xplev-eyebrow" style={{ color: colorVar }}>{info.subtitle}</span>
          <h2 className="xplev-card__title">{info.name}</h2>
          <p className="xplev-card__audience">{info.audience}</p>
        </div>
        <span className="xplev-open-tag">Catálogo Abierto</span>
      </div>

      <p className="xplev-card__desc">{description}</p>

      {groups.length === 0 && <span className="project-card__nav-empty">Contenido en preparación</span>}

      {groups.map((group) => (
        <div className="xplev-catalog-group" key={group.tipo ?? 'otros'}>
          <div className="xplev-catalog-group__label">
            {group.tipo && <TipoTag tipo={group.tipo} />}
            {group.label}
          </div>
          <div className="xplev-chip-list">
            {group.items.map((item) => {
              const isPending = item.estado === 'proximamente';
              return (
                <button
                  key={item.id}
                  className={`xplev-chip${isPending ? ' is-pending' : ''}`}
                  onClick={() => navigate(`/proyectos/${item.id}`)}
                >
                  <SeasonDot season={item.season} />
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="xplev-card__footer">
        <span>Personalizable a la medida de tu comunidad</span>
        <button className="xplev-card__route-link" style={{ color: colorVar }} onClick={() => navigate('/contacto')}>
          Solicitar para tu parroquia →
        </button>
      </div>
    </section>
  );
}

export default function XpLev() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const handleTabClick = (key) => {
    setActiveTab(key);
    if (key === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(`xplev-${key}`);
    if (!el) return;
    const headerOffset = 150;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      <section className="page-header">
        <div className="eyebrow eyebrow--section">XP Lev · Evangelización por Públicos</div>
        <h1>Itinerarios Vivenciales de Encuentro con Cristo</h1>
        <p>
          Retiros, talleres y adoraciones especialmente diseñados para las etapas de vida y
          vocación de cada persona. Cada hito es un paso consciente en el camino de discipulado.
        </p>
        <div className="xplev-legend">
          <div className="xplev-legend__group">
            <span className="xplev-legend__label">Tiempos litúrgicos:</span>
            {Object.entries(SEASONS).map(([key, s]) => (
              <span className="xplev-legend__item" key={key}>
                <SeasonDot season={key} />
                {s.name}
              </span>
            ))}
          </div>
          <div className="xplev-legend__group">
            <span className="xplev-legend__label">Formatos:</span>
            {['retiro', 'taller', 'hora_santa'].map((tipo) => (
              <span className="xplev-format-badge" key={tipo}>
                <span className="xplev-format-badge__abbr">{TIPO_ABBR[tipo]}</span>
                {TIPO_LABELS[tipo]}
              </span>
            ))}
          </div>
        </div>
      </section>

      <nav className="xplev-tabs" aria-label="Selector de Caminos de Formación">
        <div className="xplev-tabs__nav">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`xplev-tab${activeTab === tab.key ? ' is-active' : ''}`}
              onClick={() => handleTabClick(tab.key)}
            >
              {tab.color && <span className="xplev-tab__dot" style={{ background: tab.color }} />}
              {tab.label}
            </button>
          ))}
        </div>
        <label className="xplev-tabs__filter">
          <input
            type="checkbox"
            checked={onlyAvailable}
            onChange={(e) => setOnlyAvailable(e.target.checked)}
          />
          Solo disponibles ahora
        </label>
      </nav>

      <main className={`xplev-main${onlyAvailable ? ' xplev-main--filtered' : ''}`}>
        <div className="xplev-grid-2">
          <DerejSequentialCard sequenceKey="derej-gibor" colorVar="var(--color-red)" items={derejGibor} navigate={navigate} />
          <DerejSequentialCard sequenceKey="derej-kavod" colorVar="var(--color-gold)" items={derejKavod} navigate={navigate} />
        </div>

        <DerejOzCard items={derejOz} navigate={navigate} />

        <DerejSimjaCard navigate={navigate} />

        <div className="xplev-grid-2">
          <DerejOpenCatalogCard
            derejKey="mesharet"
            colorVar="var(--color-gold)"
            items={derejMesharet}
            description="Módulos independientes para revitalizar el celo pastoral, la técnica evangelizadora y la comunión del equipo servidor."
            navigate={navigate}
          />
          <DerejOpenCatalogCard
            derejKey="jaim"
            colorVar="var(--color-red)"
            items={derejJaim}
            description="Gran repertorio de retiros de impacto, talleres de discernimiento bíblico y Horas Santas temáticas por calendario eclesial."
            navigate={navigate}
          />
        </div>
      </main>

      <section className="cta-banner">
        <div className="eyebrow" style={{ background: 'rgba(199,154,43,0.15)', color: 'var(--color-gold)' }}>
          Acompañamiento Pastoral Integral
        </div>
        <h3>Diseña el Itinerario Anual para tu Comunidad</h3>
        <p>
          Ya sea que busques abrir el camino formativo de hombres (Dérej Gibor), dinamizar a tus
          jóvenes (Dérej Oz) o renovar los ministerios (Dérej Mesharét), adaptamos fechas,
          materiales y predicadores al ritmo de tu diócesis.
        </p>
        <div className="cta-banner__actions">
          <button className="btn btn-gold" onClick={() => navigate('/contacto')}>
            Agendar Reunión de Planificación
          </button>
          <button className="btn btn-outline" onClick={() => navigate('/contacto')}>
            Solicitar Dosier de Experiencias
          </button>
        </div>
      </section>
    </>
  );
}
