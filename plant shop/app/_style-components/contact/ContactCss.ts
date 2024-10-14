import styled from "styled-components";

export const ContactCss = styled.div`
  .contact {
    width: 50%;
    margin: 0 auto;
    padding: 50px 0px;
    .send-dirt {
      h1 {
        text-align: center;
      }

      .send-content {
        display: flex;
        gap: 30px;
        flex-direction: column;
        margin-top: 50px;
        p {
          font-size: 14px;
          font-weight: 500;
          a {
            text-decoration: none;
            color: #f8ba8c;
          }
        }
      }
    }

    .form-question {
      width: 70%;
      margin: 0 auto;
      margin-top: 60px;
      .cross {
        text-align: center;
      }

      .text {
        margin-top: 50px;
        font-size: 32px;
        text-align: center;
      }

      .form {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        form {
          label {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 5px;
            div {
              color: red;
              font-size: 18px;
            }
          }

          input {
            width: 100%;
            height: 32px;
            padding-left: 10px;
            border: 0.5px solid #00000042;
            border-radius: 5px;
          }

          select {
            width: 100%;
            height: 32px;
            border-radius: 5px;
          }

          textarea {
            width: 100%;
            height: 100px;
            padding-left: 20px;
            padding-top: 10px;
          }
        }

        .delivery-question {
          .title {
            font-size: 12px;
            font-weight: 600;
          }

          ul {
            li {
              display: flex;
              font-size: 12px;
              gap: 20px;
              margin-top: 20px;
            }
          }
        }

        button {
          padding: 10px 20px;
          background-color: rgb(86, 86, 86);
          color: white;
          font-size: 14px;
          font-weight: 600;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .submit:hover {
          background-color: #f8ba8c;
        }
      }
    }
  }

  @media only screen and (min-width: 320px) {
    .contact {
      width: 90%;
      .form-question {
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .contact {
      width: 50%;
      .form-question {
        width: 70%;
      }
    }
  }
`;
