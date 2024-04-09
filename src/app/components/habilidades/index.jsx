import Styles from "./habilidades.module.scss"
import Image from "next/image"
import Logo from "/public/images/html.svg"
import ReactIcon from "/public/images/react.svg"
import NextIcon from "/public/images/next.svg"
import TypeScriptIcon from "/public/images/typescript.svg"



const Habilidades = () => {
  return(
  <div className={Styles.container}>
    <div className={Styles.header}>
    <h1>Habilidades</h1>
    </div>
    <div className={Styles.habs}>
    <div className={Styles.card}>
      <div className={Styles.cardimage}>
      <Image src={Logo} width={100}></Image>
      </div>
      <div className={Styles.carddetails}>
      <p>HTML/CSS/JAVASCRIPT</p>
      <p>blabladasdasda</p>
      </div>
    </div>
    <div className={Styles.card2}>
      <div className={Styles.cardimage}>
      <Image src={ReactIcon} width={100}></Image>
      </div>
      <div className={Styles.carddetails}>
      <p>React</p>
      <p>Biblioteca de javascript para criação de interfaces em front-end</p>
      </div>
    </div>
    <div className={Styles.card3}>
      <div className={Styles.cardimage}>
      <Image src={NextIcon} width={100}></Image>
      </div>
      <div className={Styles.carddetails}>
      <p>Next Js</p>
      <p>Estrutura web de desenvolvimento front-end React de código aberto</p>
      </div>
    </div>
    <div className={Styles.card4}>
      <div className={Styles.cardimage}>
      <Image src={TypeScriptIcon} width={100}></Image>
      </div>
      <div className={Styles.carddetails}>
      <p>TypeScript</p>
      <p>É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.</p>
      </div>
    </div>
    </div>
    
    
  </div>
  );
};

export default Habilidades