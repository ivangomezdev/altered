import React from 'react';
import FeatureSection from '../FeatureSection/FeatureSection';
import './ExploreSection.css';

const ExploreSection = () => {
  const firstSectionFeatures = [
    {
      id: '1',
      text: 'Race your opponents to victory in a non-combative game of exploration',
    },
    {
      id: '2',
      text: 'Enjoy fast-paced games and lightning quick turns in a dynamic back-and-forth',
    },
    {
      id: '3',
      text: 'Collect one-off in the world unique cards and surprise your opponents with unprecedented decks',
    },
    {
      id: '4',
      text: 'Discover a modern and accessible mana system',
    },
    {
      id: '5',
      text: 'Replay cards from your Reserve to benefit from different abilities and whole new strategies',
    },
    {
      id: '6',
      text: 'Adapt to ever changing situations with cards that never remain in play for more than a few turns',
    },
  ];

  const secondSectionFeatures = [
    {
      id: '1',
      text: 'Discover a digital experience that entirely rethink the way you collect and trade cards',
    },
    {
      id: '2',
      text: 'Scan your cards and bring your collection online, accessible anywhere, anytime',
    },
    {
      id: '3',
      text: 'Deckbuild, share your list, buy your cards, sell and trade with a few clicks',
    },
    {
      id: '4',
      text: 'Print cards from your collection and have them delivered straight from the factory in the language of your choice',
    },
    {
      id: '5',
      text: 'Come and play in weekly store events to climb your way up the Adventure Pass',
    },
  ];

  return (
    <div className="explore-section">
      <div className="explore-section__hero">
        <h1 className="explore-section__hero-title">EXPLORE THE UNEXPECTED</h1>
        <p className="explore-section__hero-subtitle">
          Play as a Hero, choose a faction and lead your expeditions into the unknown 
          in this innovative TCG set in a modern and colorful fantasy universe.
        </p>
      </div>

      <FeatureSection
        title="A unique and modern experience"
        features={firstSectionFeatures}
        image="https://i.imgur.com/UOnHOxj.jpeg"
        imageAlt="Playing cards on a table"
        buttonText="DISCOVER THE GAME"
        buttonLink="/discover"
        imagePosition="left"
        variant="primary"
      />

      <FeatureSection
        title="A new world at your fingertips"
        features={secondSectionFeatures}
        image="https://i.imgur.com/E84OVPI.jpeg"
        imageAlt="Digital card collection"
        buttonText="LEARN MORE"
        buttonLink="/learn-more"
        imagePosition="right"
        variant="secondary"
      />
    </div>
  );
};

export default ExploreSection;

