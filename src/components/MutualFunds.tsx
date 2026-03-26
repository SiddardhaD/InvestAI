import React from 'react';
import { Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { MOCK_FUNDS } from '../constants';
import { cn } from '../lib/utils';

export const MutualFunds = () => {
  return (
    <section id="mutual-funds" className="py-20 px-6 md:px-8 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black tracking-tighter mb-4 font-headline">Elite Mutual Funds</h2>
            <p className="text-on-surface-variant">High-performance portfolios managed by the industry's top quantitative experts and AI algorithms.</p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
            View All Funds <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_FUNDS.map((fund) => (
            <div key={fund.id} className="group bg-surface-container-lowest p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl border border-outline-variant/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-on-surface text-white flex items-center justify-center group-hover:bg-primary transition-colors">
                  {fund.risk === 'Very High' ? <TrendingUp className="w-7 h-7" /> : <Shield className="w-7 h-7" />}
                </div>
                <div>
                  <h4 className="font-black text-sm leading-tight">{fund.name}</h4>
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">{fund.category}</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1 tracking-widest">3Y Annualized Return</p>
                <p className="text-4xl font-black text-primary">+{fund.returns3Y}%</p>
              </div>

              <div className="p-4 bg-surface-container-low rounded-xl mb-8">
                <div className="flex justify-between text-[10px] font-bold mb-2 uppercase tracking-widest">
                  <span>Risk Profile</span>
                  <span>{fund.risk}</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div 
                    className={cn(
                      "h-full transition-all duration-1000",
                      fund.risk === 'Very High' ? "w-[95%] bg-error" : 
                      fund.risk === 'High' ? "w-[75%] bg-tertiary-container" : 
                      fund.risk === 'Moderate' ? "w-[50%] bg-primary" : "w-[25%] bg-primary-container"
                    )}
                  />
                </div>
              </div>

              <button className="w-full py-4 rounded-full bg-on-surface text-white font-black text-sm group-hover:bg-primary transition-colors">
                Invest Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
