import styled from "styled-components";

export const Review = styled.div`
  margin-top: 100px;
  .rate {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .views {
      display: flex;
      gap: 10px;
      align-items: center;
      .stars {
        display: flex;
        svg {
          width: 24px;
          height: 24px;
          color: #00634b;
        }
      }

      p {
        margin-right: 8px;
        font-size: 16px;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #00634b;
      }
    }

    .menu {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: unset;
      border-radius: 8px;
      svg {
        font-size: 28px;
      }
    }

    .drop-down {
      position: absolute;
      width: 300px;
      height: auto;
      padding: 20px;
      right: 3%;
      background-color: white;
      border: 1px solid black;
      border-radius: 10px;
      h3 {
        font-size: 22px;
        margin-bottom: 10px;
      }

      ul {
        li {
          margin-bottom: 10px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          cursor: pointer;
        }
      }
    }
  }

  .custom-reviews {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;
    .customs {
      background-color: white;
      box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.21);
      border-radius: 8px;
      height: 100%;
      cursor: pointer;
      img {
        width: 270px;
        height: 350px;
      }

      .details {
        padding: 10px 0px 10px 0px;
        position: relative;
        height: 250px;
        width: 100%;
        .title {
          font-size: 16px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 10px;
          padding-left: 10px;
        }

        .stars {
          margin-bottom: 10px;
          padding-left: 10px;
          svg {
            font-size: 14px;
            color: #00634b;
          }
        }

        .description {
          font-size: 14px;
          font-weight: 500;
          color: #00634b;
          margin-bottom: 20px;
          padding: 0px 10px 0px 10px;
          display: block;
          display: -webkit-box;
          max-width: 100%;
          margin: 0 auto;
          line-height: 1;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .repiled {
          font-size: 14px;
          color: #00634b;
          margin-top: 20px;
          padding: 0px 10px 0px 10px;
        }

        .more-description {
          font-size: 14px;
          font-weight: 500;
          color: #00634b;
          margin-bottom: 10px;
          padding: 0px 10px 0px 10px;
        }

        .more-infor {
          border-top: 0.5px solid #00634b66;
          padding: 15px 10px 10px 10px;
          display: flex;
          gap: 10px;
          position: absolute;
          width: 100%;
          bottom: 0;
          img {
            width: 40px;
            height: 50px;
          }

          div {
            font-size: 12px;
            color: #00634b;
            font-weight: 500;
          }
        }
      }
    }
  }

  .pop-up {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000000b0;
    display: flex;
    justify-content: center;
    align-items: center;
    .see-more {
      width: 50%;
      height: 584px;
      background-color: white;
      border-radius: 8px;
      position: relative;
      display: flex;
      img {
        width: 50%;
        height: 100%;
      }

      .main {
        width: 50%;
        height: 100%;
        padding: 25px 10px 0px 25px;
        position: relative;
        .head {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          position: relative;
          height: 24px;
          .title {
            font-size: 18px;
            color: #00634b;
            font-weight: 500;
          }

          .verified {
            display: flex;
            align-items: center;
            gap: 5px;
          }
        }

        .alert {
          position: absolute;
          width: 90%;
          height: fit-content;
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.21);
          p {
            font-size: 12px;
            color: #00634b;
          }

          a {
            color: #00634b;
            font-size: 12px;
          }
        }

        .stars {
          svg {
            color: #00634b;
          }
        }

        .review-content {
          width: 100%;
          height: 373px;
          overflow-y: scroll;
          .description {
            margin-top: 20px;
            font-size: 14px;
            color: #00634b;
            font-weight: 500;
          }

          .repiled {
            margin-top: 20px;
            .title {
              font-size: 12px;
              color: gray;
            }

            p {
              font-size: 14px;
              color: #00634b;
              font-weight: 500;
            }
          }
        }

        .more-infor {
          width: 100%;
          display: flex;
          position: absolute;
          bottom: 3%;
          padding-top: 10px;
          border-top: 0.5px solid #00634b;
          gap: 10px;
          img {
            width: 55px;
            height: 68px;
          }

          .owner {
            .name {
              font-size: 16px;
              line-height: 24px;
              font-weight: 400;
              color: #00634b;
              margin-bottom: 8px;
            }

            button {
              border: unset;
              border-radius: 5px;
              padding: 10px;
              font-size: 12px;
              color: black;
              font-weight: 400;
              display: flex;
              align-items: center;
              gap: 3px;
              cursor: pointer;
              a {
                text-decoration: unset;
                color: black;
              }
            }
          }
        }
      }

      .exit {
        width: 36px;
        height: 36px;
        position: absolute;
        top: 3%;
        left: 3%;
        background-color: #000000a6;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        color: white;
      }
    }
  }

  @media only screen and (min-width: 320px) {
    .rate {
      width: 100%;
      padding-left: 5px;
      padding-right: 5px;
      .views {
        .stars {
          svg {
            width: 16px;
            height: 16px;
          }
        }

        p {
          font-size: 12px;
        }
      }

      .menu {
        width: 36px;
        height: 36px;
        svg {
          font-size: 22px;
        }
      }

      .drop-down {
        width: 230px;
        h3 {
          font-size: 18px;
        }

        ul {
          li {
            font-size: 14px;
          }
        }
      }
    }

    .custom-reviews {
      width: 90%;
      margin: 0 auto;
      grid-template-columns: 1fr;
      gap: 10px;
      .customs {
        img {
          width: 100%;
          height: min-content;
        }

        .details {
          height: 250px;
          .title {
            font-size: 14px;
          }

          .stars {
            svg {
              font-size: 12px;
              color: #00634b;
            }
          }

          .description {
            font-size: 14px;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .repiled {
            font-size: 10px;
            color: #00634b;
            margin-top: 20px;
            padding: 0px 10px 0px 10px;
          }

          .more-description {
            font-size: 14px;
            font-weight: 500;
            color: #00634b;
            margin-bottom: 10px;
            padding: 0px 10px 0px 10px;
          }

          .more-infor {
            border-top: 0.5px solid #00634b66;
            padding: 10px 5px 5px 5px;
            display: flex;
            gap: 10px;
            position: absolute;
            width: 100%;
            bottom: 0;
            img {
              width: 70px;
              height: 60px;
            }

            div {
              width: 50%;
              font-size: 12px;
              color: #00634b;
              font-weight: 500;
            }
          }
        }
      }
    }

    .pop-up {
      background-color: unset;
      display: unset;
      .see-more {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        border-radius: unset;
        img {
          width: 100%;
        }

        .main {
          width: 100%;
          padding: 10px 0px 0px 0px;
          .head {
            padding: 0px 10px 0px 10px;
            margin-bottom: 10px;
            .title {
              font-size: 14px;
            }

            .verified {
              font-size: 14px;
            }
          }

          .stars {
            padding: 0px 10px 0px 10px;
            svg {
              color: #00634b;
            }
          }

          .review-content {
            padding: 0px 10px 0px 10px;
            width: 100%;
            height: 150px;
            overflow-y: scroll;
            .description {
              margin-top: 10px;
              font-size: 12px;
            }

            .repiled {
              margin-top: 15px;
              .title {
                font-size: 10px;
                color: gray;
              }

              p {
                font-size: 12px;
              }
            }
          }

          .more-infor {
            padding: 10px 10px 0px 10px;
            img {
              width: 80px;
              height: 70px;
            }

            .owner {
              .name {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 425px) {
    .rate {
      width: 100%;
      padding-left: 5px;
      padding-right: 5px;
      .views {
        .stars {
          svg {
            width: 16px;
            height: 16px;
          }
        }

        p {
          font-size: 12px;
        }
      }

      .menu {
        width: 36px;
        height: 36px;
        svg {
          font-size: 22px;
        }
      }

      .drop-down {
        width: 230px;
        h3 {
          font-size: 18px;
        }

        ul {
          li {
            font-size: 14px;
          }
        }
      }
    }

    .custom-reviews {
      width: 90%;
      margin: 0 auto;
      grid-template-columns: 1fr;
      gap: 10px;
      .customs {
        img {
          width: 100%;
          height: min-content;
        }

        .details {
          height: 250px;
          .title {
            font-size: 14px;
          }

          .stars {
            svg {
              font-size: 12px;
              color: #00634b;
            }
          }

          .description {
            font-size: 12px;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .repiled {
            font-size: 10px;
            color: #00634b;
            margin-top: 20px;
            padding: 0px 10px 0px 10px;
          }

          .more-description {
            font-size: 14px;
            font-weight: 500;
            color: #00634b;
            margin-bottom: 10px;
            padding: 0px 10px 0px 10px;
          }

          .more-infor {
            border-top: 0.5px solid #00634b66;
            padding: 10px 5px 5px 5px;
            display: flex;
            gap: 10px;
            position: absolute;
            width: 100%;
            bottom: 0;
            img {
              width: 50px;
              height: 50px;
            }

            div {
              width: 50%;
              font-size: 12px;
              color: #00634b;
              font-weight: 500;
            }
          }
        }
      }
    }

    .pop-up {
      background-color: unset;
      display: unset;
      .see-more {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        border-radius: unset;
        align-items: center;
        img {
          width: 70%;
        }

        .main {
          width: 100%;
          padding: 10px 0px 0px 0px;
          .head {
            padding: 0px 10px 0px 10px;
            margin-bottom: 10px;
            .title {
              font-size: 14px;
            }

            .verified {
              font-size: 14px;
            }
          }

          .stars {
            padding: 0px 10px 0px 10px;
            svg {
              color: #00634b;
            }
          }

          .review-content {
            padding: 0px 10px 0px 10px;
            width: 100%;
            height: 150px;
            overflow-y: scroll;
            .description {
              margin-top: 10px;
              font-size: 16px;
            }

            .repiled {
              margin-top: 15px;
              .title {
                font-size: 10px;
                color: gray;
              }

              p {
                font-size: 12px;
              }
            }
          }

          .more-infor {
            padding: 10px 10px 0px 10px;
            img {
              width: 80px;
              height: 70px;
            }

            .owner {
              .name {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 500px) {
    .rate {
      width: 100%;
      padding-left: 5px;
      padding-right: 5px;
      .views {
        .stars {
          svg {
            width: 22px;
            height: 22px;
          }
        }

        p {
          font-size: 16px;
        }
      }

      .menu {
        width: 38px;
        height: 38px;
        svg {
          font-size: 24px;
        }
      }

      .drop-down {
        width: 230px;
        h3 {
          font-size: 18px;
        }

        ul {
          li {
            font-size: 14px;
          }
        }
      }
    }

    .custom-reviews {
      width: 95%;
      margin: 0 auto;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      .customs {
        img {
          width: 100%;
          height: min-content;
        }

        .details {
          height: 250px;
          .title {
            font-size: 14px;
          }

          .stars {
            svg {
              font-size: 12px;
              color: #00634b;
            }
          }

          .description {
            font-size: 13px;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .repiled {
            font-size: 10px;
            color: #00634b;
            margin-top: 20px;
            padding: 0px 10px 0px 10px;
          }

          .more-description {
            font-size: 14px;
            font-weight: 500;
            color: #00634b;
            margin-bottom: 10px;
            padding: 0px 10px 0px 10px;
          }

          .more-infor {
            border-top: 0.5px solid #00634b66;
            padding: 10px 5px 5px 5px;
            display: flex;
            gap: 10px;
            position: absolute;
            width: 100%;
            bottom: 0;
            img {
              width: 70px;
              height: 60px;
            }

            div {
              width: 50%;
              font-size: 12px;
              color: #00634b;
              font-weight: 500;
            }
          }
        }
      }
    }

    .pop-up {
      background-color: #000000b0;
      display: flex;
      justify-content: center;
      align-items: center;
      .see-more {
        width: 70%;
        height: 90%;
        display: flex;
        flex-direction: column;
        border-radius: unset;
        img {
          width: 70%;
        }

        .main {
          width: 100%;
          padding: 10px 0px 0px 0px;
          .head {
            padding: 0px 10px 0px 10px;
            margin-bottom: 10px;
            .title {
              font-size: 14px;
            }

            .verified {
              font-size: 14px;
            }
          }

          .stars {
            padding: 0px 10px 0px 10px;
            svg {
              color: #00634b;
            }
          }

          .review-content {
            padding: 0px 10px 0px 10px;
            width: 100%;
            height: 130px;
            overflow-y: scroll;
            .description {
              margin-top: 10px;
              font-size: 14px;
            }

            .repiled {
              margin-top: 15px;
              .title {
                font-size: 10px;
                color: gray;
              }

              p {
                font-size: 12px;
              }
            }
          }

          .more-infor {
            padding: 10px 10px 0px 10px;
            img {
              width: 70px;
              height: 60px;
              margin: unset;
            }

            .owner {
              .name {
                font-size: 20px;
              }

              button {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .rate {
      width: 100%;
      padding-left: 5px;
      padding-right: 5px;
      .views {
        .stars {
          svg {
            width: 24px;
            height: 24px;
          }
        }

        p {
          font-size: 20px;
        }
      }

      .menu {
        width: 40px;
        height: 40px;
        svg {
          font-size: 26px;
        }
      }

      .drop-down {
        width: 300px;
        h3 {
          font-size: 20px;
        }

        ul {
          li {
            font-size: 16px;
          }
        }
      }
    }

    .custom-reviews {
      width: 100%;
      margin: 0 auto;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
      .customs {
        img {
          width: 100%;
          height: min-content;
        }

        .details {
          height: 250px;
          .title {
            font-size: 14px;
          }

          .stars {
            svg {
              font-size: 12px;
              color: #00634b;
            }
          }

          .description {
            font-size: 12px;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .repiled {
            font-size: 10px;
            color: #00634b;
            margin-top: 20px;
            padding: 0px 10px 0px 10px;
          }

          .more-description {
            font-size: 14px;
            font-weight: 500;
            color: #00634b;
            margin-bottom: 10px;
            padding: 0px 10px 0px 10px;
          }

          .more-infor {
            border-top: 0.5px solid #00634b66;
            padding: 10px 5px 5px 5px;
            display: flex;
            gap: 10px;
            position: absolute;
            width: 100%;
            bottom: 0;
            img {
              width: 50px;
              height: 50px;
            }

            div {
              width: 50%;
              font-size: 12px;
              color: #00634b;
              font-weight: 500;
            }
          }
        }
      }
    }

    .pop-up {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #000000b0;
      display: flex;
      justify-content: center;
      align-items: center;
      .see-more {
        width: 80%;
        height: 80%;
        display: flex;
        flex-direction: row;
        border-radius: 8px;
        img {
          width: 100%;
          height: min-content;
          margin: 0 auto;
        }

        .main {
          width: 100%;
          padding: 25px 0px 0px 0px;
          .head {
            padding: 0px 25px 0px 25px;
            margin-bottom: 10px;
            .title {
              font-size: 18px;
            }

            .verified {
              font-size: 16px;
            }
          }

          .alert {
            left: 50%;
            transform: translateX(-50%);
          }

          .stars {
            padding: 0px 25px 0px 25px;
            svg {
              color: #00634b;
            }
          }

          .review-content {
            padding: 0px 25px 0px 25px;
            width: 100%;
            height: 373px;
            overflow-y: scroll;
            .description {
              margin-top: 10px;
              font-size: 16px;
            }

            .repiled {
              margin-top: 20px;
              .title {
                font-size: 12px;
                color: gray;
              }

              p {
                font-size: 14px;
              }
            }
          }

          .more-infor {
            padding: 25px 25px 0px 25px;
            img {
              width: 70px;
              height: 60px;
              margin: unset;
            }

            .owner {
              .name {
                font-size: 16px;
              }

              button {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .custom-reviews {
      width: 100%;
      margin: 0 auto;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 20px;
    }

    .pop-up {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #000000b0;
      display: flex;
      justify-content: center;
      align-items: center;
      .see-more {
        width: 70%;
        height: 70%;
        display: flex;
        flex-direction: row;
        border-radius: 8px;
        img {
          width: 80%;
          height: min-content;
          margin: 0 auto;
        }

        .main {
          width: 100%;
          padding: 25px 0px 0px 0px;
          .head {
            padding: 0px 25px 0px 25px;
            margin-bottom: 10px;
            .title {
              font-size: 18px;
            }

            .verified {
              font-size: 16px;
            }
          }

          .alert {
            left: 50%;
            transform: translateX(-50%);
          }

          .stars {
            padding: 0px 25px 0px 25px;
            svg {
              color: #00634b;
            }
          }

          .review-content {
            padding: 0px 25px 0px 25px;
            width: 100%;
            height: 373px;
            overflow-y: scroll;
            .description {
              margin-top: 10px;
              font-size: 16px;
            }

            .repiled {
              margin-top: 20px;
              .title {
                font-size: 12px;
                color: gray;
              }

              p {
                font-size: 14px;
              }
            }
          }

          .more-infor {
            padding: 25px 25px 0px 25px;
            img {
              width: 70px;
              height: 60px;
              margin: unset;
            }

            .owner {
              .name {
                font-size: 16px;
              }

              button {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .custom-reviews {
      width: 100%;
      margin: 0 auto;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      gap: 20px;
    }

    .pop-up {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #000000b0;
      display: flex;
      justify-content: center;
      align-items: center;
      .see-more {
        width: 60%;
        height: 80%;
        display: flex;
        flex-direction: row;
        border-radius: 8px;
        img {
          width: 100%;
          height: min-content;
          margin: 0 auto;
          object-fit: cover;
        }

        .main {
          width: 100%;
          padding: 25px 0px 0px 0px;
          .head {
            padding: 0px 25px 0px 25px;
            margin-bottom: 10px;
            .title {
              font-size: 18px;
            }

            .verified {
              font-size: 16px;
            }
          }

          .alert {
            left: 50%;
            transform: translateX(-50%);
          }

          .stars {
            padding: 0px 25px 0px 25px;
            svg {
              color: #00634b;
            }
          }

          .review-content {
            padding: 0px 25px 0px 25px;
            width: 100%;
            height: 373px;
            overflow-y: scroll;
            .description {
              margin-top: 10px;
              font-size: 16px;
            }

            .repiled {
              margin-top: 20px;
              .title {
                font-size: 12px;
                color: gray;
              }

              p {
                font-size: 14px;
              }
            }
          }

          .more-infor {
            padding: 25px 25px 0px 25px;
            img {
              width: 70px;
              height: 60px;
              margin: unset;
            }

            .owner {
              .name {
                font-size: 16px;
              }

              button {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1400px) {
    .custom-reviews {
      width: 100%;
      margin: 0 auto;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      gap: 20px;
    }
  }
`;
