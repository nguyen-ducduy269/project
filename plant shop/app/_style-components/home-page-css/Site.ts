import styled from "styled-components";

export const Site = styled.div`
  height: 127px;
  background-color: #00644b;
  .site-header-main {
    width: 100%;
    display: flex;
    padding-top: 15px;
    a {
      width: 20%;
    }

    .site-input {
      width: 70%;
      position: relative;
      input {
        width: 100%;
        height: 46px;
        padding-left: 20px;
        font-size: 16px;
        color: #777777b8;
      }

      button {
        position: absolute;
        top: 0;
        right: 0;
        width: 54px;
        height: 46px;
        color: #00634b;
        background-color: #f8ba8c;
        font-size: 20px;
        font-weight: 600;
      }
    }

    .shopping {
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      .shopping-cart {
        width: 30%;
        position: relative;
        svg {
          font-size: 28px;
          color: white;
        }

        .number-cart {
          position: absolute;
          top: 0px;
          right: 0;
          width: 16px;
          height: 16px;
          color: #00634b;
          background-color: #f8ba8c;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
        }
      }
    }
  }

  .site-main {
    position: relative;
    margin-top: 20px;
    height: 42px;
    .site-page {
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      a {
        text-decoration: unset;
        color: white;
        font-size: 14px;
        font-weight: 600;
      }
    }

    .log-in {
      position: absolute;
      bottom: 30%;
      right: 0;
      font-size: 16px;
      font-weight: 600;
      color: gray;
      text-decoration: unset;
    }
  }

  .response-site {
    display: none;
  }

  .menu {
    display: none;
  }

  @media only screen and (min-width: 320px) {
    .site-header-main {
      display: none;
    }

    .site-main {
      display: none;
    }

    .response-site {
      margin-top: 10px;
      display: block;
      .header-response {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 5px;
        padding-right: 5px;
        svg {
          width: 10%;
          font-size: 32px;
          color: white;
          cursor: pointer;
        }

        .shopping {
          width: 15%;
          height: 49px;
          .shopping-cart {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
              width: 100%;
              font-size: 26px;
              color: white;
              font-weight: 600;
            }

            .number-cart {
              position: absolute;
              top: 0;
              right: 0;
              color: #00634b;
              background-color: #f8ba8c;
              border-radius: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 12px;
              padding: 5px;
            }
          }
        }
      }

      .response-search {
        width: 95%;
        height: 46px;
        margin: 0 auto;
        position: relative;
        margin-top: 10px;
        input {
          width: 100%;
          height: 100%;
        }

        button {
          height: 100%;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          color: #00634b;
          background-color: #f8ba8c;
          svg {
            font-size: 24px;
          }
        }
      }
    }

    .menu {
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      height: 100%;
      background-color: white;
      padding: 20px;
      .head {
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
        a {
          text-decoration: unset;
          color: black;
        }

        svg {
          font-size: 22px;
        }
      }

      .site-page {
        display: flex;
        flex-direction: column;
        gap: 30px;
        a {
          width: 100%;
          text-decoration: unset;
          color: black;
          font-weight: 600;
        }
      }
    }
  }

  @media only screen and (min-width: 425px) {
    .response-site {
      margin-top: 10px;
      display: block;
      .header-response {
        .shopping {
          .shopping-cart {
            .number-cart {
              position: absolute;
              top: 0;
              right: 10px;
              color: #00634b;
              background-color: #f8ba8c;
              border-radius: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 12px;
              padding: 5px;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 550px) {
    .response-site {
      margin-top: 10px;
      display: block;
      .header-response {
        .shopping {
          .shopping-cart {
            .number-cart {
              position: absolute;
              top: 0;
              right: 20px;
              color: #00634b;
              background-color: #f8ba8c;
              border-radius: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 12px;
              padding: 5px;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .site-header-main {
      width: 100%;
      display: flex;
      padding-top: 15px;
      a {
        width: 30%;
      }

      .site-input {
        width: 55%;
        position: relative;
        input {
          width: 100%;
          height: 46px;
          padding-left: 20px;
          font-size: 16px;
          color: #777777b8;
        }

        button {
          position: absolute;
          top: 0;
          right: 0;
          width: 54px;
          height: 46px;
          color: #00634b;
          background-color: #f8ba8c;
          font-size: 20px;
          font-weight: 600;
        }
      }

      .shopping {
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .shopping-cart {
          width: 30%;
          position: relative;
          svg {
            font-size: 28px;
            color: white;
          }

          .number-cart {
            position: absolute;
            top: 0px;
            right: 0;
            width: 16px;
            height: 16px;
            color: #00634b;
            background-color: #f8ba8c;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
          }
        }
      }
    }

    .site-main {
      display: block;
      position: relative;
      margin-top: 20px;
      height: 42px;
      .site-page {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        a {
          text-decoration: unset;
          color: white;
          font-size: 10px;
          font-weight: 600;
        }
      }

      .log-in {
        position: absolute;
        bottom: 20%;
        right: 0;
        font-size: 12px;
        font-weight: 600;
        color: gray;
        text-decoration: unset;
      }
    }

    .response-site {
      display: none;
    }
  }

  @media only screen and (min-width: 1024px) {
    .site-header-main {
      width: 100%;
      display: flex;
      padding-top: 15px;
      a {
        width: 20%;
      }

      .site-input {
        width: 70%;
        position: relative;
        input {
          width: 100%;
          height: 46px;
          padding-left: 20px;
          font-size: 16px;
          color: #777777b8;
        }

        button {
          position: absolute;
          top: 0;
          right: 0;
          width: 54px;
          height: 46px;
          color: #00634b;
          background-color: #f8ba8c;
          font-size: 20px;
          font-weight: 600;
        }
      }

      .shopping {
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .shopping-cart {
          width: 30%;
          position: relative;
          svg {
            font-size: 28px;
            color: white;
          }

          .number-cart {
            position: absolute;
            top: 0px;
            right: 0;
            width: 16px;
            height: 16px;
            color: #00634b;
            background-color: #f8ba8c;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
          }
        }
      }
    }

    .site-main {
      display: block;
      position: relative;
      margin-top: 20px;
      height: 42px;
      .site-page {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        a {
          text-decoration: unset;
          color: white;
          font-size: 12px;
          font-weight: 600;
        }
      }

      .log-in {
        position: absolute;
        bottom: 20%;
        right: 0;
        font-size: 12px;
        font-weight: 600;
        color: gray;
        text-decoration: unset;
      }
    }

    .response-site {
      display: none;
    }
  }

  @media only screen and (min-width: 1200px) {
    .site-header-main {
      width: 100%;
      display: flex;
      padding-top: 15px;
      a {
        width: 20%;
      }

      .site-input {
        width: 70%;
        position: relative;
        input {
          width: 100%;
          height: 46px;
          padding-left: 20px;
          font-size: 16px;
          color: #777777b8;
        }

        button {
          position: absolute;
          top: 0;
          right: 0;
          width: 54px;
          height: 46px;
          color: #00634b;
          background-color: #f8ba8c;
          font-size: 20px;
          font-weight: 600;
        }
      }

      .shopping {
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .shopping-cart {
          width: 30%;
          position: relative;
          svg {
            font-size: 28px;
            color: white;
          }

          .number-cart {
            position: absolute;
            top: 0px;
            right: 0;
            width: 16px;
            height: 16px;
            color: #00634b;
            background-color: #f8ba8c;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
          }
        }
      }
    }

    .site-main {
      position: relative;
      margin-top: 20px;
      height: 42px;
      .site-page {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        a {
          text-decoration: unset;
          color: white;
          font-size: 14px;
          font-weight: 600;
        }
      }

      .log-in {
        position: absolute;
        bottom: 30%;
        right: 0;
        font-size: 16px;
        font-weight: 600;
        color: gray;
        text-decoration: unset;
      }
    }

    .response-site {
      display: none;
    }
  }
`;
