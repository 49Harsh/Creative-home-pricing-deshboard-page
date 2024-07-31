import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PricingCard = ({ plan, price, features, buttonText, highlighted, description, payViaMarketplace, isSelected, onSelect }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div 
      ref={ref}
      className={`bg-[#1A1A1A] rounded-xl p-6 flex flex-col transition-all duration-300 h-full ${
        isSelected ? 'border-2 border-green-500' : 'border-2 border-transparent'
      } cursor-pointer`}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      onClick={onSelect}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold">{plan}</h3>
        {payViaMarketplace && (
          <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
            Pay via marketplace
          </span>
        )}
      </div>
      <p className="text-3xl font-bold mb-2">
        {price === 'Custom' ? price : `$${price}`}<span className="text-sm font-normal">{price !== 'Custom' && '/month'}</span>
      </p>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <button 
        className={`py-2 px-4 rounded-full mb-4 ${
          highlighted ? 'bg-green-500 hover:bg-green-600 text-black' : 'bg-gray-700 hover:bg-gray-600 text-white'
        }`}
      >
        {buttonText}
      </button>
      <ul className="flex-grow space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <span className={`mr-2 ${feature.available ? 'text-green-500' : 'text-gray-500'}`}>
              {feature.available ? '●' : '○'}
            </span>
            <span className={feature.available ? 'text-white' : 'text-gray-500'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const PricingSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedPlan, setSelectedPlan] = useState(2); // Default to Scale plan

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

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

  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          Neon Pricing
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Start free, launch with predictable costs, and scale efficiently.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index} 
              {...plan} 
              isSelected={selectedPlan === index}
              onSelect={() => setSelectedPlan(index)}
            />
          ))}
        </div>
        <motion.p 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Not sure which plan is right for you?<br />
          <a href="#" className="text-green-500 hover:underline">
            Explore the detailed plan comparison
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;