import styled from "styled-components";

export const CaliforniaShoppingCss = styled.div`
  .shopping-img {
    width: 100%;
    height: fit-content;
  }

  .main-content {
    padding: 100px 20px;
    background-color: #e5f5e8;
    h1 {
      font-size: 75px;
      font-weight: 700;
      color: #00644b;
      text-align: center;
      margin-bottom: 30px;
    }

    .question {
      width: 70%;
      border: none;
      margin: 0 auto;
      background-color: #00644b;
      padding: 20px 20px;
      margin-bottom: 30px;
      h3 {
        font-size: 24px;
        color: white;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 10px;
      }

      p {
        font-size: 18px;
        color: white;
        text-align: center;
        width: 90%;
        margin: 0 auto;
      }

      .price-img {
        width: 600px;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }
    }

    .address {
      width: 50%;
      margin: 0 auto;
      font-size: 28px;
      color: #00644b;
      font-weight: 700;
      text-align: center;
      margin-bottom: 30px;
    }

    .map {
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      iframe {
        width: 70%;
        height: 500px;
      }
    }
  }

  @media only screen and (min-width: 320px) {
    .main-content {
      h1 {
        font-size: 40px;
      }

      .question {
        width: 100%;
        .price-img {
          width: 100%;
        }
      }

      .address {
        width: 100%;
      }

      .map {
        iframe {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .main-content {
      h1 {
        font-size: 55px;
      }

      .question {
        width: 80%;
        .price-img {
          width: 100%;
        }
      }

      .address {
        width: 80%;
      }

      .map {
        iframe {
          width: 80%;
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .main-content {
      h1 {
        font-size: 55px;
      }

      .question {
        width: 70%;
        .price-img {
          width: 600px;
        }
      }

      .address {
        width: 70%;
      }

      .map {
        iframe {
          width: 70%;
        }
      }
    }
  }
`;
