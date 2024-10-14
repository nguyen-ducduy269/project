import styled from "styled-components";

export const CheckOutCss = styled.div`
  .check {
    padding: 20px 0px;
    border: 0.5px solid #00000038;
    .check-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        text-decoration: none;
        color: black;
        display: flex;
        align-items: center;
        gap: 5px;
        img {
          width: 60px;
          height: fit-content;
        }
        svg {
          font-size: 32px;
          color: #00644b;
        }
      }
    }
  }

  .check-out {
    display: flex;
    gap: 30px;
    position: relative;
    .contact {
      padding: 50px 0px 50px 100px;
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      input,
      select {
        padding: 20px 10px;
        border-radius: 5px;
        border: 0.5px solid #00000038;
      }

      .form-email {
        display: flex;
        flex-direction: column;
        gap: 10px;
        label {
          font-size: 24px;
          font-weight: 600;
        }

        input {
          height: 48px;
          border-radius: 5px;
          border: 0.5px solid #00000038;
        }
      }

      select {
        width: 100%;
        border-radius: 5px;
        border: 0.5px solid #00000038;
      }

      .name {
        display: flex;
        gap: 20px;
        width: 100%;
        input {
          width: 100%;
        }
      }

      .place {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }

      .pay-now {
        width: 100%;
        padding: 20px 10px;
        font-weight: 600;
        font-size: 18px;
        background-color: #00644b;
        border: none;
        border-radius: 5px;
        color: white;
        text-align: center;
        cursor: pointer;
      }
    }

    .summary {
      padding: 30px 50px;
      background-color: rgba(250, 250, 250, 1);
      width: 50%;
      border-left: 0.5px solid #00000038;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .order {
        .order-item {
          padding: 20px 0px 0px 0px;
          display: flex;
          gap: 10px;
          position: relative;
          justify-content: space-between;
          .image {
            width: 10%;
            img {
              width: 100%;
              height: fit-content;
              border: 0.5px solid #00000038;
              border-radius: 5px;
            }
          }

          .detail {
            width: 75%;
            display: flex;
            flex-direction: column;
            gap: 2px;
            justify-content: center;
            div {
              font-size: 12px;
            }

            .name {
              font-weight: 600;
            }
          }

          .total-price {
            align-items: center;
            display: flex;
            justify-content: center;
            font-size: 15px;
            font-weight: 500;
          }
        }

        a {
          width: 100%;
          color: black;
          text-align: center;
        }
      }

      .discount-code {
        display: flex;
        gap: 20px;
        input {
          width: 90%;
          padding: 15px 10px;
          border: 0.5px solid #00000038;
          border-radius: 5px;
        }

        button {
          padding: 15px 15px;
          color: rgba(0, 0, 0, 0.56);
          font-weight: 600;
          border: 0.5px solid rgba(218, 218, 218, 1);
          border-radius: 5px;
          cursor: pointer;
        }
      }

      .final {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 50px;
        .subtotal,
        .shipping {
          display: flex;
          width: 100%;
          justify-content: space-between;
          font-size: 14px;
          p {
            font-weight: 600;
          }
        }

        .total {
          display: flex;
          width: 100%;
          justify-content: space-between;
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
  }

  @media only screen and (min-width: 320px) {
    .check {
      .check-head {
        a {
          font-size: 10px;
        }
      }
    }

    .check-out {
      flex-direction: column;
      .contact {
        width: 100%;
        padding: 30px 10px;
        .place {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
        }
      }

      .summary {
        width: 100%;
        padding: 0px 10px;
        .order {
          .order-item {
            .image {
              width: 25%;
            }

            .detail {
              width: 55%;
              div {
                font-size: 10px;
              }
            }

            .total-price {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 425px) {
    .check {
      .check-head {
        a {
          font-size: 12px;
        }
      }
    }

    .check-out {
      flex-direction: column;
      .contact {
        width: 100%;
        padding: 30px 10px;
      }

      .summary {
        width: 100%;
        padding: 0px 10px;
        .order {
          .order-item {
            .image {
              width: 20%;
            }

            .detail {
              width: 60%;
              div {
                font-size: 12px;
              }
            }

            .total-price {
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 600px) {
    .check {
      .check-head {
        a {
          font-size: 14px;
        }
      }
    }

    .check-out {
      flex-direction: column;
      .contact {
        width: 100%;
        padding: 30px 10px;
      }

      .summary {
        width: 100%;
        padding: 0px 10px;
        .order {
          .order-item {
            .image {
              width: 15%;
            }

            .detail {
              width: 65%;
              div {
                font-size: 12px;
              }
            }

            .total-price {
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .check {
      .check-head {
        a {
          font-size: 16px;
        }
      }
    }

    .check-out {
      flex-direction: row;
      .contact {
        width: 50%;
        padding: 50px 0px 50px 100px;
      }

      .summary {
        width: 50%;
        padding: 30px 50px;
        .order {
          .order-item {
            .image {
              width: 10%;
            }

            .detail {
              width: 75%;
              div {
                font-size: 12px;
              }
            }

            .total-price {
              font-size: 15px;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1440px) {
    .check-out {
      flex-direction: row;
      .contact {
        .place {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
      }
    }
  }
`;
