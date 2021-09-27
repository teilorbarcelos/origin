import Link from 'next/link'

import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${globals.container} ${styles.nav}`}>
        <Link href={'#'}>
          <a className={`${styles.logo}`}>beauty<span className={styles.coloured}>salon</span>.</a>
        </Link>
        <div className={styles.menu}>...</div>
      </nav>
    </header>
  )
}