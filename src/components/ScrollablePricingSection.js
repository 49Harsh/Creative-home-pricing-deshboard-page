import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PricingCard = ({ plan, price, features, buttonText, highlighted, description, payViaMarketplace }) => {
  return (
    <motion.div 
      className={`bg-white rounded-xl p-6 flex flex-col transition-all duration-300 h-full shadow-lg ${
        highlighted ? 'border-2 border-blue-500' : 'border-2 border-transparent'
      }`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold text-gray-800">{plan}</h3>
      <p className="text-3xl font-bold mb-2 text-gray-800">
        {price === 'Custom' ? price : `$${price}`}<span className="text-sm font-normal">{price !== 'Custom' && '/month'}</span>
      </p>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <button 
        className={`py-2 px-4 rounded-full mb-4 ${
          highlighted ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
        }`}
      >
        {buttonText}
      </button>
      <ul className="flex-grow space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <span className={`mr-2 ${feature.available ? 'text-green-500' : 'text-gray-400'}`}>
              {feature.available ? '●' : '○'}
            </span>
            <span className={feature.available ? 'text-gray-800' : 'text-gray-500'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ScrollablePricingSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [storedCards, setStoredCards] = useState([]);
  const containerRef = useRef(null);

  const plans = [
    {
      plan: 'Free Plan',
      price: '0',
      buttonText: 'Get Started',
      description: 'Always-available free tier, no credit card required.',
      features: [
        { text: '0.5 GiB storage', available: true },
        { text: '24/7 for your main database', available: true },
        { text: 'Community support', available: true },
        { text: 'Fixed capacity at 0.25 vCPU', available: true },
        { text: 'Point-in-time restore (24 h)', available: true },
        { text: 'Organization accounts', available: false },
        { text: 'IP Allow rules', available: false },
      ],
    },
    {
      plan: 'Launch',
      price: '19',
      buttonText: 'Get started',
      payViaMarketplace: true,
      description: 'All the resources, features and support you need to launch.',
      features: [
        { text: '10 GiB storage included', available: true },
        { text: '300 compute hours included', available: true },
        { text: 'Standard support', available: true },
        { text: 'Autoscaling up to 4 CU', available: true },
        { text: 'Point-in-time restore (7 days)', available: true },
        { text: 'Organization accounts', available: true },
        { text: 'IP Allow rules', available: true },
      ],
    },
    {
      plan: 'Scale',
      price: '69',
      buttonText: 'Get started',
      highlighted: true,
      payViaMarketplace: true,
      description: 'Full platform access for scaling production workloads.',
      features: [
        { text: '50 GiB storage included', available: true },
        { text: '750 compute hours included', available: true },
        { text: 'Priority support', available: true },
        { text: 'Autoscaling up to 10 CU', available: true },
        { text: 'Point-in-time restore (30 days)', available: true },
        { text: 'Organization accounts', available: true },
        { text: 'IP Allow rules', available: true },
      ],
    },
    {
      plan: 'Enterprise',
      price: 'Custom',
      buttonText: 'Request trial',
      description: 'Custom plans for large datasets and database fleets.',
      features: [
        { text: 'Higher resource limits', available: true },
        { text: 'Thousands of projects', available: true },
        { text: '99.95% SLA', available: true },
        { text: '24x7 customer support', available: true },
        { text: 'Dedicated Slack channel', available: true },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
        
        const newIndex = Math.floor((scrollPercentage / 100) * plans.length);
        if (newIndex !== currentCardIndex && newIndex < plans.length) {
          setCurrentCardIndex(newIndex);
          setStoredCards(prevCards => [...prevCards, plans[newIndex]]);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentCardIndex, plans]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">Neon Pricing</h2>
        <p className="text-xl text-center mb-12">
          Scroll to explore our pricing plans
        </p>
        <div className="flex space-x-8">
          <div className="w-1/3 space-y-4 overflow-y-auto" style={{ maxHeight: '80vh' }}>
            <AnimatePresence>
              {storedCards.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <PricingCard {...plan} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div 
            ref={containerRef}
            className="w-2/3 border-4 border-gray-200 rounded-3xl p-8 bg-gray-50 shadow-xl"
            style={{ height: '80vh', overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`
              #scrollContainer::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {plans.map((plan, index) => (
              <div key={index} style={{ height: '100%', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {currentCardIndex === index && <PricingCard {...plan} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollablePricingSection;