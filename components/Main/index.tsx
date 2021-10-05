import styles from './styles.module.css'
import Divider1 from '../Divider1'
import Home from '../Home'
import About from '../About'
import Services from '../Services'
import Divider2 from '../Divider2'
import Testimonials from '../Testimonials'
import Contact from '../Contact'
import ScrollReveal from '../ScrollReveal'

export default function Main() {
  return (
    <main className={styles.main}>
      <ScrollReveal>
        <Home />
      </ScrollReveal>

      <Divider1 />

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <Divider2 />

      <ScrollReveal>
        <Services />
      </ScrollReveal>

      <Divider1 />

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <Divider2 />

      <ScrollReveal>
        <Contact />
      </ScrollReveal>

      <Divider1 />

    </main>
  )
}