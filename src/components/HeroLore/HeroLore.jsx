import React from 'react';
import "./HeroLore.css"
const HeroLore = ({ title, description, bgImage }) => {
  // Estilo inline solo para la imagen de fondo dinámica
  const backgroundStyle = {
    backgroundImage: `url(${bgImage || '/assets/hero-bg.jpg'})`
  };

  return (
    <section className="hero-lore" style={backgroundStyle}>
      <div className="container hero-lore__container">
        
        <div className="hero-lore__card">
          <span className="hero-lore__label">Lore</span>
          <h2 className="hero-lore__title">{title}</h2>
          
          <div className="hero-lore__text">
            {description}
          </div>

          <button className="hero-lore__button">
            READ MORE
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroLore;