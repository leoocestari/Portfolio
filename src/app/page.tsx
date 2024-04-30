'use client';
import Image from "next/image";
import styles from "./page.module.scss";
import Header from "../app/components/header"
import Inicio from "../app/components/inicio"
import Sobre from "../app/components/sobre"
import Projetos from "../app/components/projetos"
import Habilidades from "../app/components/habilidades"
import Contato from "./components/contato"
import React from 'react'
import ReactDOM from 'react-dom/client'
import Slider from 'react-slick'



import { register } from 'swiper/element/bundle'

register();
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import { LogoNodejs } from 'react-ionicons'


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
