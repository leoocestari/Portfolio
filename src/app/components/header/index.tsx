import Image from "next/image";
import Logo from "/public/images/logo.svg"
import Link from "next/link";
import Styles from"./header.module.scss"
import Button from "../button"

function Header () {
  return (
   <section className={Styles.container}>
    <div className={Styles.logotipo}> 
    <Image src={Logo} 
    width={60} alt="logo"
    className="invert"
    
      style={{ filter: "invert(1)" }}

    />
    </div>
    <nav className={Styles.menu}>
          
          
            
          <ul className={Styles.inicio}>
          <Link href="#inicio">Inicio</Link>
          </ul>
          
          <ul className={Styles.inicio}>
          <Link href="#sobre">Sobre</Link>
          </ul>
          
          <ul className={Styles.inicio}>
          <Link href="#projetos">Projetos</Link>
          </ul>
          
          <ul className={Styles.inicio}>
          <Link href="#habilidades">Habilidades</Link>
          </ul>
          
          <ul className={Styles.inicio}>
          <Link href="#contato">Contato</Link>
          </ul>

          
          

    </nav>
    

  </section>
  
  );
};

export default Header;