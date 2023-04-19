import { ReactComponent as Logo } from '../../../src/assets/svg/logo2.svg'

const HomeHero = () => {

  return (
    <section className="hero">
      <div className="container container--hero">
        <Logo className="hero__logo" />
        <div className="hero__content">
          <h1 className="hero__title">TRIBO<span style={{ color: '#FF4000', textShadow: '0px 0px 5px #FF4000' }}>LOGIK</span></h1>
          <p className="hero__description">Tribologik su laboratorio de análisis de lubricantes ofrece un programa y un sistema experto exclusivo de análisis de lubricantes para controla la condición de su equipo.</p>
          <a className="button button--hero" href='#description'>VER MAS</a>
        </div>
      </div>
    </section>
  )
}

export default HomeHero