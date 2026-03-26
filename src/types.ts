export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  marketCap: string;
  sector: string;
}

export interface MutualFund {
  id: string;
  name: string;
  category: string;
  returns3Y: number;
  risk: 'Low' | 'Moderate' | 'High' | 'Very High';
  minSIP: number;
}

export interface AIInsight {
  id: string;
  symbol: string;
  recommendation: 'Buy' | 'Sell' | 'Hold';
  confidence: number;
  reason: string;
}
