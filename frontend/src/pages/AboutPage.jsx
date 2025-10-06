import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Shield, Thermometer, Clock, Zap } from "lucide-react";

const AboutPage = () => {
  const features = [
    {
      icon: <Shield size={24} />,
      title: "Fire Resistance",
      description:
        "Genuine leather naturally resists burning and melting when exposed to flame, offering superior safety compared to synthetic materials.",
    },
    {
      icon: <Thermometer size={24} />,
      title: "High Temperature Tolerance",
      description:
        "Our leather products withstand high temperatures, ensuring they remain durable and intact even under direct sunlight or in hot environments.",
    },
    {
      icon: <Zap size={24} />,
      title: "Durability Guaranteed",
      description:
        "We use only quality genuine leather, which is highly resistant to scratches, abrasion, and tearing, guaranteeing long-lasting use.",
    },
    {
      icon: <Clock size={24} />,
      title: "On-Time Delivery",
      description:
        "While quality is our priority, we also value punctuality. Our organized packing and shipping system ensures your orders are delivered promptly.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            About Intens.id
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Crafting authentic leather goods that blend quality, style, and
            functionality for your everyday life.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                Our Journey
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Intens.id began as a home-based leather craft industry in
                  2017, collaborating with local artisans from Garut to create a
                  diverse range of leather goods. Designed by Intens, our
                  collection includes jackets, bags, wallets, laptop sleeves,
                  keyless entry covers, handbags, and various accessories to
                  complement your daily lifestyle—from going to the office and
                  driving to attending campus and beyond.
                </p>
                <p>
                  Driven by the spirit of{" "}
                  <span className="font-semibold text-gray-900">
                    #kulitkanindonesia
                  </span>
                  , our vision is to outfit the daily lives of Indonesians with
                  high-quality, authentic leather products. We are committed to
                  producing durable and accessible leather crafts for all,
                  ensuring that everyone can experience the blend of quality,
                  style, and functionality.
                </p>
                <p className="text-xl font-semibold text-gray-900">
                  We Complete Your Fashion Lifestyle Needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
                <img
                  src="/images/office/image1.png"
                  alt="Intens.id Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Commitment & Product Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quality and reliability built into every product we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-gray-900">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">
            Explore Our Collection
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We craft a wide variety of leather products, including jackets,
            gloves, wallets, bags, and numerous other accessories.
          </p>
          <Link
            to="/mens"
            className="inline-block bg-gray-900 text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Discover Our Products
          </Link>
        </div>
      </section>

      {/* Workshop Location */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gray-700 overflow-hidden">
                <img
                  src="/images/office/image2.png"
                  alt="Intens.id Workshop"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <MapPin size={24} className="text-white mr-3" />
                <h2 className="text-4xl font-bold tracking-tight">
                  Visit Our Workshop
                </h2>
              </div>
              <div className="space-y-4 text-lg text-gray-300">
                <p className="leading-relaxed">
                  Come and see the craft behind our products at our workshop.
                  Witness firsthand how traditional techniques meet modern
                  design in the heart of Garut's leather craft community.
                </p>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <p className="font-semibold text-white mb-2">
                    Workshop Address:
                  </p>
                  <p className="text-gray-300">
                    Perumahan Guntur Residen No.32, RT.05/RW.017
                    <br />
                    Sukamentri, Kec. Garut Kota
                    <br />
                    Kabupaten Garut, Jawa Barat 44116
                  </p>
                </div>
                <p className="text-sm text-gray-400">
                  We welcome visitors who want to learn more about our craft and
                  process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Experience Indonesian Craftsmanship
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in celebrating the art of leather crafting and discover
            pieces that tell a story with every use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/mens"
              className="inline-block bg-gray-900 text-white px-8 py-3 text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Shop Collection
            </Link>
            <Link
              to="/lookbook"
              className="inline-block border border-gray-900 text-gray-900 px-8 py-3 text-lg font-medium hover:bg-gray-900 hover:text-white transition-colors"
            >
              View Lookbook
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
