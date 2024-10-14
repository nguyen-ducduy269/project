import styled from "styled-components";

export const Logo = styled.div`
  margin-top: 50px;
  margin-bottom: 40px;
  .logo {
    margin-bottom: 30px;
    h2 {
      text-align: center;
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 30px;
    }

    .home-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      image {
        width: 100%;
      }
    }
  }

  .pxs-image {
    width: 100%;
    height: 527px;
    background-image: url(https://houseplantshop.com/cdn/shop/files/ftwArtboard_141_copy_22_1160x628_crop_center.png?v=1660712786);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 50px;
    h2 {
      font-size: 34px;
      color: white;
      font-weight: 700;
      margin-bottom: 10px;
    }

    p {
      width: 45%;
      font-size: 18px;
      font-weight: 700;
      color: white;
      margin-bottom: 30px;
    }

    button {
      color: #00634b;
      background-color: #f8ba8c;
      border: 1px solid #f8ba8c;
      width: 127px;
      height: 53px;
      font-weight: 600;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 320px) {
    .logo {
      .home-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
      }
    }

    .pxs-image {
      background-position: center;
      padding-left: 20px;
      h2 {
        width: 50%;
        font-size: 32px;
      }

      p {
        width: 50%;
        font-size: 14px;
      }
    }
  }

  @media only screen and (min-width: 425px) {
    .logo {
      .home-section {
        width: 95%;
        margin: 0 auto;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .logo {
      .home-section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .logo {
      .home-section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .logo {
      .home-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        image {
          width: 100%;
        }
      }
    }

    .pxs-image {
      background-position: center;
      padding-left: 50px;
    }
  }
`;
