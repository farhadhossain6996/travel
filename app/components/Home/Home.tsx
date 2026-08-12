"use client";
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import Destination from './Destination/Destination';
import Hotel from './Hotel/Hotel';
import Offer from './Offer/Offer';
import News from './News/News';
import Reviews from './Reviews/Reviews';


import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    
    import('aos').then((AOS) => {
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
      AOS.refresh(); 
    });
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Destination />
      <Hotel />
      <Offer />
      <Reviews />
      <News />
    </div>
  );
}

export default Home;