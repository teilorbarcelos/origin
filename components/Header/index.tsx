import Link from 'next/link'

import styles from './styles.module.css'

export default function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Link href={'#'}>
          <a className={styles.logo}>beautysalon.</a>
        </Link>
        <div className={styles.menu}>...</div>
      </nav>
    </header>
  )
}