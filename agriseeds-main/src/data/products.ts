import { SeedProduct } from '../types';

export const products: SeedProduct[] = [
  // Castor
  {
    id: 'castor-urvi',
    name: 'HYBRID URVI (FOC-1232)',
    category: 'castor',
    variety: 'FOC-1232',
    description: 'High-yielding hybrid castor variety with excellent oil content and disease resistance.',
    features: [
      'High oil content',
      'Disease resistant',
      'Uniform maturity',
      'Good branching'
    ],
    specifications: {
      maturity: '120-130 days',
      yield: '15-20 quintals/hectare',
      plantingRate: '8-10 kg/hectare',
      plantingDepth: '2-3 cm',
      spacing: '90 x 45 cm'
    },
    traits: ['Hybrid', 'High Oil Content', 'Disease Resistant'],
    regions: ['Gujarat', 'Rajasthan', 'Andhra Pradesh', 'Karnataka'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 450.00,
    inStock: true,
    featured: true
  },
  
  {
    id: 'castor-tokyo',
    name: 'HYBRID TOKYO (FOC-1177)',
    category: 'castor',
    variety: 'FOC-1177',
    description: 'High-yielding hybrid castor variety with excellent oil content and disease resistance.',
    features: [
      'High oil content',
      'Disease resistant',
      'Uniform maturity',
      'Good branching'
    ],
    specifications: {
      maturity: '120-130 days',
      yield: '15-20 quintals/hectare',
      plantingRate: '8-10 kg/hectare',
      plantingDepth: '2-3 cm',
      spacing: '90 x 45 cm'
    },
    traits: ['Hybrid', 'High Oil Content', 'Disease Resistant'],
    regions: ['Gujarat', 'Rajasthan', 'Andhra Pradesh', 'Karnataka'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 450.00,
    inStock: true,
    featured: true
  },
  
  // Groundnut
  {
    id: 'groundnut-ambar',
    name: 'AMBAR (FOG-1008)',
    category: 'groundnut',
    variety: 'FOG-1008',
    description: 'Improved groundnut variety with high kernel content and good market acceptance.',
    features: [
      'High kernel content',
      'Good market acceptance',
      'Disease resistance',
      'Uniform pod filling'
    ],
    specifications: {
      maturity: '110-120 days',
      yield: '25-30 quintals/hectare',
      plantingRate: '100-120 kg/hectare',
      plantingDepth: '3-4 cm',
      spacing: '30 x 10 cm'
    },
    traits: ['Improved Variety', 'High Kernel Content', 'Disease Resistant'],
    regions: ['Gujarat', 'Rajasthan', 'Maharashtra', 'Andhra Pradesh'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 85.00,
    inStock: true,
    featured: false
  },

  {
    id: 'groundnut-sonpari',
    name: 'SONPARI (FOG-1011)',
    category: 'groundnut',
    variety: 'FOG-1011',
    description: 'Improved groundnut variety with high kernel content and good market acceptance.',
    features: [
      'High kernel content',
      'Good market acceptance',
      'Disease resistance',
      'Uniform pod filling'
    ],
    specifications: {
      maturity: '110-120 days',
      yield: '25-30 quintals/hectare',
      plantingRate: '100-120 kg/hectare',
      plantingDepth: '3-4 cm',
      spacing: '30 x 10 cm'
    },
    traits: ['Improved Variety', 'High Kernel Content', 'Disease Resistant'],
    regions: ['Gujarat', 'Rajasthan', 'Maharashtra', 'Andhra Pradesh'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 85.00,
    inStock: true,
    featured: false
  },
  
  // Pigeon Pea
  {
    id: 'pigeonpea-shrivalli',
    name: 'SHRIVALLI (FOA-777)',
    category: 'pigeonpea',
    variety: 'FOA-777',
    description: 'High-yielding pigeon pea variety with excellent cooking quality and disease resistance.',
    features: [
      'High yield potential',
      'Excellent cooking quality',
      'Disease resistance',
      'Good market price'
    ],
    specifications: {
      maturity: '160-170 days',
      yield: '18-22 quintals/hectare',
      plantingRate: '15-20 kg/hectare',
      plantingDepth: '3-4 cm',
      spacing: '45 x 15 cm'
    },
    traits: ['High Yield', 'Disease Resistant', 'Premium Quality'],
    regions: ['Gujarat', 'Maharashtra', 'Karnataka', 'Madhya Pradesh'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 120.00,
    inStock: true,
    featured: true
  },

  {
    id: 'pigeonpea-shilavati',
    name: 'SHILAVATI (FOA-303)',
    category: 'pigeonpea',
    variety: 'FOA-303',
    description: 'High-yielding pigeon pea variety with excellent cooking quality and disease resistance.',
    features: [
      'High yield potential',
      'Excellent cooking quality',
      'Disease resistance',
      'Good market price'
    ],
    specifications: {
      maturity: '160-170 days',
      yield: '18-22 quintals/hectare',
      plantingRate: '15-20 kg/hectare',
      plantingDepth: '3-4 cm',
      spacing: '45 x 15 cm'
    },
    traits: ['High Yield', 'Disease Resistant', 'Premium Quality'],
    regions: ['Gujarat', 'Maharashtra', 'Karnataka', 'Madhya Pradesh'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 120.00,
    inStock: true,
    featured: true
  },
  
  // Soybean
  {
    id: 'soybean-lakshya',
    name: 'LAKSHYA (FOS-997)',
    category: 'soybean',
    variety: 'FOS-997',
    description: 'High-protein soybean variety with excellent yield potential and disease resistance.',
    features: [
      'High protein content',
      'Excellent yield',
      'Disease resistance',
      'Good oil content'
    ],
    specifications: {
      maturity: '95-105 days',
      yield: '20-25 quintals/hectare',
      plantingRate: '75-80 kg/hectare',
      plantingDepth: '3-4 cm',
      spacing: '30 x 10 cm'
    },
    traits: ['High Protein', 'Disease Resistant', 'High Yield'],
    regions: ['Gujarat', 'Maharashtra', 'Madhya Pradesh', 'Rajasthan'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 95.00,
    inStock: true,
    featured: true
  },

  {
    id: 'soybean-jemini',
    name: 'JEMINI (FOS-441)',
    category: 'soybean',
    variety: 'FOS-997',
    description: 'High-protein soybean variety with excellent yield potential and disease resistance.',
    features: [
      'High protein content',
      'Excellent yield',
      'Disease resistance',
      'Good oil content'
    ],
    specifications: {
      maturity: '95-105 days',
      yield: '20-25 quintals/hectare',
      plantingRate: '75-80 kg/hectare',
      plantingDepth: '3-4 cm',
      spacing: '30 x 10 cm'
    },
    traits: ['High Protein', 'Disease Resistant', 'High Yield'],
    regions: ['Gujarat', 'Maharashtra', 'Madhya Pradesh', 'Rajasthan'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 95.00,
    inStock: true,
    featured: true
  },
  
  // Wheat
  {
    id: 'wheat-rakshit',
    name: 'RAKSHIT (FOW-656)',
    category: 'wheat',
    variety: 'FOW-656',
    description: 'High-yielding wheat variety with excellent grain quality and disease resistance.',
    features: [
      'High yield potential',
      'Excellent grain quality',
      'Disease resistance',
      'Good milling quality'
    ],
    specifications: {
      maturity: '120-130 days',
      yield: '45-50 quintals/hectare',
      plantingRate: '100-120 kg/hectare',
      plantingDepth: '4-5 cm',
      spacing: '20 cm rows'
    },
    traits: ['High Yield', 'Disease Resistant', 'Premium Quality'],
    regions: ['Gujarat', 'Rajasthan', 'Madhya Pradesh', 'Uttar Pradesh'],
    image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 25.00,
    inStock: true,
    featured: true
  },
  
  {
    id: 'wheat-sarika',
    name: 'SARIKA (FOW-899)',
    category: 'wheat',
    variety: 'FOW-899',
    description: 'High-yielding wheat variety with excellent grain quality and disease resistance.',
    features: [
      'High yield potential',
      'Excellent grain quality',
      'Disease resistance',
      'Good milling quality'
    ],
    specifications: {
      maturity: '120-130 days',
      yield: '45-50 quintals/hectare',
      plantingRate: '100-120 kg/hectare',
      plantingDepth: '4-5 cm',
      spacing: '20 cm rows'
    },
    traits: ['High Yield', 'Disease Resistant', 'Premium Quality'],
    regions: ['Gujarat', 'Rajasthan', 'Madhya Pradesh', 'Uttar Pradesh'],
    image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 25.00,
    inStock: true,
    featured: true
  },

  {
    id: 'wheat-berline',
    name: 'BERLINE (FOW-999)',
    category: 'wheat',
    variety: 'FOW-999',
    description: 'High-yielding wheat variety with excellent grain quality and disease resistance.',
    features: [
      'High yield potential',
      'Excellent grain quality',
      'Disease resistance',
      'Good milling quality'
    ],
    specifications: {
      maturity: '120-130 days',
      yield: '45-50 quintals/hectare',
      plantingRate: '100-120 kg/hectare',
      plantingDepth: '4-5 cm',
      spacing: '20 cm rows'
    },
    traits: ['High Yield', 'Disease Resistant', 'Premium Quality'],
    regions: ['Gujarat', 'Rajasthan', 'Madhya Pradesh', 'Uttar Pradesh'],
    image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 25.00,
    inStock: true,
    featured: true
  },

  {
    id: 'wheat-agastya',
    name: 'AGASSTYA (FOW-525)',
    category: 'wheat',
    variety: 'FOW-525',
    description: 'High-yielding wheat variety with excellent grain quality and disease resistance.',
    features: [
      'High yield potential',
      'Excellent grain quality',
      'Disease resistance',
      'Good milling quality'
    ],
    specifications: {
      maturity: '120-130 days',
      yield: '45-50 quintals/hectare',
      plantingRate: '100-120 kg/hectare',
      plantingDepth: '4-5 cm',
      spacing: '20 cm rows'
    },
    traits: ['High Yield', 'Disease Resistant', 'Premium Quality'],
    regions: ['Gujarat', 'Rajasthan', 'Madhya Pradesh', 'Uttar Pradesh'],
    image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 25.00,
    inStock: true,
    featured: true
  },

  {
    id: 'wheat-akshit',
    name: 'AKSHIT (FOW-245)',
    category: 'wheat',
    variety: 'FOW-245',
    description: 'High-yielding wheat variety with excellent grain quality and disease resistance.',
    features: [
      'High yield potential',
      'Excellent grain quality',
      'Disease resistance',
      'Good milling quality'
    ],
    specifications: {
      maturity: '120-130 days',
      yield: '45-50 quintals/hectare',
      plantingRate: '100-120 kg/hectare',
      plantingDepth: '4-5 cm',
      spacing: '20 cm rows'
    },
    traits: ['High Yield', 'Disease Resistant', 'Premium Quality'],
    regions: ['Gujarat', 'Rajasthan', 'Madhya Pradesh', 'Uttar Pradesh'],
    image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 25.00,
    inStock: true,
    featured: true
  },

  // Gram (Chickpea)
  {
    id: 'gram-ojas',
    name: 'OJAS (FOG-3545)',
    category: 'gram',
    variety: 'FOG-3545',
    description: 'High-yielding gram variety with excellent cooking quality and market acceptance.',
    features: [
      'High yield potential',
      'Excellent cooking quality',
      'Good market acceptance',
      'Disease tolerance'
    ],
    specifications: {
      maturity: '95-105 days',
      yield: '18-22 quintals/hectare',
      plantingRate: '75-80 kg/hectare',
      plantingDepth: '3-4 cm',
      spacing: '30 x 10 cm'
    },
    traits: ['High Yield', 'Premium Quality', 'Disease Tolerant'],
    regions: ['Gujarat', 'Rajasthan', 'Madhya Pradesh', 'Maharashtra'],
    image: 'https://raw.githubusercontent.com/FounderSeeds/database/53970ed6b159a19afaf3d1d55483443212b73fc3/products-images/gram-seeds.png',
    price: 75.00,
    inStock: true,
    featured: false
  },
  
  {
    id: 'gram-omkar',
    name: 'OMKAR (FOG-4550)',
    category: 'gram',
    variety: 'FOG-4550',
    description: 'High-yielding gram variety with excellent cooking quality and market acceptance.',
    features: [
      'High yield potential',
      'Excellent cooking quality',
      'Good market acceptance',
      'Disease tolerance'
    ],
    specifications: {
      maturity: '95-105 days',
      yield: '18-22 quintals/hectare',
      plantingRate: '75-80 kg/hectare',
      plantingDepth: '3-4 cm',
      spacing: '30 x 10 cm'
    },
    traits: ['High Yield', 'Premium Quality', 'Disease Tolerant'],
    regions: ['Gujarat', 'Rajasthan', 'Madhya Pradesh', 'Maharashtra'],
    image: 'https://raw.githubusercontent.com/FounderSeeds/database/53970ed6b159a19afaf3d1d55483443212b73fc3/products-images/gram-seeds.png',
    price: 75.00,
    inStock: true,
    featured: false
  },

  {
    id: 'gram-oskar',
    name: 'OSKAR (FOG-5255)',
    category: 'gram',
    variety: 'FOG-5255',
    description: 'High-yielding gram variety with excellent cooking quality and market acceptance.',
    features: [
      'High yield potential',
      'Excellent cooking quality',
      'Good market acceptance',
      'Disease tolerance'
    ],
    specifications: {
      maturity: '95-105 days',
      yield: '18-22 quintals/hectare',
      plantingRate: '75-80 kg/hectare',
      plantingDepth: '3-4 cm',
      spacing: '30 x 10 cm'
    },
    traits: ['High Yield', 'Premium Quality', 'Disease Tolerant'],
    regions: ['Gujarat', 'Rajasthan', 'Madhya Pradesh', 'Maharashtra'],
    image: 'https://raw.githubusercontent.com/FounderSeeds/database/53970ed6b159a19afaf3d1d55483443212b73fc3/products-images/gram-seeds.png',
    price: 75.00,
    inStock: true,
    featured: false
  },
  // Coriander
  {
    id: 'coriander-natraj',
    name: 'NATRAJ ()',
    category: 'coriander',
    variety: 'FOD-265',
    description: 'Premium coriander variety with high essential oil content and excellent aroma.',
    features: [
      'High essential oil content',
      'Excellent aroma',
      'Good seed size',
      'Market premium'
    ],
    specifications: {
      maturity: '100-110 days',
      yield: '8-12 quintals/hectare',
      plantingRate: '12-15 kg/hectare',
      plantingDepth: '1-2 cm',
      spacing: '25 x 10 cm'
    },
    traits: ['High Oil Content', 'Premium Aroma', 'Market Premium'],
    regions: ['Gujarat', 'Rajasthan', 'Madhya Pradesh', 'Andhra Pradesh'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 180.00,
    inStock: true,
    featured: false
  },

  {
    id: 'coriander-natraj',
    name: 'NATRAJ (FOD-265)',
    category: 'coriander',
    variety: 'FOD-265',
    description: 'Premium coriander variety with high essential oil content and excellent aroma.',
    features: [
      'High essential oil content',
      'Excellent aroma',
      'Good seed size',
      'Market premium'
    ],
    specifications: {
      maturity: '100-110 days',
      yield: '8-12 quintals/hectare',
      plantingRate: '12-15 kg/hectare',
      plantingDepth: '1-2 cm',
      spacing: '25 x 10 cm'
    },
    traits: ['High Oil Content', 'Premium Aroma', 'Market Premium'],
    regions: ['Gujarat', 'Rajasthan', 'Madhya Pradesh', 'Andhra Pradesh'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 180.00,
    inStock: true,
    featured: false
  },

  {
    id: 'coriander-chaitali',
    name: 'CHAITALI (FOD-666)',
    category: 'coriander',
    variety: 'FOD-666',
    description: 'Premium coriander variety with high essential oil content and excellent aroma.',
    features: [
      'High essential oil content',
      'Excellent aroma',
      'Good seed size',
      'Market premium'
    ],
    specifications: {
      maturity: '100-110 days',
      yield: '8-12 quintals/hectare',
      plantingRate: '12-15 kg/hectare',
      plantingDepth: '1-2 cm',
      spacing: '25 x 10 cm'
    },
    traits: ['High Oil Content', 'Premium Aroma', 'Market Premium'],
    regions: ['Gujarat', 'Rajasthan', 'Madhya Pradesh', 'Andhra Pradesh'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 180.00,
    inStock: true,
    featured: false
  },

  {
    id: 'coriander-mishri',
    name: 'MISHRI (FOD-365)',
    category: 'coriander',
    variety: 'FOD-365',
    description: 'Premium coriander variety with high essential oil content and excellent aroma.',
    features: [
      'High essential oil content',
      'Excellent aroma',
      'Good seed size',
      'Market premium'
    ],
    specifications: {
      maturity: '100-110 days',
      yield: '8-12 quintals/hectare',
      plantingRate: '12-15 kg/hectare',
      plantingDepth: '1-2 cm',
      spacing: '25 x 10 cm'
    },
    traits: ['High Oil Content', 'Premium Aroma', 'Market Premium'],
    regions: ['Gujarat', 'Rajasthan', 'Madhya Pradesh', 'Andhra Pradesh'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 180.00,
    inStock: true,
    featured: false
  },

  
  
  // Cumin
  {
    id: 'cumin-keval',
    name: 'KEVAL (FOC-101)',
    category: 'cumin',
    variety: 'FOC-101',
    description: 'High-quality cumin variety with excellent flavor and market demand.',
    features: [
      'Excellent flavor',
      'High market demand',
      'Good seed uniformity',
      'Strong aroma'
    ],
    specifications: {
      maturity: '110-120 days',
      yield: '4-6 quintals/hectare',
      plantingRate: '12-15 kg/hectare',
      plantingDepth: '1-2 cm',
      spacing: '25 x 10 cm'
    },
    traits: ['Premium Flavor', 'Market Demand', 'Strong Aroma'],
    regions: ['Gujarat', 'Rajasthan'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 350.00,
    inStock: true,
    featured: false
  },

   {
    id: 'cumin-vyom',
    name: 'VYOM (FOC-205)',
    category: 'cumin',
    variety: 'FOC-205',
    description: 'High-quality cumin variety with excellent flavor and market demand.',
    features: [
      'Excellent flavor',
      'High market demand',
      'Good seed uniformity',
      'Strong aroma'
    ],
    specifications: {
      maturity: '110-120 days',
      yield: '4-6 quintals/hectare',
      plantingRate: '12-15 kg/hectare',
      plantingDepth: '1-2 cm',
      spacing: '25 x 10 cm'
    },
    traits: ['Premium Flavor', 'Market Demand', 'Strong Aroma'],
    regions: ['Gujarat', 'Rajasthan'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 350.00,
    inStock: true,
    featured: false
  },
  
  // Sesame
  {
    id: 'sesame-ketaki',
    name: 'KETAKI (FOS-1011)',
    category: 'sesame',
    variety: 'FOS-1011',
    description: 'High-yielding sesame variety with excellent oil content and quality.',
    features: [
      'High oil content',
      'Excellent quality',
      'Good capsule filling',
      'Uniform maturity'
    ],
    specifications: {
      maturity: '85-95 days',
      yield: '6-8 quintals/hectare',
      plantingRate: '3-4 kg/hectare',
      plantingDepth: '1-2 cm',
      spacing: '30 x 10 cm'
    },
    traits: ['High Oil Content', 'Premium Quality', 'Uniform Maturity'],
    regions: ['Gujarat', 'Rajasthan', 'Andhra Pradesh', 'West Bengal'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 120.00,
    inStock: true,
    featured: false
  },
  
  {
    id: 'sesame-vrunda',
    name: 'VRUNDA (FOS-1055)',
    category: 'sesame',
    variety: 'FOS-1055',
    description: 'High-yielding sesame variety with excellent oil content and quality.',
    features: [
      'High oil content',
      'Excellent quality',
      'Good capsule filling',
      'Uniform maturity'
    ],
    specifications: {
      maturity: '85-95 days',
      yield: '6-8 quintals/hectare',
      plantingRate: '3-4 kg/hectare',
      plantingDepth: '1-2 cm',
      spacing: '30 x 10 cm'
    },
    traits: ['High Oil Content', 'Premium Quality', 'Uniform Maturity'],
    regions: ['Gujarat', 'Rajasthan', 'Andhra Pradesh', 'West Bengal'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 120.00,
    inStock: true,
    featured: false
  },

  {
    id: 'sesame-blackkobra',
    name: 'BLACK KOBRA (FOS-1044)',
    category: 'sesame',
    variety: 'FOS-1044',
    description: 'High-yielding sesame variety with excellent oil content and quality.',
    features: [
      'High oil content',
      'Excellent quality',
      'Good capsule filling',
      'Uniform maturity'
    ],
    specifications: {
      maturity: '85-95 days',
      yield: '6-8 quintals/hectare',
      plantingRate: '3-4 kg/hectare',
      plantingDepth: '1-2 cm',
      spacing: '30 x 10 cm'
    },
    traits: ['High Oil Content', 'Premium Quality', 'Uniform Maturity'],
    regions: ['Gujarat', 'Rajasthan', 'Andhra Pradesh', 'West Bengal'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 120.00,
    inStock: true,
    featured: false
  },

  {
    id: 'sesame-urmi',
    name: 'URMI (FOS-1099)',
    category: 'sesame',
    variety: 'FOS-1099',
    description: 'High-yielding sesame variety with excellent oil content and quality.',
    features: [
      'High oil content',
      'Excellent quality',
      'Good capsule filling',
      'Uniform maturity'
    ],
    specifications: {
      maturity: '85-95 days',
      yield: '6-8 quintals/hectare',
      plantingRate: '3-4 kg/hectare',
      plantingDepth: '1-2 cm',
      spacing: '30 x 10 cm'
    },
    traits: ['High Oil Content', 'Premium Quality', 'Uniform Maturity'],
    regions: ['Gujarat', 'Rajasthan', 'Andhra Pradesh', 'West Bengal'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 120.00,
    inStock: true,
    featured: false
  },
  // Green Gram (Moong)
  {
    id: 'greengram-vigna',
    name: 'VIGNA (FOM-6291)',
    category: 'greengram',
    variety: 'FOM-6291',
    description: 'High-yielding green gram variety with excellent cooking quality and protein content.',
    features: [
      'High protein content',
      'Excellent cooking quality',
      'Good market acceptance',
      'Disease resistance'
    ],
    specifications: {
      maturity: '65-75 days',
      yield: '8-12 quintals/hectare',
      plantingRate: '20-25 kg/hectare',
      plantingDepth: '3-4 cm',
      spacing: '30 x 10 cm'
    },
    traits: ['High Protein', 'Disease Resistant', 'Good Cooking'],
    regions: ['Gujarat', 'Rajasthan', 'Maharashtra', 'Haryana'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 95.00,
    inStock: true,
    featured: false
  },

  {
    id: 'greengram-vibha',
    name: 'VIBHA (FOM-6220)',
    category: 'greengram',
    variety: 'FOM-6220',
    description: 'High-yielding green gram variety with excellent cooking quality and protein content.',
    features: [
      'High protein content',
      'Excellent cooking quality',
      'Good market acceptance',
      'Disease resistance'
    ],
    specifications: {
      maturity: '65-75 days',
      yield: '8-12 quintals/hectare',
      plantingRate: '20-25 kg/hectare',
      plantingDepth: '3-4 cm',
      spacing: '30 x 10 cm'
    },
    traits: ['High Protein', 'Disease Resistant', 'Good Cooking'],
    regions: ['Gujarat', 'Rajasthan', 'Maharashtra', 'Haryana'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 95.00,
    inStock: true,
    featured: false
  },

  {
    id: 'greengram-viha',
    name: 'VIha (FOM-6232)',
    category: 'greengram',
    variety: 'FOM-6232',
    description: 'High-yielding green gram variety with excellent cooking quality and protein content.',
    features: [
      'High protein content',
      'Excellent cooking quality',
      'Good market acceptance',
      'Disease resistance'
    ],
    specifications: {
      maturity: '65-75 days',
      yield: '8-12 quintals/hectare',
      plantingRate: '20-25 kg/hectare',
      plantingDepth: '3-4 cm',
      spacing: '30 x 10 cm'
    },
    traits: ['High Protein', 'Disease Resistant', 'Good Cooking'],
    regions: ['Gujarat', 'Rajasthan', 'Maharashtra', 'Haryana'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 95.00,
    inStock: true,
    featured: false
  },
  

  // Black Gram (Urad)
  {
    id: 'blackgram-blackdog',
    name: 'BLACK DOG (FOB-45)',
    category: 'blackgram',
    variety: 'FOB-45',
    description: 'High-yielding black gram variety with excellent protein content and cooking quality.',
    features: [
      'High protein content',
      'Excellent cooking quality',
      'Good market demand',
      'Disease tolerance'
    ],
    specifications: {
      maturity: '75-85 days',
      yield: '8-12 quintals/hectare',
      plantingRate: '25-30 kg/hectare',
      plantingDepth: '3-4 cm',
      spacing: '30 x 10 cm'
    },
    traits: ['High Protein', 'Disease Tolerant', 'Good Cooking'],
    regions: ['Gujarat', 'Maharashtra', 'Andhra Pradesh', 'Tamil Nadu'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 110.00,
    inStock: true,
    featured: false
  },

  {
    id: 'blackgram-kaliyar',
    name: 'KALIYAR (FOB-76)',
    category: 'blackgram',
    variety: 'FOB-76',
    description: 'High-yielding black gram variety with excellent protein content and cooking quality.',
    features: [
      'High protein content',
      'Excellent cooking quality',
      'Good market demand',
      'Disease tolerance'
    ],
    specifications: {
      maturity: '75-85 days',
      yield: '8-12 quintals/hectare',
      plantingRate: '25-30 kg/hectare',
      plantingDepth: '3-4 cm',
      spacing: '30 x 10 cm'
    },
    traits: ['High Protein', 'Disease Tolerant', 'Good Cooking'],
    regions: ['Gujarat', 'Maharashtra', 'Andhra Pradesh', 'Tamil Nadu'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 110.00,
    inStock: true,
    featured: false
  },


  // Cowpea
  {
    id: 'cowpea-amruta',
    name: 'AMRUTA (FOC-9070)',
    category: 'cowpea',
    variety: 'FOC-9070',
    description: 'High-yielding cowpea variety with excellent nutritional value and drought tolerance.',
    features: [
      'High nutritional value',
      'Drought tolerance',
      'Good yield potential',
      'Multiple harvest'
    ],
    specifications: {
      maturity: '60-70 days',
      yield: '10-15 quintals/hectare',
      plantingRate: '15-20 kg/hectare',
      plantingDepth: '3-4 cm',
      spacing: '45 x 15 cm'
    },
    traits: ['High Nutrition', 'Drought Tolerant', 'Multiple Harvest'],
    regions: ['Gujarat', 'Rajasthan', 'Maharashtra', 'Karnataka'],
    image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 85.00,
    inStock: true,
    featured: false
  }
];