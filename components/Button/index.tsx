import styles from './styles.module.css'
import Link from 'next/link'

interface Props {
  title: string
  href: string
}

export default function Button({ title, href }: Props) {
  return (
    <Link href={href}>
      <a className={styles.button}>{title}</a>
    </Link>
  )
}