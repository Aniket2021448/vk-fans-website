'use client';

import { useState, useEffect, useCallback } from 'react';
import ProductCard from './ProductCard';
import FilterSidebar, { FilterState } from './FilterSidebar';
import ComparisonModal from './ComparisonModel';
import Icon from '@/components/ui/AppIcon';
import ALL_PRODUCTS, { Product } from '@/constants/products';

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

  const allProducts: Product[] = ALL_PRODUCTS;


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

      {/* Related / Carousel removed per request */}

      {/* Modals */}
      {showComparison && comparisonProducts.length > 0 &&
      <ComparisonModal
        products={comparisonProducts}
        onClose={() => setShowComparison(false)}
        onRemove={handleCompare} />

      }
    </div>);

}