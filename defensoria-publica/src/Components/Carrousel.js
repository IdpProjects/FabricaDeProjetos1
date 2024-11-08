import React, { useState } from 'react';
import Slider from 'react-slick';
import { personas } from '../Utils/mocks/persona';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../Style/Components/carrousel.css"; // Certifique-se de criar e estilizar este arquivo CSS

function Carrousel() {
  const [sliderRef, setSliderRef] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [currentPersona, setCurrentPersona] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentPersona(personas[next]),
  };

  const handleNext = () => {
    if (sliderRef) {
      sliderRef.slickNext();
    }
  };

  const handlePopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="carousel">
      <h2>Carrousel</h2>
      <Slider ref={setSliderRef} {...settings}>
        {personas.map((elementoDoArray, index) => {
          const { name, personaHistory, srcImage } = elementoDoArray;
          return (
            <div key={index} className="carousel-item">
              <h3>{name}</h3>
              <p>{personaHistory}</p>
              <img src={srcImage} alt={`${name} profile`} />
            </div>
          );
        })}
      </Slider>
      <div className="carousel-buttons">
        <button onClick={handleNext}>Próximo</button>
        <button onClick={handlePopup}>Abrir Pop-up</button>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>{currentPersona?.name}</h3>
            <p>{currentPersona?.personaHistory}</p>
            <button onClick={closePopup}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrousel;
