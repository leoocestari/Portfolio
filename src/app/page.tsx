import Image from "next/image";
import styles from "./page.module.scss";
import Header from "../app/components/header"
import Inicio from "../app/components/inicio"
import Sobre from "../app/components/sobre"
import Projetos from "./components/projetos"


export default function Home() {
  return (
    <main className={styles.container}>
    <Header />
    <Inicio />
    <Sobre />
    <Projetos />
    </main>
    
  );
}
