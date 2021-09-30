import styles from './styles.module.css'
import MenuIcon from '../icons/MenuIcon'
import { useState } from 'react'
import Modal from '../Modal'
import MenuLinks from '../MenuLinks'

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* <MenuLinks /> */}

      <Modal
        show={menuOpen}
      >
        <div onClick={() => setMenuOpen(false)} className={styles.container}>
          <MenuLinks desktop={false} />
        </div>

      </Modal>

      <div onClick={() => setMenuOpen(true)} className={styles.mobile}>
        <MenuIcon />
      </div>
    </>
  )
}