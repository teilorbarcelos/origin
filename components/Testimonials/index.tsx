import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import Image from 'next/image'

import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'
import User1 from '../../public/user1.jpg'
import User2 from '../../public/user2.jpg'
import User3 from '../../public/user3.jpg'
import Testimonial from '../Testimonial'
import { useEffect, useState } from 'react';

export default function Testimonials() {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={`${globals.container} ${styles.grid}`}>
        <header className={styles.header}>
          <h2 className={globals.title}>Depoimentos de quem já passou por aqui</h2>
        </header>
        <div className={`${styles.testimonialList}`}>
          <Swiper
            width={screenWidth}
            spaceBetween={50}
            slidesPerView={1}
            pagination
          >
            <SwiperSlide>
              <Testimonial
                text="Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados."
                userImage={
                  <Image
                    objectFit={'cover'}
                    width={32}
                    height={32}
                    className={styles.userImage}
                    src={User1}
                    alt="Foto Wanessa Souza"
                  />
                }
                userName="Wanessa Souza"
              />
            </SwiperSlide>


            <SwiperSlide>
              <Testimonial
                text="Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados."
                userImage={
                  <Image
                    objectFit={'cover'}
                    width={32}
                    height={32}
                    className={styles.userImage}
                    src={User2}
                    alt="Foto Franciele Venega"
                  />
                }
                userName="Franciele Venega"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Testimonial
                text="Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados."
                userImage={
                  <Image
                    objectFit={'cover'}
                    width={32}
                    height={32}
                    className={styles.userImage}
                    src={User3}
                    alt="Foto Valeska Fabris"
                  />
                }
                userName="Valeska Fabris"
              />
            </SwiperSlide>
          </Swiper>

        </div>
      </div>
    </section>
  )
}