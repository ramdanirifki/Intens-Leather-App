import React, { useState } from "react";
import { lookbookImages } from "../data/mockData";
import { useNavigate } from "react-router-dom";

const LookbookPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
            Lookbook
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our seasonal collections through curated lifestyle
            photography and styling inspiration that embodies our mindset for
            purposeful living.
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
                      aspectRatio:
                        index % 3 === 0
                          ? "3/4"
                          : index % 3 === 1
                          ? "4/5"
                          : "2/3",
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

      {/* Behind The Scenes Section */}
      <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Behind The Scenes
          </h2>

          <div className="bg-white p-8 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Intens.id Workshop
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Our Philosophy
                </h4>
                <p className="mb-6 leading-relaxed">
                  Every piece we create starts with a vision of timeless
                  elegance and ends with the skilled hands of our artisans in
                  Garut. We believe in creating heirlooms, not just products.
                </p>

                <h4 className="font-semibold text-gray-900 mb-3">
                  The Process
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Material selection from premium sources
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Hand-cutting with precision tools
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Traditional stitching techniques
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Quality inspection & finishing
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Our Commitment
                </h4>
                <p className="mb-6 leading-relaxed">
                  We're dedicated to preserving Indonesian leathercraft heritage
                  while embracing innovation. Each product carries the spirit of
                  #kulitkanindonesia.
                </p>

                <div className="bg-gray-100 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Did You Know?
                  </h4>
                  <p className="text-sm">
                    It takes an average of 18 hours of skilled craftsmanship to
                    create a single Intens.id leather jacket, with over 5,000
                    precise stitches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Join Our Craftsmanship Journey
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Share your Intens.id moments and leather styling inspiration with
            our community. Tag us to be featured in our next lookbook and become
            part of the #kulitkanindonesia story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/mens")}
              className="bg-gray-900 text-white px-8 py-3 text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Discover Collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LookbookPage;
