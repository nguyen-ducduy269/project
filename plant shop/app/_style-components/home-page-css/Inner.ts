import styled from "styled-components";

export const Inner = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
  .promo-inner {
    display: flex;
    justify-content: center;
    gap: 20px;
    a {
      width: 50%;
      img {
        width: 100%;
        height: 296px;
      }
    }
  }

  @media only screen and (min-width: 320px) {
    .promo-inner {
      width: 95%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      a {
        width: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .promo-inner {
      width: 95%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 20px;
      a {
        width: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .promo-inner {
      width: 95%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 20px;
      a {
        width: 100%;
        img {
          width: 100%;
          height: 296px;
        }
      }
    }
  }
`;
