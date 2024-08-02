import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../components/images/supabase-logo-wordmark--dark.svg';



const Header = () => {
  const [isCompact, setIsCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']
  );

  const headerHeight = useTransform(scrollY, [0, 50], ['80px', '60px']);

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      style={{ background: headerBackground, height: headerHeight }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-800"
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='h-24 w-[10%]  flex items-center justify-center ite'
        >
          <img src={logo} alt='logo' loading='lazy'/>
        </motion.div>

        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            {['Product', 'Developers', 'Pricing', 'Docs', 'Blog'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-white hover:text-green-400 transition-colors ${
                    isCompact ? 'text-sm' : 'text-base'
                  }`}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="text-white text-sm hover:text-green-400 transition-colors">
              69.9K
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <button className="bg-green-700 h-6 text-sm flex items-center justify-center w-20 text-white  rounded-sm border border-green-300 hover:bg-green-600 transition-colors">
              Dashboard
            </button>
          </motion.div>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-black"
        >
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {['Product', 'Developers', 'Pricing', 'Docs', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-green-400 transition-colors block"
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="text-white hover:text-green-400 transition-colors block">
                  69.9K
                </a>
              </li>
              <li>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors w-full">
                  Dashboard
                </button>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};



export default Header;