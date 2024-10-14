import styled from "styled-components";

export const Main = styled.div`
  margin: 50px 0px 50px 0px;
  .main-content {
    display: flex;
    flex-direction: column;
    gap: 40px;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        color: #f8ba8c;
        text-decoration: unset;
        font-weight: 500;
        font-size: 14px;
        svg {
          font-size: 10px;
          font-weight: 500;
        }
      }

      .subtotal {
        display: flex;
        gap: 20px;
        .detail {
          height: 50px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          justify-content: center;
          align-items: flex-end;
          p {
            color: #949494;
            font-size: 14px;
          }

          .price {
            font-weight: 500;
            font-size: 20px;
          }
        }

        a {
          height: 50px;
          button {
            height: 100%;
            width: 135px;
            color: #00634b;
            background-color: #f8ba8c;
            border: 1px solid #f8ba8c;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
            font-size: 15px;
            font-weight: 500;
            cursor: pointer;
            svg {
              font-size: 18px;
            }
          }
        }
      }
    }

    .main {
      .empty {
        width: 100%;
        height: 358px;
        border: 0.5px solid #00634b;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        p {
          font-weight: 500;
        }

        button {
          width: 200px;
          height: 44px;
          background-color: #f8ba8c;
          border: unset;
          border-radius: 5px;
          a {
            text-decoration: unset;
            color: #00634b;
            font-size: 14px;
            font-weight: 500;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            svg {
              font-size: 16px;
            }
          }
        }
      }

      .card {
        .item {
          margin-bottom: 20px;
          .card-item {
            display: flex;
            justify-content: space-between;
            .items1 {
              width: 50%;
              display: flex;
              align-items: center;
              gap: 10px;
              img {
                width: 120px;
                height: fit-content;
              }

              .cart-detail {
                .name {
                  font-size: 20px;
                  font-weight: 600;
                }

                .size,
                .product-price {
                  font-size: 14px;
                  color: #4d4d4dcc;
                  margin-top: 5px;
                }
              }
            }

            .items2 {
              width: 50%;
              display: flex;
              align-items: center;
              justify-content: flex-end;
              .total-price {
                margin-left: 100px;
                margin-right: 40px;
              }

              .delete-button {
                cursor: pointer;
                svg {
                  font-size: 24px;
                  color: red;
                }
              }
            }
          }

          .greenhouse {
            margin-top: 10px;
            .greenhouse-item {
              display: flex;
              align-items: center;
              font-size: 14px;
              font-weight: 500;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 320px) {
    .main-content {
      width: 95%;
      margin: 0 auto;
      .title {
        h1 {
          font-size: 24px;
        }

        a {
          font-size: 12px;
        }

        .subtotal {
          display: flex;
          gap: 20px;
          .detail {
            height: 40px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            justify-content: center;
            align-items: flex-end;
            p {
              color: #949494;
              font-size: 10px;
            }

            .price {
              font-weight: 500;
              font-size: 14px;
            }
          }

          a {
            height: 40px;
            button {
              width: 80px;
              color: #00634b;
              background-color: #f8ba8c;
              border: 1px solid #f8ba8c;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 5px;
              font-size: 10px;
              font-weight: 500;
              svg {
                font-size: 12px;
              }
            }
          }
        }
      }

      .main {
        .card {
          .item {
            .card-item {
              display: flex;
              flex-direction: column;
              .items1 {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: unset;
                img {
                  width: 100%;
                }
              }

              .items2 {
                width: 100%;
                justify-content: space-between;
                .quantity,
                .total-price {
                  font-size: 16px;
                }

                .total-price {
                  margin-left: unset;
                  margin-right: unset;
                }
              }
            }

            .greenhouse {
              margin-top: unset;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .main-content {
      width: 95%;
      margin: 0 auto;
      .title {
        h1 {
          font-size: 24px;
        }

        a {
          font-size: 12px;
        }

        .subtotal {
          display: flex;
          gap: 20px;
          .detail {
            height: 50px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            justify-content: center;
            align-items: flex-end;
            p {
              color: #949494;
              font-size: 14px;
            }

            .price {
              font-weight: 500;
              font-size: 20px;
            }
          }

          a {
            height: 50px;
            button {
              width: 135px;
              color: #00634b;
              background-color: #f8ba8c;
              border: 1px solid #f8ba8c;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 5px;
              font-size: 14px;
              font-weight: 500;
              svg {
                font-size: 16px;
              }
            }
          }
        }
      }

      .main {
        .card {
          .item {
            .card-item {
              display: flex;
              flex-direction: row;
              .items1 {
                width: 50%;
                display: flex;
                flex-direction: row;
                align-items: center;
                img {
                  width: 120px;
                }
              }

              .items2 {
                width: 50%;
                justify-content: flex-end;
                .quantity,
                .total-price {
                  font-size: 18px;
                }

                .total-price {
                  margin-left: 100px;
                  margin-right: 40px;
                }
              }
            }

            .greenhouse {
              margin-top: unset;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .main-content {
      width: 95%;
      margin: 0 auto;
      .title {
        h1 {
          font-size: 28px;
        }

        a {
          font-size: 14px;
        }
      }
    }
  }
`;
