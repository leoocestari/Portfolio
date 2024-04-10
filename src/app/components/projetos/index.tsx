import Styles from './projetos.module.scss'
import Image from 'next/image';
import projeto1 from "/public/images/projeto1.png"
import carrossel2 from "/public/images/carrossel2.svg"
import carrossel3 from "/public/images/carrossel3.svg"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode, EffectCoverflow, Navigation } from 'swiper/modules';

function Projetos() {
  
  return (
    
    <section className={Styles.container}>
      <div className={Styles.text}>
        <h1>Projetos</h1>
        </div>

      <div className={Styles.projetos}>
      <Swiper
     effect={'coverflow'}
     grabCursor={true}
     centeredSlides={true}
     loop={true}
     slidesPerView={'auto'}
     coverflowEffect={{
       rotate: 0,
       stretch: 0,
       depth: 100,
       modifier: 2.5,
     }}
     pagination={{ el: '.swiper-pagination', clickable: true }}
     navigation={{
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
       
     }}
     modules={[EffectCoverflow, Pagination, Navigation]}>



        

        <SwiperSlide className={Styles.projeto1}>
        <div className={Styles.cardimage}>
        <Image src={projeto1} width={100} alt='slideimg1'></Image>
        </div>
        <div className={Styles.carddetails}>
        <p>Html, Css, JavaScript</p>
        <p>É a trindade base da programação web</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className={Styles.projeto2}>
        <div className={Styles.cardimage}>
        <Image src={projeto1} width={100} alt='slideimg2'></Image>
        </div>
        <div className={Styles.carddetails}>
        <p>Html, Css, JavaScript</p>
        <p>É a trindade base da programação web</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className={Styles.projeto3}>
        <div className={Styles.cardimage}>
        <Image src={projeto1} width={100} alt='slideimg3'></Image>
        </div>
        <div className={Styles.carddetails}>
        <p>Html, Css, JavaScript</p>
        <p>É a trindade base da programação web</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className={Styles.projeto3}>
        <div className={Styles.cardimage}>
        <Image src={projeto1} width={100} alt='slideimg3'></Image>
        </div>
        <div className={Styles.carddetails}>
        <p>Html, Css, JavaScript</p>
        <p>É a trindade base da programação web</p>
        </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>

      
      

      </Swiper>

      </div>
    </section>
  );

};

export default Projetos