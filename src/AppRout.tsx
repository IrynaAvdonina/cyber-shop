import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CategoryPage } from './pages/CategoryPage/CategoryPage';
import { HomePage } from './pages/HomePage/HomePage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { ShoppingCart } from './pages/ShoppingCart/ShoppingCart';

export function AppRout()
{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryParam" element={<CategoryPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}
