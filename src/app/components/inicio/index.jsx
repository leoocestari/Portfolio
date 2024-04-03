import Styles from "./inicio.module.scss"
import Button from "../button"
import Desenvolvedor from "/public/images/desenvolvedor.svg"
import Image from "next/image"

const Inicio = () => {
  return (
  <div className={Styles.container}>
    <div className={Styles.text}>
      <h1 className={Styles.h1}>Leonardo Cestari</h1>
      <p className={Styles.p1}>Desenvolvedor</p>
      <Button title="Curriculo" />
    </div>
    <div className={Styles.image}>
    <Image src={Desenvolvedor} alt="fundo"
    width={600}/>
    </div>
    
  </div>
  );
};

export default Inicio;