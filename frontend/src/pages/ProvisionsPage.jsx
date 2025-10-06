import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  Shield,
  Lock,
  CreditCard,
  Truck,
  Scale,
} from "lucide-react";

const ProvisionsPage = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const provisions = [
    {
      id: "introduction",
      icon: <FileText size={20} />,
      title: "Introduction",
      content: `
        Welcome to Intens.id, an e-commerce platform that offers a variety of high-quality leath
      `,
    },
    {
      id: "definitions",
      icon: <FileText size={20} />,
      title: "Definitions",
      content: `
        • Website: www.intens.id
        • User: Any individual who accesses or purchases products through Intens.id
        • Services: All features and facilities provided by Intens.id, including product browsing, purchasing, and payment processing
      `,
    },
    {
      id: "terms-of-use",
      icon: <Shield size={20} />,
      title: "Terms of Use",
      content: `
        • Users must be at least 17 years old to make a purchase.
        • Users agree to use the website in accordance with the laws and regulations of the Republic of Indonesia.
        • Copying, modifying, or redistributing any content from Intens.id without prior written permission is strictly prohibited.
      `,
    },
    {
      id: "rights-obligations",
      icon: <Scale size={20} />,
      title: "Rights and Obligations of Intens.id",
      content: `
        • Intens.id reserves the right to update or change product information, prices, and promotions at any time without prior notice.
        • We are committed to maintaining the security and confidentiality of user data in accordance with our privacy policy.
        • All content on this website, including product images and descriptions, is the intellectual property of Intens.id and is protected under copyright law.
      `,
    },
    {
      id: "restrictions",
      icon: <Lock size={20} />,
      title: "Restrictions and Prohibitions",
      content: `
        • Users are prohibited from engaging in any activities that may damage, disrupt, or exploit the website for unlawful purposes.
        • Users may not conduct illegal transactions or use the website for unauthorized commercial purposes.
        • Intens.id reserves the right to suspend or terminate any account found to be in violation of these terms.
      `,
    },
    {
      id: "privacy",
      icon: <Lock size={20} />,
      title: "Privacy and Data Policy",
      content: `
        Intens.id collects personal data such as name, address, email, and phone number for the purpose of processing transactions and deliveries. Your information will be kept confidential and will not be shared with third parties without consent, except as required for shipping or legal purposes.
      `,
    },
    {
      id: "transactions",
      icon: <CreditCard size={20} />,
      title: "Transactions and Payments",
      content: `
        • Payments can be made using the available payment methods listed on our website.
        • Once payment has been confirmed, products will be processed and shipped to the address provided by the user.
        • Refunds or cancellations may be requested in accordance with Intens.id's return and refund policy.
      `,
    },
    {
      id: "liability",
      icon: <Scale size={20} />,
      title: "Limitation of Liability",
      content: `
        Intens.id shall not be held responsible for any damage, loss, or inconvenience resulting from the use of this website or any technical issues beyond our control. We strive to ensure the accuracy of product information, but we do not guarantee that all content will be free from errors or omissions.
      `,
    },
    {
      id: "governing-law",
      icon: <FileText size={20} />,
      title: "Governing Law",
      content: `
        These provisions are governed by the laws of the Republic of Indonesia. Any disputes arising from the use of this website shall be resolved amicably, or if necessary, through the court of law located in Bandung, West Java.
      `,
    },
    {
      id: "amendments",
      icon: <FileText size={20} />,
      title: "Amendments to the Terms",
      content: `
        Intens.id reserves the right to modify or update these terms at any time. The latest revision date will be displayed on this page so that users are always informed of the current version.
      `,
    },
  ];

  const quickLinks = [
    { id: "terms-of-use", label: "Terms of Use" },
    { id: "privacy", label: "Privacy Policy" },
    { id: "transactions", label: "Transactions" },
    { id: "liability", label: "Liability" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const sidebarHeight = 120; 
      const totalOffset = headerHeight + sidebarHeight;

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        if (!openSections[sectionId]) {
          toggleSection(sectionId);
        }
      }, 500);
    }
  };

  const scrollToSectionWithMargin = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.style.scrollMarginTop = "120px";

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        if (!openSections[sectionId]) {
          toggleSection(sectionId);
        }
        element.style.scrollMarginTop = "";
      }, 400);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
              <FileText size={32} />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Terms & Provisions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Understanding our terms, policies, and your rights as a valued
            customer of Intens.id
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Quick Links */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-white shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Links
                </h3>
                <nav className="space-y-2">
                  {quickLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSectionWithMargin(link.id)}
                      className="block w-full text-left text-sm text-gray-600 hover:text-gray-900 py-2 px-3 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="text-xs text-gray-500">
                    <p className="font-medium text-gray-900 mb-1">
                      Last Updated
                    </p>
                    <p>October 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content - Accordion */}
            <div className="lg:col-span-3">
              <div className="bg-white shadow-sm border border-gray-200">
                {/* Header */}
                <div className="border-b border-gray-200 p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Intens.id Terms and Conditions
                  </h2>
                  <p className="text-gray-600">
                    Please read these terms carefully before using our website
                    or making a purchase.
                  </p>
                </div>

                {/* Accordion Sections dengan scroll-margin */}
                <div className="divide-y divide-gray-200">
                  {provisions.map((section, index) => (
                    <div
                      key={section.id}
                      id={section.id}
                      className="group scroll-mt-32" 
                    >
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="text-gray-700">{section.icon}</div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {section.title}
                            </h3>
                          </div>
                        </div>
                        <div className="text-gray-400 transition-transform duration-200">
                          {openSections[section.id] ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </div>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openSections[section.id]
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-6 pb-6">
                          <div className="pl-10">
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                              {section.content}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="text-sm text-gray-600 mb-4 sm:mb-0">
                      <p>Need help understanding our terms?</p>
                    </div>
                    <Link
                      to="/about"
                      className="inline-flex items-center underline text-gray-900 hover:text-gray-700 font-medium"
                    >
                      Contact our support team
                    </Link>
                  </div>
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 border border-blue-200 p-6">
                  <div className="flex items-center mb-3">
                    <Shield className="text-blue-600 mr-3" size={20} />
                    <h3 className="text-lg font-semibold text-blue-900">
                      Your Privacy Matters
                    </h3>
                  </div>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    We are committed to protecting your personal information and
                    maintaining transparency about how we use your data.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 p-6">
                  <div className="flex items-center mb-3">
                    <Truck className="text-green-600 mr-3" size={20} />
                    <h3 className="text-lg font-semibold text-green-900">
                      Secure Transactions
                    </h3>
                  </div>
                  <p className="text-green-800 text-sm leading-relaxed">
                    All transactions are processed securely, and we ensure your
                    payment information is protected with industry-standard
                    encryption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Shop with Confidence?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Now that you understand our terms, explore our collection of premium
            leather products crafted with care and tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/mens"
              className="inline-block bg-gray-900 text-white px-8 py-3 text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Shop Collection
            </Link>
            <Link
              to="/about"
              className="inline-block border border-gray-900 text-gray-900 px-8 py-3 text-lg font-medium hover:bg-gray-900 hover:text-white transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProvisionsPage;
