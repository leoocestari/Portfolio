import Styles from './projetos.module.scss'
import Image from 'next/image';
import projeto1 from "/public/images/projeto1.png"
import carrossel2 from "/public/images/carrossel2.svg"
import carrossel3 from "/public/images/carrossel3.svg"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode } from 'swiper/modules';

function Projetos() {
  
  return (
    <section className={Styles.container}>
      <div className={Styles.text}>
        <h1>Projetos</h1>
        </div>

      <div className={Styles.slidecontainer}>
      <div className={Styles.slidecontainer2}>
      <Swiper
      breakpoints={{
        340: {
          slidesPerView: 1,
          spaceBetween: 15,
          slidesPerGroup: 3,
          loop: true,
        },
        700: {
          slidesPerView: 1,
          spaceBetween: 15,
          slidesPerGroup: 3,
      
        }

      }}

      freeMode={true}
      pagination= {{
        clickable: true
        
      }}
      modules={[FreeMode, Pagination]}
      
        >
            <div className={Styles.slideco}>
            <SwiperSlide className={Styles.slide1}>
              <Image src={projeto1} 
              alt="Slider"
              width={1000}
              />
              
            </SwiperSlide>
            </div>
            
            <SwiperSlide className={Styles.slide2}>
              <Image src={carrossel2} 
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
      </div>
      </div>
    </section>
  );

};

export default Projetos