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

// New: Motif Library Data
export const motifLibrary = [
  {
    id: 1,
    name: 'Parang Rusak',
    origin: 'Yogyakarta',
    style: 'traditional',
    region: 'jawa',
    colors: ['#B33F00', '#D8B08C'],
    description: 'Sacred diagonal pattern worn by royalty',
    complexity: 'high',
    popularityScore: 95,
    image: '/src/assets/motifs/parang-rusak.png'
  },
  {
    id: 2,
    name: 'Mega Mendung',
    origin: 'Cirebon',
    style: 'traditional',
    region: 'jawa',
    colors: ['#00BFA6', '#A67B5B'],
    description: 'Cloud motif symbolizing patience',
    complexity: 'medium',
    popularityScore: 88,
    image: '/src/assets/motifs/mega-mendung.png'
  },
  {
    id: 3,
    name: 'Kawung',
    origin: 'Solo',
    style: 'traditional',
    region: 'jawa',
    colors: ['#B33F00', '#F5F0E1'],
    description: 'Four-circle pattern representing wisdom',
    complexity: 'medium',
    popularityScore: 92,
    image: '/src/assets/motifs/kawung.png'
  },
  {
    id: 4,
    name: 'Dayak Fusion',
    origin: 'Kalimantan',
    style: 'experimental',
    region: 'kalimantan',
    colors: ['#FF5E6C', '#00BFA6'],
    description: 'Modern interpretation of Dayak tribal patterns',
    complexity: 'high',
    popularityScore: 76,
    image: '/src/assets/motifs/dayak-fusion.png'
  },
  {
    id: 5,
    name: 'Toraja Vibes',
    origin: 'Sulawesi',
    style: 'modern',
    region: 'sulawesi',
    colors: ['#8B5CF6', '#00D4FF'],
    description: 'Contemporary take on Torajan geometric patterns',
    complexity: 'medium',
    popularityScore: 84,
    image: '/src/assets/motifs/toraja-vibes.png'
  },
  {
    id: 6,
    name: 'Sekar Jagad',
    origin: 'Yogyakarta',
    style: 'traditional',
    region: 'jawa',
    colors: ['#A67B5B', '#B33F00'],
    description: 'Universe of flowers representing diversity',
    complexity: 'high',
    popularityScore: 90,
    image: '/src/assets/motifs/sekar-jagad.png'
  },
  {
    id: 7,
    name: 'Phoenix Rising',
    origin: 'Jakarta',
    style: 'experimental',
    region: 'jawa',
    colors: ['#FF5E6C', '#39FF14'],
    description: 'Gen-Z interpretation of mythical phoenix',
    complexity: 'high',
    popularityScore: 72,
    image: '/src/assets/motifs/phoenix-rising.png'
  },
  {
    id: 8,
    name: 'Digital Archipelago',
    origin: 'Bandung',
    style: 'experimental',
    region: 'jawa',
    colors: ['#00D4FF', '#8B5CF6'],
    description: 'Pixel art meets traditional Indonesian maps',
    complexity: 'medium',
    popularityScore: 68,
    image: '/src/assets/motifs/digital-archipelago.png'
  }
]

// New: My Projects Data
export const myProjects = [
  {
    id: 1,
    name: 'Summer Vibes Shirt',
    status: 'completed',
    lastModified: '2025-07-25',
    thumbnail: '/shirt_baked.glb',
    colors: ['#00BFA6', '#FF5E6C'],
    motif: 'Mega Mendung',
    model: 'Basic Shirt',
    description: 'Tropical summer design with modern colors'
  },
  {
    id: 2,
    name: 'Royal Heritage',
    status: 'draft',
    lastModified: '2025-07-24',
    thumbnail: '/long_sleeve_batik_shirt_2.glb',
    colors: ['#B33F00', '#D8B08C'],
    motif: 'Parang Rusak',
    model: 'Long Sleeve',
    description: 'Traditional royal pattern for formal occasions'
  },
  {
    id: 3,
    name: 'Gen-Z Fusion',
    status: 'draft',
    lastModified: '2025-07-23',
    thumbnail: '/women_shirt_batik.glb',
    colors: ['#8B5CF6', '#00D4FF'],
    motif: 'Digital Archipelago',
    model: 'Women Shirt',
    description: 'Experimental design mixing digital and traditional'
  },
  {
    id: 4,
    name: 'Neon Kawung',
    status: 'completed',
    lastModified: '2025-07-22',
    thumbnail: '/1_men_batik_shirt_short.glb',
    colors: ['#39FF14', '#FF5E6C'],
    motif: 'Kawung',
    model: 'Short Sleeve',
    description: 'Traditional motif with electric color palette'
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
    icon: 'Factory',
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
    icon: 'Palette',
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
    icon: 'Building2',
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
    icon: 'Waves',
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
    icon: 'Lightbulb',
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
    icon: 'Leaf',
    established: 2017,
    employees: '25-50'
  }
]

export const modelOptions = [
  { 
    id: 'shirt_baked.glb', 
    name: 'Basic Shirt', 
    icon: 'Shirt',
    category: 'casual',
    description: 'Classic everyday shirt'
  },
  { 
    id: '1_men_batik_shirt_short.glb', 
    name: 'Men Short Sleeve', 
    icon: 'User',
    category: 'casual',
    description: 'Comfortable short sleeve design'
  },
  { 
    id: 'long_sleeve_batik_shirt_2.glb', 
    name: 'Long Sleeve', 
    icon: 'Coat',
    category: 'formal',
    description: 'Professional long sleeve shirt'
  },
  { 
    id: 'women_shirt_batik.glb', 
    name: 'Women Shirt', 
    icon: 'UserCheck',
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

// New: Motif categories and regions
export const motifStyles = ['All', 'traditional', 'modern', 'experimental']
export const motifRegions = ['All', 'jawa', 'sumatra', 'kalimantan', 'sulawesi', 'papua']

export const nusantaraColors = {
  'light-brown': '#D8B08C',
  'deep-red': '#B33F00',
  'cream': '#F5F0E1',
  'soft-gold': '#A67B5B',
  'dark-brown': '#8B4513',
  'warm-beige': '#E6D3B0'
}

// New: Gen-Z inspired colors
export const genZColors = {
  'turquoise': '#00BFA6',
  'coral': '#FF5E6C',
  'electric': '#00D4FF',
  'neon-green': '#39FF14',
  'purple': '#8B5CF6'
}

// Print History Mock Data
export const printHistory = [
  {
    id: 1,
    designName: 'Parang Klasik Modern',
    thumbnail: '/shirt_baked.glb',
    konveksiId: 1,
    konveksiName: 'Batik Nusantara Workshop',
    orderDate: '2024-01-15',
    status: 'completed',
    deliveryEstimate: '2024-01-30',
    actualDelivery: '2024-01-28',
    quantity: 25,
    totalPrice: 1250000,
    trackingNumber: 'BNW2024001',
    orderNotes: 'Custom design dengan warna gold dominan'
  },
  {
    id: 2,
    designName: 'Mega Mendung Fusion',
    thumbnail: '/1_men_batik_shirt_short.glb',
    konveksiId: 2,
    konveksiName: 'Modern Batik Factory',
    orderDate: '2024-01-20',
    status: 'in-process',
    deliveryEstimate: '2024-02-05',
    actualDelivery: null,
    quantity: 50,
    totalPrice: 2000000,
    trackingNumber: 'MBF2024002',
    orderNotes: 'Produksi massal untuk event perusahaan'
  },
  {
    id: 3,
    designName: 'Kawung Contemporary',
    thumbnail: '/long_sleeve_batik_shirt_2.glb',
    konveksiId: 3,
    konveksiName: 'Artisan Collective',
    orderDate: '2024-01-25',
    status: 'delivered',
    deliveryEstimate: '2024-02-10',
    actualDelivery: '2024-02-08',
    quantity: 10,
    totalPrice: 800000,
    trackingNumber: 'AC2024003',
    orderNotes: 'Pesanan khusus dengan teknik hand-drawn'
  },
  {
    id: 4,
    designName: 'Truntum Minimalist',
    thumbnail: '/women_shirt_batik.glb',
    konveksiId: 1,
    konveksiName: 'Batik Nusantara Workshop',
    orderDate: '2024-02-01',
    status: 'cancelled',
    deliveryEstimate: '2024-02-15',
    actualDelivery: null,
    quantity: 30,
    totalPrice: 1500000,
    trackingNumber: 'BNW2024004',
    orderNotes: 'Dibatalkan karena perubahan spesifikasi'
  },
  {
    id: 5,
    designName: 'Sido Mukti Gold',
    thumbnail: '/long_sleeve_batik_shirt_2 (1).glb',
    konveksiId: 2,
    konveksiName: 'Modern Batik Factory',
    orderDate: '2024-02-05',
    status: 'pending',
    deliveryEstimate: '2024-02-20',
    actualDelivery: null,
    quantity: 15,
    totalPrice: 900000,
    trackingNumber: 'MBF2024005',
    orderNotes: 'Menunggu konfirmasi design final'
  }
]

export const orderStatus = [
  { value: 'all', label: 'Semua Status', color: 'bg-gray-500' },
  { value: 'pending', label: 'Menunggu', color: 'bg-yellow-500' },
  { value: 'in-process', label: 'Dalam Proses', color: 'bg-blue-500' },
  { value: 'completed', label: 'Selesai', color: 'bg-green-500' },
  { value: 'delivered', label: 'Terkirim', color: 'bg-purple-500' },
  { value: 'cancelled', label: 'Dibatalkan', color: 'bg-red-500' }
]
