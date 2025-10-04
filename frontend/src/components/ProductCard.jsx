import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Plus } from 'lucide-react';

const ProductCard = ({ product, showQuickAdd = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleMouseEnter = () => {
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex(1);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(0);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  const currentImage = product.images && product.images.length > 0 
    ? product.images[currentImageIndex] 
    : 'https://via.placeholder.com/400x500';

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div 
          className="aspect-[4/5] overflow-hidden bg-gray-100 mb-4 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={currentImage}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.isNew && (
              <span className="bg-white text-gray-900 text-xs px-2 py-1 font-medium">
                New
              </span>
            )}
            {product.isTrending && (
              <span className="bg-gray-900 text-white text-xs px-2 py-1 font-medium">
                Trending
              </span>
            )}
            {product.soldOut && (
              <span className="bg-red-600 text-white text-xs px-2 py-1 font-medium">
                Sold Out
              </span>
            )}
          </div>

          {/* Wishlist button */}
          <button 
            onClick={handleWishlist}
            className="absolute top-3 right-3 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-100"
          >
            <Heart 
              size={16} 
              className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-900'} 
            />
          </button>

          {/* Quick add overlay - only show if enabled and not sold out */}
          {showQuickAdd && !product.soldOut && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button className="bg-white text-gray-900 px-6 py-2 text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Plus size={16} />
                Quick Add
              </button>
            </div>
          )}
        </div>

        <div className="space-y-1">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
            {product.name}
          </h3>
          
          {/* Color swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1 text-xs text-gray-600">
              {product.colors.map((color, index) => (
                <span key={color}>
                  {color}
                  {index < product.colors.length - 1 && ', '}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">
              £{product.price}
            </p>
            
            {/* Free shipping indicator */}
            {product.price >= 70 ? (
              <span className="text-xs text-green-600">Free Shipping</span>
            ) : (
              <span className="text-xs text-gray-500">Free Shipping Available*</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;