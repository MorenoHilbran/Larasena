// Mock data for Larasena application

export const batikDesigns = [
  {
    id: 1,
    name: 'Parang Klasik',
    thumbnail: '/shirt_baked.glb',
    category: 'Traditional',
    colors: ['#B33F00', '#D8B08C', '#A67B5B'],
    description: 'Classic diagonal pattern representing strength and determination'
  },
  {
    id: 2,
    name: 'Mega Mendung Modern',
    thumbnail: '/1_men_batik_shirt_short.glb',
    category: 'Contemporary',
    colors: ['#A67B5B', '#F5F0E1', '#B33F00'],
    description: 'Cloud motif symbolizing patience and tranquility'
  },
  {
    id: 3,
    name: 'Kawung Fusion',
    thumbnail: '/long_sleeve_batik_shirt_2.glb',
    category: 'Modern',
    colors: ['#D8B08C', '#B33F00', '#F5F0E1'],
    description: 'Palm fruit pattern representing noble character'
  },
  {
    id: 4,
    name: 'Truntum Contemporary',
    thumbnail: '/women_shirt_batik.glb',
    category: 'Traditional',
    colors: ['#F5F0E1', '#A67B5B', '#D8B08C'],
    description: 'Flower motif symbolizing love and eternal beauty'
  },
  {
    id: 5,
    name: 'Sido Mukti New',
    thumbnail: '/long_sleeve_batik_shirt_2 (1).glb',
    category: 'Contemporary',
    colors: ['#B33F00', '#F5F0E1', '#A67B5B'],
    description: 'Prosperity pattern for special occasions'
  },
  {
    id: 6,
    name: 'Batik Pesisir Modern',
    thumbnail: '/shirt_baked.glb',
    category: 'Modern',
    colors: ['#A67B5B', '#D8B08C', '#F5F0E1'],
    description: 'Coastal batik with maritime influences'
  }
]

export const konveksiPartners = [
  {
    id: 1,
    name: 'Batik Nusantara Craft',
    rating: 4.8,
    location: 'Jakarta, Indonesia',
    description: 'Premium batik production with traditional hand-drawn techniques and modern quality standards.',
    specialties: ['Hand-drawn Batik', 'Premium Fabrics', 'Custom Orders'],
    minOrder: 50,
    priceRange: 'Rp 150.000 - Rp 500.000',
    image: '🏭',
    established: 2015,
    employees: '50-100'
  },
  {
    id: 2,
    name: 'Jogja Heritage Textiles',
    rating: 4.9,
    location: 'Yogyakarta, Indonesia',
    description: 'Authentic Yogyakarta batik makers with UNESCO heritage techniques and contemporary designs.',
    specialties: ['Heritage Patterns', 'Natural Dyes', 'Sustainable Production'],
    minOrder: 25,
    priceRange: 'Rp 200.000 - Rp 750.000',
    image: '🎨',
    established: 2010,
    employees: '25-50'
  },
  {
    id: 3,
    name: 'Solo Batik Excellence',
    rating: 4.7,
    location: 'Surakarta, Indonesia',
    description: 'Modern batik production facility with digital printing capabilities and traditional craftsmanship.',
    specialties: ['Digital Printing', 'Bulk Orders', 'Quick Turnaround'],
    minOrder: 100,
    priceRange: 'Rp 100.000 - Rp 400.000',
    image: '🏢',
    established: 2018,
    employees: '100+'
  },
  {
    id: 4,
    name: 'Pekalongan Batik Hub',
    rating: 4.6,
    location: 'Pekalongan, Indonesia',
    description: 'Coastal batik specialists known for vibrant colors and maritime-inspired patterns.',
    specialties: ['Coastal Designs', 'Vibrant Colors', 'Export Quality'],
    minOrder: 75,
    priceRange: 'Rp 120.000 - Rp 450.000',
    image: '🌊',
    established: 2012,
    employees: '75-100'
  },
  {
    id: 5,
    name: 'Modern Batik Innovations',
    rating: 4.5,
    location: 'Bandung, Indonesia',
    description: 'Contemporary batik studio focusing on modern interpretations and innovative techniques.',
    specialties: ['Modern Designs', 'Tech Integration', 'Youth Market'],
    minOrder: 30,
    priceRange: 'Rp 180.000 - Rp 600.000',
    image: '💡',
    established: 2020,
    employees: '10-25'
  },
  {
    id: 6,
    name: 'Eco Batik Solutions',
    rating: 4.8,
    location: 'Bali, Indonesia',
    description: 'Sustainable batik production using eco-friendly materials and traditional processes.',
    specialties: ['Eco-Friendly', 'Organic Materials', 'Zero Waste'],
    minOrder: 40,
    priceRange: 'Rp 220.000 - Rp 800.000',
    image: '🌱',
    established: 2017,
    employees: '25-50'
  }
]

export const modelOptions = [
  { 
    id: 'shirt_baked.glb', 
    name: 'Basic Shirt', 
    icon: '👔',
    category: 'casual',
    description: 'Classic everyday shirt'
  },
  { 
    id: '1_men_batik_shirt_short.glb', 
    name: 'Men Short Sleeve', 
    icon: '👕',
    category: 'casual',
    description: 'Comfortable short sleeve design'
  },
  { 
    id: 'long_sleeve_batik_shirt_2.glb', 
    name: 'Long Sleeve', 
    icon: '🧥',
    category: 'formal',
    description: 'Professional long sleeve shirt'
  },
  { 
    id: 'women_shirt_batik.glb', 
    name: 'Women Shirt', 
    icon: '👚',
    category: 'women',
    description: 'Elegant women\'s batik shirt'
  }
]

export const aiMotifs = [
  '/src/assets/Circle.png',
  '/src/assets/Heart.png',
  '/src/assets/Square.png',
  '/src/assets/Star.png',
  '/src/assets/shape.png'
]

export const batikCategories = ['All', 'Traditional', 'Contemporary', 'Modern']

export const nusantaraColors = {
  'light-brown': '#D8B08C',
  'deep-red': '#B33F00',
  'cream': '#F5F0E1',
  'soft-gold': '#A67B5B',
  'dark-brown': '#8B4513',
  'warm-beige': '#E6D3B0'
}
