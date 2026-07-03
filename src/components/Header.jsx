import { NavLink, useNavigate } from 'react-router-dom';
import logotipo from '../assets/logos/logotipo.png';

export default function Header() {
  const navigate = useNavigate();

  const linkClass = ({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`;

  return (
    <header className="site-header">
      <img
        src={logotipo}
        alt="Mi Camino es Jesús"
        className="site-header__logo"
        onClick={() => navigate('/')}
      />
      <nav className="site-nav">
        <NavLink to="/" end className={linkClass}>Inicio</NavLink>
        <NavLink to="/nosotros" className={linkClass}>Nosotros</NavLink>
        <NavLink to="/actividades" className={linkClass}>Actividades</NavLink>
        <NavLink to="/proyectos" className={linkClass}>Proyectos</NavLink>
        <NavLink to="/contacto" className="site-nav__cta">Contacto</NavLink>
      </nav>
    </header>
  );
}
