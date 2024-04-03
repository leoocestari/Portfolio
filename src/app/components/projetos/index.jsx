import Styles from "./projetos.module.scss"
import Image from "next/image"
import React from 'react';
import Swiper from "swiper/react"
import { Autoplay, Natigation, Pagination } from "swiper/modules"
import carrosselum from "/public/images/carrossel1.svg"
import carrosseldois from "/public/images/carrossel2.svg"
import carrosseltres from "/public/images/carrossel3.svg"
import Flecha from "/public/images/arrowdown.svg"
import { SwiperSlide } from "swiper/react"




const Projetos = () => {
  return(
  <section className={Styles.container}>
    <div className={Styles.text}>
    <h1>Projetos</h1>
    </div>
    <div className={Styles.slider}>
      <Swiper
      modules={[Navigation, Autoplay]}>
      <button id ="prev-button">
        <Image src={Flecha} alt="prev-button">
        </Image>
      </button>
      <SwiperSlide>
      <Image src={carrosselum} alt="projeto1" class = "slider"
      width={300}/>
      </SwiperSlide>
      <Image src={carrosseldois} alt="projeto2" class = "slider"
      width={300}/>
      <Image src={carrosseltres} alt="projeto3" class = "slider"
      width={300}/>
      </Swiper>
    </div>
  </section>
  );
};

export default Projetos

