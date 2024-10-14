import styled from "styled-components";

export const OrderStyle = styled.div`
  .custom-order {
    margin-top: 50px;
    margin-bottom: 50px;
    .delivery-address {
      .address {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title {
          font-size: 26px;
        }

        .code {
          font-size: 16px;
        }
      }

      .detail-address {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        .custom {
          width: 30%;
          .name,
          .phone-number,
          .email,
          .custom-address {
            display: flex;
            gap: 5px;
            font-size: 14px;
            font-weight: 300;
          }
        }

        .route {
          width: 65%;
          display: flex;
          flex-direction: column;
          gap: 15px;
          .each-time {
            display: flex;
            gap: 10px;
            .tick {
              width: 5%;
              svg {
                font-size: 24px;
                color: #00644b;
              }
            }

            .date {
              width: 20%;
              font-size: 15px;
            }

            .state {
              width: 75%;
              font-size: 14px;
              color: #00644bb5;
              font-weight: 600;
              p {
                color: #00644b;
                font-weight: 700;
                font-size: 16px;
              }
            }
          }
        }
      }
    }

    .delivery-order {
      margin-top: 50px;
      border-top: 1px solid #00000024;
      .items {
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        .item {
          display: flex;
          justify-content: space-between;
          img {
            width: 12%;
            height: min-content;
          }

          .infor {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .name {
              font-size: 18px;
              font-weight: 700;
            }

            .price,
            .size,
            .ca,
            .fl {
              font-size: 15px;
            }
          }

          .quantity,
          .final-price {
            width: 15%;
            font-size: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
      }

      .sum {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .final {
          padding-right: 14%;
          height: 50px;
          display: flex;
          align-items: center;
        }
      }
    }
  }

  @media only screen and (min-width: 320px) {
    .custom-order {
      padding: 0px 10px 0px 10px;
      .delivery-address {
        .address {
          .title {
            font-size: 16px;
          }

          .code {
            font-size: 12px;
          }
        }

        .detail-address {
          flex-direction: column;
          gap: 15px;
          .custom {
            width: 100%;
          }

          .route {
            width: 100%;
            .each-time {
              .tick {
                width: 10%;
              }

              .date {
                width: 20%;
              }

              .state {
                width: 65%;
              }
            }
          }
        }
      }

      .delivery-order {
        .items {
          padding-bottom: 20px;
          border-bottom: 1px solid #0000003d;
          .item {
            flex-direction: column;
            img {
              width: 100%;
            }

            .infor {
              width: 100%;
              .name {
                font-size: 16px;
              }

              .price,
              .size,
              .ca,
              .fl {
                font-size: 16px;
              }
            }

            .quantity {
              width: 100%;
              font-size: 16px;
            }

            .final-price {
              width: 100%;
              font-size: 16px;
            }
          }
        }

        .sum {
          .final {
            width: 100%;
            padding-right: 0;
            font-size: 16px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 500px) {
    .custom-order {
      padding: 0px 10px 0px 10px;
      .delivery-address {
        .address {
          .title {
            font-size: 18px;
          }

          .code {
            font-size: 14px;
          }
        }

        .detail-address {
          flex-direction: column;
          gap: 15px;
          .custom {
            width: 100%;
          }

          .route {
            width: 100%;
            .each-time {
              .tick {
                width: 10%;
              }

              .date {
                width: 20%;
              }

              .state {
                width: 65%;
              }
            }
          }
        }
      }

      .delivery-order {
        .items {
          padding-bottom: 20px;
          border-bottom: 1px solid #0000003d;
          .item {
            flex-direction: row;
            img {
              width: 20%;
            }

            .infor {
              width: 40%;
              .name {
                font-size: 16px;
              }

              .price,
              .size,
              .ca,
              .fl {
                font-size: 12px;
              }
            }

            .quantity {
              width: 12%;
              font-size: 14px;
            }

            .final-price {
              width: 18%;
              font-size: 14px;
            }
          }
        }

        .sum {
          .final {
            width: 100%;
            padding-right: 0;
            font-size: 16px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .custom-order {
      padding: 0px 10px 0px 10px;
      .delivery-address {
        .address {
          .title {
            font-size: 22px;
          }

          .code {
            font-size: 16px;
          }
        }

        .detail-address {
          flex-direction: column;
          gap: 15px;
          .custom {
            width: 100%;
          }

          .route {
            width: 100%;
            .each-time {
              .tick {
                width: 10%;
              }

              .date {
                width: 20%;
              }

              .state {
                width: 65%;
              }
            }
          }
        }
      }

      .delivery-order {
        .items {
          padding-bottom: 20px;
          border-bottom: 1px solid #0000003d;
          .item {
            flex-direction: row;
            img {
              width: 20%;
            }

            .infor {
              width: 40%;
              .name {
                font-size: 18px;
              }

              .price,
              .size,
              .ca,
              .fl {
                font-size: 14px;
              }
            }

            .quantity {
              width: 12%;
              font-size: 14px;
            }

            .final-price {
              width: 18%;
              font-size: 14px;
            }
          }
        }

        .sum {
          .final {
            width: 30%;
            padding-right: 0;
            font-size: 16px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .custom-order {
      padding: 0;
      .delivery-address {
        .address {
          .title {
            font-size: 24px;
          }

          .code {
            font-size: 16px;
          }
        }

        .detail-address {
          flex-direction: row;
          gap: 15px;
          .custom {
            width: 25%;
          }

          .route {
            width: 65%;
            .each-time {
              .tick {
                width: 5%;
              }

              .date {
                width: 25%;
              }

              .state {
                width: 65%;
              }
            }
          }
        }
      }

      .delivery-order {
        .items {
          padding-bottom: 20px;
          border-bottom: 1px solid #0000003d;
          .item {
            flex-direction: row;
            img {
              width: 15%;
            }

            .infor {
              width: 40%;
              .name {
                font-size: 18px;
              }

              .price,
              .size,
              .ca,
              .fl {
                font-size: 14px;
              }
            }

            .quantity {
              width: 12%;
              font-size: 14px;
            }

            .final-price {
              width: 18%;
              font-size: 14px;
            }
          }
        }

        .sum {
          .final {
            width: 30%;
            padding-right: 0;
            font-size: 16px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .custom-order {
      padding: 0;
      .delivery-address {
        .address {
          .title {
            font-size: 24px;
          }

          .code {
            font-size: 16px;
          }
        }

        .detail-address {
          flex-direction: row;
          gap: 15px;
          .custom {
            width: 25%;
          }

          .route {
            width: 65%;
            .each-time {
              .tick {
                width: 5%;
              }

              .date {
                width: 15%;
              }

              .state {
                width: 65%;
              }
            }
          }
        }
      }

      .delivery-order {
        .items {
          padding-bottom: 20px;
          border-bottom: 1px solid #0000003d;
          .item {
            flex-direction: row;
            img {
              width: 15%;
            }

            .infor {
              width: 40%;
              .name {
                font-size: 20px;
              }

              .price,
              .size,
              .ca,
              .fl {
                font-size: 14px;
              }
            }

            .quantity {
              width: 12%;
              font-size: 16px;
            }

            .final-price {
              width: 18%;
              font-size: 16px;
            }
          }
        }

        .sum {
          .final {
            width: 30%;
            padding-right: 0;
            font-size: 16px;
          }
        }
      }
    }
  }
`;
