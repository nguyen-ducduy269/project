import styled from "styled-components";

export const BusinessCss = styled.div`
  .drop-shipping {
    width: 100%;
    margin: 0 auto;
    display: flex;
    padding-top: 50px;
    gap: 30px;
    .shipping-img {
      width: 40%;
      img {
        width: 100%;
        height: fit-content;
      }
    }

    .shipping-content {
      width: 60%;
      p {
        margin-top: 20px;
        font-size: 12px;
        color: #87939d;
      }

      h1 {
        font-weight: 300;
      }

      div {
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
      }

      button {
        padding: 15px;
        border: none;
        background-color: #00644b;
        color: white;
        font-weight: 600;
      }
    }
  }

  .quantity-shipper {
    background-color: #00644b;
    padding: 100px;
    p {
      color: white;
      text-align: center;
      font-size: 28px;
      margin-bottom: 30px;
    }
  }

  .work {
    padding: 100px 0px;
    .start-work {
      margin-top: 30px;
      display: flex;
      gap: 40px;
      .start {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        img {
          width: 100%;
          height: fit-content;
        }

        p {
          font-size: 14px;
        }
      }
    }
  }

  .statistical {
    padding: 100px 0px;
    background-color: #00644b;
    .statisty {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 40px;
      align-items: center;
      .stat {
        padding: 50px;
        border: 1px solid white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        h1 {
          font-size: 50px;
          color: white;
          font-weight: 600;
        }

        p {
          color: white;
        }
      }
    }
  }

  .email {
    padding: 100px;
    text-align: center;
  }

  @media only screen and (min-width: 320px) {
    .drop-shipping {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .shipping-img {
        width: 100%;
      }

      .shipping-content {
        width: 90%;
        h1 {
          font-weight: 600;
          font-size: 20px;
        }
      }

      .shipping-content {
        margin-bottom: 30px;
      }
    }

    .quantity-shipper {
      padding: 100px 10px;
    }

    .work {
      padding: 100px 10px;
      .start-work {
        flex-direction: column;
        .start {
          width: 100%;
        }
      }
    }

    .statistical {
      padding: 100px 10px;
      .statisty {
        grid-template-columns: repeat(2, 1fr);
        .stat {
          padding: 10px 10px;
          h1 {
            font-size: 22px;
          }

          p {
            text-align: center;
          }
        }
      }
    }

    .email {
      padding: 100px 10px;
      text-align: center;
      h1 {
        font-size: 20px;
      }

      h2 {
        font-size: 16px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .email {
      padding: 100px 10px;
      text-align: center;
      h1 {
        font-size: 38px;
      }

      h2 {
        font-size: 24px;
      }
    }
  }

  @media only screen and (min-width: 800px) {
    .drop-shipping {
      flex-direction: row;
      .shipping-content {
        h1 {
          font-size: 40px;
        }
        p {
          font-size: 14px;
        }
        .dropshipping,
        .wholesale {
          font-size: 14px;
        }
      }
    }

    .work {
      padding: 100px 10px;
      .start-work {
        flex-direction: row;
        .start {
          width: 50%;
        }
      }
    }

    .statistical {
      padding: 100px 10px;
      .statisty {
        grid-template-columns: repeat(4, 1fr);
        .stat {
          padding: 50px 10px;
          h1 {
            font-size: 40px;
          }
        }
      }
    }

    .email {
      padding: 100px 10px;
      text-align: center;
      h1 {
        font-size: 42px;
      }

      h2 {
        font-size: 24px;
      }
    }
  }
`;
