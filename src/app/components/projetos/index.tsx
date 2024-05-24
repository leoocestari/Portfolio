// components/Carousel.tsx
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Styles from './carousel.module.scss';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  { id: 1, title: 'Projeto 1', description: 'Descrição do Projeto 1', image: '/images/portf.jpg' },
  { id: 2, title: 'Projeto 2', description: 'Descrição do Projeto 2', image: '/images/portf.jpg' },
  { id: 3, title: 'Projeto 3', description: 'Descrição do Projeto 3', image: '/images/portf.jpg' },
  
  // Adicione mais projetos conforme necessário
];

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className={Styles.carouselContainer}>
      <h1 className={Styles.titleheader}>Projetos</h1>
      <Slider {...settings}>
        {projects.map(project => (
          <div key={project.id} className={Styles.slide}>
            <img src={project.image} alt={project.title} className={Styles.image} />
            <h3 className={Styles.title}>{project.title}</h3>
            <p className={Styles.description}>{project.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
