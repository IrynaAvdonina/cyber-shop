import React from 'react'
import bannerImage from '../../assets/banner-image.png';
import styled from '@emotion/styled';

const MainBannerContainer = styled.div`
  display: flex;
  padding: 2.5rem 10rem 0;
  align-items: center;
  background: linear-gradient(91deg, #211C24 0.64%, #211C24 101%);
  justify-content: space-around;
`;

const BannerContent = styled.div`
  display: flex;
  margin: 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  h1 {
  color: #FFF;
  font-family: Poppins;
  font-size: 6rem;
  font-weight: 300;
  line-height: 4.5rem;
  margin: 2rem 0;
}
p {
  color: #909090;
  font-size: 1.125rem;
}
`;

const LinkToBuy = styled.a`
padding: 1rem 3.5rem;
  border-radius: 0.5rem;
  border: 1px solid #FFF;
  color: #909090;
  font-size: 1.1rem;
  margin: 1rem 0;
`;

export const MainBanner = () => (
  <MainBannerContainer>
    <BannerContent>
      <h1>IPhone 15 Pro</h1>
      <p>Створений, щоб змінити все на краще. Для кожного.</p>
      <LinkToBuy href="/products/2">Купити</LinkToBuy>
    </BannerContent>
    <img
      src={bannerImage}
      alt="banner"
      className="banner-image"
    />
  </MainBannerContainer>
);
