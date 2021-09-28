import Link from 'next/link'
import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'
import MenuIcon from '../icons/MenuIcon'
import CloseIcon from '../icons/CloseIcon'
import { useState } from 'react'

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {menuOpen &&
        <div onClick={() => setMenuOpen(false)} className={styles.container}>
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

          <div className={styles.close}>
            <CloseIcon />
          </div>
        </div>
      }

      <div onClick={() => setMenuOpen(true)} className={styles.mobile}>
        <MenuIcon />
      </div>
    </>
  )
}