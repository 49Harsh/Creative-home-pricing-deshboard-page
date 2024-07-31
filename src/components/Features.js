import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: 'Postgres Database', icon: '🗄️' },
  { title: 'Authentication', icon: '🔐' },
  { title: 'Instant APIs', icon: '⚡' },
  { title: 'Edge Functions', icon: '🌐' },
  { title: 'Realtime Subscriptions', icon: '🔄' },
  { title: 'Storage', icon: '💾' },
  { title: 'Vector Embeddings', icon: '🧠' },
];

function Features() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="text-4xl mb-4 block">{feature.icon}</span>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;