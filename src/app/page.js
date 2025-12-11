"use client"
import React from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/NavBar/NavBar";
import HeroComponent from '../components/HeroComponent/HeroComponent';

import "../components/NavBar/NavBar.css";
import NewsSelection from '@/components/NewsSelection/NewsSelection';
import { newsData } from './config/newsData';
import ExploreSection from '@/components/ExploreSection/ExploreSection';
import HeroLore from '@/components/HeroLore/HeroLore';
import PromoCards from '@/components/PromoCards/PromoCards';

const logoData = {
  src: "https://i.imgur.com/6jT5tnZ.png",
  alt: "Logo del Proyecto"
};

const navigationItems = [
  { 
    href: "#cards", 
    text: "Cards", 
    iconSrc: "https://i.imgur.com/0xuzeXK.png", 
    iconAlt: "Cards Icon" 
  },
  { 
    href: "#decks", 
    text: "Decks", 
    iconSrc: "https://i.imgur.com/QWWDNlW.png", 
    iconAlt: "Decks Icon" 
  },
  { 
    href: "#pod", 
    text: "POD", 
    iconSrc: "https://i.imgur.com/SnL6gOc.png", 
    iconAlt: "POD Icon" 
  },
  { 
    href: "#events", 
    text: "Events", 
    iconSrc: "https://i.imgur.com/qWVOipG.png", 
    iconAlt: "Events Icon" 
  }
];

export default function Home() {

  const handleMenuToggle = () => {
    console.log("Botón de menú clickeado!");
  };

   const handleViewAll = () => {
    console.log('View all news clicked');
    // Navegar a la página de todas las noticias
  };

  const loreText = (
    <>
      <p>
        During a planetary cataclysm now known as the Confluence, a magical storm swept over the world, 
        merging the imaginary world and our own and transforming everything in its path.
      </p>
      <p>
        After a few hundred years, with peace and prosperity finally secured, humanity has decided 
        to venture beyond the frontiers of its home.
      </p>
    </>
  );

  return (
    <div>
      
      <div className="navbar-container">
        <Navbar 
          logo={logoData}
          navItems={navigationItems}
          onToggleClick={handleMenuToggle}
        />
        <button className="navbar-container__login-btn">
          Login
        </button>
      </div>

      <HeroComponent/>

      <NewsSelection news={newsData} onViewAll={handleViewAll}/>
            <ExploreSection />
            <PromoCards/>
<HeroLore 
        title="Dive into the world of Altered"
        description={loreText}
        bgImage="https://i.imgur.com/GIh3Ogo.png" // Asegúrate de tener esta imagen
      />
    </div>
  );
}