import Link from 'next/link'
import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'

export default function Menu() {
  return (
    <>
      <div className={styles.container}>
        <ul className={globals.grid}>
          <li>
            <Link href={'#home'}>
              <a className={globals.title}>Início</a>
            </Link>
          </li>
          <li>
            <Link href={'#about'}>
              <a className={globals.title}>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href={'#services'}>
              <a className={globals.title}>Serviços</a>
            </Link>
          </li>
          <li>
            <Link href={'#testimonials'}>
              <a className={globals.title}>Depoimentos</a>
            </Link>
          </li>
          <li>
            <Link href={'#contact'}>
              <a className={globals.title}>Contato</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.open}>...</div>

      <div className={styles.close}>x</div>
    </>
  )
}