import Link from 'next/link'
import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'
import CloseIcon from '../icons/CloseIcon'

interface Props {
  desktop?: boolean
}

export default function MenuLinks({ desktop = true }: Props) {
  return (
    <>
      <ul className={`${globals.grid} ${styles.ul} ${desktop && styles.desktop}`}>
        <li>
          <Link href={'#home'}>
            <a className={desktop ? styles.links : globals.title}>Início</a>
          </Link>
        </li>
        <li>
          <Link href={'#about'}>
            <a className={desktop ? styles.links : globals.title}>Sobre</a>
          </Link>
        </li>
        <li>
          <Link href={'#services'}>
            <a className={desktop ? styles.links : globals.title}>Serviços</a>
          </Link>
        </li>
        <li>
          <Link href={'#testimonials'}>
            <a className={desktop ? styles.links : globals.title}>Depoimentos</a>
          </Link>
        </li>
        <li>
          <Link href={'#contact'}>
            <a className={desktop ? styles.links : globals.title}>Contato</a>
          </Link>
        </li>
      </ul>

      {!desktop &&
        <div className={`${styles.close}`}>
          <CloseIcon />
        </div>
      }
    </>
  )
}