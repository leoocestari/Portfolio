'use client';
import Image from "next/image";
import styles from "./page.module.scss";
import Header from "../app/components/header"
import Inicio from "../app/components/inicio"
import Sobre from "../app/components/sobre"
import Projetos from "../app/components/projetos"
import Habilidades from "../app/components/habilidades"
import Contato from "../app/components/contato"
import React from 'react'
import ReactDOM from 'react-dom/client'


import { register } from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';


export default function Home() {
  return (
    <main className={styles.container}>
    <Header />
    <Inicio />
    <Sobre />
    <Projetos />
    <Habilidades />
    <Contato />
    </main>
    
  );
}
