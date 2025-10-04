import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Plus, Minus, ArrowLeft, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedLength, setSelectedLength] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showMaterials, setShowMaterials] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    console.log('Adding to cart:', {
      product: product.id,
      color: selectedColor,
      size: selectedSize,
      length: selectedLength,
      quantity
    });
    // Add actual cart functionality here
  };

  const isAddToCartDisabled = () => {
    if (product.colors && product.colors.length > 0 && !selectedColor) return true;
    if (product.sizes && product.sizes.length > 0 && !selectedSize) return true;
    return false;
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to={`/${product.category}`}
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to {product.category === 'mens' ? 'Men\'s' : product.category === 'womens' ? 'Women\'s' : 'Products'}
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] overflow-hidden bg-gray-100">
              <img
                src={product.images?.[selectedImageIndex] || 'https://via.placeholder.com/600x750'}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square overflow-hidden bg-gray-100 border-2 transition-colors ${
                      selectedImageIndex === index 
                        ? 'border-gray-900' 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Product Title and Price */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Heart 
                    size={24} 
                    className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-900'} 
                  />
                </button>
              </div>
              <p className="text-2xl font-semibold text-gray-900">£{product.price}</p>
              {product.price >= 70 && (
                <p className="text-sm text-green-600 mt-1">This Item Qualifies For Free Shipping</p>
              )}
            </div>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Color: {selectedColor && <span className="text-gray-600">{selectedColor}</span>}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border text-sm font-medium transition-colors ${
                        selectedColor === color
                          ? 'border-gray-900 bg-gray-900 text-white'
                          : 'border-gray-300 text-gray-900 hover:border-gray-900'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Size: {selectedSize && <span className="text-gray-600">{selectedSize}</span>}
                </h3>
                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 border text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'border-gray-900 bg-gray-900 text-white'
                          : 'border-gray-300 text-gray-900 hover:border-gray-900'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Length Selection */}
            {product.lengths && product.lengths.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Length: {selectedLength && <span className="text-gray-600">{selectedLength}</span>}
                </h3>
                <div className="flex gap-2">
                  {product.lengths.map(length => (
                    <button
                      key={length}
                      onClick={() => setSelectedLength(length)}
                      className={`px-4 py-2 border text-sm font-medium transition-colors ${
                        selectedLength === length
                          ? 'border-gray-900 bg-gray-900 text-white'
                          : 'border-gray-300 text-gray-900 hover:border-gray-900'
                      }`}
                    >
                      {length}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center border border-gray-300 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-2 text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isAddToCartDisabled()}
              className="w-full bg-gray-900 text-white py-4 text-lg font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Add to Bag
            </button>

            {/* Product Details Accordion */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              {/* Description */}
              <div>
                <button
                  onClick={() => setShowDescription(!showDescription)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-sm font-medium text-gray-900">Description</span>
                  <ChevronDown 
                    size={16} 
                    className={`transform transition-transform ${showDescription ? 'rotate-180' : ''}`} 
                  />
                </button>
                {showDescription && (
                  <div className="mt-3 text-sm text-gray-600">
                    <p>{product.description}</p>
                  </div>
                )}
              </div>

              {/* Materials & Care */}
              <div>
                <button
                  onClick={() => setShowMaterials(!showMaterials)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-sm font-medium text-gray-900">Materials & Care</span>
                  <ChevronDown 
                    size={16} 
                    className={`transform transition-transform ${showMaterials ? 'rotate-180' : ''}`} 
                  />
                </button>
                {showMaterials && (
                  <div className="mt-3 text-sm text-gray-600 space-y-2">
                    <p><strong>Materials:</strong> {product.materials}</p>
                    <p><strong>Care:</strong> {product.care}</p>
                  </div>
                )}
              </div>

              {/* Size Guide */}
              <div>
                <button
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-sm font-medium text-gray-900">Size Guide</span>
                  <ChevronDown 
                    size={16} 
                    className={`transform transition-transform ${showSizeGuide ? 'rotate-180' : ''}`} 
                  />
                </button>
                {showSizeGuide && (
                  <div className="mt-3 text-sm text-gray-600">
                    <p>Please refer to our size guide for accurate measurements and fit information.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} showQuickAdd={true} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;