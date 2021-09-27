import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import img1 from '../../public/img1.jpg'
import globals from '../../styles/globals.module.css'
import Button from '../Button'
import Divider1 from '../Divider1'

export default function Main() {
  return (
    <main className={styles.main}>
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

      <Divider1 />

      <section className={styles.about} id="about">
        <div className={`${globals.container} ${globals.grid}`}>
          Sobre
        </div>
      </section>

      <Divider1 />

      <section className={styles.services} id="services">
        <div className={`${globals.container} ${globals.grid}`}>
          Serviços
        </div>
      </section>
    </main>
  )
}