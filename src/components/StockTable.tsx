import React from 'react';
import { TrendingUp, TrendingDown, ExternalLink } from 'lucide-react';
import { MOCK_STOCKS } from '../constants';
import { cn } from '../lib/utils';

export const StockTable = () => {
  return (
    <section id="stocks" className="py-20 px-6 md:px-8 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-black tracking-tighter mb-4 font-headline">Market Watch</h2>
          <p className="text-on-surface-variant">Live price action of top performing assets</p>
        </div>
        <div className="flex gap-2">
          {['All Stocks', 'Large Cap', 'Mid Cap', 'Small Cap'].map((filter, i) => (
            <button 
              key={filter}
              className={cn(
                "px-5 py-2 rounded-full font-bold text-xs transition-colors",
                i === 0 ? "bg-primary-fixed text-on-primary-fixed" : "bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_48px_100px_0_rgba(22,29,25,0.04)] border border-outline-variant/10">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant">
                <th className="px-8 py-5 text-xs font-black uppercase tracking-widest">Company</th>
                <th className="px-8 py-5 text-xs font-black uppercase tracking-widest">Price</th>
                <th className="px-8 py-5 text-xs font-black uppercase tracking-widest">1D Change</th>
                <th className="px-8 py-5 text-xs font-black uppercase tracking-widest">Market Cap</th>
                <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high">
              {MOCK_STOCKS.map((stock) => (
                <tr key={stock.symbol} className="hover:bg-surface-container-low transition-colors cursor-pointer group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary group-hover:bg-white transition-colors">
                        {stock.symbol[0]}
                      </div>
                      <div>
                        <div className="font-black text-sm">{stock.name}</div>
                        <div className="text-[10px] text-outline font-bold uppercase tracking-wider">{stock.symbol} • {stock.sector}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 font-bold text-sm">${stock.price.toLocaleString()}</td>
                  <td className="px-8 py-6">
                    <div className={cn(
                      "flex items-center gap-1 text-sm font-black",
                      stock.change >= 0 ? "text-primary" : "text-error"
                    )}>
                      {stock.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      {stock.change >= 0 ? '+' : ''}{stock.change}%
                    </div>
                  </td>
                  <td className="px-8 py-6 text-outline text-xs font-bold">{stock.marketCap}</td>
                  <td className="px-8 py-6 text-right">
                    <button className="inline-flex items-center gap-2 text-primary-container bg-on-primary-container/5 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-wider hover:bg-on-primary-container/10 transition-colors">
                      Analyze <ExternalLink className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
