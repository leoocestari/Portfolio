import Styles from './projetos.module.scss'
import Image from 'next/image';
import projeto1 from "/public/images/projeto1.png"
import carrossel2 from "/public/images/carrossel2.svg"
import Button from "../button"
import Construindo from "/public/images/construindo.svg"
import carrossel3 from "/public/images/carrossel3.svg"
import { ArrowForwardOutline } from 'react-ionicons'
import Slider from 'react-slick';
import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import imgp from "/public/images/portf.jpg"



import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode, EffectCoverflow, Navigation } from 'swiper/modules';
import { Black_And_White_Picture } from 'next/font/google';



function Projetos() {
  


  return (

    <section id='projetos' className={Styles.container}>
      <div className={Styles.text}>
        <h1>Projetos</h1>
      </div>
      <div className={Styles.projetos}>
        <div className={Styles.projectcard}>
          <div className={Styles.cardimage}>
            <Image src={imgp} width={400}  alt='projeto1'
            className='projeto1'
            style={{  }}></Image>
          </div>
          <div className={Styles.carddetails}>
            <h1>Portfolio 1.0</h1>
            <p>
              SASS, TYPESCRIPT, REACT,  NEXT  
            </p>
            
          </div>
          <div className={Styles.buttoncard}>
            <Button title="Acessar" />
          </div>
        </div>

        <div className={Styles.projectcard}>
          <div className={Styles.cardimage}>
            <Image src={Construindo} width={350} alt='projeto1'></Image>
          </div>
          <div className={Styles.carddetails}>
            <h1>Em andamento</h1>
          </div>
          

          </div>
          
        <div className={Styles.projectcard}>
          <div className={Styles.cardimage}>
          <Image src={Construindo} width={300} alt='projeto1'></Image>
      </div> 
      <div className={Styles.carddetails}>
            <h1>Em andamento</h1>
          </div>
          

          
        </div>
        </div>
          
      

    </section>
  );

};

export default Projetos 