import Image from "next/image";
import styles from "./page.module.scss";
import Header from "../app/components/header"
import Inicio from "../app/components/inicio"
import Sobre from "../app/components/sobre"
import Habilidades from "../app/components/habilidades"


export default function Home() {
  return (
    <div className={styles.container}>
    <Header />
    <Inicio />
    <Sobre />
    <Habilidades />
    </div>
    
  );
}
