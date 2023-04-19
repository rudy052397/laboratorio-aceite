import logo from '../../../assets/svg/logo.svg'
import logoMini from '../../../assets/svg/logo-mini.svg'
import useMediaQuery from '../../../hooks/useMediaQuery'
import Menu from './Menu'
import { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mediaQuery = useMediaQuery('(min-width:992px)')
  const mediaQueryMovil = useMediaQuery('(min-width:768px)')

  return (
    <header className="header">
      <nav className="nav">
        <div className="container container--header">
          {!mediaQuery &&
            <div className={`menu__icon ${menuOpen == true ? "menu__icon--open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} >
              <div className="menu__icon-line">

              </div>
            </div>
          }
          <img className='nav__logo' src={mediaQueryMovil ? logo : logoMini} alt="logo" width='250px' />
          <Menu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
          <button className='button'>LOGIN</button>
        </div>
      </nav>
    </header>
  )
}

export default Header