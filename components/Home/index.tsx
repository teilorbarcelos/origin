import styles from './styles.module.css'
import Image from 'next/image'
import img1 from '../../public/img1.jpg'
import globals from '../../styles/globals.module.css'
import Button from '../Button'

export default function Home() {
  return (
    <section className={`${styles.home}`} id="home">
      <div className={`${styles.container} ${globals.grid}`}>
        <div className={styles.image}>
          <Image className={globals.img} src={img1} alt="Ilustração do trabalho no salão de beleza." />
        </div>
        <div className={styles.text}>
          <h2 className={globals.title}>Saúde natural para os seus cabelos</h2>
          <p>Um salão exclusivo em São Paulo, especializado em tratamentos naturais.</p>
          <Button href={'#'} title="Agendar um horário" />
        </div>
      </div>
    </section>
  )
}