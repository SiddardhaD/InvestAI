import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PORTFOLIO_DATA } from '../constants';
import { TrendingUp, Wallet, PieChart, Activity } from 'lucide-react';

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6 md:px-8 bg-on-surface text-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-black tracking-tighter mb-4 font-headline">Your Command Center</h2>
          <p className="text-surface-variant max-w-2xl">Aggregate your entire financial life in one unified, living ledger.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
                  <Wallet className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold opacity-60 uppercase tracking-widest">Total Investment</p>
                  <p className="text-2xl font-black font-headline">$42,850.00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold opacity-60 uppercase tracking-widest">Current Value</p>
                  <p className="text-2xl font-black font-headline text-primary-container">$58,420.00</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-primary-container" />
                  Asset Allocation
                </h4>
                <span className="text-[10px] font-bold opacity-60 uppercase">Diversified</span>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Stocks', value: 65, color: 'bg-primary-container' },
                  { label: 'Mutual Funds', value: 25, color: 'bg-primary' },
                  { label: 'Cash', value: 10, color: 'bg-surface-variant' },
                ].map((asset) => (
                  <div key={asset.label}>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span>{asset.label}</span>
                      <span>{asset.value}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full ${asset.color}`} style={{ width: `${asset.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 min-h-[400px]">
            <div className="flex justify-between items-center mb-8">
              <h4 className="font-bold flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary-container" />
                Performance Overview
              </h4>
              <div className="flex gap-2">
                {['1W', '1M', '3M', '1Y', 'ALL'].map((t) => (
                  <button key={t} className="px-3 py-1 rounded-full text-[10px] font-bold hover:bg-white/10 transition-colors">
                    {t}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={PORTFOLIO_DATA}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00d09c" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00d09c" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#ffffff40" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <YAxis 
                    stroke="#ffffff40" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false} 
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#161d19', border: 'none', borderRadius: '12px', fontSize: '12px' }}
                    itemStyle={{ color: '#00d09c' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#00d09c" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
