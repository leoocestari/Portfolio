import Styles from "./habilidades.module.scss"
import Image from "next/image"
import Logo from "/public/images/html.svg"
import ReactIcon from "/public/images/react.svg"
import NextIcon from "/public/images/next.svg"
import SassIcon from "/public/images/sass.svg"
import TypeScriptIcon from "/public/images/typescript.svg"
import Jsicon from "/public/images/jsicon.svg"
import Slider from 'react-slick';
import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"





function Habilidades () {
 
  return(
  <section id="habilidades" className={Styles.container}>
    <div className={Styles.header}>
    <h1>Habilidades</h1>
    </div>
    
    <div className={Styles.habs}>
    
    <div className={Styles.card}>
      <div className={Styles.cardimage}>
      <Image src={Logo} width={120}
      alt="cardimg1"></Image>
      <p>HTML</p>
      </div>
      <div className={Styles.carddetails}>
      
      
      </div>
    </div>
    <div className={Styles.card}>
      <div className={Styles.cardimage}>
      <Image src={SassIcon} width={120}
      alt="cardimg2"></Image>
      <p>SASS</p>
      </div>
      <div className={Styles.carddetails}>
      
      
      </div>
    </div>
    <div className={Styles.card}>
      <div className={Styles.cardimage}>
      <Image src={Jsicon} width={100}
      alt="cardimg3"></Image>
      <p>JAVASCRIPT</p>
      </div>
      <div className={Styles.carddetails}>
      
      
      </div>
    </div>
    <div className={Styles.card}>
      <div className={Styles.cardimage}>
      <Image src={TypeScriptIcon} width={100}
      alt="cardimg3"></Image>
      <p>TYPESCRIPT</p>
      </div>
      <div className={Styles.carddetails}>
      
      
      </div>

    </div>

    <div className={Styles.card}>
      <div className={Styles.cardimage}>
      <Image src={NextIcon} width={100}
      alt="cardimg5"></Image>
      <p>NEXT</p>
      </div>
      
    </div>
    
    <div className={Styles.card}>
      <div className={Styles.cardimage}>
      <Image src={ReactIcon} width={100}
      alt="cardimg5"></Image>
      <p>REACT</p>
      </div>
      
      
    </div>
    
    </div>
    
    
    
    
  </section>
 
  );
};

export default Habilidades