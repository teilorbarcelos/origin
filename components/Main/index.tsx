import styles from './styles.module.css'
import Divider1 from '../Divider1'
import Home from '../Home'
import About from '../About'
import Services from '../Services'
import Divider2 from '../Divider2'

export default function Main() {
  return (
    <main className={styles.main}>
      <Home />

      <Divider1 />

      <About />

      <Divider2 />

      <Services />
    </main>
  )
}