import styled from "styled-components";

export const Slide = styled.div`
  width: 100%;
  h3 {
    height: 500px;
    color: white;
    position: relative;
    .slide {
      position: absolute;
      bottom: 15%;
      right: 5%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .slide-title {
        font-weight: 700;
        font-size: 36px;
      }

      .slide-description {
        font-size: 20px;
        font-weight: 400;
      }

      button {
        width: 215px;
        height: 50px;
        color: #1e8570;
        background-color: #fff;
        border: 1px solid #dddddd;
        margin-top: 30px;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }

  .tropical {
    background-image: url(https://houseplantshop.com/cdn/shop/files/June20_Tropical_banner_4de04726-d1a9-4606-915e-aa5a75d446b1_1793x590_crop_center.jpg?v=1663811377);
  }

  .sub-box {
    background-image: url(https://houseplantshop.com/cdn/shop/files/HPS_Sub_Box_Pet-Friendly_1200x500_crop_center.jpg?v=1629914238);
  }

  .rosy-soil {
    background-image: url(https://houseplantshop.com/cdn/shop/files/Screenshot_2023-08-29_at_11.22.57_PM_1899x625_crop_center.png?v=1693511655);
  }

  .books {
    background-image: url(https://houseplantshop.com/cdn/shop/files/banneer_books_1793x590_crop_center.png?v=1651722547);
  }

  .creepy {
    background-image: url(https://houseplantshop.com/cdn/shop/files/October_Creepy_Plants_1_1793x590_crop_center.jpg?v=1697054507);
  }

  .vining-plants {
    background-image: url(https://houseplantshop.com/cdn/shop/files/July21_Tropical_email_header_3_1ceace14-d3c7-49e7-a5f2-cc0bcf7ed6ab_1611x530_crop_center.jpg?v=1692665038);
  }

  .tropical,
  .sub-box,
  .rosy-soil,
  .books,
  .creepy,
  .vining-plants {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  @media only screen and (min-width: 320px) {
    h3 {
      height: 300px;
      .slide {
        width: 50%;
        .slide-title {
          font-size: 16px;
        }

        .slide-description {
          font-size: 14px;
        }

        button {
          width: 150px;
          height: 40px;
          font-size: 12px;
        }
      }
    }
  }

  @media only screen and (min-width: 500px) {
    h3 {
      height: 350px;
      .slide {
        width: 60%;
        .slide-title {
          font-size: 18px;
        }

        .slide-description {
          font-size: 16px;
        }

        button {
          width: 170px;
          height: 45px;
          font-size: 14px;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    h3 {
      height: 400px;
      .slide {
        .slide-title {
          font-size: 22px;
        }

        .slide-description {
          font-size: 20px;
        }

        button {
          width: 200px;
          height: 50px;
          font-size: 16px;
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    h3 {
      height: 500px;
      .slide {
        position: absolute;
        bottom: 15%;
        right: 5%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .slide-title {
          font-weight: 700;
          font-size: 36px;
        }

        .slide-description {
          font-size: 20px;
          font-weight: 400;
        }

        button {
          width: 215px;
          height: 50px;
          color: #1e8570;
          background-color: #fff;
          border: 1px solid #dddddd;
          margin-top: 30px;
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
  }
`;
