import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsSelection.css';
import GoldenFadingLine from '../GoldenLine';


const NewsSelection = ({ news, onViewAll }) => {
  return (
    <section className="news-section">
      <div className="news-section__header">
        <h2 className="news-section__title">Last Cards</h2>
        <button 
          className="news-section__view-all"
          onClick={onViewAll}
        >
          VIEW ALL
        </button>
      </div>
      <div style={{marginBottom:"20px"}}>
      <GoldenFadingLine/>
      </div>
      <div className="news-section__grid">
        {news.map((item) => (
          <NewsCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            timeAgo={item.timeAgo}
            readTime={item.readTime}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default NewsSelection;
