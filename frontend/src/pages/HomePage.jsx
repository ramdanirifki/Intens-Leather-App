import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, heroImages } from '../data/mockData';

const HomePage = () => {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [newArrivalsFilter, setNewArrivalsFilter] = useState('all');
  const scrollRef = useRef(null);

  const newArrivals = products.filter(p => p.isNew);
  
  const filteredNewArrivals = newArrivalsFilter === 'all' 
    ? newArrivals 
    : newArrivals.filter(p => p.category === newArrivalsFilter);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImages[activeHeroIndex].image})`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
            {heroImages[activeHeroIndex].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
            {heroImages[activeHeroIndex].subtitle}
          </p>
          <Link 
            to="/mens"
            className="inline-block bg-white text-gray-900 px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            {heroImages[activeHeroIndex].cta}
          </Link>
        </div>

        {/* Hero navigation dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveHeroIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeHeroIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/${category.id}`}
                className="group relative overflow-hidden aspect-[4/5] bg-gray-100"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">{category.name}</h2>
                  <p className="text-lg mb-4 opacity-90">{category.description}</p>
                  <span className="inline-flex items-center text-sm font-medium group-hover:underline">
                    Shop Now <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">New Arrivals</h2>
            
            {/* Filter tabs */}
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => setNewArrivalsFilter('all')}
                className={`font-medium transition-colors ${
                  newArrivalsFilter === 'all' 
                    ? 'text-gray-900 border-b-2 border-gray-900' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setNewArrivalsFilter('mens')}
                className={`font-medium transition-colors ${
                  newArrivalsFilter === 'mens' 
                    ? 'text-gray-900 border-b-2 border-gray-900' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Men's
              </button>
              <button
                onClick={() => setNewArrivalsFilter('womens')}
                className={`font-medium transition-colors ${
                  newArrivalsFilter === 'womens' 
                    ? 'text-gray-900 border-b-2 border-gray-900' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Women's
              </button>
            </div>
          </div>

          {/* Product carousel */}
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <button
                  onClick={scrollLeft}
                  className="p-2 border border-gray-300 hover:border-gray-900 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={scrollRight}
                  className="p-2 border border-gray-300 hover:border-gray-900 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            <div 
              ref={scrollRef}
              className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredNewArrivals.map((product) => (
                <div key={product.id} className="flex-none w-80">
                  <ProductCard product={product} showQuickAdd={true} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lookbook CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Discover Our Lookbook
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore seasonal collections and styling inspiration crafted for purposeful living.
          </p>
          <Link 
            to="/lookbook"
            className="inline-block bg-gray-900 text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            View Lookbook
          </Link>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
            "A mindset for purposeful living"
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            At P&Co, we believe in creating products that are built to last. 
            Our commitment to quality craftsmanship and English heritage drives 
            everything we do, from design to delivery.
          </p>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} showQuickAdd={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Join the Family CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join the Family
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get exclusive benefits and rewards by joining the Loyalty Dept. and 
            becoming an active member of our family.
          </p>
          <Link 
            to="/rewards"
            className="inline-block bg-gray-900 text-white px-8 py-3 text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;