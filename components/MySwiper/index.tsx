import { Pagination } from 'swiper'
import { Swiper } from 'swiper/react'

import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  mobile?: boolean
}

export default function MySwiper({ children, mobile = true }: Props) {
  return (
    <Swiper
      className={`${styles.swiper} ${mobile ? globals.mobile : globals.desktop}`}
      modules={[Pagination]}
      spaceBetween={5}
      slidesPerView={mobile ? 1 : 2}
      pagination={{
        clickable: true
      }}
      scrollbar={{ draggable: true }}
      mousewheel={true}
      keyboard={true}
    >
      {children}
    </Swiper>
  )
}