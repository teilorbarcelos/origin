import { ReactNode } from 'react'
import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'

interface Props {
  icon: ReactNode
  title: string
  description: string
}

export default function Card({ icon, title, description }: Props) {
  return (
    <div className={styles.container}>
      <i className={styles.icon}>{icon}</i>
      <h3 className={`${globals.title} ${styles.title}`}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}