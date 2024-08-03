import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PricingSection from './components/PricingSection';
import CreativeScrollPricingSection from './components/CreativeScrollPricingSection';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Hero />
      <PricingSection />
      <CreativeScrollPricingSection />
      <Dashboard />

    </div>
  );
}

export default App;