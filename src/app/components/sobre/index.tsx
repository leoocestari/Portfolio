import Styles from "./sobre.module.scss"
import Image from "next/image"
import Pessoa from "/public/images/pessoa4.svg"


function Sobre () {
  return(
  <div className={Styles.container}>
    <div className={Styles.image}>
    <Image src={Pessoa} alt="fundo"
    width={500}
    className="fundo"
    />
    
    </div>
    <div className={Styles.text}>
    <h1 id="sobre">Sobre Mim</h1>
    <p>Meu nome é Leonardo Cestari, desde pequeno sempre tive interesse pela
      área da computação, decidi trilhar o caminho da programação. Criando 
      projetos usando o conhecimento adquirido em meus estudos.
    </p>
    <p>
      Atualmente cursando análise e desenvolvimento de sistemas e focando em
      adquirir experiencia na área.
    </p>
    </div>
  </div>
  );
};

export default Sobre