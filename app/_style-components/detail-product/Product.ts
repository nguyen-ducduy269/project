import styled from "styled-components";

export const Product = styled.div`
  margin: 50px 0px 50px 0px;
  .head {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    font-weight: 500;
    color: #949494;
    margin-bottom: 30px;
    a {
      text-decoration: unset;
      color: #f8ba8c;
    }
  }

  .main-content {
    display: flex;
    justify-content: center;
    gap: 30px;
    .main-img {
      width: 472px;
      height: fit-content;
      .more-img {
        margin-top: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 10px;
        img {
          width: fit-content;
          height: 116px;
        }

        .active {
          border: 1px solid black;
          padding: 5px;
        }
      }
    }

    .content {
      display: flex;
      gap: 30px;
      .detail-information {
        width: 500px;
        .stars {
          margin-bottom: 15px;
          svg {
            font-size: 26px;
            color: #00634b;
          }
        }

        .price {
          font-size: 20px;
          font-weight: 500;
          color: #00634b;
        }

        ul {
          margin-top: 30px;
          padding: 0px 15px 0px;
          li {
            margin-top: 20px;
            font-size: 14px;
            font-weight: 500;
            line-height: 25px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 5px;
            svg {
              font-size: 7px;
            }
          }
        }
      }

      .summary {
        width: 300px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        h4 {
          font-size: 14px;
        }

        .select-size {
          button {
            width: 60px;
            height: 33px;
            border: 0.5px solid #8080805e;
            border-radius: 5px;
          }

          .active {
            color: #f8ba8c;
            background-color: #f8ba8c0f;
            border-color: #f8ba8c0f;
          }
        }

        div {
          p {
            font-size: 12px;
            font-weight: 600;
          }
        }

        .pot_style {
          h4 {
            margin-bottom: 10px;
          }

          button {
            padding: 10px 10px 10px;
            margin-right: 10px;
            margin-bottom: 10px;
            background-color: white;
            border: 0.5px solid #0000002b;
            border-radius: 5px;
            text-decoration: line-through;
            color: gray;
            font-weight: 500;
          }

          .active {
            padding: 10px 10px 10px;
            margin-right: 10px;
            margin-bottom: 10px;
            background-color: white;
            border: 0.5px solid #0000002b;
            border-radius: 5px;
            text-decoration: unset;
            color: #f8ba8c;
            font-weight: 500;
          }
        }

        .form {
          display: flex;
          gap: 5px;
          align-items: center;
          input {
            width: 120px;
            height: 50px;
            padding-left: 10px;
          }

          .minus {
            width: 50px;
            height: 50px;
            background-color: rgb(209, 213, 219);
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 20px;
            cursor: pointer;
          }

          .plus {
            width: 50px;
            height: 50px;
            background-color: #5d6b82;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 20px;
            cursor: pointer;
          }
        }

        a {
          width: 100%;
          text-align: center;
          text-decoration: unset;
          color: #f8ba8c;
        }

        .internet-contact {
          display: flex;
          gap: 5px;
        }
      }
    }
  }

  @media only screen and (min-width: 320px) {
    margin: 50px 10px 50px 10px;

    .main-content {
      flex-direction: column;
      .main-img {
        width: 100%;
        img {
          width: 100%;
          height: fit-content;
        }

        .more-img {
          grid-template-columns: repeat(4, 1fr);
          img {
            width: 67px;
            height: 67px;
          }
        }
      }

      .content {
        display: flex;
        flex-direction: column;
        .detail-information {
          width: 100%;
        }

        .summary {
          width: 100%;
          .form {
            label {
              width: 30%;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 375px) {
    margin: 50px 10px 50px 10px;

    .main-content {
      flex-direction: column;
      .main-img {
        width: 100%;
        img {
          width: 100%;
          height: fit-content;
        }

        .more-img {
          grid-template-columns: repeat(5, 1fr);
          img {
            width: 67px;
            height: 67px;
          }
        }
      }

      .content {
        .detail-information {
          width: 100%;
        }

        .summary {
          width: 100%;
          .form {
            label {
              width: 25%;
            }

            input {
              width: 50%;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 425px) {
    margin: 50px 10px 50px 10px;

    .main-content {
      flex-direction: column;
      .main-img {
        width: 100%;
        img {
          width: 100%;
          height: fit-content;
        }

        .more-img {
          grid-template-columns: repeat(8, 1fr);
        }
      }

      .content {
        .detail-information {
          width: 100%;
        }

        .summary {
          width: 100%;
          .form {
            label {
              width: 25%;
            }

            input {
              width: 55%;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 600px) {
    .main-content {
      .content {
        flex-direction: row;
        .summary {
          .pot_style {
            button {
              padding: 7px 7px 7px;
              margin-right: 5px;
            }

            .active {
              padding: 7px 7px 7px;
              margin-right: 5px;
            }
          }

          .form {
            label {
              width: 30%;
            }

            input {
              width: 40%;
              height: 40px;
            }

            .plus,
            .minus {
              width: 40px;
              height: 40px;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .main-content {
      .content {
        flex-direction: row;
        .summary {
          .pot_style {
            button {
              padding: 7px 7px 7px;
              margin-right: 5px;
            }

            .active {
              padding: 7px 7px 7px;
              margin-right: 5px;
            }
          }

          .form {
            label {
              width: 20%;
            }

            input {
              width: 50%;
              height: 50px;
            }

            .plus,
            .minus {
              width: 50px;
              height: 50px;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .main-content {
      display: flex;
      flex-direction: row;
      gap: 30px;
      .main-img {
        width: 472px;
        height: fit-content;
        .more-img {
          margin-top: 10px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 10px;
          img {
            width: 100%;
            height: 90px;
          }
        }
      }

      .content {
        .detail-information {
          width: 500px;
          .stars {
            margin-bottom: 15px;
            svg {
              font-size: 26px;
              color: #00634b;
            }
          }

          .price {
            font-size: 20px;
            font-weight: 500;
            color: #00634b;
          }

          ul {
            margin-top: 30px;
            li {
              margin-top: 20px;
              font-size: 14px;
              font-weight: 500;
              line-height: 25px;
            }
          }
        }

        .summary {
          width: 300px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          h4 {
            font-size: 14px;
          }

          .select-size {
            button {
              width: 60px;
              height: 33px;
              border: 0.5px solid #8080805e;
              border-radius: 5px;
            }

            .active {
              color: #f8ba8c;
              background-color: #f8ba8c0f;
              border-color: #f8ba8c0f;
            }
          }

          div {
            p {
              font-size: 12px;
              font-weight: 600;
            }
          }

          .form {
            display: flex;
            gap: 5px;
            align-items: center;
            label {
              width: 30%;
              font-size: 14px;
            }

            input {
              width: 30%;
              height: 40px;
            }

            .plus,
            .minus {
              width: 40px;
              height: 40px;
            }
          }

          a {
            width: 100%;
            text-align: center;
            text-decoration: unset;
            color: #f8ba8c;
          }

          .internet-contact {
            display: flex;
            gap: 5px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .main-content {
      display: flex;
      flex-direction: row;
      gap: 30px;
      justify-content: center;
      .main-img {
        width: 472px;
        height: fit-content;
        .more-img {
          margin-top: 10px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 10px;
          img {
            width: 100%;
            height: 90px;
          }
        }
      }

      .content {
        .detail-information {
          width: 500px;
          .stars {
            margin-bottom: 15px;
            svg {
              font-size: 26px;
              color: #00634b;
            }
          }

          .price {
            font-size: 20px;
            font-weight: 500;
            color: #00634b;
          }

          ul {
            margin-top: 30px;
            padding: 0px 15px 0px;
            li {
              margin-top: 20px;
              font-size: 14px;
              font-weight: 500;
              line-height: 25px;
            }
          }
        }

        .summary {
          width: 300px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          h4 {
            font-size: 14px;
          }

          .select-size {
            display: flex;
            gap: 5px;
            button {
              width: 60px;
              height: 33px;
              border: 0.5px solid #8080805e;
              border-radius: 5px;
            }

            .active {
              color: #f8ba8c;
              background-color: #f8ba8c0f;
              border-color: #f8ba8c0f;
            }
          }

          div {
            p {
              font-size: 12px;
              font-weight: 600;
            }
          }

          .form {
            display: flex;
            gap: 10px;
            align-items: center;
            label {
              width: 25%;
              font-size: 15px;
            }

            input {
              width: 27%;
              height: 40px;
            }

            .plus,
            .minus {
              width: 40px;
              height: 40px;
            }
          }

          a {
            width: 100%;
            text-align: center;
            text-decoration: unset;
            color: #f8ba8c;
          }

          .internet-contact {
            display: flex;
            gap: 5px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1440px) {
    .main-content {
      display: flex;
      flex-direction: row;
      gap: 30px;
      justify-content: center;
      .main-img {
        width: 472px;
        height: fit-content;
        .more-img {
          margin-top: 10px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 10px;
          img {
            width: 100%;
            height: 90px;
          }
        }
      }

      .content {
        .detail-information {
          width: 500px;
          .stars {
            margin-bottom: 15px;
            svg {
              font-size: 26px;
              color: #00634b;
            }
          }

          .price {
            font-size: 20px;
            font-weight: 500;
            color: #00634b;
          }

          ul {
            margin-top: 30px;
            padding: 0px 15px 0px;
            li {
              margin-top: 20px;
              font-size: 14px;
              font-weight: 500;
              line-height: 25px;
            }
          }
        }

        .summary {
          width: 300px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          h4 {
            font-size: 14px;
          }

          .select-size {
            display: flex;
            gap: 5px;
            button {
              width: 60px;
              height: 33px;
              border: 0.5px solid #8080805e;
              border-radius: 5px;
            }

            .active {
              color: #f8ba8c;
              background-color: #f8ba8c0f;
              border-color: #f8ba8c0f;
            }
          }

          div {
            p {
              font-size: 12px;
              font-weight: 600;
            }
          }

          .form {
            display: flex;
            gap: 10px;
            align-items: center;
            label {
              width: 30%;
              font-size: 18px;
            }

            input {
              width: 33%;
              height: 40px;
            }

            .plus,
            .minus {
              width: 40px;
              height: 40px;
            }
          }

          a {
            width: 100%;
            text-align: center;
            text-decoration: unset;
            color: #f8ba8c;
          }

          .internet-contact {
            display: flex;
            gap: 5px;
          }
        }
      }
    }
  }
`;
