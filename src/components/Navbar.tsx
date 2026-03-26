import React, { useState, useEffect } from 'react';
import { Search, LogIn, UserPlus, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MOCK_STOCKS } from '../constants';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const suggestions = MOCK_STOCKS.filter(stock => 
    stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "glass-nav shadow-[0_48px_100px_0_rgba(22,29,25,0.04)] py-3" : "bg-transparent py-5"
    )}>
      <nav className="max-w-[1440px] mx-auto px-6 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <a href="/" className="text-2xl font-black tracking-tighter font-headline text-on-surface">
            InvestAI
          </a>
          
          <div className="hidden lg:flex items-center gap-8">
            {['Home', 'Stocks', 'Mutual Funds', 'Portfolio', 'AI Insights'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-bold tracking-tight text-on-surface/80 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <div className="relative group">
              <input 
                type="text"
                placeholder="Search stocks, indices..."
                className="bg-surface-container-high border-none rounded-full px-6 py-2 w-64 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
            </div>

            <AnimatePresence>
              {showSuggestions && searchQuery && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-xl border border-outline-variant/20 overflow-hidden"
                >
                  {suggestions.length > 0 ? suggestions.map(stock => (
                    <button 
                      key={stock.symbol}
                      className="w-full px-6 py-3 text-left hover:bg-surface-container-low transition-colors flex justify-between items-center"
                    >
                      <div>
                        <div className="font-bold text-sm">{stock.symbol}</div>
                        <div className="text-xs text-outline">{stock.name}</div>
                      </div>
                      <div className={cn("text-xs font-bold", stock.change >= 0 ? "text-primary" : "text-error")}>
                        {stock.change >= 0 ? '+' : ''}{stock.change}%
                      </div>
                    </button>
                  )) : (
                    <div className="px-6 py-4 text-sm text-outline">No results found</div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-6 py-2 rounded-full font-bold text-sm bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-all">
              Login
            </button>
            <button className="px-6 py-2 rounded-full font-bold text-sm bg-gradient-to-br from-primary to-primary-container text-white shadow-lg shadow-primary/20 hover:scale-95 transition-all">
              Signup
            </button>
          </div>

          <button 
            className="lg:hidden p-2 text-on-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-outline-variant/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {['Home', 'Stocks', 'Mutual Funds', 'Portfolio', 'AI Insights'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-lg font-bold text-on-surface"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-6 border-t border-outline-variant/10">
                <button className="w-full py-3 rounded-full font-bold bg-surface-container-high text-on-surface">Login</button>
                <button className="w-full py-3 rounded-full font-bold bg-primary text-white">Signup</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
