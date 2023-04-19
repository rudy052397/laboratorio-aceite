import bombardier from '../../assets/images/bombardier.png'
import pratt from '../../assets/images/pratt.png'
import safran from '../../assets/images/safran.png'

const HomeCertification = () => {

  return (
    <section className="certification">
      <div className="container container--certification">
        <h2 className="certification__title">CERTIFICACIONES</h2>
        <p className="certification__description">En aviación, nuestro laboratorio esta certificado por Pratt & Whitney de Canadá, Bombardier y SAFRAN Turbomeca; además proveemos servicios de pruebas de aceites a distintas aerolíneas no solo de Norteamérica, sino también de Europa y la Cuenca del Pacífico.</p>
        <div className="certification__content">
          <img className='certification__image' src={pratt} alt="pratt" />
          <img className='certification__image' src={safran} alt="safran" />
          <img className='certification__image' src={bombardier} alt="bombardier" />
        </div>
      </div>
    </section>
  )
}

export default HomeCertification