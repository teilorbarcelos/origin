import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'

import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'
import User1 from '../../public/user1.jpg'
import User2 from '../../public/user2.jpg'
import User3 from '../../public/user3.jpg'
import Testimonial from '../Testimonial'

export default function Testimonials() {

  return (
    <section className={`${styles.testimonials}`} id="testimonials">
      <div className={`${styles.container}`}>
        <header className={styles.header}>
          <h2 className={globals.title}>Depoimentos de quem já passou por aqui</h2>
        </header>
        <div className={`${styles.testimonialList}`}>

          <Swiper
            className={`${styles.swiper} mobile`}
            modules={[Pagination]}
            spaceBetween={5}
            slidesPerView={1}
            pagination={{
              clickable: true
            }}
            scrollbar={{ draggable: true }}
          // mousewheel={true}
          // keyboard={true}
          >
            <SwiperSlide className={`${styles.swiperSlide}`} >
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


            <SwiperSlide className={`${styles.swiperSlide}`} >
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

            <SwiperSlide className={`${styles.swiperSlide}`} >
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
    </section >
  )
}