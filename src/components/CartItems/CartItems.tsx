import React from 'react';


import { TProductCard } from '../ProductCard/ProductCard';
import './CartItems.css'

interface CartItemsProps
{
  product: TProductCard
}

export const CartItems = ({ product }: CartItemsProps) => (
  <div className="cart-item">
    <a href={`/products/${product.id}`}>
      <img src={product.thumbnail} alt={product.title} />
    </a>
    <div className="item-details">
      <a href={`/products/${product.id}`}>
        <h4>{product.title}</h4>
      </a>
      <div className="quantity">
        <button className="btn-decrease">-</button>
        <span className="item-quantity">1</span>
        <button className="btn-increase">+</button>
      </div>

    </div>
    <p className="item-price" >{product.price} грн.</p>
    <button className="btn-delete">×</button>
  </div>
);