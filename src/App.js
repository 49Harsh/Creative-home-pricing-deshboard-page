import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import PricingSection from './components/PricingSection';
import ScrollablePricingSection from './components/ScrollablePricingSection';
import CreativeScrollPricingSection from './components/CreativeScrollPricingSection';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Hero />
      <PricingSection />
      <CreativeScrollPricingSection />

    </div>
  );
}

export default App;