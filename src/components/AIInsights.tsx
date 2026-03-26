import React from 'react';
import { Sparkles, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { MOCK_INSIGHTS } from '../constants';
import { cn } from '../lib/utils';

export const AIInsights = () => {
  return (
    <section id="ai-insights" className="py-20 px-6 md:px-8 max-w-[1440px] mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-black tracking-tighter mb-4 font-headline">AI Real-Time Signals</h2>
        <p className="text-on-surface-variant max-w-2xl">Predictive modeling that identifies market shifts before they become mainstream trends.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MOCK_INSIGHTS.map((insight) => (
          <div key={insight.id} className="relative p-8 rounded-2xl bg-surface-container-low border-l-4 border-primary overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Sparkles className="w-24 h-24" />
            </div>
            
            <div className="flex justify-between items-start mb-6">
              <div className={cn(
                "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                insight.recommendation === 'Buy' ? "bg-primary-fixed text-on-primary-fixed" :
                insight.recommendation === 'Sell' ? "bg-error-container text-on-error-container" :
                "bg-tertiary-fixed text-on-tertiary-fixed"
              )}>
                {insight.recommendation}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase">Confidence</span>
                <span className="text-sm font-black text-primary">{insight.confidence}%</span>
              </div>
            </div>

            <h4 className="text-xl font-black mb-3 font-headline flex items-center gap-2">
              {insight.symbol} Analysis
              {insight.recommendation === 'Buy' ? <TrendingUp className="w-5 h-5 text-primary" /> : 
               insight.recommendation === 'Sell' ? <TrendingDown className="w-5 h-5 text-error" /> : 
               <Minus className="w-5 h-5 text-outline" />}
            </h4>
            
            <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
              {insight.reason}
            </p>

            <div className="h-12 flex items-end gap-1">
              {[30, 45, 35, 60, 50, 80, 70, 90].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-primary/20 rounded-t-sm" 
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
