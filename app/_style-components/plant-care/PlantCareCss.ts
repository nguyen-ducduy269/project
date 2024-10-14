import styled from "styled-components";

export const PlantCareCss = styled.div`
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    h1 {
      font-size: 48px;
      font-weight: 700;
      color: #00634b;
    }

    p {
      margin-top: 10px;
      color: #00634b;
      font-weight: 600;
    }

    a {
      margin-top: 30px;
      button {
        padding: 12px 20px;
        background-color: #00634b;
        color: white;
        font-size: 14px;
        border-radius: 20px;
        border: unset;
        font-weight: 600;
        margin-bottom: 70px;
        cursor: pointer;
      }
    }
  }

  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    width: 70%;
    margin: 0 auto;
    a {
      text-decoration: none;
      margin-bottom: 30px;
      .content-item {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 277px;
          height: 277px;
          border-radius: 20px;
        }

        .item {
          font-size: 28px;
          font-weight: 600;
          color: #00634b;
          margin-top: 10px;
          text-align: center;
        }
      }
    }
  }

  @media only screen and (min-width: 320px) {
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
      h1 {
        font-size: 28px;
      }

      p {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        font-size: 14px;
      }
    }

    .content {
      grid-template-columns: repeat(1, 1fr);
      a {
        .content-item {
          img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 778px) {
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
      h1 {
        font-size: 36px;
      }

      p {
        width: 90%;
        margin: 0 auto;
        text-align: center;
        font-size: 18px;
      }
    }

    .content {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      a {
        .content-item {
          img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
      h1 {
        font-size: 48px;
      }

      p {
        width: 100%;
        margin: 0 auto;
        text-align: center;
        font-size: 18px;
      }
    }

    .content {
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      a {
        .content-item {
          img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
          }
        }
      }
    }
  }
`;
