import Styles from "./sobre.module.scss"
import Image from "next/image"
import Pessoa from "/public/images/newilu.svg"
import Icon1 from "/public/images/nextblack.svg"
import Icon2 from "/public/images/angularblack2.svg"
import Icon3 from "/public/images/reactblack.svg"
import Icon4 from "/public/images/typeblack.svg"
import Icon5 from "/public/images/sassblack2.svg"


function Sobre () {
  return(
  <div id="sobre" className={Styles.container}>
    <div className={Styles.image}>
    <Image src={Pessoa} alt="fundo"
    width={450}
    className="fundo"
    />
    
    </div>
    <div className={Styles.text}>
    <h1>Sobre <a>Mim</a></h1>
    <p>Meu nome é Leonardo Cestari, desde pequeno sempre tive interesse pela
      área da computação, decidi trilhar o caminho da programação. Criando 
      projetos usando o conhecimento adquirido em meus estudos.
    </p>
    <p>
      Atualmente cursando análise e desenvolvimento de sistemas e focando em
      adquirir experiencia na área.
    </p>
    <div className={Styles.boxicon}>
      <Image
      alt="icon1" src={Icon1}
      width={32}
      height={40}
      className="invert">
      </Image>
      <Image
      alt="icon1" src={Icon2}
      width={40}
      height={40}
      className="invert">
      </Image>
      <Image
      alt="icon1" src={Icon3}
      width={40}
      height={40}
      className="invert">
      </Image>
      <Image
      alt="icon1" src={Icon4}
      width={33}
      height={40}
      className="invert">
      </Image>
      <Image
      alt="icon1" src={Icon5}
      width={40}
      height={40}
      className="invert">
      </Image>
      </div>
      
      
    </div>
    
  </div>
  );
};

export default Sobre