import { Stock, MutualFund, AIInsight } from './types';

export const MOCK_STOCKS: Stock[] = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 189.45, change: 2.45, marketCap: '2.98T', sector: 'Technology' },
  { symbol: 'NVDA', name: 'NVIDIA Corp', price: 924.18, change: 4.12, marketCap: '2.26T', sector: 'Technology' },
  { symbol: 'MSFT', name: 'Microsoft', price: 415.50, change: -0.45, marketCap: '3.09T', sector: 'Technology' },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 172.90, change: -1.89, marketCap: '550.4B', sector: 'Automotive' },
  { symbol: 'RELIANCE', name: 'Reliance Ind.', price: 2845.10, change: 0.45, marketCap: '230B', sector: 'Energy' },
  { symbol: 'INFY', name: 'Infosys', price: 1450.20, change: -2.41, marketCap: '75B', sector: 'Technology' },
];

export const MOCK_FUNDS: MutualFund[] = [
  { id: '1', name: 'Quant Small Cap Fund', category: 'Equity • Direct Plan', returns3Y: 42.8, risk: 'Very High', minSIP: 500 },
  { id: '2', name: 'HDFC Index S&P BSE', category: 'Index • Direct Plan', returns3Y: 18.4, risk: 'Moderate', minSIP: 100 },
  { id: '3', name: 'Axis Bluechip Fund', category: 'Large Cap • Equity', returns3Y: 12.5, risk: 'Moderate', minSIP: 500 },
  { id: '4', name: 'Nippon India Growth Fund', category: 'Mid Cap • Equity', returns3Y: 28.9, risk: 'High', minSIP: 100 },
];

export const MOCK_INSIGHTS: AIInsight[] = [
  { id: '1', symbol: 'AAPL', recommendation: 'Buy', confidence: 92, reason: 'Momentum indicators suggest a breakout above $192 resistance within 7 trading sessions.' },
  { id: '2', symbol: 'NVDA', recommendation: 'Hold', confidence: 78, reason: 'AI chip demand remains strong, but valuation is currently at a premium.' },
  { id: '3', symbol: 'TSLA', recommendation: 'Sell', confidence: 65, reason: 'Supply chain concerns and increasing competition in the EV space.' },
];

export const PORTFOLIO_DATA = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
  { name: 'Jul', value: 7000 },
];
