import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import img1 from '../../public/img1.jpg'

export default function Main() {
  return (
    <main className={styles.container}>
      <section>
        <Image className={styles.img} src={img1} alt="Ilustração do trabalho no salão de beleza." />
        <h1>Saúde natural para os seus cabelos</h1>
        <p>Um salão exclusivo em São Paulo, especializado em tratamentos naturais.</p>
        <Link href={'#'}>
          <a>Agendar um horário</a>
        </Link>
      </section>
    </main>
  )
}