import Styles from "./inicio.module.scss"
import Button from "../button"
import Desenvolvedor from "/public/images/desenv3.svg"
import Image from "next/image"
import ImageLink from "next/image"
import Githicon from "/public/images/githicon.svg"
import Linkicon from "/public/images/linkicon.svg"
import Link from 'next/link'


  
function Inicio () {
  return (
  <section id="inicio" className={Styles.container}>
    <div className={Styles.text}>
      <h1>Leonardo Cestari</h1>
      
      <p>Desenvolvedor Web</p>
      
      
      <div className={Styles.redes}>
      <div className={Styles.boxicon}>
      <Link href={'https://github.com/leoocestari'}>
      <Image
      alt="icon1" src={Githicon}
      width={32}
      height={41}
      className="invert"
      style={{ filter: "invert(1)" }}>
      </Image>
      </Link>
      
      </div>
      <div className={Styles.boxicon}>
      <Link href={'https://www.linkedin.com/in/leoocestari/'}>
      <Image
      alt="icon1" src={Linkicon}
      width={32}
      height={41}
      
      
      className="invert"
      style={{ filter: "invert(1)" }}>
      </Image>
      </Link>
      </div>
      </div>
    </div>
    <div className={Styles.image}>
    <Image src={Desenvolvedor} alt="fundo"
    width={500} 
    height={400}
    />
    </div>
  </section>
  );
};

export default Inicio;