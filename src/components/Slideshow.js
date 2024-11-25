import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import './Slideshow.css';
import videoSource from '../images/trip.mp4'; // Ruta al video
import animacion from '../images/animacion.gif';  

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="slideshow">
      <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
        <Slider {...settings}>
          {/* Primer slide */}
          <div className="slide">
          <video
              src={videoSource}
              autoPlay
              loop
              muted
              className="video-class"
            >
</video>
            <h2>Roland Ramírez Patiño</h2>
            <p>Soy desarrollador web cursando el cuarto semestre </p>
            <p>Estudio Tecnología en Desarrollo de Software</p>
            <p>Soy diñeñador de modelos de impresion 3d</p>
            <p>Tengo 34 años</p>
            
           
            <img src={animacion} alt="Bolita animada" className="bouncing-ball" />
            

          </div>

          {/* Segundo slide */}
          <div className="slide">
            <h2>Mis Gustos</h2>
            <ul>
              <li>Baloncesto</li>
              <li>Modificar videojuegos y crear diseños 3D</li>
              <li>Experimentar con Arduino</li>
              <li>Realidad Virtual</li>
              <li>Automatizar procedimientos</li>
            </ul>
            <img src={animacion} alt="Bolita animada" className="bouncing-ball" />
          </div>

          {/* Tercer slide */}
          <div className="slide">
            <h2>Proyectos</h2>
            <p>Algunos proyectos incluyen:</p>
            <ul>
            <li><a href="www.github.com/1">clasificador de objetos para celular con ia desarrollada con procesamiento en local sin internet</a></li>
              <li><a href="www.github.com/1">gestor de tiquetes aereos con IA</a></li>
              <li><a href="www.github.com/1">Proyecto con inteligencia artificial en C#.</a></li>
            </ul>
            <img src={animacion} alt="Bolita animada" className="bouncing-ball" />
          </div>

          {/* Cuarto slide */}
          <div className="slide">
            <h2>Contáctame</h2>
            <p>Roland Ramírez Patiño</p>
            <p>Teléfono: 3002161641</p>
            <img src={animacion} alt="Bolita animada" className="bouncing-ball" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Slideshow;
