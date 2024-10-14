import styled from "styled-components";

export const CollectionsStyle = styled.div`
  margin: 30px 0px 30px 0px;
  .shoptify-collection {
    display: flex;
    gap: 20px;

    .collections {
      width: 100%;
      .title {
        display: flex;
        align-items: center;
        gap: 5px;
        a {
          text-decoration: unset;
          color: #f8ba8c;
        }

        svg {
          font-size: 8px;
        }
      }

      h1 {
        font-size: 38px;
        margin: 20px 0px 20px 0px;
      }

      .all-product {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
        margin-top: 30px;
        .product-item {
          border: 1px solid #0000002e;
          border-radius: 5px;
          padding: 15px;
          width: 100%;
          height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          a {
            height: min-content;
            img {
              width: 100%;
            }
          }

          .stars {
            margin-top: 10px;
            svg {
              font-size: 24px;
              color: #00634b;
            }
          }

          .product-price {
            margin-top: 20px;
            font-size: 22px;
            color: #f8ba8c;
            font-weight: 600;
          }

          .owner {
            margin-top: 20px;
            font-size: 18px;
            font-weight: 600;
          }

          .option {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            animation-duration: 3s;
            margin-top: 30px;
            button {
              width: 50%;
              height: 40px;
              padding: 0px 10px 0px 10px;
              cursor: pointer;
              font-size: 10px;
            }

            .quick-shop {
              background-color: white;
              color: #00634b;
              font-weight: 600;
              border: 1px solid #0000002e;
            }

            .choose-option {
              background-color: #f8ba8c;
              color: #00634b;
              font-weight: 600;
              border: 1px solid #f8ba8c;
            }
          }
        }
      }

      .quick-shop-pop-up {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #0000009c;
        .pop-up {
          background-color: white;
          width: 50%;
          height: 90%;
          overflow-y: scroll;
          margin: 0 auto;
          margin-top: 30px;
          margin-bottom: 30px;
          padding: 40px;
          position: relative;
          .product-image {
            display: flex;
            flex-direction: row;
            gap: 20px;
            margin-bottom: 20px;
            .main-img {
              width: 60%;
            }

            .more-img {
              width: 40%;
              display: flex;
              align-items: center;
              flex-wrap: wrap;
              justify-content: space-evenly;
              .active {
                border: 1px solid black;
                padding: 3px;
              }
            }
          }

          .content {
            display: flex;
            gap: 20px;
            .detail-information {
              width: 60%;
              ul {
                padding-left: 20px;
                li {
                  margin-bottom: 20px;
                  display: flex;
                  flex-wrap: wrap;
                  gap: 5px;
                  align-items: center;
                  font-size: 14px;
                  font-weight: 500;
                  svg {
                    font-size: 5px;
                    line-height: 10px;
                  }
                }
              }

              .covid {
                font-size: 14px;
                margin-bottom: 20px;
              }

              .share-contact {
                p {
                  margin-bottom: 10px;
                  font-size: 14px;
                  font-weight: 600;
                }

                .internet-contact {
                  display: flex;
                  gap: 7px;
                }
              }
            }

            .summary {
              width: 40%;
              .name {
                font-size: 32px;
                font-weight: 600;
                margin-bottom: 10px;
              }

              .price {
                font-size: 20px;
                font-weight: 500;
                margin-bottom: 10px;
              }

              .choose-size {
                margin-top: 10px;
                .title {
                  font-size: 14px;
                  font-weight: 600;
                }

                .button {
                  margin-bottom: 20px;
                  button {
                    padding: 5px 7px 5px 7px;
                    border-radius: 7px;
                    margin-top: 5px;
                    margin-right: 10px;
                    background-color: white;
                    border: 1px solid #00000029;
                  }

                  .active {
                    color: #f8ba8c;
                    border-color: #f8ba8c0f;
                    background-color: #f8ba8c0f;
                  }
                }
              }

              .choose-type {
                margin-bottom: 20px;
                .title {
                  font-size: 14px;
                  font-weight: 600;
                  margin-bottom: 5px;
                }

                .type {
                  display: flex;
                  flex-wrap: wrap;
                  gap: 10px;
                  button {
                    padding: 5px 7px 5px 7px;
                    background-color: white;
                    border: 1px solid #00000029;
                    border-radius: 7px;
                    color: gray;
                    text-decoration: line-through;
                  }

                  .active {
                    color: #f8ba8c;
                    border-color: #f8ba8c0f;
                    background-color: #f8ba8c0f;
                    text-decoration: unset;
                  }
                }
              }

              form {
                height: 40px;
                display: flex;
                gap: 5px;
                align-items: center;
                margin-bottom: 20px;
                input {
                  height: 100%;
                  padding-left: 10px;
                  font-size: 16px;
                }
              }
            }
          }

          .exit {
            position: absolute;
            top: 15px;
            right: 15px;
            svg {
              font-size: 28px;
              cursor: pointer;
            }
          }
        }
      }

      .choose-option-pop-up {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #0000009c;
        display: flex;
        align-items: center;
        justify-content: center;
        .choose-option {
          background-color: white;
          width: 35%;
          padding: 40px;
          position: relative;
          .name {
            font-size: 32px;
            font-weight: 600;
          }

          .price {
            margin-top: 20px;
            font-size: 20px;
            font-weight: 500;
          }

          .choose-size {
            margin-top: 20px;
            margin-bottom: 20px;
            .title {
              font-size: 16px;
              font-weight: 600;
              margin-bottom: 10px;
            }

            .button {
              display: flex;
              gap: 10px;
              button {
                padding: 5px 7px 5px 7px;
                border-radius: 7px;
                margin-top: 5px;
                background-color: white;
                border: 1px solid #00000029;
              }

              .active {
                color: #f8ba8c;
                border-color: #f8ba8c0f;
                background-color: #f8ba8c0f;
              }
            }
          }

          .choose-type {
            margin-bottom: 20px;
            .title {
              font-size: 14px;
              font-weight: 600;
              margin-bottom: 5px;
            }

            .type {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
              button {
                padding: 5px 7px 5px 7px;
                background-color: white;
                border: 1px solid #00000029;
                border-radius: 7px;
              }

              .active {
                color: #f8ba8c;
                border-color: #f8ba8c0f;
                background-color: #f8ba8c0f;
              }
            }
          }

          form {
            height: 40px;
            display: flex;
            gap: 5px;
            align-items: center;
            margin-bottom: 20px;
            input {
              height: 100%;
              padding-left: 10px;
              font-size: 16px;
            }
          }

          .exit {
            position: absolute;
            top: 15px;
            right: 15px;
            svg {
              font-size: 28px;
              cursor: pointer;
            }
          }
        }
      }

      .change-page {
        width: 100%;
        margin-top: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        .page-active:hover {
          background-color: #f8ba8c;
          color: #00634b;
          font-weight: 600;
          border-radius: 100%;
          cursor: pointer;
        }

        button {
          width: 150px;
          padding: 10px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: unset;
        }
        button:hover {
          background-color: #f8ba8c;
          border: unset;
          color: #00634b;
          font-weight: 600;
        }

        div {
          padding: 5px 10px;
          font-weight: 500;
        }

        .active {
          background-color: #f8ba8c;
          border-radius: 100%;
          color: #00634b;
          font-weight: 600;
        }
      }
    }
  }

  @media only screen and (min-width: 320px) {
    .shoptify-collection {
      .collections {
        width: 100%;
        padding: 0px 10px 0px 10px;
        .all-product {
          grid-template-columns: repeat(1, 1fr);
          .product-item {
            .option {
              display: block;
            }

            .option {
              margin-top: 20px;
              display: flex;
              flex-direction: column;
              gap: 10px;
              button {
                width: 100%;
                height: 37px;
                padding: 0px 10px 0px 10px;
                cursor: pointer;
                font-size: 16px;
              }

              .quick-shop {
                background-color: white;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #0000002e;
              }

              .choose-option {
                background-color: #f8ba8c;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #f8ba8c;
              }
            }

            a {
              height: 60%;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 100%;
                height: 100%;
              }
            }

            .stars {
              svg {
                font-size: 24px;
                height: 30px;
              }
            }

            .product-price {
              font-size: 20px;
            }

            .owner {
              font-size: 18px;
            }
          }
        }

        .quick-shop-pop-up {
          .pop-up {
            width: 90%;
            padding: 40px 10px;
            .product-image {
              flex-direction: column;
              .main-img {
                width: 100%;
              }

              .more-img {
                width: 100%;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                align-items: center;
                justify-items: center;
                gap: 10px;
              }
            }

            .content {
              flex-direction: column-reverse;
              .detail-information,
              .summary {
                width: 100%;
              }
            }

            .exit {
              top: 10px;
              right: 10px;
            }
          }
        }

        .choose-option-pop-up {
          .choose-option {
            width: 90%;
            form {
              width: 100%;
              label {
                width: 30%;
              }
              input {
                width: 70%;
              }
            }
          }
        }

        .change-page {
          justify-content: space-between;
          gap: 10px;
          button {
            width: 100px;
            font-size: 10px;
          }

          div {
            font-size: 12px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 375px) {
    .shoptify-collection {
      .collections {
        width: 100%;
        padding: 0px 10px 0px 10px;
        .all-product {
          grid-template-columns: repeat(1, 1fr);
          .product-item {
            .option {
              display: block;
            }

            .option {
              margin-top: 20px;
              display: flex;
              flex-direction: column;
              gap: 10px;
              button {
                width: 100%;
                height: 37px;
                padding: 0px 10px 0px 10px;
                cursor: pointer;
                font-size: 16px;
              }

              .quick-shop {
                background-color: white;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #0000002e;
              }

              .choose-option {
                background-color: #f8ba8c;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #f8ba8c;
              }
            }

            a {
              height: 70%;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 80%;
                height: 100%;
              }
            }

            .stars {
              svg {
                font-size: 24px;
                height: 30px;
              }
            }

            .product-price {
              font-size: 20px;
            }

            .owner {
              font-size: 18px;
            }
          }
        }

        .quick-shop-pop-up {
          .pop-up {
            width: 90%;
            padding: 40px 10px;
            .product-image {
              flex-direction: column;
              .main-img {
                width: 100%;
              }

              .more-img {
                width: 100%;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                align-items: center;
                justify-items: center;
                gap: 10px;
              }
            }

            .content {
              flex-direction: column-reverse;
              .detail-information,
              .summary {
                width: 100%;
              }
            }

            .exit {
              top: 10px;
              right: 10px;
            }
          }
        }

        .choose-option-pop-up {
          .choose-option {
            width: 90%;
          }
        }

        .change-page {
          justify-content: space-between;
          gap: 10px;
          button {
            width: 100px;
            font-size: 10px;
          }

          div {
            font-size: 12px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 425px) {
    .shoptify-collection {
      .filter {
        display: none;
      }

      .collections {
        width: 100%;
        padding: 0px 10px 0px 10px;

        .all-product {
          grid-template-columns: repeat(2, 1fr);
          .product-item {
            padding: 5px;

            .stars {
              svg {
                font-size: 22px;
              }
            }

            .product-price {
              margin-top: 0px;
              font-size: 20px;
            }

            .option {
              display: block;
            }

            .option {
              display: flex;
              flex-direction: column;
              gap: 10px;
              margin-top: 30px;
              button {
                height: 37px;
                padding: 0px 10px 0px 10px;
                cursor: pointer;
              }

              .quick-shop {
                background-color: white;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #0000002e;
              }

              .choose-option {
                background-color: #f8ba8c;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #f8ba8c;
              }
            }

            a {
              height: 40%;
              img {
                width: 100%;
                height: 100%;
              }
            }

            .owner {
              margin-top: 0px;
              font-size: 20px;
            }
          }
        }

        .quick-shop-pop-up {
          .pop-up {
            width: 90%;
            padding: 40px 20px;
            .product-image {
              flex-direction: column;
              .main-img {
                width: 100%;
              }

              .more-img {
                width: 100%;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                align-items: center;
                justify-items: center;
              }
            }

            .content {
              flex-direction: column-reverse;
              .detail-information,
              .summary {
                width: 100%;
              }
            }

            .exit {
              top: 10px;
              right: 10px;
            }
          }
        }

        .choose-option-pop-up {
          .choose-option {
            width: 90%;
          }
        }

        .change-page {
          justify-content: center;
          gap: 15px;
          button {
            width: 120px;
            font-size: 10px;
          }

          div {
            font-size: 12px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 500px) {
    .shoptify-collection {
      .filter {
        display: none;
      }

      .collections {
        width: 100%;
        padding: 0px 10px 0px 10px;

        .all-product {
          grid-template-columns: repeat(2, 1fr);
          .product-item {
            padding: 5px;

            .stars {
              svg {
                font-size: 22px;
              }
            }

            .product-price {
              margin-top: 0px;
              font-size: 20px;
            }

            .option {
              display: block;
            }

            .option {
              display: flex;
              flex-direction: column;
              gap: 10px;
              margin-top: 30px;
              button {
                height: 37px;
                padding: 0px 10px 0px 10px;
                cursor: pointer;
              }

              .quick-shop {
                background-color: white;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #0000002e;
              }

              .choose-option {
                background-color: #f8ba8c;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #f8ba8c;
              }
            }

            a {
              height: 50%;
              img {
                width: 90%;
                height: 100%;
              }
            }

            .owner {
              margin-top: 0px;
              font-size: 20px;
            }
          }
        }

        .quick-shop-pop-up {
          .pop-up {
            width: 90%;
            padding: 40px 20px;
            .product-image {
              flex-direction: column;
              .main-img {
                width: 100%;
              }

              .more-img {
                width: 100%;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                align-items: center;
                justify-items: center;
              }
            }

            .content {
              flex-direction: column-reverse;
              .detail-information,
              .summary {
                width: 100%;
              }
            }

            .exit {
              top: 10px;
              right: 10px;
            }
          }
        }

        .choose-option-pop-up {
          .choose-option {
            width: 90%;
          }
        }

        .change-page {
          justify-content: center;
          gap: 15px;
          button {
            width: 130px;
            font-size: 10px;
          }

          div {
            font-size: 12px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 600px) {
    .shoptify-collection {
      .filter {
        display: none;
      }

      .collections {
        width: 100%;
        padding: 0px 10px 0px 10px;
        .all-product {
          grid-template-columns: repeat(2, 1fr);
          .product-item {
            a {
              height: 50%;
              img {
                width: 80%;
                height: 100%;
              }
            }
            .option {
              display: block;
            }

            .option {
              display: flex;
              flex-direction: column;
              gap: 10px;
              margin-top: 30px;
              button {
                height: 37px;
                padding: 0px 10px 0px 10px;
                cursor: pointer;
                font-size: 12px;
              }

              .quick-shop {
                background-color: white;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #0000002e;
              }

              .choose-option {
                background-color: #f8ba8c;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #f8ba8c;
              }
            }
          }
        }

        .quick-shop-pop-up {
          .pop-up {
            width: 90%;
            padding: 40px 20px;
            .product-image {
              flex-direction: column;
              .main-img {
                width: 100%;
              }

              .more-img {
                width: 100%;
                display: grid;
                grid-template-columns: repeat(6, 1fr);
                align-items: center;
                justify-items: center;
              }
            }

            .content {
              flex-direction: column-reverse;
              .detail-information,
              .summary {
                width: 100%;
              }
            }

            .exit {
              top: 10px;
              right: 10px;
            }
          }
        }

        .choose-option-pop-up {
          .choose-option {
            width: 90%;
          }
        }

        .change-page {
          justify-content: center;
          gap: 20px;
          button {
            width: 150px;
            font-size: 14px;
          }

          div {
            font-size: 14px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .shoptify-collection {
      .filter {
        display: none;
      }

      .collections {
        width: 100%;
        padding: 0px 10px 0px 10px;
        .all-product {
          grid-template-columns: repeat(3, 1fr);
          .product-item {
            a {
              height: 40%;
              img {
                width: 85%;
                height: 100%;
              }
            }
            .option {
              display: block;
            }

            .option {
              display: flex;
              flex-direction: column;
              gap: 10px;
              margin-top: 30px;
              button {
                height: 37px;
                padding: 0px 10px 0px 10px;
                cursor: pointer;
                font-size: 12px;
              }

              .quick-shop {
                background-color: white;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #0000002e;
              }

              .choose-option {
                background-color: #f8ba8c;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #f8ba8c;
              }
            }
          }
        }

        .quick-shop-pop-up {
          .pop-up {
            width: 90%;
            padding: 40px 20px;
            .product-image {
              flex-direction: column;
              .main-img {
                width: 100%;
              }

              .more-img {
                width: 100%;
                display: grid;
                grid-template-columns: repeat(6, 1fr);
                align-items: center;
                justify-items: center;
              }
            }

            .content {
              flex-direction: column-reverse;
              .detail-information,
              .summary {
                width: 100%;
              }
            }

            .exit {
              top: 10px;
              right: 10px;
            }
          }
        }

        .choose-option-pop-up {
          .choose-option {
            width: 90%;
          }
        }

        .change-page {
          justify-content: center;
          gap: 20px;
          button {
            width: 150px;
            font-size: 14px;
          }

          div {
            font-size: 14px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 850px) {
    .shoptify-collection {
      .filter {
        display: block;
      }

      .collections {
        width: 100%;
        padding: 0px 10px 0px 10px;
        .sort {
          display: block;
        }

        .sort-responsive {
          display: none;
        }

        .sort {
          width: 100%;
          background-color: #f6f6f6;
          border-radius: 5px;
          display: flex;
          justify-content: space-between;
          height: 52px;
          padding: 10px 15px 10px 15px;
          align-items: center;
          .sort-by {
            display: flex;
            gap: 20px;
            .title {
              font-size: 16px;
              font-weight: 600;
            }

            select {
              border: unset;
              background-color: #f6f6f6;
            }
          }

          .view {
            display: flex;
            gap: 10px;
            align-items: center;
            font-size: 16px;
            font-weight: 600;
            svg {
              font-size: 28px;
              color: #f8ba8c;
            }
          }
        }

        .all-product {
          grid-template-columns: repeat(3, 1fr);
          .product-item {
            .option {
              display: block;
            }

            .option {
              display: flex;
              flex-direction: column;
              gap: 10px;
              margin-top: 30px;
              button {
                height: 37px;
                padding: 0px 10px 0px 10px;
                cursor: pointer;
                font-size: 14px;
              }

              .quick-shop {
                background-color: white;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #0000002e;
              }

              .choose-option {
                background-color: #f8ba8c;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #f8ba8c;
              }
            }
          }
        }

        .quick-shop-pop-up {
          .pop-up {
            width: 60%;
            padding: 40px 20px;
            .product-image {
              flex-direction: column;
              .main-img {
                width: 100%;
              }

              .more-img {
                width: 100%;
                display: grid;
                grid-template-columns: repeat(6, 1fr);
                align-items: center;
                justify-items: center;
              }
            }

            .content {
              flex-direction: column-reverse;
              .detail-information,
              .summary {
                width: 100%;
              }
            }

            .exit {
              top: 10px;
              right: 10px;
            }
          }
        }

        .choose-option-pop-up {
          .choose-option {
            width: 50%;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .shoptify-collection {
      .filter {
        display: block;
      }

      .collections {
        width: 100%;
        padding: 0px 10px 0px 10px;

        .all-product {
          grid-template-columns: repeat(4, 1fr);
          .product-item {
            .option {
              display: block;
            }

            .option {
              display: flex;
              flex-direction: row;
              gap: 10px;
              margin-top: 30px;
              button {
                height: 37px;
                padding: 0px 10px 0px 10px;
                cursor: pointer;
                font-size: 12px;
              }

              .quick-shop {
                background-color: white;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #0000002e;
              }

              .choose-option {
                background-color: #f8ba8c;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #f8ba8c;
              }
            }
          }
        }

        .quick-shop-pop-up {
          .pop-up {
            width: 60%;
            padding: 40px 20px;
            .product-image {
              flex-direction: row;
              .main-img {
                width: 60%;
              }

              .more-img {
                width: 40%;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
              }
            }

            .content {
              flex-direction: row;
              gap: 20px;
              .detail-information {
                width: 60%;
              }

              .summary {
                width: 40%;
              }
            }

            .exit {
              top: 10px;
              right: 10px;
            }
          }
        }

        .choose-option-pop-up {
          .choose-option {
            width: 50%;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .shoptify-collection {
      .filter {
        display: block;
      }

      .collections {
        width: 100%;
        padding: 0px 10px 0px 10px;

        .all-product {
          grid-template-columns: repeat(5, 1fr);
          .product-item {
            .option {
              display: block;
            }

            .option {
              display: flex;
              flex-direction: row;
              gap: 10px;
              margin-top: 30px;
              button {
                height: 37px;
                padding: 0px 10px 0px 10px;
                cursor: pointer;
                font-size: 12px;
              }

              .quick-shop {
                background-color: white;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #0000002e;
              }

              .choose-option {
                background-color: #f8ba8c;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #f8ba8c;
              }
            }

            a {
              height: 50%;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }

        .quick-shop-pop-up {
          .pop-up {
            width: 60%;
            padding: 40px 20px;
            .product-image {
              flex-direction: row;
              .main-img {
                width: 60%;
              }

              .more-img {
                width: 40%;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
              }
            }

            .content {
              flex-direction: row;
              gap: 20px;
              .detail-information {
                width: 60%;
              }

              .summary {
                width: 40%;
              }
            }

            .exit {
              top: 10px;
              right: 10px;
            }
          }
        }

        .choose-option-pop-up {
          .choose-option {
            width: 50%;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1400px) {
    .shoptify-collection {
      .filter {
        display: block;
      }

      .collections {
        width: 100%;
        padding: 0px 10px 0px 10px;
        .all-product {
          grid-template-columns: repeat(5, 1fr);
          .product-item {
            padding: 15px;
            .option {
              display: block;
            }

            .option {
              display: block;
            }

            .option {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              animation-duration: 3s;
              margin-top: 30px;
              button {
                width: 50%;
                height: 37px;
                padding: 0px 10px 0px 10px;
                cursor: pointer;
                font-size: 10px;
              }

              .quick-shop {
                background-color: white;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #0000002e;
              }

              .choose-option {
                background-color: #f8ba8c;
                color: #00634b;
                font-weight: 600;
                border: 1px solid #f8ba8c;
              }
            }

            a {
              height: min-content;
              img {
                width: 100%;
              }
            }
          }
        }

        .quick-shop-pop-up {
          .pop-up {
            width: 60%;
            padding: 40px 20px;
            .product-image {
              flex-direction: row;
              justify-content: center;
              .main-img {
                width: 50%;
              }

              .more-img {
                width: 40%;
                display: flex;
                gap: 10px;
                align-content: flex-start;
                justify-content: flex-start;
              }
            }

            .content {
              flex-direction: row;
              gap: 20px;
              .detail-information {
                width: 60%;
              }

              .summary {
                width: 40%;
              }
            }

            .exit {
              top: 10px;
              right: 10px;
            }
          }
        }

        .choose-option-pop-up {
          .choose-option {
            width: 35%;
            height: fit-content;
          }
        }
      }
    }
  }
`;
