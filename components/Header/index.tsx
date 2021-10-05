import Link from 'next/link'

import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'
import Menu from '../Menu'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true)
      return
    }

    setScroll(false)
  }

  return (
    <header className={`${styles.header} ${scroll && styles.scroll}`}>
      <nav className={`${globals.container} ${styles.nav}`}>
        <Link href={'/'}>
          <a className={`${styles.logo}`}>beauty<span className={styles.coloured}>salon</span>.</a>
        </Link>

        <Menu />

      </nav>
    </header>
  )
}