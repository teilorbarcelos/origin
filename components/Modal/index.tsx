import styles from './styles.module.css'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  show?: boolean
}

export default function Modal({ children, show = false }: Props) {
  return (
    <div className={`${styles.modal} ${show ? styles.show : ''}`}>
      {children}
    </div>
  )
}