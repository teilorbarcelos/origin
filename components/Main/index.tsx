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
      <section className={`${globals.section} ${styles.home}`}>
        <div className={`${styles.container} ${globals.grid}`}>
          <div className={styles.image}>
            <Image className={globals.img} src={img1} alt="Ilustração do trabalho no salão de beleza." />
          </div>
          <div className={styles.text}>
            <h1>Saúde natural para os seus cabelos</h1>
            <p>Um salão exclusivo em São Paulo, especializado em tratamentos naturais.</p>
            <Button href={'#'} title="Agendar um horário" />
          </div>
        </div>
      </section>
      <Divider1 />
    </main>
  )
}