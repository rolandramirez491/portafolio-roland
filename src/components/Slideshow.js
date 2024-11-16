import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import './Slideshow.css';


import animacion from '../images/animacion.gif';  

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="slideshow">
      <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
        <Slider {...settings}>
          {/* utilizo el gif para el primer slide */}
          <div className="slide">
            <h2>Roland Ramírez Patiño</h2>
            <p>Soy desarrollador web cursando el tercer semestre </p>
            <p>Estudio Tecnólogia en Desarrollo de Software</p>
            <p>Tengo 34 años</p>
            {/* aqui lo muestro el gif */}
            <img src={animacion} alt="Bolita animada" className="bouncing-ball" />
          </div>

          {/* los otros */}
          <div className="slide">
            <h2>Mis Gustos</h2>
            <ul>
              <li>Baloncesto</li>
              <li>Modificar videojuegos y crear diseños 3D</li>
              <li>Experimentar con Arduino</li>
              <li>Realidad Virtual</li>
              <li>Automatizar procedimientos</li>
            </ul>
          </div>
          <div className="slide">
            <h2>Proyectos</h2>
            <p>Algunos proyectos incluyen:</p>
            <ul>
              <li>Proyecto con inteligencia artificial en C#.</li>
              <li>Gestor de tiquetes aéreos con IA.</li>
            </ul>
          </div>
          <div className="slide">
            <h2>Contáctame</h2>
            <p>Roland Ramírez Patiño</p>
            <p>Teléfono: 3002161641</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Slideshow;
