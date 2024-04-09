import Styles from "./contato.module.scss"
import Image from "next/image"
import Pessoa from "/public/images/pessoa4.svg"

const Contato = () => {
  return(
  <div className={Styles.container}>
    <div className={Styles.header}>
      <h1>Contato</h1>
    </div>
    <div className={Styles.image}>
    <Image src={Pessoa} alt="fundo"
    width={450}/>
    
    </div>
    <div className={Styles.text}>
    <p>1
    </p>
    <p>
      1
    </p>
    </div>
  </div>
  );
};

export default Contato