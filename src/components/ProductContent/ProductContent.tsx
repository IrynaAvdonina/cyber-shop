import React from 'react';
import './ProductContent.css'

export type Product = {
  id: number,
  title: string,
  description: string,
  dimensions: {
    width: number,
    height: number
    depth: number
  },
  price: number,
  stock: number,
  brand: string,
  sku: string,
  weight: number,
  category: string,
  thumbnail?: string,
  images: string[],
}
export const ProductContent = ({ id, title, price, category, description, dimensions, stock, brand, sku, weight, images, thumbnail }: Product) =>
{
  return (
    <div className="product-content">
      <div className="img-container">
        <img src={images[0]} alt={title + ' ' + id} />
      </div>

      <div className='product-info'>
        <a className='product-category' href="/category/">{category}</a>
        <h2 className='product-name'>{title}</h2>
        <p className='product-price'>{price} грн.</p>
        <p className='product-description'>{description}</p>
        <p className='product-dimensions'><span>Розміри: </span> {dimensions.height} × {dimensions.width} × {dimensions.depth}</p>
        <p className='product-weight'><span>Вага: </span>{weight} г.</p>
        <button className="add-to-cart-button">Додати в кошик</button>
      </div>
    </div>
  )
}

