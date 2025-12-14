'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterOption {
  label: string;
  value: string;
  count: number;
}

interface FilterSidebarProps {
  onFilterChange: (filters: FilterState) => void;
  productCount: number;
}

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  powerRange: string[];
  features: string[];
  energyRating: string[];
  inStockOnly: boolean;
}

export default function FilterSidebar({ onFilterChange, productCount }: FilterSidebarProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 10000],
    powerRange: [],
    features: [],
    energyRating: [],
    inStockOnly: false,
  });
  const [filteredCount, setFilteredCount] = useState(productCount);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      onFilterChange(filters);
      // Calculate filtered count based on selected filters
      calculateFilteredCount();
    }
  }, [filters, isHydrated, onFilterChange]);

  const calculateFilteredCount = () => {
    let count = productCount;
    
    // Reduce count based on active filters (demo logic)
    if (filters.categories.length > 0) {
      count = Math.floor(count * (0.7 + Math.random() * 0.2));
    }
    if (filters.powerRange.length > 0) {
      count = Math.floor(count * (0.6 + Math.random() * 0.2));
    }
    if (filters.features.length > 0) {
      count = Math.floor(count * (0.5 + Math.random() * 0.3));
    }
    if (filters.energyRating.length > 0) {
      count = Math.floor(count * (0.6 + Math.random() * 0.2));
    }
    if (filters.inStockOnly) {
      count = Math.floor(count * (0.8 + Math.random() * 0.15));
    }

    setFilteredCount(Math.max(1, count));
  };

  const categories: FilterOption[] = [
    { label: 'Industrial Fans', value: 'industrial', count: 32 },
    { label: 'Ceiling Fans', value: 'ceiling', count: 28 },
    { label: 'Pedestal Fans', value: 'pedestal', count: 24 },
    { label: 'Wall Fans', value: 'wall', count: 18 },
    { label: 'Table Fans', value: 'table', count: 15 },
    { label: 'Exhaust Fans', value: 'exhaust', count: 22 },
  ];

  const powerRanges: FilterOption[] = [
    { label: '50-100W', value: '50-100', count: 28 },
    { label: '100-200W', value: '100-200', count: 35 },
    { label: '200-500W', value: '200-500', count: 26 },
    { label: '500W+', value: '500+', count: 18 },
  ];

  const features: FilterOption[] = [
    { label: 'Remote Control', value: 'remote', count: 42 },
    { label: 'Timer Function', value: 'timer', count: 38 },
    { label: 'Oscillation', value: 'oscillation', count: 45 },
    { label: 'Speed Control', value: 'speed', count: 52 },
    { label: 'LED Display', value: 'led', count: 31 },
    { label: 'Energy Efficient', value: 'efficient', count: 48 },
  ];

  const energyRatings: FilterOption[] = [
    { label: '5 Star', value: '5star', count: 28 },
    { label: '4 Star', value: '4star', count: 35 },
    { label: '3 Star', value: '3star', count: 26 },
  ];

  const handleCategoryToggle = (value: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(value)
        ? prev.categories.filter(c => c !== value)
        : [...prev.categories, value]
    }));
  };

  const handlePowerRangeToggle = (value: string) => {
    setFilters(prev => ({
      ...prev,
      powerRange: prev.powerRange.includes(value)
        ? prev.powerRange.filter(p => p !== value)
        : [...prev.powerRange, value]
    }));
  };

  const handleFeatureToggle = (value: string) => {
    setFilters(prev => ({
      ...prev,
      features: prev.features.includes(value)
        ? prev.features.filter(f => f !== value)
        : [...prev.features, value]
    }));
  };

  const handleEnergyRatingToggle = (value: string) => {
    setFilters(prev => ({
      ...prev,
      energyRating: prev.energyRating.includes(value)
        ? prev.energyRating.filter(e => e !== value)
        : [...prev.energyRating, value]
    }));
  };

  const handlePriceChange = (min: number, max: number) => {
    setFilters(prev => ({
      ...prev,
      priceRange: [min, max]
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      categories: [],
      priceRange: [0, 10000],
      powerRange: [],
      features: [],
      energyRating: [],
      inStockOnly: false,
    });
  };

  const activeFilterCount = 
    filters.categories.length + 
    filters.powerRange.length + 
    filters.features.length + 
    filters.energyRating.length +
    (filters.inStockOnly ? 1 : 0);

  if (!isHydrated) {
    return (
      <aside className="w-full lg:w-80 bg-card border border-border rounded-lg p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
        </div>
      </aside>
    );
  }

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Header with Real-time Count */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Filters</h2>
          <p className="text-sm text-primary font-semibold mt-1">
            {filteredCount} {filteredCount === 1 ? 'product' : 'products'} found
          </p>
        </div>
        {activeFilterCount > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-primary hover:text-primary/80 font-medium"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Active Filters Badge */}
      {activeFilterCount > 0 && (
        <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg border border-primary/20">
          <Icon name="FunnelIcon" size={16} className="text-primary" />
          <span className="text-sm font-medium text-foreground">
            {activeFilterCount} filter{activeFilterCount !== 1 ? 's' : ''} active
          </span>
        </div>
      )}

      {/* In Stock Only */}
      <div className="pb-6 border-b border-border">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => setFilters(prev => ({ ...prev, inStockOnly: e.target.checked }))}
            className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
          />
          <span className="text-sm font-medium text-foreground">In Stock Only</span>
        </label>
      </div>

      {/* Categories */}
      <div className="pb-6 border-b border-border">
        <h3 className="text-sm font-semibold text-foreground mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.value} className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category.value)}
                  onChange={() => handleCategoryToggle(category.value)}
                  className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                />
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                  {category.label}
                </span>
              </div>
              <span className="text-xs text-text-secondary">({category.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="pb-6 border-b border-border">
        <h3 className="text-sm font-semibold text-foreground mb-3">Price Range</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <input
              type="number"
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceChange(Number(e.target.value), filters.priceRange[1])}
              className="w-full px-3 py-2 text-sm border border-border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Min"
            />
            <span className="text-text-secondary">-</span>
            <input
              type="number"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceChange(filters.priceRange[0], Number(e.target.value))}
              className="w-full px-3 py-2 text-sm border border-border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Max"
            />
          </div>
        </div>
      </div>

      {/* Power Range */}
      <div className="pb-6 border-b border-border">
        <h3 className="text-sm font-semibold text-foreground mb-3">Power Consumption</h3>
        <div className="space-y-2">
          {powerRanges.map((range) => (
            <label key={range.value} className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={filters.powerRange.includes(range.value)}
                  onChange={() => handlePowerRangeToggle(range.value)}
                  className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                />
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                  {range.label}
                </span>
              </div>
              <span className="text-xs text-text-secondary">({range.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="pb-6 border-b border-border">
        <h3 className="text-sm font-semibold text-foreground mb-3">Features</h3>
        <div className="space-y-2">
          {features.map((feature) => (
            <label key={feature.value} className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={filters.features.includes(feature.value)}
                  onChange={() => handleFeatureToggle(feature.value)}
                  className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                />
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                  {feature.label}
                </span>
              </div>
              <span className="text-xs text-text-secondary">({feature.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Energy Rating */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">Energy Rating</h3>
        <div className="space-y-2">
          {energyRatings.map((rating) => (
            <label key={rating.value} className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={filters.energyRating.includes(rating.value)}
                  onChange={() => handleEnergyRatingToggle(rating.value)}
                  className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                />
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                  {rating.label}
                </span>
              </div>
              <span className="text-xs text-text-secondary">({rating.count})</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed bottom-6 left-6 z-40 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-industrial flex items-center gap-2"
      >
        <Icon name="FunnelIcon" size={20} />
        <span className="font-medium">Filters</span>
        {activeFilterCount > 0 && (
          <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-xs font-semibold">
            {activeFilterCount}
          </span>
        )}
        <span className="ml-2 text-xs">({filteredCount})</span>
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-80 bg-card border border-border rounded-lg p-6 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
        <FilterContent />
      </aside>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-industrial-steel/80 backdrop-blur-sm">
          <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-card shadow-industrial overflow-y-auto">
            <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-foreground">Filters</h2>
                <p className="text-sm text-primary font-semibold">
                  {filteredCount} products found
                </p>
              </div>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 hover:bg-muted rounded transition-colors"
              >
                <Icon name="XMarkIcon" size={24} />
              </button>
            </div>
            <div className="p-6">
              <FilterContent />
            </div>
          </div>
        </div>
      )}
    </>
  );
}