import Styles from './projetos.module.scss'
import Image from 'next/image';
import projeto1 from "/public/images/projeto1.png"
import carrossel2 from "/public/images/carrossel2.svg"
import Button from "../button"
import Construindo from "/public/images/construindo.svg"
import carrossel3 from "/public/images/carrossel3.svg"
import { ArrowForwardOutline } from 'react-ionicons'



import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode, EffectCoverflow, Navigation } from 'swiper/modules';
import { Black_And_White_Picture } from 'next/font/google';



function Projetos() {


  return (

    <section className={Styles.container}>
      <div className={Styles.text}>
        <h1 id='projetos'>Projetos</h1>
      </div>
      <div className={Styles.projetos}>
        <div className={Styles.projectcard1}>
          <div className={Styles.cardimage}>
            <Image src={projeto1} width={475} alt='projeto1'
            className='projeto1'></Image>
          </div>
          <div className={Styles.carddetails}>
            <h1>Portfolio 1.0</h1>
            
          </div>
          <div className={Styles.buttoncard}>
            <Button title="Acessar" />
          </div>

        </div>
        <div className={Styles.projectcard2}>
          <div className={Styles.cardimage}>
            <Image src={Construindo} width={350} alt='projeto1'></Image>
          </div>
          <div className={Styles.carddetails}>
            <h1>Em andamento</h1>
          </div>

          </div>
          </div>

          <div className={Styles.projetos2}>

        
        <div className={Styles.projectcard3}>
          <div className={Styles.cardimage}>
          <Image src={Construindo} width={300} alt='projeto1'></Image>
      </div> 
      <div className={Styles.carddetails}>
            <h1>Em andamento</h1>
          </div>

          </div>
          <div className={Styles.projectcard4}>
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