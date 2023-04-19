import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../src/assets/svg/logo2.svg'
import { HashLink } from 'react-router-hash-link'

const HomeHero = () => {

  return (
    <section className="hero">
      <div className="container container--hero">
        <Logo className="hero__logo" />
        <div className="hero__content">
          <h1 className="hero__title">TRIBO<span style={{ color: '#FF4000', textShadow: '0px 0px 5px #FF4000' }}>LOGIK</span></h1>
          <p className="hero__description">Tribologik su laboratorio de análisis de lubricantes ofrece un programa y un sistema experto exclusivo de análisis de lubricantes para controla la condición de su equipo.</p>
          <HashLink className="button button--hero" to='/#description'>VER MAS</HashLink>
        </div>
      </div>
    </section>
  )
}

export default HomeHero