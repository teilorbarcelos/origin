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
      <ul className={`${globals.grid} ${styles.ul}`}>
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

      <div className={`${styles.close} mobile`}>
        <CloseIcon />
      </div>
    </>
  )
}