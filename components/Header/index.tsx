import Link from 'next/link'

import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={globals.container}>
        <Link href={'#'}>
          <a className={`${styles.logo}`}>beautysalon.</a>
        </Link>
        <div className={styles.menu}>...</div>
      </nav>
    </header>
  )
}