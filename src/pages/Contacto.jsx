import { useState } from 'react';

const WHATSAPP_NUMBER = '522226093097';

function randomDigit() {
  return Math.floor(Math.random() * 9) + 1;
}

export default function Contacto() {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const [captchaNums, setCaptchaNums] = useState([randomDigit(), randomDigit()]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expected = captchaNums[0] + captchaNums[1];
    const given = parseInt(captchaAnswer, 10);

    if (given !== expected) {
      setCaptchaError(true);
      setCaptchaAnswer('');
      setCaptchaNums([randomDigit(), randomDigit()]);
      return;
    }

    const parts = [];
    if (name) parts.push(`Hola, soy ${name}.`);
    if (message) parts.push(message);
    const text = parts.length ? parts.join(' ') : 'Hola, quisiera más información sobre Mi Camino es Jesús.';
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setFormSent(true);
    setCaptchaError(false);
  };

  return (
    <>
      <section className="page-header">
        <div className="eyebrow eyebrow--section">Contacto</div>
        <h1>Hablemos</h1>
      </section>

      <section className="section">
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Ubicación</h3>
            <p className="contact-info__location">Puebla, Puebla, México</p>
            <h3>Redes sociales</h3>
            <div className="contact-social">
              <a href="#">
                <span className="contact-social__icon">IG</span>
                <span className="contact-social__label">@micaminoesjesus</span>
              </a>
              <a href="#">
                <span className="contact-social__icon">FB</span>
                <span className="contact-social__label">Mi Camino es Jesús</span>
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                <span className="contact-social__icon">WA</span>
                <span className="contact-social__label">+52 222 609 3097</span>
              </a>
              <a href="#">
                <span className="contact-social__icon">TT</span>
                <span className="contact-social__label">@micaminoesjesus</span>
              </a>
            </div>
          </div>

          <div>
            {formSent ? (
              <div className="contact-sent">
                <h3>¡Listo!</h3>
                <p>Abrimos WhatsApp con tu mensaje. Solo confírmalo desde ahí y te responderemos pronto.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label>Nombre</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label>Correo</label>
                  <input
                    type="email"
                    placeholder="tucorreo@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label>Mensaje</label>
                  <textarea
                    placeholder="Cuéntanos en qué podemos ayudarte"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="captcha-box">
                  <label>
                    Verificación: ¿cuánto es {captchaNums[0]} + {captchaNums[1]}?
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Tu respuesta"
                    value={captchaAnswer}
                    onChange={(e) => {
                      setCaptchaAnswer(e.target.value);
                      setCaptchaError(false);
                    }}
                  />
                  {captchaError && <p className="captcha-error">Respuesta incorrecta, intenta de nuevo.</p>}
                </div>
                <button type="submit" className="btn btn-whatsapp">
                  Enviar por WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="verse-banner">
        <p>&ldquo;No temas, porque yo estoy contigo&rdquo; — Isaías 41:10</p>
      </section>
    </>
  );
}
