import styled from "styled-components";

export const Feature = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  .product {
    display: flex;
    gap: 40px;
    .product-gallery {
      .main-img {
        img {
          width: 677px;
          height: 100%;
        }
      }
      .more-img {
        margin-top: 15px;
        display: flex;
        gap: 10px;
      }
    }

    .product-main {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      justify-content: center;
      h1 {
        font-size: 25px;
        text-align: center;
      }

      .price {
        font-size: 20px;
      }

      .form-field-select {
        display: flex;
        gap: 5px;
        align-items: center;
        label {
          font-size: 18px;
        }
        input {
          width: 120px;
          font-size: 14px;
          height: 30px;
          padding-left: 5px;
        }

        .minus {
          width: 30px;
          height: 30px;
          background-color: rgb(209, 213, 219);
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 20px;
          cursor: pointer;
        }

        .plus {
          width: 30px;
          height: 30px;
          background-color: #5d6b82;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 20px;
          cursor: pointer;
        }
      }

      a {
        text-decoration: unset;
        color: #f8ba8c;
        font-size: 14px;
        font-weight: 600;
      }

      .internet-contact {
        display: flex;
        gap: 20px;
      }
    }
  }

  @media only screen and (min-width: 320px) {
    .product {
      display: flex;
      flex-direction: column;
      .product-gallery {
        width: 90%;
        margin: 0 auto;
        .main-img {
          width: 100%;
          height: 340px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .product-main {
        width: 90%;
        margin: 0 auto;
        h1 {
          font-size: 20px;
        }
      }
    }
  }

  @media only screen and (min-width: 720px) {
    .product {
      display: flex;
      flex-direction: row;
      .product-gallery {
        .main-img {
          width: 100%;
          height: min-content;
          overflow-y: hidden;
          img {
            width: 100%;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .product {
      display: flex;
      flex-direction: row;
      .product-gallery {
        .main-img {
          width: 100%;
          height: min-content;
          overflow-y: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .product {
      display: flex;
      flex-direction: row;
      .product-gallery {
        .main-img {
          width: 100%;
          height: min-content;
          overflow-y: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1440px) {
    .product {
      display: flex;
      gap: 40px;
      .product-gallery {
        width: 50%;
        .main-img {
          img {
            width: 100%;
            height: 100%;
          }
        }
        .more-img {
          margin-top: 15px;
          display: flex;
          gap: 10px;
        }
      }

      .product-main {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        justify-content: center;
        h1 {
          font-size: 25px;
          text-align: center;
        }

        .price {
          font-size: 20px;
        }

        .form-field-select {
          display: flex;
          gap: 5px;
          label {
            font-size: 18px;
          }
          select {
            font-size: 18px;
          }
        }

        a {
          text-decoration: unset;
          color: #f8ba8c;
          font-size: 14px;
          font-weight: 600;
        }

        .internet-contact {
          display: flex;
          gap: 20px;
        }
      }
    }
  }
`;
