import React from 'react';
import './FeatureSection.css';



const FeatureSection = ({
  title,
  subtitle,
  features,
  image,
  imageAlt,
  buttonText,
  buttonLink,
  imagePosition = 'left',
  variant = 'primary',
}) => {
  return (
    <section className={`feature-section feature-section--${variant}`}>
      <div 
        className={`feature-section__container ${
          imagePosition === 'right' ? 'feature-section__container--reverse' : ''
        }`}
      >
        <div className="feature-section__image-wrapper">
          <img 
            src={image} 
            alt={imageAlt} 
            className="feature-section__image"
          />
        </div>

        <div className="feature-section__content">
          <h3 className="feature-section__title">{title}</h3>
          
          {subtitle && (
            <p className="feature-section__subtitle">{subtitle}</p>
          )}

          <ul className="feature-section__list">
            {features.map((feature) => (
              <li key={feature.id} className="feature-section__item">
                <span className="feature-section__icon">◆</span>
                <span className="feature-section__text">{feature.text}</span>
              </li>
            ))}
          </ul>

          <a 
            href={buttonLink} 
            className="feature-section__button"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;