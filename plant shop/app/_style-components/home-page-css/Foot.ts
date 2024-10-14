import styled from "styled-components";

export const Foot = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: rgb(0, 100, 75);
  .site-footer-block {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 30px;
    .site-item {
      display: flex;
      flex-direction: column;
      gap: 20px;
      h2 {
        font-size: 18px;
        color: white;
      }

      .information,
      .address,
      div,
      p {
        color: white;
        font-size: 14px;
        font-weight: 500;
      }

      .submit {
        display: flex;
        flex-direction: column;
        input {
          height: 50px;
          padding-left: 20px;
          font-size: 14px;
          color: gray;
          border-radius: 8px;
          width: 80%;
          margin-bottom: 20px;
        }

        button {
          width: 92px;
          height: 50px;
          font-size: 16px;
          font-weight: 500;
          color: #00634b;
          background-color: #f8ba8c;
          border: 1px solid #f8ba8c;
          border-radius: 5px;
        }
      }

      .icons {
        display: flex;
        gap: 5px;
        align-items: center;
        svg {
          width: 32px;
          height: 32px;
          padding: 5px;
          font-size: 24px;
          border-radius: 100%;
          color: white;
          background-color: #faf7f726;
        }
      }

      div {
        a {
          color: white;
        }
      }
    }
  }

  .site-footer-item {
    display: flex;
    gap: 20px;
    .site-left {
      width: 55%;
      .navigation {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 5px;
        margin-bottom: 10px;
        .nav-item {
          a {
            font-size: 12px;
            color: white;
            text-decoration: unset;
            font-weight: 600;
          }
        }
      }

      .credit {
        font-size: 14px;
        color: #faf7f7cc;
        margin-bottom: 10px;
      }

      .shopify {
        font-size: 14px;
        color: #faf7f7cc;
        cursor: pointer;
      }
      .shopify:hover {
        color: white;
        font-weight: 400;
      }
    }

    .site-right {
      width: 45%;
      display: flex;
      gap: 20px;
      justify-content: center;
      img {
        width: 50px;
        height: 27px;
      }
    }
  }

  @media only screen and (min-width: 320px) {
    .site-footer-block {
      display: flex;
      flex-direction: column;
      width: 90%;
      margin: 0 auto;
      .site-item {
        padding-bottom: 30px;
        border-bottom: 0.5px solid white;
        .submit {
          display: flex;
          gap: 5px;
        }
      }
    }

    .site-footer-item {
      display: flex;
      flex-direction: column-reverse;
      padding-top: 30px;
      width: 90%;
      margin: 0 auto;
      .site-left {
        width: 100%;
        .navigation {
          grid-template-columns: 1fr 1fr;
        }

        .credit,
        .shopify {
          width: 100%;
          text-align: center;
          margin-top: 15px;
        }
      }

      .site-right {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-content: center;
        img {
          width: 100%;
          height: 36px;
        }
      }
    }
  }

  @media only screen and (min-width: 500px) {
    .site-footer-item {
      .site-right {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .site-footer-item {
      .site-right {
        display: flex;
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .site-footer-block {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 40px;
      margin-bottom: 30px;
      .site-item {
        display: flex;
        flex-direction: column;
        gap: 20px;
        border: unset;
        padding-bottom: unset;
        h2 {
          font-size: 18px;
          color: white;
        }

        .information,
        .address,
        div,
        p {
          color: white;
          font-size: 14px;
          font-weight: 500;
        }

        .submit {
          display: flex;
          flex-direction: column;
          input {
            height: 50px;
            padding-left: 20px;
            font-size: 14px;
            color: gray;
            border-radius: 8px;
            width: 80%;
            margin-bottom: 20px;
          }

          button {
            width: 92px;
            height: 50px;
            font-size: 16px;
            font-weight: 500;
            color: #00634b;
            background-color: #f8ba8c;
            border: 1px solid #f8ba8c;
            border-radius: 5px;
          }
        }

        .icons {
          display: flex;
          gap: 5px;
          align-items: center;
          svg {
            width: 32px;
            height: 32px;
            padding: 5px;
            font-size: 24px;
            border-radius: 100%;
            color: white;
            background-color: #faf7f726;
          }
        }

        div {
          a {
            color: white;
          }
        }
      }
    }

    .site-footer-item {
      display: flex;
      flex-direction: row;
      gap: 20px;
      .site-left {
        width: 60%;
        .navigation {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5px;
          margin-bottom: 10px;
          .nav-item {
            a {
              font-size: 12px;
              color: white;
              text-decoration: unset;
              font-weight: 600;
            }
          }
        }

        .credit {
          font-size: 14px;
          color: #faf7f7cc;
          text-align: left;
          margin-bottom: 10px;
        }

        .shopify {
          font-size: 14px;
          color: #faf7f7cc;
          text-align: left;
          cursor: pointer;
        }
        .shopify:hover {
          color: white;
          font-weight: 400;
        }
      }

      .site-right {
        width: 40%;
        height: fit-content;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-content: center;
        img {
          width: 50px;
          height: 27px;
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .site-footer-block {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 40px;
      margin-bottom: 30px;
      .site-item {
        display: flex;
        flex-direction: column;
        gap: 20px;
        border: unset;
        padding-bottom: unset;
        h2 {
          font-size: 18px;
          color: white;
        }

        .information,
        .address,
        div,
        p {
          color: white;
          font-size: 14px;
          font-weight: 500;
        }

        .submit {
          display: flex;
          flex-direction: column;
          input {
            height: 50px;
            padding-left: 20px;
            font-size: 14px;
            color: gray;
            border-radius: 8px;
            width: 80%;
            margin-bottom: 20px;
          }

          button {
            width: 92px;
            height: 50px;
            font-size: 16px;
            font-weight: 500;
            color: #00634b;
            background-color: #f8ba8c;
            border: 1px solid #f8ba8c;
            border-radius: 5px;
          }
        }

        .icons {
          display: flex;
          gap: 5px;
          align-items: center;
          svg {
            width: 32px;
            height: 32px;
            padding: 5px;
            font-size: 24px;
            border-radius: 100%;
            color: white;
            background-color: #faf7f726;
          }
        }

        div {
          a {
            color: white;
          }
        }
      }
    }

    .site-footer-item {
      display: flex;
      flex-direction: row;
      gap: 20px;
      .site-left {
        width: 60%;
        .navigation {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 5px;
          margin-bottom: 10px;
          .nav-item {
            a {
              font-size: 12px;
              color: white;
              text-decoration: unset;
              font-weight: 600;
            }
          }
        }

        .credit {
          font-size: 14px;
          color: #faf7f7cc;
          text-align: left;
          margin-bottom: 10px;
        }

        .shopify {
          font-size: 14px;
          color: #faf7f7cc;
          text-align: left;
          cursor: pointer;
        }
        .shopify:hover {
          color: white;
          font-weight: 400;
        }
      }

      .site-right {
        width: 40%;
        height: fit-content;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        justify-content: center;
        img {
          width: 50px;
          height: 27px;
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .site-footer-block {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 40px;
      margin-bottom: 30px;
      .site-item {
        display: flex;
        flex-direction: column;
        gap: 20px;
        border: unset;
        padding-bottom: unset;
        h2 {
          font-size: 18px;
          color: white;
        }

        .information,
        .address,
        div,
        p {
          color: white;
          font-size: 14px;
          font-weight: 500;
        }

        .submit {
          display: flex;
          flex-direction: column;
          input {
            height: 50px;
            padding-left: 20px;
            font-size: 14px;
            color: gray;
            border-radius: 8px;
            width: 80%;
            margin-bottom: 20px;
          }

          button {
            width: 92px;
            height: 50px;
            font-size: 16px;
            font-weight: 500;
            color: #00634b;
            background-color: #f8ba8c;
            border: 1px solid #f8ba8c;
            border-radius: 5px;
          }
        }

        .icons {
          display: flex;
          gap: 5px;
          align-items: center;
          svg {
            width: 32px;
            height: 32px;
            padding: 5px;
            font-size: 24px;
            border-radius: 100%;
            color: white;
            background-color: #faf7f726;
          }
        }

        div {
          a {
            color: white;
          }
        }
      }
    }

    .site-footer-item {
      display: flex;
      flex-direction: row;
      gap: 20px;
      .site-left {
        width: 60%;
        .navigation {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 5px;
          margin-bottom: 10px;
          .nav-item {
            a {
              font-size: 12px;
              color: white;
              text-decoration: unset;
              font-weight: 600;
            }
          }
        }

        .credit {
          font-size: 14px;
          color: #faf7f7cc;
          text-align: left;
          margin-bottom: 10px;
        }

        .shopify {
          font-size: 14px;
          color: #faf7f7cc;
          text-align: left;
          cursor: pointer;
        }
        .shopify:hover {
          color: white;
          font-weight: 400;
        }
      }

      .site-right {
        width: 40%;
        height: fit-content;
        display: flex;
        justify-content: center;
        img {
          width: 50px;
          height: 27px;
        }
      }
    }
  }
`;
