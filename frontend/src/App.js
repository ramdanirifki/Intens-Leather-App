import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import LookbookPage from "./pages/LookbookPage";
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./lib/ScrollToTop";
import ProvisionsPage from "./pages/ProvisionsPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:category" element={<CategoryPage />} />
            <Route path="/:category" element={<CategoryPage />} />
            <Route path="/:category" element={<CategoryPage />} />
            <Route path="/provisions" element={<ProvisionsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/lookbook" element={<LookbookPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/signup" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Signup Page</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;