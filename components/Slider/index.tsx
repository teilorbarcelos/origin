import { ReactNode } from 'react'
import styles from './styles.module.css'

interface Props {
  children: ReactNode
}

export default function Slider({ children }: Props) {
  return (
    <div className={styles.slider}>
      {children}
    </div>
  )
}