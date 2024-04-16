import Styles from "./inicio.module.scss"
import Button from "../button"
import Desenvolvedor from "/public/images/desenvolvedor.svg"
import Image from "next/image"
import Githicon from "/public/images/githicon.svg"
import Linkicon from "/public/images/linkicon.svg"


function Inicio () {
  return (
  <section className={Styles.container}>
    <div className={Styles.text}>
      <h1>Leonardo Cestari</h1>
      <p>Desenvolvedor Web</p>
      <div className={Styles.redes}>
      <div className={Styles.boxicon}>
      <Image
      alt="icon1" src={Githicon}
      width={40}
      height={41}></Image>
      </div>
      <div className={Styles.boxicon2}>
      <Image
      alt="icon1" src={Linkicon}
      width={40}
      height={41}></Image>
      </div>
      </div>
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