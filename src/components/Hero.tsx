import React from 'react';
import { ArrowRight, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-8 max-w-[1440px] mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold tracking-wider uppercase mb-6">
            Introducing V3 Intelligence
          </span>
          <h1 className="text-6xl lg:text-8xl font-black text-on-surface leading-[0.9] tracking-tighter mb-8 font-headline">
            Invest Smart <br />
            <span className="text-primary-container">with AI.</span>
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">
            Track stocks, mutual funds, and get AI-powered insights. InvestAI transforms raw data into personalized wealth narratives.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-br from-primary to-primary-container text-white font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-full bg-surface-container-lowest text-on-surface font-bold text-lg flex items-center gap-2 group hover:bg-surface-container-low transition-colors">
              Explore Stocks 
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-16 flex gap-8 items-center opacity-60">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-bold">Real-time Tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-bold">Secure Investing</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-bold">AI Insights</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:ml-auto"
        >
          <div className="relative bg-surface-container-lowest p-8 rounded-xl shadow-[0_48px_100px_0_rgba(22,29,25,0.04)] overflow-hidden border border-outline-variant/10">
            <div className="flex justify-between items-start mb-12">
              <div>
                <p className="text-sm font-semibold text-on-surface-variant mb-1">Total Assets Portfolio</p>
                <h2 className="text-5xl font-black tracking-tighter font-headline">$1,284,592.00</h2>
              </div>
              <div className="bg-primary-fixed px-3 py-1 rounded-full flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-on-primary-fixed" />
                <span className="text-xs font-bold text-on-primary-fixed">+12.4%</span>
              </div>
            </div>
            
            <div className="h-48 flex items-end gap-2 mb-8">
              {[40, 60, 55, 90, 75, 85, 70].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  className={cn(
                    "flex-1 rounded-t-lg",
                    i === 3 ? "bg-primary-container" : "bg-surface-container-low"
                  )}
                />
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface-container-low">
                <p className="text-[10px] font-bold text-outline uppercase mb-1">Daily Gain</p>
                <p className="text-lg font-black text-primary">+$15,420.00</p>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low">
                <p className="text-[10px] font-bold text-outline uppercase mb-1">AI Confidence</p>
                <p className="text-lg font-black text-on-surface">98.2%</p>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-outline-variant/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                <Zap className="w-5 h-5" fill="currentColor" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-outline uppercase">AI Signal</p>
                <p className="text-sm font-black">Strong Buy AAPL</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
