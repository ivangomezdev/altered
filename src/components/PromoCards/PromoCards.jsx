import React from 'react';
import Link from 'next/link';
import "./PromoCards.css";

const PromoCards = () => {
  return (
    <section className="promo-section">
      <div className="container promo-section__container">
        
        {/* Tarjeta 1: Gold */}
        <Link href="/register" className="promo-card promo-card--gold">
          {/* Capa de fondo separada (para recortar el gradiente y decoración) */}
          <div className="promo-card__bg-layer">
             <div className="promo-card__bg-decoration"></div>
          </div>

          <div className="promo-card__content">
            <h2 className="promo-card__title">Create your<br />account</h2>
          </div>
          
          <img 
            src="https://i.imgur.com/P3FwLpT.png" 
            alt="Character" 
            className="promo-card__image" 
          />
        </Link>

        {/* Tarjeta 2: Blue */}
        <Link href="/play" className="promo-card promo-card--blue">
          {/* Capa de fondo separada */}
          <div className="promo-card__bg-layer">
             <div className="promo-card__bg-decoration"></div>
          </div>

          <div className="promo-card__content">
            <h2 className="promo-card__title">Play Altered online</h2>
          </div>
          
          <img 
            src="https://i.imgur.com/SfSmoih.png" 
            alt="Character" 
            className="promo-card__image" 
          />
        </Link>

      </div>
    </section>
  );
};

export default PromoCards;