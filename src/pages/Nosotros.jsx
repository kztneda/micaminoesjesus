import nosotrosImage from '../assets/images/nosotros.webp';

export default function Nosotros() {
  return (
    <>
      <section className="page-header">
        <div className="eyebrow eyebrow--section">Nosotros</div>
        <h1>Quiénes somos</h1>
      </section>

      <section className="section">
        <div className="two-col">
          <div>
            <p>
              Mi Camino es Jesús nace del deseo de acompañar a jóvenes en un encuentro personal y
              transformador con Cristo, dentro de la vida de la Iglesia católica.
            </p>
            <p>
              Con un lenguaje directo y cercano, abrimos un espacio donde la fe se vive con
              alegría, sin dejar de ser exigente y real — para jóvenes, y para quienes alguna vez
              lo fueron.
            </p>
            <p className="attribution">- Jehosua Castañeda</p>
          </div>
          <img src={nosotrosImage} alt="Comunidad en oración" />
        </div>
      </section>

      <section style={{ padding: '0 clamp(20px,6vw,48px) clamp(40px,5vw,64px)' }}>
        <div className="mission-banner">
          <div className="mission-banner__label">Nuestra misión</div>
          <p>Formar discípulos misioneros jóvenes que vivan, anuncien y sirvan el Evangelio con alegría.</p>
        </div>
      </section>

      <section style={{ padding: '0 clamp(20px,6vw,48px) clamp(48px,6vw,72px)' }}>
        <div className="info-grid">
          <div className="info-card">
            <h3>Encuentro</h3>
            <p>Todo comienza con un encuentro real con Jesucristo vivo.</p>
          </div>
          <div className="info-card">
            <h3>Formación</h3>
            <p>Crecemos en la fe con estudio, oración y sacramentos.</p>
          </div>
          <div className="info-card">
            <h3>Comunidad</h3>
            <p>Vivimos la fraternidad como parte esencial del camino.</p>
          </div>
          <div className="info-card">
            <h3>Misión</h3>
            <p>Salimos a anunciar lo que hemos vivido, sin miedo.</p>
          </div>
        </div>
      </section>

      <section
        className="section--white"
        style={{
          padding: '0 clamp(20px,6vw,48px) clamp(56px,7vw,88px)',
          textAlign: 'center',
          paddingTop: 'clamp(56px,7vw,88px)',
        }}
      >
        <div className="verse-badge" style={{ marginTop: 0 }}>
          &ldquo;Sé fuerte y valiente&rdquo; — Josué 1:6
        </div>
      </section>
    </>
  );
}
