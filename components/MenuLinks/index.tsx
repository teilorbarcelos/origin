import Link from 'next/link'
import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'
import CloseIcon from '../icons/CloseIcon'
import { useEffect, useState } from 'react'

interface Props {
  desktop?: boolean
}

export default function MenuLinks({ desktop = true }: Props) {
  const [sections, setSections] = useState<NodeListOf<Element>>()
  const [currentSection, setCurrentSection] = useState<string | null>('home')

  useEffect(() => {
    window.addEventListener('scroll', verifyCurrentSection)
    return () => window.removeEventListener('scroll', verifyCurrentSection)
  })

  function verifyCurrentSection() {

    if (sections) {
      const checkpoint = (window.pageYOffset * 10 / 100) + (window.innerHeight / 4)

      sections.forEach(section => {
        const sectionRect = section.getBoundingClientRect()
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionRect.top
        const checkpointEnd = checkpoint <= sectionRect.top + sectionRect.height

        if (checkpointStart && checkpointEnd) {
          setCurrentSection(sectionId)
        }
      })
      // console.log(currentSection)
      return
    }

    setSections(document.querySelectorAll('main section[id]'))
  }

  return (
    <>
      <ul className={`${globals.grid} ${styles.ul} ${desktop && styles.desktop}`}>
        <li>
          <Link href={'#home'}>
            <a className={`${desktop ? styles.links : globals.title} ${(currentSection == 'home') && styles.active}`}>Início</a>
          </Link>
        </li>
        <li>
          <Link href={'#about'}>
            <a className={`${desktop ? styles.links : globals.title} ${(currentSection == 'about') && styles.active}`}>Sobre</a>
          </Link>
        </li>
        <li>
          <Link href={'#services'}>
            <a className={`${desktop ? styles.links : globals.title} ${(currentSection == 'services') && styles.active}`}>Serviços</a>
          </Link>
        </li>
        <li>
          <Link href={'#testimonials'}>
            <a className={`${desktop ? styles.links : globals.title} ${(currentSection == 'testimonials') && styles.active}`}>Depoimentos</a>
          </Link>
        </li>
        <li>
          <Link href={'#contact'}>
            <a className={`${desktop ? styles.links : globals.title} ${(currentSection == 'contact') && styles.active}`}>Contato</a>
          </Link>
        </li>
      </ul>

      {!desktop &&
        <div className={`${styles.close}`}>
          <CloseIcon />
        </div>
      }
    </>
  )
}