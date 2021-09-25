import Link from 'next/link'

import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'

export default function Header() {
  return (
    <header className={`${styles.container} ${globals.container}`}>
      <nav className={styles.nav}>
        <Link href={'#'}>
          <a className={styles.logo}>beautysalon.</a>
        </Link>
        <div className={styles.menu}>...</div>
      </nav>
    </header>
  )
}