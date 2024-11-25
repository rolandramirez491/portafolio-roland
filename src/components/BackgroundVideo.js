import React from "react";
import "./BackgroundVideo.css"; // Archivo CSS para los estilos opcionales
import videoSource from '../images/trip.mp4'; // Ruta al video
//import animacion from '../images/animacion.gif';
const BackgroundVideo = () => {
  return (
    <div className="background-container">
      <video className="background-video" autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
        Tu navegador no soporta el video HTML5.
      </video>

      <div className="content">
        <h1>Texto sobre el video</h1>
        <p>Este es un ejemplo de video de fondo en React.</p>
      </div>
    </div>
  );
};

export default BackgroundVideo;
