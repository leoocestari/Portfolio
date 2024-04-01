import Image from "next/image";
import Logo from "/public/images/logo.svg"
import Link from "next/link";
import Styles from"./header.module.css"

const Header = () => {
  return (
   <div className={Styles.container}>
    <div className={Styles.logotipo}> 
    <Image src={Logo} 
    width={100}/>
    
     
    </div>
    <nav className={Styles.menu}>
          <Link href="/">Inicio</Link>

          <Link href="/">Sobre</Link>

          <Link href="/">Competencias</Link>

          <Link href="/">Habilidades</Link>

          <Link href="/">Info</Link>

    </nav>
    <div className={Styles.action}>
      <button className={Styles.button} >Curriculo</button>
    </div>

  </div>
  
  );
};

export default Header;