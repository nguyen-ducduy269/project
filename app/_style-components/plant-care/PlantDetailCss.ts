import styled from "styled-components";

export const PLantDetailCss = styled.div`
  .title {
    padding: 100px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    h4 {
      font-size: 24px;
      color: #00634b;
    }

    h1 {
      font-size: 48px;
      text-align: center;
    }
  }

  .meeting {
    padding: 100px 0px;
    background-color: #f4fcf2;
    .meet {
      width: 70%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 40px;
      .image {
        width: 50%;
        height: fit-content;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .meet-content {
        width: 50%;
        h1 {
          color: #00634b;
        }

        .discription {
          margin-top: 10px;
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
  }

  .condition {
    padding: 70px 0px;
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .main-img {
      width: 100%;
      img {
        width: 100%;
        height: fit-content;
        border-radius: 100%;
      }
    }

    .condition-detail {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
      margin-top: 30px;
      .light,
      .pet,
      .water,
      .humidity,
      .temperature,
      .difficult-level {
        width: 100%;
        display: flex;
        gap: 10px;
        margin-bottom: 70px;
        img {
          width: 80px;
          height: 80px;
        }

        .content {
          width: 80%;
          h3 {
            font-size: 28px;
            color: #00634b;
            margin-bottom: 5px;
          }

          p {
            font-weight: 500;
            font-size: 16px;
          }
        }
      }
    }
  }

  .common-problems {
    padding: 70px 0px 200px 0px;
    background-color: #f4fcf2;
    .problem {
      width: 70%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 50px;
      .problem-content {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        h1 {
          font-size: 30px;
          color: #00634b;
        }

        p {
          text-align: center;
          font-size: 20px;
          font-weight: 500;
        }
      }

      .image {
        width: 450px;
        img {
          width: 100%;
          height: fit-content;
        }
      }
    }
  }

  .shop-detail {
    padding: 50px 0px;
    h1 {
      text-align: center;
      color: #00634b;
    }

    .item-detail {
      display: flex;
      align-items: center;
      margin-top: 50px;
      .item-img {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 416px;
          height: auto;
        }
      }

      .details {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        .item-title {
          font-size: 30px;
          font-weight: 600;
        }

        .item-price {
          font-size: 24px;
          font-weight: 500;
        }

        ul {
          li {
            margin-bottom: 10px;
          }
        }

        .add-to-card-value {
          display: flex;
          gap: 20px;
          .value {
            display: flex;
            align-items: center;
            gap: 5px;
            button {
              width: 40px;
              height: 40px;
              background-color: #5d6b82;
              color: white;
              border: none;
              border-radius: 5px;
              font-size: 20px;
              cursor: pointer;
            }

            .quantity {
              width: 70px;
              height: 40px;
              border: 1px solid rgb(209, 213, 219);
              padding-left: 15px;
              border-radius: 5px;
            }
          }

          .add-to-card {
            padding: 10px 20px;
            background-color: #5d6b82;
            color: white;
            border-radius: 5px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
        }

        a {
          text-decoration: none;
          color: #006ce5;
          cursor: pointer;
        }
      }
    }
  }

  @media only screen and (min-width: 320px) {
    .meeting {
      .meet {
        width: 90%;
        margin: 0 auto;
        flex-direction: column;
        .image {
          width: 100%;
        }

        .meet-content {
          width: 100%;
        }
      }
    }

    .condition {
      width: 100%;
      margin: 0 auto;
      .condition-detail {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    .common-problems {
      .problem {
        width: 100%;
        flex-direction: column-reverse;
        .image {
          width: 100%;
        }

        .problem-content {
          width: 95%;
          margin: 0 auto;
        }
      }
    }

    .shop-detail {
      .item-detail {
        flex-direction: column;
        gap: 20px;
        .item-img {
          width: 100%;
        }

        .details {
          width: 90%;
          margin: 0 auto;
          .add-to-card-value {
            gap: 10px;
            .add-to-card {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .meeting {
      .meet {
        width: 70%;
        margin: 0 auto;
        flex-direction: row;
        .image {
          width: 100%;
        }

        .meet-content {
          width: 100%;
        }
      }
    }

    .condition {
      width: 80%;
      margin: 0 auto;
      .condition-detail {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .common-problems {
      .problem {
        width: 70%;
        flex-direction: column-reverse;
        .image {
          width: 100%;
        }

        .problem-content {
          width: 95%;
          margin: 0 auto;
        }
      }
    }

    .shop-detail {
      .item-detail {
        flex-direction: row;
        .item-img {
          width: 100%;
        }

        .details {
          width: 90%;
          margin: 0 auto;
          .add-to-card-value {
            gap: 10px;
            .add-to-card {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .meeting {
      .meet {
        width: 70%;
        margin: 0 auto;
        flex-direction: row;
        .image {
          width: 100%;
        }

        .meet-content {
          width: 100%;
        }
      }
    }

    .condition {
      width: 60%;
      margin: 0 auto;
      .condition-detail {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .common-problems {
      .problem {
        width: 70%;
        flex-direction: row;
        .image {
          width: 100%;
        }

        .problem-content {
          width: 95%;
          margin: 0 auto;
        }
      }
    }

    .shop-detail {
      .item-detail {
        flex-direction: row;
        .item-img {
          width: 100%;
        }

        .details {
          width: 90%;
          margin: 0 auto;
          ul {
            li {
              font-size: 14px;
            }
          }

          .add-to-card-value {
            gap: 10px;
            .add-to-card {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`;
