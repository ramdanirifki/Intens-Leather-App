import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import LookbookPage from "./pages/LookbookPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mens" element={<CategoryPage />} />
            <Route path="/womens" element={<CategoryPage />} />
            <Route path="/accessories" element={<CategoryPage />} />
            <Route path="/provisions" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/lookbook" element={<LookbookPage />} />
            <Route path="/about" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">About Page</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;