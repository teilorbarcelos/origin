import styles from './styles.module.css'
import Image from 'next/image'
import img2 from '../../public/img2.jpg'
import globals from '../../styles/globals.module.css'

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={`${styles.container} ${globals.grid}`}>
        <div className={styles.image}>
          <Image className={globals.img} src={img2} alt="Ilustração do trabalho no salão de beleza." />
        </div>
        <div className={styles.text}>
          <h2 className={globals.title}>Sobre nós</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus dignissimos provident, ullam quisquam quae hic error quia iure est fuga minus. Tenetur dignissimos laborum consequatur, maxime doloremque quis laboriosam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus dignissimos provident, ullam quisquam quae hic error quia iure est fuga minus. Tenetur dignissimos laborum consequatur, maxime doloremque quis laboriosam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus dignissimos provident, ullam quisquam quae hic error quia iure est fuga minus. Tenetur dignissimos laborum consequatur, maxime doloremque quis laboriosam!</p>
        </div>
      </div>
    </section>
  )
}