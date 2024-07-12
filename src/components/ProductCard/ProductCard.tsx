import React from 'react';

export type TProductCard = {
  id: number,
  title: string,
  price: number,
  stock?: number,
  sku: string,
  category?: string,
  thumbnail: string,
  images: string[]
}

interface ProductCardProps
{
  product: TProductCard;
  className: string;
}

export const ProductCard = ({ product }: ProductCardProps) =>
{
  const { id, title, price, thumbnail, images } = product;

  return (
    <div className="product-card">
      <div className="img-container">
        <img src={thumbnail} alt={title} className="product-card-image thumbnail" />
      </div>

      <div className="product-card-details">
        <a href={`/products/${id}`} className="product-card-name">{title}</a>
        <p className="product-card-price">{price} ₴</p>
        <button className="add-to-cart-button">Додати до кошика</button>
      </div>
    </div>
  );
};
