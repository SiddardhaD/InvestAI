import React from 'react';
import { Github, Twitter, Linkedin, Globe, Share2 } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface pt-20 pb-10 px-6 md:px-8 border-t border-outline-variant/10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-1">
            <a href="/" className="text-2xl font-black tracking-tighter font-headline text-on-surface mb-6 block">
              InvestAI
            </a>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-8 max-w-xs">
              Democratizing wealth creation through intelligent, AI-driven stock market analysis and editorial precision.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-primary mb-6">Products</h5>
            <ul className="space-y-4 text-sm font-bold text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Stocks</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mutual Funds</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">ETFs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">IPOs</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-primary mb-6">Company</h5>
            <ul className="space-y-4 text-sm font-bold text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-primary mb-6">Resources</h5>
            <ul className="space-y-4 text-sm font-bold text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-primary mb-6">Legal</h5>
            <ul className="space-y-4 text-sm font-bold text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-outline">
            © {currentYear} InvestAI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-outline hover:text-primary transition-colors"><Globe className="w-5 h-5" /></button>
            <button className="text-outline hover:text-primary transition-colors"><Share2 className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </footer>
  );
};
