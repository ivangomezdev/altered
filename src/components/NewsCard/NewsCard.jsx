import React from 'react';
import './NewsCard.css';



const NewsCard= ({
  image,
  title,
  description,
  timeAgo,
  readTime,
  link,
}) => {
  return (
    <article className="news-card">
      <a href={link} className="news-card__link">
        <div className="news-card__image-wrapper">
          <img 
            src={image} 
            alt={title} 
            className="news-card__image"
          />
          <span className="news-card__badge">NEW</span>
        </div>
        
        <div className="news-card__content">
          <div className="news-card__meta">
            <span className="news-card__time">{timeAgo}</span>
            <span className="news-card__separator">
              <svg className="news-card__icon" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="6" fill="currentColor"/>
              </svg>
            </span>
            <span className="news-card__read-time">{readTime}</span>
          </div>
          
          <h3 className="news-card__title">{title}</h3>
          
          <p className="news-card__description">{description}</p>
        </div>
      </a>
    </article>
  );
};

export default NewsCard;