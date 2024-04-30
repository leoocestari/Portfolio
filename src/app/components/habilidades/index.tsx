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
      <Image src={Logo} width={100}
      alt="cardimg1"></Image>
      </div>
      <div className={Styles.carddetails}>
      <p>Html, Css, JavaScript</p>
      <p>É a trindade base da programação web</p>
      </div>
    </div>
    <div className={Styles.card}>
      <div className={Styles.cardimage}>
      <Image src={SassIcon} width={100}
      alt="cardimg2"></Image>
      </div>
      <div className={Styles.carddetails}>
      <p>React</p>
      <p>Biblioteca de javascript para criação de interfaces em front-end</p>
      </div>
    </div>
    <div className={Styles.card}>
      <div className={Styles.cardimage}>
      <Image src={Jsicon} width={100}
      alt="cardimg3"></Image>
      </div>
      <div className={Styles.carddetails}>
      <p>Next Js</p>
      <p>Estrutura web de desenvolvimento front-end React de código aberto</p>
      </div>
    </div>
    <div className={Styles.card}>
      <div className={Styles.cardimage}>
      <Image src={TypeScriptIcon} width={100}
      alt="cardimg3"></Image>
      </div>
      <div className={Styles.carddetails}>
      <p>TypeScript</p>
      <p>É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.</p>
      </div>

    </div>

    <div className={Styles.card}>
      <div className={Styles.cardimage}>
      <Image src={NextIcon} width={100}
      alt="cardimg5"></Image>
      </div>
      <div className={Styles.carddetails}>
      <p>React</p>
      <p>Biblioteca de javascript para criação de interfaces em front-end</p>
      </div>
    </div>
    
    <div className={Styles.card}>
      <div className={Styles.cardimage}>
      <Image src={ReactIcon} width={100}
      alt="cardimg5"></Image>
      </div>
      <div className={Styles.carddetails}>
      <p>React</p>
      <p>Biblioteca de javascript para criação de interfaces em front-end</p>
      </div>
    </div>
    
    </div>
    
    
    
    
  </section>
 
  );
};

export default Habilidades