import nosotrosImage from '../assets/images/nosotros.webp';
import jehosuaImage from '../assets/images/jehosua.jpg';
import cristopherImage from '../assets/images/p-cristopher.jpeg';
import maribelImage from '../assets/images/maribel.jpeg';
import angyImage from '../assets/images/angy.jpeg';

const team = [
  {
    name: 'Pbro. Lic. Theol. Cristopher Cortés Pliego',
    role: 'Fundador y Asr. Espiritual',
    image: cristopherImage,
  },
  {
    name: 'Jehosua A. Castañeda Ortiz',
    role: 'Fundador y Eq. Pastoral',
    image: jehosuaImage,
  },
  {
    name: 'Maribel Pinto Corona',
    role: 'Eq. Pastoral',
    image: maribelImage,
  },
  {
    name: 'Angélica M. Romero Hernández',
    role: 'Eq. Pastoral',
    image: angyImage,
  }
];

function initialsOf(name) {
  const words = name
    .replace(/\b(Pbro|Lic|Theol)\./gi, '')
    .split(' ')
    .filter((word) => word.length > 1);
  const first = words[0]?.[0] ?? '';
  const last = words[words.length - 1]?.[0] ?? '';
  return `${first}${last}`.toUpperCase();
}

export default function Nosotros() {
  return (
    <>
      <section className="page-header">
        <div className="eyebrow eyebrow--section">Nosotros</div>
        <h1>Quiénes somos</h1>
      </section>

      <section style={{ padding: 'clamp(20px,6vw,48px) clamp(20px,6vw,48px) clamp(40px,5vw,64px)' }}>
        <div className="mvo-grid">
          <div className="mvo-card">
            <div className="mvo-card__label">Misión</div>
            <p>
              Formar discípulos misioneros — jóvenes y adultos — que vivan, anuncien y sirvan el
              Evangelio con alegría, siendo un punto de quiebre para el mundo actual.
            </p>
          </div>
          <div className="mvo-card">
            <div className="mvo-card__label">Visión</div>
            <p>
              Ser una escuela de referencia en la Nueva Evangelización, donde cada persona, sin
              importar su edad, encuentre un camino claro de encuentro, formación y misión con
              Jesucristo.
            </p>
          </div>
          <div className="mvo-card">
            <div className="mvo-card__label">Objetivos</div>
            <ul>
              <li>Propiciar encuentros personales con Cristo vivo.</li>
              <li>Formar en la fe con solidez doctrinal y vida sacramental.</li>
              <li>Impulsar comunidad y fraternidad entre jóvenes y adultos.</li>
              <li>Enviar discípulos misioneros a anunciar el Evangelio a todo el mundo actual.</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 clamp(20px,6vw,48px)' }}>
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

      <section className="section">
        <div className="two-col">
          <div>
            <p>
              Mi Camino es Jesús nace con raíz joven, pero su vocación es más grande: ser una
              escuela de Nueva Evangelización que acompaña a personas de toda edad en un encuentro
              personal y transformador con Cristo, dentro de la vida de la Iglesia católica.
            </p>
            <p>
              Creemos que el mundo actual necesita un punto de quiebre. Con un lenguaje directo y
              cercano, abrimos un espacio donde la fe se vive con alegría, sin dejar de ser
              exigente y real — para jóvenes, para adultos, y para quienes buscan un camino de
              regreso a Cristo.
            </p>
            <p className="attribution">- Jehosua Castañeda</p>
          </div>
          <img src={nosotrosImage} alt="Comunidad en oración" />
        </div>
      </section>

      <section style={{ padding: '0 clamp(20px,6vw,48px) clamp(48px,6vw,72px)' }}>
        <div className="section-heading">
          <div className="eyebrow eyebrow--section">Nuestro Equipo</div>
          <h2>Quiénes lo hacen posible</h2>
        </div>
        <div className="team-grid">
          {team.map((member) => (
            <div className="team-card" key={member.name}>
              {member.image ? (
                <img className="team-card__photo" src={member.image} alt={member.name} />
              ) : (
                <div className="team-card__photo team-card__photo--placeholder">
                  {initialsOf(member.name)}
                </div>
              )}
              <div className="team-card__name">{member.name}</div>
              <div className="team-card__role">{member.role}</div>
            </div>
          ))}
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
