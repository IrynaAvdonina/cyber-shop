import React from 'react';
import styled from '@emotion/styled';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { TProduct, TItemCart } from '../../types/types';

const ProductContentContainer = styled.div`
  padding: 1.5rem 4.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 6rem;
  padding-bottom: 5rem;
  .img-container {
    flex: 2;
    max-width: 40%;
  }
  img {
    padding: 1rem;
    max-width: 90%; 
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.2rem 1.5rem;
  }
  @media (max-width: 480px) {
    gap: 1rem;
    .img-container {
    max-width: 60%;
  }
  }
`;
const SliderWrapper = styled.div`
  .slick-prev:before,
  .slick-next:before {
    color: ${({ theme }) => theme.colors.borderSecondary};
    font-size: 25px;
  }
`;
const ProductInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 1.25rem;
  border-radius: 10px;
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  .product-top-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
  }

  a {
    color:  ${({ theme }) => theme.colors.accentSecondary};
    font-size: 1.1rem;
    text-decoration: none;
    display: inline;
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
    color: ${({ theme }) => theme.colors.textPrimary};
    text-align: center;
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
  .product-extra-info {
    width: 70%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
  p span {
    font-weight: 600;
    margin-right: 0.8rem;
  }
  button {
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
    .product-description, .product-extra-info {
      width: 100%;
    }
  }
`;
export function capitalize(string: string)
{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const ProductContent = ({ id, title, price, category, description, rating, stock, availabilityStatus, shippingInformation, warrantyInformation, images, returnPolicy }: TProduct) =>
{
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleClick = () =>
  {
    const storedCart = localStorage.getItem('cart');
    const cart: TItemCart[] = storedCart ? JSON.parse(storedCart) : [];
    const existingItem = cart.find((item: TItemCart) => item.productID === id);

    if (!existingItem)
    {
      cart.push({ productID: id, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    toast('Товар додано до кошика!', { type: 'success' });

  }

  return (
    <>
      <ProductContentContainer>
        <div className="img-container">
          {images.length > 1 ?
            <SliderWrapper>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={title + ' ' + id} />
                  </div>
                ))}
              </Slider>
            </SliderWrapper>
            :
            <div >
              <img src={images[0]} alt={title + ' ' + id} />
            </div>}
        </div>


        <ProductInfo>
          <div className="product-top-info">
            <Link className='product-category' to={`/category/${category}`}>{capitalize(category)}</Link>
            <p>{rating} ⭐</p>
          </div>
          <h2 className='product-name'>{title}</h2>
          {stock >= 0 ? <p className='product-price'>{price} $</p> : <p className='product-price'>Немає в наявності</p>}
          <p className='product-description'>{description}</p>
          <div className='product-extra-info'>
            <p><span>Наявність:</span> {availabilityStatus}</p>
            <p><span>Доставка:</span> {shippingInformation}</p>
            <p><span>Гарантія:</span> {warrantyInformation}</p>
            <p><span>Повернення:</span> {returnPolicy}</p>
          </div>

          <button onClick={handleClick} className="add-to-cart-button">Додати в кошик</button>
        </ProductInfo>
      </ProductContentContainer >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

