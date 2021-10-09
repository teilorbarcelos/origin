import Link from 'next/link'
import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'
import InstagramIcon from '../icons/InstagramIcon'
import FacebookIcon from '../icons/FacebookIcon'
import YoutubeIcon from '../icons/YoutubeIcon'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={`${styles.content} ${globals.grid}`}>
        <div className={styles.brand}>
          <Link href={'#home'}>
            <a className={`${styles.logo}`}>beauty<span className={styles.coloured}>salon</span>.</a>
          </Link>
          <p>&copy; 2021 Beautysalon.</p>
          <p>All rights reserved.</p>
        </div>

        <div className={styles.social}>
          <Link href={'https://instagram.com'}>
            <a target="_blank"><i className={styles.icon}><InstagramIcon color="white" /></i></a>
          </Link>
          <Link href={'https://facebook.com'}>
            <a target="_blank"><i className={styles.icon}><FacebookIcon color="white" /></i></a>
          </Link>
          <Link href={'https://youtube.com'}>
            <a target="_blank"><i className={styles.icon}><YoutubeIcon color="white" /></i></a>
          </Link>
        </div>
      </div>
      <div className={styles.developedBy}>
        <p>Developed by <a className={styles.myLink} target="_blank" href="https://teilorwebdev.vercel.app/">Teilor Souza Barcelos</a></p>
      </div>
    </footer>
  )
}