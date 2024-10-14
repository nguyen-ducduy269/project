import styled from "styled-components";

export const Shotify = styled.div`
  margin-top: 68px;

  .shotify-section {
    width: 100%;
    height: 220px;
    background-image: url(https://houseplantshop.com/cdn/shop/files/home_pgArtboard_543_copy_1688x295_crop_center.png?v=1649306115);
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media only screen and (min-width: 320px) {
    .shotify-section {
      height: 55px;
    }
  }

  @media only screen and (min-width: 500px) {
    .shotify-section {
      height: 88px;
    }
  }

  @media only screen and (min-width: 768px) {
    .shotify-section {
      height: 130px;
    }
  }

  @media only screen and (min-width: 992px) {
    .shotify-section {
      height: 170px;
    }
  }

  @media only screen and (min-width: 1024px) {
    .shotify-section {
      width: 100%;
    }
  }

  @media only screen and (min-width: 1200px) {
    .shotify-section {
      height: 220px;
    }
  }
`;
