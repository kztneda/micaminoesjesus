import { useNavigate } from 'react-router-dom';
import isotipoBn from '../assets/logos/isotipo-bn.png';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__logo-col">
          <img src={isotipoBn} alt="" />
        </div>
        <div>
          <div className="site-footer__heading">Explora</div>
          <div className="site-footer__links">
            <button onClick={() => navigate('/')}>Inicio</button>
            <button onClick={() => navigate('/nosotros')}>Nosotros</button>
            <button className="is-hidden" onClick={() => navigate('/actividades')}>Actividades</button>
            <button onClick={() => navigate('/proyectos')}>Proyectos</button>
            <button onClick={() => navigate('/contacto')}>Contacto</button>
          </div>
        </div>
        <div>
          <div className="site-footer__heading">Contacto</div>
          <div className="site-footer__contact">
            Puebla, Puebla, México
            <br />
            @micaminoesjesus
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© 2026 Mi Camino es Jesús</span>
        <span>Escuela de Evangelización Joven</span>
      </div>
    </footer>
  );
}
