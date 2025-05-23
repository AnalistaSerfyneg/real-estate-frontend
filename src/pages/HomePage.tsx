import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProperties from '../components/home/FeaturedProperties';

import TestimonialsSection from '../components/home/TestimonialsSection';


const HomePage: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Inmuebles serfyneg BPO S.A.S | Fondo nacional del ahorro';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturedProperties />
 
 

      <TestimonialsSection />
    </>
  );
};

export default HomePage;