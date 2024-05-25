// components/Carousel.tsx
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Styles from './carousel.module.scss';
import Link from 'next/link'
import { Settings } from 'react-ionicons';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

const projects: Project[] = [
  { id: 1, title: 'Portfolio', description: 'HTML SASS TYPESCRIPT NEXT', image: '/images/projeto12.png', url: 'https://leoocestari.vercel.app/' },
  { id: 2, title: 'Convite de Casamento', description: 'HTML SASS TYPESCRIPT ANGULAR', image: '/images/projeto13.png', url: 'https://adrielehannaty.vercel.app/convite' },
  { id: 3, title: 'Gerador de Nota Fiscal', description: 'HTML SASS TYPESCRIPT ANGULAR', image: '/images/projeto15.png', url: 'https://lumo-utils.vercel.app/invoice-generator'},
  
  // Adicione mais projetos conforme necessário
];

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
          slidesToScroll: 1,
      }
      },
    ]
  };

  return (
    <div className={Styles.carouselContainer}>
      <h1 className={Styles.titleheader}>Projetos</h1>
      <Slider {...settings}>
        {projects.map(project => (
          <div key={project.id} className={Styles.slide}>
            <Link href={project.url}>
            <img src={project.image} alt={project.title} className={Styles.image} />
            <h3 className={Styles.title}>{project.title}</h3>
            <p className={Styles.description}>{project.description}</p>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
