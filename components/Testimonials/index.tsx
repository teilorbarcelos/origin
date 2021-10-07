import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import styles from './styles.module.css'
import globals from '../../styles/globals.module.css'
import User1 from '../../public/user1.jpg'
import User2 from '../../public/user2.jpg'
import User3 from '../../public/user3.jpg'
import Testimonial from '../Testimonial'
import MySwiper from '../MySwiper'

export default function Testimonials() {
  const testimonials = [
    {
      text: 'Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.',
      userImage: User1,
      name: 'Wanessa Souza'
    },
    {
      text: 'Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.',
      userImage: User2,
      name: 'Franciele Venega'
    },
    {
      text: 'Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.',
      userImage: User3,
      name: 'Valeska Fabris'
    },
  ]

  return (
    <section className={`${styles.testimonials}`} id="testimonials">
      <div className={`${styles.container}`}>
        <header className={styles.header}>
          <h2 className={globals.title}>Depoimentos de quem já passou por aqui</h2>
        </header>
        <div>

          <MySwiper>
            {testimonials.map(item => {
              return (
                <SwiperSlide className={`${styles.swiperSlide}`} >
                  <Testimonial
                    text={item.text}
                    userImage={
                      <Image
                        objectFit={'cover'}
                        width={32}
                        height={32}
                        className={styles.userImage}
                        src={item.userImage}
                        alt={`Foto ${item.name}`}
                      />
                    }
                    userName={item.name}
                  />
                </SwiperSlide>
              )
            })}
          </MySwiper>

          <MySwiper mobile={false}>
            {testimonials.map(item => {
              return (
                <SwiperSlide className={`${styles.swiperSlide}`} >
                  <Testimonial
                    text={item.text}
                    userImage={
                      <Image
                        objectFit={'cover'}
                        width={32}
                        height={32}
                        className={styles.userImage}
                        src={item.userImage}
                        alt={`Foto ${item.name}`}
                      />
                    }
                    userName={item.name}
                  />
                </SwiperSlide>
              )
            })}
          </MySwiper>

        </div>
      </div>
    </section >
  )
}