import React from 'react';
import styled from '@emotion/styled';

const ProductContentContainer = styled.div`
  padding: 1.5rem 4.5rem;
  display: flex;
  justify-content: space-evenly;
  .img-container {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 70%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.2rem 1.5rem;
  }
`;

const ProductInfo = styled.div`
  background-color: #f2f2f2;
  padding: 1.25rem;
  border-radius: 10px;
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: #5e5fb5;
    font-size: 1.1rem;
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }
  p {
    margin: 1rem 0;
    font-size: 1.1em;
  }

  h2 {
    font-size: 2rem;
    color: #333;
    text-align:center;
  }

  .product-price {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .product-description {
    margin: 1.5rem;
    width: 90%;
    text-align: center;
  }

  p span {
    font-weight: 600;
    margin-right: 0.8rem;
  }
  button{
    padding: 1rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: translateY(-0.25em);
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    h2 {
      font-size: 1.8rem;
    }
    .product-price{
      font-size: 1.5rem;
    }
  }
  @media (max-width: 475px) {
    h2 {
      font-size: 1.4rem;
    }
    .product-description{
      width: 100%;
    }
  }
`;

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
    <ProductContentContainer>
      <div className="img-container">
        <img src={images[0]} alt={title + ' ' + id} />
      </div>

      <ProductInfo>
        <a className='product-category' href="/category/">{category}</a>
        <h2 className='product-name'>{title}</h2>
        <p className='product-price'>{price} грн.</p>
        <p className='product-description'>{description}</p>
        <p className='product-dimensions'><span>Розміри: </span> {dimensions.height} × {dimensions.width} × {dimensions.depth}</p>
        <p className='product-weight'><span>Вага: </span>{weight} г.</p>
        <button className="add-to-cart-button">Додати в кошик</button>
      </ProductInfo>
    </ProductContentContainer>
  )
}

