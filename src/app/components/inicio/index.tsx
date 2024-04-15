import Styles from "./inicio.module.scss"
import Button from "../button"
import Desenvolvedor from "/public/images/desenvolvedor.svg"
import Image from "next/image"


function Inicio () {
  return (
  <section className={Styles.container}>
    <div className={Styles.text}>
      <h1>Leonardo Cestari</h1>
      <p>Desenvolvedor Web</p>
      <Button title="Curriculo" />
    </div>
    <div className={Styles.image}>
    <Image src={Desenvolvedor} alt="fundo"
    width={500} 
    height={350}
    
    />
    </div>
  </section>
  );
};

export default Inicio;