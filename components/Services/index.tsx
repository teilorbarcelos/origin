import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'
import WomanHairIcon from '../icons/WomanHairIcon'
import TrimIcon from '../icons/TrimIcon'
import CosmeticIcon from '../icons/CosmeticIcon'
import Card from '../Card'

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <WomanHairIcon />,
      title: "Terapia capilar",
      description: "Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos."
    },
    {
      id: 2,
      icon: <TrimIcon />,
      title: "Cortes",
      description: "A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos."
    },
    {
      id: 3,
      icon: <CosmeticIcon />,
      title: "Tratamentos",
      description: "O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo."
    }
  ]
  return (
    <section className={styles.services} id="services">
      <div className={`${globals.container} ${styles.grid}`}>
        <header className={styles.header}>
          <h2 className={globals.title}>Serviços</h2>
          <p className={globals.subtitle}>Com mais de 10 anos no mercado, o <strong className={styles.coloured}>Beautysalon</strong> já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais</p>
        </header>
        <div className={`${styles.cards} ${styles.grid}`}>
          {services.map(service => {
            return (
              <Card
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}