import Styles from './projetos.module.scss'
import Image from 'next/image';
import carrossel from "/public/images/carrossel1.svg"
import carrossel2 from "/public/images/carrossel2.svg"
import carrossel3 from "/public/images/carrossel3.svg"

import { Swiper, SwiperSlide } from 'swiper/react'

function Projetos() {
  
  return (
    <section className={Styles.container}>
      <h1>Projetos</h1>

      <Swiper
      slidesPerView={1}
        pagination={{clickable: true}}
        navigation
        >
            <SwiperSlide>
              <Image src={carrossel} width={300}
              
              alt="Slider"
              className='slide-item'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={carrossel2} width={300}
              alt="Slider"
              className='slide-item'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={carrossel3} 
              alt="Slider"
              className='slide-item'
              />
            </SwiperSlide>
          

      </Swiper>
    </section>
  );

};

export default Projetos