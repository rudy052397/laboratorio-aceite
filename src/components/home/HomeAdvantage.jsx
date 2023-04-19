import tiempo from '../../assets/webp/time.webp'
import ahorro from '../../assets/webp/ahorro.webp'
import cambioAceite from '../../assets/webp/cambio-aceite.webp'
import ecologico from '../../assets/webp/ecologico.webp'
import eficiencia from '../../assets/webp/eficiencia.webp'
import mantenimiento from '../../assets/webp/mantenimiento.webp'

const advantages = [
  {
    image: tiempo,
    description: "Reducir el tiempo de inactividad y ahorro de tiempo en mantenimiento",
    name: "TIEMPO"
  },
  {
    image: ahorro,
    description: "Ahorro de costos de mantenimiento y en partes de reemplazo",
    name: "AHORRO"
  },
  {
    image: cambioAceite,
    description: "Disminuye la frecuencia en los cambios de aceite",
    name: "LUBRICACIÓN"
  },
  {
    image: ecologico,
    description: "Reducción del impacto ambiental debido al consumo de aceite",
    name: "ECOLOGICO"
  },
  {
    image: eficiencia,
    description: "Extiende el ciclo de vida y aumenta la eficiencia de la maquinaria",
    name: "EFICIENCIA"
  },
  {
    image: mantenimiento,
    description: "Reducir el tiempo de inactividad y ahorro de tiempo en mantenimiento",
    name: "MANTENIMIENTO"
  }
]
const HomeAdvantage = () => {

  return (
    <section className="advantage">
      <div className="container container--advantage">
        <h2 className="advantage__title">VENTAJAS</h2>
        <p className="advantage__description">Basándose en esta experiencia y en un programa de investigación y desarrollo continuo, hemos desarrollado resultados de las pruebas de aceite automáticamente.</p>
        <div className="advantage__content">
          {advantages.map((advantage, index) =>
            <div className="card" key={index}>
              <img className="card__image" src={advantage.image} alt="" />
              <div className='card__image--decorate'>{advantage.name}</div>
              {/* <h3 className="card__title">Title</h3> */}
              <div className='card__body'>
                <p className="card__description">{advantage.description}</p>

              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default HomeAdvantage