import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, ChevronDown, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';

const CategoryPage = () => {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: '',
    size: '',
    color: '',
    priceRange: ''
  });

  // Filter products by category
  const categoryProducts = useMemo(() => {
    return products.filter(product => product.category === category);
  }, [category]);

  // Apply filters and sorting
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...categoryProducts];

    // Apply filters
    if (filters.type) {
      filtered = filtered.filter(p => p.type === filters.type);
    }
    if (filters.size) {
      filtered = filtered.filter(p => p.sizes?.includes(filters.size));
    }
    if (filters.color) {
      filtered = filtered.filter(p => p.colors?.includes(filters.color));
    }
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        return filtered.filter(p => p.isNew);
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      default:
        return filtered;
    }
  }, [categoryProducts, filters, sortBy]);

  // Get unique values for filters
  const uniqueTypes = [...new Set(categoryProducts.map(p => p.type))];
  const uniqueSizes = [...new Set(categoryProducts.flatMap(p => p.sizes || []))];
  const uniqueColors = [...new Set(categoryProducts.flatMap(p => p.colors || []))];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType] === value ? '' : value
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: '',
      size: '',
      color: '',
      priceRange: ''
    });
  };

  const categoryTitle = category === 'mens' ? 'MENSWEAR' : 
                      category === 'womens' ? 'WOMENSWEAR' : 
                      category?.toUpperCase();

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
            {categoryTitle}
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            {categoryProducts.length} products
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Sorting Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
          >
            <SlidersHorizontal size={16} />
            Filter
            {Object.values(filters).some(v => v) && (
              <span className="bg-gray-900 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {Object.values(filters).filter(v => v).length}
              </span>
            )}
          </button>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {filteredAndSortedProducts.length} products
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 px-4 py-2 pr-8 text-sm font-medium text-gray-900 hover:border-gray-900 transition-colors cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Filter Sidebar */}
        {showFilters && (
          <div className="border border-gray-200 p-6 mb-8 bg-gray-50">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Clear All
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Product Type Filter */}
              {uniqueTypes.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Product Type</h4>
                  <div className="space-y-2">
                    {uniqueTypes.map(type => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.type === type}
                          onChange={() => handleFilterChange('type', type)}
                          className="rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Filter */}
              {uniqueSizes.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Size</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {uniqueSizes.slice(0, 12).map(size => (
                      <button
                        key={size}
                        onClick={() => handleFilterChange('size', size)}
                        className={`border text-sm py-2 px-3 transition-colors ${
                          filters.size === size
                            ? 'border-gray-900 bg-gray-900 text-white'
                            : 'border-gray-300 hover:border-gray-900'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Filter */}
              {uniqueColors.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Color</h4>
                  <div className="space-y-2">
                    {uniqueColors.slice(0, 8).map(color => (
                      <label key={color} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.color === color}
                          onChange={() => handleFilterChange('color', color)}
                          className="rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{color}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Range Filter */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                <div className="space-y-2">
                  {['0-50', '50-100', '100-150', '150-200'].map(range => {
                    const [min, max] = range.split('-');
                    return (
                      <label key={range} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.priceRange === range}
                          onChange={() => handleFilterChange('priceRange', range)}
                          className="rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          £{min} - £{max}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedProducts.map(product => (
            <ProductCard key={product.id} product={product} showQuickAdd={true} />
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600 mb-4">No products found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="text-gray-900 hover:text-gray-600 font-medium transition-colors"
            >
              Clear filters to see all products
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredAndSortedProducts.length > 12 && (
          <div className="text-center mt-12">
            <button className="border border-gray-900 text-gray-900 px-8 py-3 font-medium hover:bg-gray-900 hover:text-white transition-colors">
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;