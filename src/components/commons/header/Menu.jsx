import { Link } from "react-router-dom"

const Menu = ({ menuOpen, setMenuOpen }) => {

  const menuClose = () => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <ul className={`menu ${menuOpen == true ? 'menu--open' : ''}`}>
      <li>
        <Link className="menu__item" to='/' onClick={menuClose}>INICIO</Link>
      </li>
      <li>
        <Link className="menu__item" to='/servicios' onClick={menuClose}>SERVICIOS</Link>
      </li>
      <li>
        <Link className="menu__item" to='/productos' onClick={menuClose}>PRODUCTOS</Link>
      </li>
      <li>
        <Link className="menu__item" to='/nosotros' onClick={menuClose}>NOSOTROS</Link>
      </li>
      <li>
        <Link className="menu__item" to='/contactos' onClick={menuClose}>CONTACTO</Link>
      </li>
    </ul>
  )
}

export default Menu