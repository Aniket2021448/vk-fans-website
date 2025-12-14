'use client';

import { useState, useEffect, useCallback } from 'react';
import ProductCard from './ProductCard';
import FilterSidebar, { FilterState } from './FilterSidebar';
import ComparisonModal from './ComparisonModel';
import Icon from '@/components/ui/AppIcon';

interface Product {
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

export default function ProductCatalogInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [comparisonList, setComparisonList] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const allProducts: Product[] = [
  {
    id: 'ped-001',
    name: 'Industrial Pedestal Fan Pro 450',
    category: 'Pedestal Fans',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a9ef7180-1764780928885.png",
    alt: 'Industrial pedestal fan with adjustable height and oscillation feature in modern factory setting',
    price: 2499,
    specifications: {
      power: '150W',
      airflow: '8500 CFM',
      speed: '3 Speed',
      noise: '52 dB'
    },
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
    specifications: {
      power: '120W',
      airflow: '6800 CFM',
      speed: '5 Speed',
      noise: '48 dB'
    },
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
    specifications: {
      power: '60W',
      airflow: '3200 CFM',
      speed: '3 Speed',
      noise: '42 dB'
    },
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
    specifications: {
      power: '250W',
      airflow: '12000 CFM',
      speed: 'Single Speed',
      noise: '58 dB'
    },
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
    specifications: {
      power: '180W',
      airflow: '9500 CFM',
      speed: '5 Speed',
      noise: '50 dB'
    },
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
    specifications: {
      power: '100W',
      airflow: '5500 CFM',
      speed: '3 Speed',
      noise: '50 dB'
    },
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
    specifications: {
      power: '40W',
      airflow: '2000 CFM',
      speed: '2 Speed',
      noise: '38 dB'
    },
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
    specifications: {
      power: '180W',
      airflow: '8500 CFM',
      speed: 'Single Speed',
      noise: '54 dB'
    },
    features: ['Commercial Grade', 'High Airflow', 'Durable Construction', 'Easy Installation', 'Low Maintenance'],
    energyRating: '4 Star',
    description: 'Dependable exhaust fan for commercial kitchens, workshops, and warehouses. Ensures consistent ventilation and air quality.',
    warranty: '3 Years',
    dimensions: '28" x 28" x 14"',
    weight: '18 kg',
    inStock: true
  }];


  useEffect(() => {
    if (isHydrated) {
      setFilteredProducts(allProducts);
    }
  }, [isHydrated]);

  const handleFilterChange = useCallback((filters: FilterState) => {
    let filtered = [...allProducts];

    if (filters.categories.length > 0) {
      filtered = filtered.filter((p) =>
      filters.categories.some((cat) => p.category.toLowerCase().includes(cat))
      );
    }

    if (filters.inStockOnly) {
      filtered = filtered.filter((p) => p.inStock);
    }

    filtered = filtered.filter((p) =>
    p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    if (filters.energyRating.length > 0) {
      filtered = filtered.filter((p) =>
      filters.energyRating.some((rating) => p.energyRating.toLowerCase().includes(rating.replace('star', '')))
      );
    }

    if (filters.features.length > 0) {
      filtered = filtered.filter((p) =>
      filters.features.some((feature) =>
      p.features.some((pf) => pf.toLowerCase().includes(feature))
      )
      );
    }

    setFilteredProducts(filtered);
  }, []);

  const handleSort = (value: string) => {
    setSortBy(value);
    let sorted = [...filteredProducts];

    switch (value) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        sorted.sort((a, b) => {
          const ratingA = parseInt(a.energyRating);
          const ratingB = parseInt(b.energyRating);
          return ratingB - ratingA;
        });
        break;
      default:
        break;
    }

    setFilteredProducts(sorted);
  };

  const handleCompare = (id: string) => {
    if (comparisonList.includes(id)) {
      setComparisonList(comparisonList.filter((item) => item !== id));
    } else if (comparisonList.length < 4) {
      setComparisonList([...comparisonList, id]);
    }
  };

  const comparisonProducts = allProducts.filter((p) => comparisonList.includes(p.id));

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="w-full px-4 lg:px-8 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3"></div>
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="h-96 bg-muted rounded"></div>
              <div className="lg:col-span-3 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) =>
                <div key={i} className="h-96 bg-muted rounded"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full px-4 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Product Catalog</h1>
              <p className="text-muted-foreground">
                Explore our complete range of industrial and commercial fans
              </p>
            </div>
            
            {/* View Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-foreground">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => handleSort(e.target.value)}
                  className="px-3 py-2 text-sm border border-border rounded focus:ring-2 focus:ring-primary focus:border-transparent bg-card">

                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                  <option value="rating">Energy Rating</option>
                </select>
              </div>

              <div className="hidden md:flex items-center gap-2 border border-border rounded p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`
                  }
                  aria-label="Grid view">

                  <Icon name="Squares2X2Icon" size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors ${
                  viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`
                  }
                  aria-label="List view">

                  <Icon name="ListBulletIcon" size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Comparison Bar */}
          {comparisonList.length > 0 &&
          <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Icon name="ScaleIcon" size={20} />
                <span className="font-medium">
                  {comparisonList.length} product{comparisonList.length > 1 ? 's' : ''} selected for comparison
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                onClick={() => setShowComparison(true)}
                className="px-4 py-2 bg-primary-foreground text-primary rounded font-medium hover:bg-primary-foreground/90 transition-colors">

                  Compare Now
                </button>
                <button
                onClick={() => setComparisonList([])}
                className="px-4 py-2 border border-primary-foreground rounded font-medium hover:bg-primary-foreground/10 transition-colors">

                  Clear All
                </button>
              </div>
            </div>
          }
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-6">
          {/* Filter Sidebar */}
          <FilterSidebar
            onFilterChange={handleFilterChange}
            productCount={filteredProducts.length} />


          {/* Product Grid */}
          <div>
            {filteredProducts.length === 0 ?
            <div className="text-center py-16">
                <Icon name="FunnelIcon" size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your filters to see more results</p>
              </div> :

            <div className={`grid gap-6 ${
            viewMode === 'grid' ? 'md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`
            }>
                {filteredProducts.map((product) =>
              <ProductCard
                key={product.id}
                product={product}
                onCompare={handleCompare}
                isComparing={comparisonList.includes(product.id)} />

              )}
              </div>
            }
          </div>
        </div>
      </div>

      {/* Modals */}
      {showComparison && comparisonProducts.length > 0 &&
      <ComparisonModal
        products={comparisonProducts}
        onClose={() => setShowComparison(false)}
        onRemove={handleCompare} />

      }
    </div>);

}