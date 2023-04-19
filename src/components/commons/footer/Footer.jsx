import { Facebook, Youtube, Twitter, Instagram, Linkedin, Whatsapp } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import useMediaQuery from '../../../hooks/useMediaQuery';

const Footer = () => {
  const mediaQuery992 = useMediaQuery('(min-width:992px)')
  const mediaQuery576 = useMediaQuery('(min-width:576px)')
  const menuClose = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="footer">
      <nav className='nav nav--footer'>
        <div className="container container--footer">
          <div className='footer__body'>
            {mediaQuery992 &&

              <h2 className='footer__motivation'>NUESTROS<br />OBJETIVOS<br />SON TUS<br />METAS</h2>
            }
            <ul className='footer__menu-contact'>
              <li className='footer__menu-title'>CONTACTO</li>
              <li>
                <a className='footer__contact-link' href='https://www.facebook.com' target='_blank'>
                  <Facebook className='footer__item-contact' />FACEBOOK
                </a>
              </li>
              <li>
                <a className='footer__contact-link' href='https://www.youtube.com' target='_blank'>
                  <Youtube className='footer__item-contact' />YOUTUBE
                </a>
              </li>
              <li>
                <a className='footer__contact-link' href='https://www.twitter.com' target='_blank'>
                  <Twitter className='footer__item-contact' />TWITTER
                </a>
              </li>
              <li>
                <a className='footer__contact-link' href='https://www.instagram.com' target='_blank'>
                  <Instagram className='footer__item-contact' />INSTAGRAM
                </a>
              </li>
              <li>
                <a className='footer__contact-link' href='https://www.linkedin.com' target='_blank'>
                  <Linkedin className='footer__item-contact' />LINKEDIN
                </a>
              </li>
              <li>
                <a className='footer__contact-link' href='https://wa.me/51910190812' target='_blank'>
                  <Whatsapp className='footer__item-contact' />WHATSAPP
                </a>
              </li>

            </ul>
            <ul className='footer__menu-section'>
              <li className='footer__menu-title'>TRIBOLOGIC</li>
              <li>
                <Link className='footer__item-section' to='/' onClick={menuClose}>INICIO</Link>
              </li>
              <li>
                <Link className='footer__item-section' to='/nosotros' onClick={menuClose}>NOSOTROS</Link>
              </li>
              <li>
                <Link className='footer__item-section' to='/servicios' onClick={menuClose}>SERVICIOS</Link>
              </li>
              <li>
                <Link className='footer__item-section' to='/productos' onClick={menuClose}>PRODUCTOS</Link>
              </li>
              <li>
                <Link className='footer__item-section' to='/contactos' onClick={menuClose}>CONTACTO</Link>
              </li>
              <li>
                <Link className='footer__item-section' to='/nosotros' onClick={menuClose}>TRABAJA CON NOSOTROS</Link>
              </li>
            </ul>
            {mediaQuery576 &&
              <ul className='footer__menu-section'>
                <li className='footer__menu-title'>TALENTO</li>
                <li><Link className='footer__item-section'>RUDY MENDOZA</Link></li>
                <li><Link className='footer__item-section'>+51 910190812</Link></li>
                <li><Link className='footer__item-section'>pmoises052397@gmail.com</Link></li>
              </ul>

            }
          </div>
          <div className='footer__legal'>
            <h3 className='footer__text'>Alta Calidad Garantizado por <br /><span className='footer__text-bold'>TRIBOLOGIC</span></h3>
            <div></div>
            <h3 className='footer__text' style={{ textAlign: 'right' }}>© 2023 Tribologic. All rights reserved <br /><span className='footer__text-bold'>IMAGENES E IMPRESIONES ARTISTICAS</span></h3>
          </div>
        </div>
      </nav>
    </footer>
  )
}

export default Footer