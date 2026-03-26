import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StockTable } from './components/StockTable';
import { MutualFunds } from './components/MutualFunds';
import { AIInsights } from './components/AIInsights';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar />
      
      <main>
        <Hero />
        
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <StockTable />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <MutualFunds />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AIInsights />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Portfolio />
        </motion.section>

        {/* CTA Section */}
        <section className="px-6 md:px-8 py-24 max-w-[1440px] mx-auto">
          <div className="bg-on-surface rounded-3xl p-12 lg:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://picsum.photos/seed/invest/1920/1080?blur=10" 
                alt="Background" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-7xl font-black text-white mb-8 tracking-tighter font-headline">
                Your Future is Calling. <br /> Answer with AI.
              </h2>
              <p className="text-xl text-surface-variant mb-12 max-w-2xl mx-auto">
                Join over 2 million investors who have stepped into the future of wealth management.
              </p>
              <button className="px-10 py-5 rounded-full bg-primary-container text-on-primary-container font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-primary-container/20">
                Create Your Account
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
