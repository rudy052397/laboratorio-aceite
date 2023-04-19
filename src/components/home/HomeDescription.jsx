import oil from '../../assets/images/oil.png'
// import useMediaQuery from '../../hooks/useMediaQuery'


const HomeDescription = () => {

  // const mediaQuery = useMediaQuery('(min-width:768px)')

  return (
    <section className='description' id='description'>
      <div className="container container--description">
        <img className='description__image' src={oil} alt="aceite" />
        <div className='description__content'>
          <h2 className='description__title'>NUESTRO SISTEMA</h2>
          <p className='description__description'>Tribologik® es un sistema experto de análisis de lubricantes desarrollado por Predictive Maintenance Corporation (PMC), un laboratorio de análisis de aceites ubicado en Montreal, Québec, Canadá.
            Fundado en 1984, nuestro laboratorio es considerado como uno de los laboratorios de pruebas de aceites más experimentado de Norteamérica.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomeDescription