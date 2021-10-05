import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'
import Button from '../Button'
import WhatsappIcon from '../icons/WhatsappIcon'
import PhoneIcon from '../icons/PhoneIcon'
import MapPinIcon from '../icons/MapPinIcon'
import MailIcon from '../icons/MailIcon'

export default function Contact() {
  return (
    <section className={styles.container} id="contact">
      <div className={`${globals.container} ${styles.grid}`}>
        <div className={styles.text}>
          <h2 className={globals.title}>Entre em contato com a gente!</h2>
          <p>Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
          <div className={styles.button}>
            <Button
              target="_blank"
              icon={<WhatsappIcon color="white" />}
              href={'https://api.whatsapp.com/send?phone=+5548998634063&text=hello'}
              title="Entre em contato"
            />
          </div>
        </div>

        <div className={styles.contactList}>
          <ul className={globals.grid}>
            <li><PhoneIcon /> 48 99863-4063</li>
            <li><MapPinIcon /> Rua Amauri Souza, 346</li>
            <li><MailIcon /> contato@beautysalon.com</li>
          </ul>
        </div>
      </div>
    </section>
  )
}