import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black to-gray-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Build in a weekend<br />
          <span className="text-white">Scale to millions</span>
        </h1>
      </motion.div>
      
      <motion.p 
        className="text-lg md:text-xl max-w-2xl mb-8 text-gray-300"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Supabase is an open source Firebase alternative.
        Start your project with a Postgres database, Authentication, instant APIs, Edge
        Functions, Realtime subscriptions, Storage, and Vector embeddings.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a href="#start" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
          Start your project
        </a>
      </motion.div>

      <motion.div
        className="mt-12 w-full max-w-4xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <pre className="text-green-400 text-sm md:text-base overflow-x-auto">
            <code>{`
                // Example Supabase query
                const { data, error } = await supabase
                    .from('users')
                    .select('*')
                    .eq('id', userId)
            `}</code>
          </pre>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;