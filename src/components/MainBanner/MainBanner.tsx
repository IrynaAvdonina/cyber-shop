import React from 'react'
import bannerImage from '../../assets/banner-image.png';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const mainBannerProductId = 123;

const MainBannerContainer = styled.div`
  display: flex;
  padding: 2.5rem 8rem 0;
  align-items: center;
  background:  ${({ theme }) => theme.colors.backgroundDark} url(${bannerImage}) no-repeat 80% bottom / 20%;
  justify-content: space-around;
  @media (max-width: 768px) {
    padding: 2rem;
    background-size: 30%;
    background-position: 90% bottom;
  }
  @media (max-width: 475px) {
    padding: 1rem;
  }
`;

const BannerContent = styled.div`
  display: flex;
  margin: 2rem;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  flex: 2;

  h1 {
    color: ${({ theme }) => theme.colors.textOnDark};
    font-family: Poppins;
    font-size: 6vw;
    font-weight: 300;
    margin: 2rem 0;
  }
  p {
    color:  ${({ theme }) => theme.colors.textMutedOnDark};
    font-size: 1.1rem;
    width: 70%;
  }

  @media (max-width: 768px) {
    margin: 1rem 3rem;
    h1{
      margin: 0.5rem 0;
      font-size: 8vw;
    }
    p{
      width: 50%;
      font-size: 1rem;
    }
  }
  @media (max-width: 475px) {
    margin: 0.5rem 1rem;
    p{
      width: 60%;
      font-size: 0.8rem;
    }
  }
`;

const LinkToBuy = styled(Link)`
  padding: 1rem 3.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color:  ${({ theme }) => theme.colors.textMutedOnDark};
  font-size: 1.1rem;
  margin: 1rem 0;
  text-decoration: none;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 0.5em 0 ${({ theme }) => theme.colors.boxShadow}
  }
  @media (max-width: 475px) {
    padding: 0.5rem 1.5rem;
    font-size: 0.8rem;
    margin: 0.5rem 0;
  }
`;

export const MainBanner = () => (
  <MainBannerContainer>
    <BannerContent>
      <h1>IPhone 13 Pro</h1>
      <p>Створений, щоб змінити все на краще. Для кожного.</p>
      <LinkToBuy to={`/products/${mainBannerProductId}`}>Купити</LinkToBuy>
    </BannerContent>
  </MainBannerContainer>
);
