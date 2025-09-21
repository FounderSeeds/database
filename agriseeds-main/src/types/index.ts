export interface SeedProduct {
  id: string;
  name: string;
  category: 'corn' | 'soybean' | 'wheat' | 'cotton' | 'vegetables' | 'specialty';
  variety: string;
  description: string;
  features: string[];
  specifications: {
    maturity: string;
    yield: string;
    plantingRate: string;
    plantingDepth: string;
    spacing: string;
  };
  traits: string[];
  regions: string[];
  image: string;
  price: number;
  inStock: boolean;
  featured: boolean;
}

export interface Dealer {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  website?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  author: string;
  category: 'research' | 'products' | 'company' | 'industry';
  image: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'planting-guide' | 'pest-management' | 'harvest-tips' | 'storage';
  downloadUrl: string;
  fileType: 'pdf' | 'doc' | 'video';
}