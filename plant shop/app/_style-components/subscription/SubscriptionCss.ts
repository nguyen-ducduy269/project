import styled from "styled-components";

export const SubscriptionCss = styled.div`
  .header-image {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0px;
    img {
      width: 550px;
      height: fit-content;
    }
  }

  .boxs {
    background-color: #00634b;
    .box {
      padding: 40px 0px;
      display: flex;
      align-items: center;
      height: fit-content;
      gap: 20px;
      .box-image {
        width: 50%;
        display: flex;
        justify-content: center;
        img {
          width: 570px;
        }
      }

      .description {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        h2 {
          width: 75%;
          margin: 0 auto;
          font-size: 36px;
          color: white;
          text-align: center;
        }

        a {
          padding: 20px;
          background-color: #fbbd8e;
          color: white;
          text-decoration: none;
          font-size: 32px;
          font-weight: 600;
        }
      }
    }
  }

  .form {
    padding: 50px 0px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    .choose-from {
      display: flex;
      align-items: center;
      gap: 20px;
      .choose-image {
        width: 50%;
        display: flex;
        justify-content: center;
        img {
          width: 570px;
        }
      }

      .choose-content {
        width: 50%;
        h1,
        p {
          width: 60%;
          margin-bottom: 20px;
        }
      }
    }

    .healthy-plants {
      display: flex;
      align-items: center;
      .healthy-image {
        width: 50%;
        display: flex;
        justify-content: center;
        img {
          width: 570px;
        }
      }

      .healthy-content {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        h1,
        p {
          width: 60%;
          margin-bottom: 20px;
        }
      }
    }
  }

  .delivered {
    padding: 50px 10px;
    background-color: #00634b;
    .deliver {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      h1 {
        text-align: center;
        width: 50%;
        color: white;
      }

      p {
        text-align: center;
        color: white;
        width: 50%;
      }

      a {
        padding: 15px;
        background-color: #fbbd8e;
        color: white;
        text-decoration: none;
        font-size: 32px;
        font-weight: 600;
        text-align: center;
      }
    }
  }

  .testimonials {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 50px;
    h1 {
      text-align: center;
      font-size: 42px;
    }
    .test {
      padding: 30px 50px;
      display: flex;
      background-color: #f8f8f8;
      gap: 20px;
      .title {
        width: 30%;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
      }

      .content {
        width: 70%;
      }
    }
  }

  @media only screen and (min-width: 320px) {
    .boxs {
      .box {
        flex-direction: column;
        .box-image {
          width: 90%;
          margin: 0 auto;
          img {
            width: 100%;
          }
        }

        .description {
          width: 90%;
          margin: 0 auto;
          h2 {
            width: 100%;
            font-size: 28px;
          }

          a {
            font-size: 18px;
          }
        }
      }
    }

    .form {
      .choose-from {
        width: 90%;
        margin: 0 auto;
        flex-direction: column;
        .choose-image {
          width: 100%;
        }

        .choose-content {
          width: 100%;
          h1,
          p {
            width: 100%;
            margin-bottom: 20px;
          }
        }
      }

      .healthy-plants {
        display: flex;
        align-items: center;
        flex-direction: column-reverse;
        width: 90%;
        margin: 0 auto;
        .healthy-image {
          width: 100%;
        }

        .healthy-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          h1,
          p {
            width: 100%;
            margin-bottom: 20px;
          }
        }
      }
    }

    .delivered {
      .deliver {
        width: 100%;
        h1,
        p {
          width: 100%;
        }

        a {
          font-size: 18px;
        }
      }
    }

    .testimonials {
      padding: 30px 0px;
      .test {
        flex-direction: column;
        padding: 10px 30px;
        .title {
          width: 100%;
        }

        .content {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .boxs {
      .box {
        flex-direction: row;
        .box-image {
          width: 50%;
          margin: 0 auto;
          img {
            width: 100%;
          }
        }

        .description {
          width: 50%;
          margin: 0 auto;
          h2 {
            width: 75%;
            font-size: 28px;
          }

          a {
            font-size: 18px;
          }
        }
      }
    }

    .form {
      .choose-from {
        width: 90%;
        margin: 0 auto;
        flex-direction: row;
        .choose-image {
          width: 100%;
        }

        .choose-content {
          width: 100%;
          h1,
          p {
            width: 100%;
            margin-bottom: 20px;
          }
        }
      }

      .healthy-plants {
        display: flex;
        align-items: center;
        flex-direction: row;
        width: 90%;
        margin: 0 auto;
        .healthy-image {
          width: 100%;
        }

        .healthy-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          h1,
          p {
            width: 100%;
            margin-bottom: 20px;
          }
        }
      }
    }

    .delivered {
      .deliver {
        width: 100%;
        h1,
        p {
          width: 70%;
        }

        a {
          font-size: 18px;
        }
      }
    }

    .testimonials {
      padding: 50px;
      .test {
        flex-direction: row;
        padding: 30px 50px;
        .title {
          width: 30%;
        }

        .content {
          width: 70%;
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .form {
      .choose-from {
        width: 90%;
        margin: 0 auto;
        flex-direction: row;
        .choose-image {
          width: 100%;
        }

        .choose-content {
          width: 100%;
          h1,
          p {
            width: 60%;
            margin-bottom: 20px;
          }
        }
      }

      .healthy-plants {
        display: flex;
        align-items: center;
        flex-direction: row;
        width: 100%;
        margin: 0 auto;
        .healthy-image {
          width: 50%;
        }

        .healthy-content {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          h1,
          p {
            width: 60%;
            margin-bottom: 20px;
          }
        }
      }
    }

    .delivered {
      .deliver {
        width: 100%;
        h1,
        p {
          width: 50%;
        }

        a {
          font-size: 32px;
        }
      }
    }

    .testimonials {
      padding: 50px;
      .test {
        flex-direction: row;
        padding: 30px 50px;
        .title {
          width: 30%;
        }

        .content {
          width: 70%;
        }
      }
    }
  }
`;
