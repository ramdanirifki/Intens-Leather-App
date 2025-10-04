import React, { useState } from 'react';
import { lookbookImages } from '../data/mockData';

const LookbookPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
            Lookbook
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our seasonal collections through curated lifestyle photography 
            and styling inspiration that embodies our mindset for purposeful living.
          </p>
        </div>
      </section>

      {/* Lookbook Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Masonry-style Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {lookbookImages.map((image, index) => (
              <div 
                key={image.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => openModal(image)}
              >
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{
                      aspectRatio: index % 3 === 0 ? '3/4' : index % 3 === 1 ? '4/5' : '2/3'
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end p-6 opacity-0 group-hover:opacity-100">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl z-10"
            >
              ×
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-lg opacity-90">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Lookbook Articles Section */}
      <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Latest Stories</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden bg-gray-100 aspect-[16/9] mb-6">
                <img
                  src="https://images.unsplash.com/photo-1731589802956-b4693dae884b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzU5NDQ3OTE5fDA&ixlib=rb-4.1.0&q=85"
                  alt="Autumn Additions"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Autumn Additions</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The story continues. Take a closer look. This next release dives deeper into heritage textures 
                and city styling, from our long-awaited brushed knit scarf, versatile cotton layering pieces, 
                and pin-stripe patterns designed for everyday styling.
              </p>
              <button className="text-gray-900 font-medium hover:text-gray-600 transition-colors">
                Read More →
              </button>
            </div>

            {/* Side Articles */}
            <div className="space-y-8">
              <div>
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1758740358292-29cbc4d3a707?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxydWdnZWQlMjBjbG90aGluZ3xlbnwwfHx8fDE3NTk1NjE2OTB8MA&ixlib=rb-4.1.0&q=85"
                    alt="Autumn Vol. 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Autumn Vol. 2</h4>
                <p className="text-sm text-gray-600 mb-3">
                  From New York streets to UK heritage - our next collection threads tradition through modern city style.
                </p>
                <button className="text-gray-900 text-sm font-medium hover:text-gray-600 transition-colors">
                  Read More →
                </button>
              </div>

              <div>
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1759405185685-c6009021adec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxydWdnZWQlMjBjbG90aGluZ3xlbnwwfHx8fDE3NTk1NjE2OTB8MA&ixlib=rb-4.1.0&q=85"
                    alt="Grit & Glory"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Grit & Glory</h4>
                <p className="text-sm text-gray-600 mb-3">
                  As summer fades, we let our minds wander to autumnal afternoons and the golden haze of the season.
                </p>
                <button className="text-gray-900 text-sm font-medium hover:text-gray-600 transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Be Part of the Story
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Share your P&Co moments and styling inspiration with our community. 
            Tag us to be featured in our next lookbook.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-white px-8 py-3 text-lg font-medium hover:bg-gray-800 transition-colors">
              Shop the Look
            </button>
            <button className="border border-gray-900 text-gray-900 px-8 py-3 text-lg font-medium hover:bg-gray-900 hover:text-white transition-colors">
              Follow @pandco
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LookbookPage;