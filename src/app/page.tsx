import Image from "next/image";
import styles from "./page.module.scss";
import Header from "../app/components/header"
import Inicio from "../app/components/inicio"


export default function Home() {
  return (
    <div className={styles.container}>
    <Header />
    <Inicio />
    </div>
    
  );
}
