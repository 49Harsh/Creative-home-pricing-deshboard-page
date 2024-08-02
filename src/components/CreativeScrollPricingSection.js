import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PricingCard = ({ plan, price, features, buttonText, highlighted, description }) => {
  return (
    <div className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 flex flex-col transition-all duration-300 h-full shadow-lg ${
      highlighted ? 'border-2 border-blue-400' : 'border-2 border-transparent'
    }`}>
      <h3 className="text-2xl font-semibold text-white mb-2">{plan}</h3>
      <p className="text-4xl font-bold mb-4 text-blue-400">
        {price === 'Custom' ? price : `$${price}`}<span className="text-sm font-normal text-white">{price !== 'Custom' && '/month'}</span>
      </p>
      <p className="text-sm text-gray-300 mb-6">{description}</p>
      <button 
        className={`py-3 px-6 rounded-full mb-6 text-lg font-semibold transition-all duration-300 ${
          highlighted ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-white bg-opacity-20 hover:bg-opacity-30 text-white'
        }`}
      >
        {buttonText}
      </button>
      <ul className="flex-grow space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <span className={`mr-3 ${feature.available ? 'text-green-400' : 'text-gray-500'}`}>
              {feature.available ? '✓' : '✗'}
            </span>
            <span className={feature.available ? 'text-white' : 'text-gray-400'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CreativeScrollPricingSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const cardsRef = useRef([]);

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
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    const cards = cardsRef.current;

    let ctx = gsap.context(() => {
      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: () => "+=" + trigger.offsetWidth,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          snap: 1 / (cards.length - 1),
        }
      });

      cards.forEach((card, i) => {
        gsap.fromTo(card, 
          { opacity: 0, scale: 0.8, y: 50 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              containerAnimation: ScrollTrigger.getById("mainScroll"),
              start: "left center",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative overflow-hidden text-white bg-gradient-to-b from-black to-gray-900">
      <div className="h-screen flex items-center justify-center relative z-10">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Neon Pricing</h1>
          <p className="text-xl text-blue-300">Choose the perfect plan for your needs</p>
        </div>
      </div>
      <div ref={triggerRef} className="h-screen flex items-center overflow-x-hidden relative z-10">
        <div className="flex">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el} 
              className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-4"
            >
              <div className="w-full max-w-md">
                <PricingCard {...plan} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreativeScrollPricingSection;