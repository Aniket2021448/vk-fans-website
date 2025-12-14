export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  alt: string;
  price: number;
  specifications: {
    power: string;
    airflow: string;
    speed: string;
    noise: string;
  };
  features: string[];
  energyRating: string;
  description: string;
  warranty: string;
  dimensions: string;
  weight: string;
  inStock: boolean;
}

export const ALL_PRODUCTS: Product[] = [
  {
    id: 'ped-001',
    name: 'Industrial Pedestal Fan Pro 450',
    category: 'Pedestal Fans',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a9ef7180-1764780928885.png",
    alt: 'Industrial pedestal fan with adjustable height and oscillation feature in modern factory setting',
    price: 2499,
    specifications: { power: '150W', airflow: '8500 CFM', speed: '3 Speed', noise: '52 dB' },
    features: ['Remote Control', 'Timer Function', 'Oscillation', 'Height Adjustable', 'LED Display'],
    energyRating: '5 Star',
    description: 'Heavy-duty pedestal fan designed for industrial applications with superior airflow and energy efficiency. Built with premium materials for long-lasting performance.',
    warranty: '3 Years',
    dimensions: '24" x 24" x 72"',
    weight: '18 kg',
    inStock: true
  },
  {
    id: 'wall-001',
    name: 'Commercial Wall Fan Elite 400',
    category: 'Wall Fans',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1882fe9c4-1764727269391.png",
    alt: 'White commercial wall-mounted fan with remote control installed in modern office space',
    price: 1899,
    specifications: { power: '120W', airflow: '6800 CFM', speed: '5 Speed', noise: '48 dB' },
    features: ['Remote Control', 'Timer Function', 'Oscillation', 'Speed Control', 'Wall Mount'],
    energyRating: '5 Star',
    description: 'Space-saving wall-mounted fan perfect for commercial spaces. Features advanced motor technology for quiet operation and maximum air circulation.',
    warranty: '2 Years',
    dimensions: '18" x 18" x 12"',
    weight: '8 kg',
    inStock: true
  },
  {
    id: 'table-001',
    name: 'Desktop Table Fan Compact 300',
    category: 'Table Fans',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cbd2d88d-1764780930519.png",
    alt: 'Compact black table fan with modern design on wooden desk in home office environment',
    price: 899,
    specifications: { power: '60W', airflow: '3200 CFM', speed: '3 Speed', noise: '42 dB' },
    features: ['Compact Design', 'Speed Control', 'Oscillation', 'Portable', 'Silent Operation'],
    energyRating: '4 Star',
    description: 'Compact and efficient table fan ideal for personal use. Perfect for desks, bedrooms, and small spaces with whisper-quiet operation.',
    warranty: '1 Year',
    dimensions: '12" x 12" x 16"',
    weight: '3 kg',
    inStock: true
  },
  {
    id: 'exhaust-001',
    name: 'Industrial Exhaust Fan Heavy Duty 600',
    category: 'Exhaust Fans',
    image: "https://images.unsplash.com/photo-1668247509772-6c99ef91c02d",
    alt: 'Large industrial exhaust fan with metal blades mounted on factory wall for ventilation',
    price: 3499,
    specifications: { power: '250W', airflow: '12000 CFM', speed: 'Single Speed', noise: '58 dB' },
    features: ['Heavy Duty Motor', 'Corrosion Resistant', 'High Airflow', 'Industrial Grade', 'Easy Installation'],
    energyRating: '4 Star',
    description: 'Powerful exhaust fan engineered for demanding industrial environments. Ensures optimal ventilation and air quality in large spaces.',
    warranty: '5 Years',
    dimensions: '36" x 36" x 18"',
    weight: '28 kg',
    inStock: true
  },
  {
    id: 'ped-002',
    name: 'Premium Pedestal Fan Deluxe 500',
    category: 'Pedestal Fans',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a9ef7180-1764780928885.png",
    alt: 'Premium silver pedestal fan with digital display and remote control in luxury living room',
    price: 3299,
    specifications: { power: '180W', airflow: '9500 CFM', speed: '5 Speed', noise: '50 dB' },
    features: ['Remote Control', 'Timer Function', 'Oscillation', 'LED Display', 'Smart Control'],
    energyRating: '5 Star',
    description: 'Top-of-the-line pedestal fan with smart features and premium build quality. Combines power, efficiency, and modern design.',
    warranty: '4 Years',
    dimensions: '26" x 26" x 76"',
    weight: '22 kg',
    inStock: true
  },
  {
    id: 'wall-002',
    name: 'Standard Wall Fan Classic 350',
    category: 'Wall Fans',
    image: "https://images.unsplash.com/photo-1622298075692-318644bf1107",
    alt: 'Classic white wall fan with pull cord control mounted in traditional home interior',
    price: 1299,
    specifications: { power: '100W', airflow: '5500 CFM', speed: '3 Speed', noise: '50 dB' },
    features: ['Oscillation', 'Speed Control', 'Wall Mount', 'Durable Build', 'Easy Maintenance'],
    energyRating: '4 Star',
    description: 'Reliable wall fan with classic design and proven performance. Perfect for residential and light commercial applications.',
    warranty: '2 Years',
    dimensions: '16" x 16" x 10"',
    weight: '6 kg',
    inStock: false
  },
  {
    id: 'table-002',
    name: 'Mini Table Fan Portable 200',
    category: 'Table Fans',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cbd2d88d-1764780930519.png",
    alt: 'Small portable white table fan with USB charging on modern minimalist desk setup',
    price: 599,
    specifications: { power: '40W', airflow: '2000 CFM', speed: '2 Speed', noise: '38 dB' },
    features: ['USB Powered', 'Portable', 'Compact Design', 'Silent Operation', 'Lightweight'],
    energyRating: '3 Star',
    description: 'Ultra-portable mini fan perfect for personal cooling. USB-powered design makes it ideal for travel and small spaces.',
    warranty: '6 Months',
    dimensions: '8" x 8" x 10"',
    weight: '1.5 kg',
    inStock: true
  },
  {
    id: 'exhaust-002',
    name: 'Commercial Exhaust Fan Standard 450',
    category: 'Exhaust Fans',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_158779122-1764675802161.png",
    alt: 'Commercial grade exhaust fan with protective grille installed in restaurant kitchen',
    price: 2299,
    specifications: { power: '180W', airflow: '8500 CFM', speed: 'Single Speed', noise: '54 dB' },
    features: ['Commercial Grade', 'High Airflow', 'Durable Construction', 'Easy Installation', 'Low Maintenance'],
    energyRating: '4 Star',
    description: 'Dependable exhaust fan for commercial kitchens, workshops, and warehouses. Ensures consistent ventilation and air quality.',
    warranty: '3 Years',
    dimensions: '28" x 28" x 14"',
    weight: '18 kg',
    inStock: true
  }
];

export default ALL_PRODUCTS;
