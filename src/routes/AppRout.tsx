import React from 'react';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { CategoryPage } from '../pages/CategoryPage/CategoryPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { ProductPage } from '../pages/ProductPage/ProductPage';
import { ShoppingCart } from '../pages/ShoppingCart/ShoppingCart';
import { Root } from './Root';
import { ErrorPage } from './ErrorPage';

export function AppRout()
{
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />

        <Route path="/category/:categoryParam" element={<CategoryPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="*" element={<ErrorPage />} />

      </Route>
    ))

  return (
    <RouterProvider router={router} />
  );
}
function createBrowserRoutesFromElements(arg0: React.JSX.Element): import("react-router-dom").RouteObject[]
{
  throw new Error('Function not implemented.');
}

