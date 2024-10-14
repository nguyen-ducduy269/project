import styled from "styled-components";

export const Promomosaic = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  .promo {
    display: flex;
    gap: 20px;
    .left-promo {
      width: 70%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      a {
        text-decoration: unset;
        .house-plant,
        .promotion-item {
          width: 100%;
          height: 430px;
        }

        .house-plant {
          background-image: url(https://houseplantshop.com/cdn/shop/files/September_banner_1d_2cbab15c-27cc-454c-8df1-0ae09fa53d2b_1109x616.jpg?v=1644361302);
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          padding-right: 30px;
          padding-bottom: 50px;
          h1 {
            color: white;
            margin-bottom: 20px;
          }
          button {
            width: 200px;
            height: 50px;
            color: #1e8570;
            background-color: #fff;
            border: 1px solid #dddddd;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
          }
        }

        .promotion-item {
          background-image: url(https://houseplantshop.com/cdn/shop/files/gcArtboard_1_copy_2_1109x617.png?v=1644359265);
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          padding-right: 30px;
          padding-bottom: 50px;
          h1 {
            color: white;
            margin-bottom: 20px;
          }
          button {
            width: 200px;
            height: 50px;
            color: #1e8570;
            background-color: #fff;
            border: 1px solid #dddddd;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
          }
        }
      }
    }

    .right-promo {
      width: 30%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      a {
        text-decoration: unset;
        .new-arrivals,
        .seed-packets,
        .shipping {
          width: 100%;
          height: 280px;
        }

        .new-arrivals {
          background-image: url(https://houseplantshop.com/cdn/shop/files/HPS_0089_5b4f1675-54f3-4e95-9602-8b435f1ca461_554x554.jpg?v=1649306484);
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          padding-right: 20px;
          padding-bottom: 25px;
          h1 {
            color: white;
            margin-bottom: 12px;
          }
          button {
            width: 183px;
            height: 44px;
            color: #1e8570;
            background-color: #fff;
            border: 1px solid #dddddd;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
          }
        }

        .seed-packets {
          background-image: url(https://houseplantshop.com/cdn/shop/files/Seed_banner_cb7cecbb-b4bf-46b1-8290-de153cafb561_630x350.png?v=1629913113);
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          padding-right: 20px;
          padding-bottom: 25px;
          h1 {
            color: white;
            margin-bottom: 12px;
          }
          button {
            width: 183px;
            height: 44px;
            color: #1e8570;
            background-color: #fff;
            border: 1px solid #dddddd;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
          }
        }

        .shipping {
          background-image: url(https://houseplantshop.com/cdn/shop/files/Shipping_9993_554x554.jpg?v=1644360253);
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          padding-right: 20px;
          padding-bottom: 25px;
          h1 {
            color: white;
            margin-bottom: 12px;
          }
          button {
            width: 183px;
            height: 44px;
            color: #1e8570;
            background-color: #fff;
            border: 1px solid #dddddd;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
          }
        }
      }
    }
  }
  .promo-responsive {
    display: none;
  }

  @media only screen and (min-width: 320px) {
    .promo {
      display: none;
    }

    .promo-responsive {
      display: block;
      width: 95%;
      margin: 0 auto;
    }

    .promo-responsive {
      display: flex;
      flex-direction: column;
      gap: 10px;
      a {
        text-decoration: unset;
      }

      .house-plant,
      .promotion-item,
      .new-arrivals,
      .seed-packets,
      .shipping {
        height: 270px;
      }

      .house-plant {
        background-image: url(https://houseplantshop.com/cdn/shop/files/September_banner_1d_2cbab15c-27cc-454c-8df1-0ae09fa53d2b_1109x616.jpg?v=1644361302);
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        padding-right: 10px;
        padding-bottom: 20px;
        h1 {
          font-size: 20px;
          color: white;
          margin-bottom: 10px;
        }

        button {
          width: 170px;
          height: 36px;
          background-color: white;
          color: #1e8570;
          border: unset;
        }
      }

      .promotion-item {
        background-image: url(https://houseplantshop.com/cdn/shop/files/gcArtboard_1_copy_2_1109x617.png?v=1644359265);
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        padding-right: 10px;
        padding-bottom: 20px;
        h1 {
          font-size: 20px;
          color: white;
          margin-bottom: 10px;
        }

        button {
          width: 170px;
          height: 36px;
          background-color: white;
          color: #1e8570;
          border: unset;
        }
      }

      .new-arrivals {
        background-image: url(https://houseplantshop.com/cdn/shop/files/HPS_0089_5b4f1675-54f3-4e95-9602-8b435f1ca461_554x554.jpg?v=1649306484);
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        padding-right: 10px;
        padding-bottom: 20px;
        h1 {
          font-size: 20px;
          color: white;
          margin-bottom: 10px;
        }

        button {
          width: 170px;
          height: 36px;
          background-color: white;
          color: #1e8570;
          border: unset;
        }
      }

      .seed-packets {
        background-image: url(https://houseplantshop.com/cdn/shop/files/Seed_banner_cb7cecbb-b4bf-46b1-8290-de153cafb561_630x350.png?v=1629913113);
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        padding-right: 10px;
        padding-bottom: 20px;
        h1 {
          font-size: 20px;
          color: white;
          margin-bottom: 10px;
        }

        button {
          width: 170px;
          height: 36px;
          background-color: white;
          color: #1e8570;
          border: unset;
        }
      }

      .shipping {
        background-image: url(https://houseplantshop.com/cdn/shop/files/Shipping_9993_554x554.jpg?v=1644360253);
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        padding-right: 10px;
        padding-bottom: 20px;
        h1 {
          font-size: 20px;
          color: white;
          margin-bottom: 10px;
        }

        button {
          width: 170px;
          height: 36px;
          background-color: white;
          color: #1e8570;
          border: unset;
        }
      }
    }
  }

  @media only screen and (min-width: 425px) {
    .promo {
      display: none;
    }

    .promo-responsive {
      display: block;
      width: 95%;
      margin: 0 auto;
    }

    .promo-responsive {
      display: flex;
      flex-direction: column;
      gap: 10px;
      a {
        text-decoration: unset;
      }

      .house-plant,
      .promotion-item,
      .new-arrivals,
      .seed-packets,
      .shipping {
        height: 300px;
      }

      .house-plant {
        background-image: url(https://houseplantshop.com/cdn/shop/files/September_banner_1d_2cbab15c-27cc-454c-8df1-0ae09fa53d2b_1109x616.jpg?v=1644361302);
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        padding-right: 10px;
        padding-bottom: 20px;
        h1 {
          font-size: 24px;
          color: white;
          margin-bottom: 10px;
        }

        button {
          width: 170px;
          height: 36px;
          background-color: white;
          color: #1e8570;
          border: unset;
        }
      }

      .promotion-item {
        background-image: url(https://houseplantshop.com/cdn/shop/files/gcArtboard_1_copy_2_1109x617.png?v=1644359265);
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        padding-right: 10px;
        padding-bottom: 20px;
        h1 {
          font-size: 24px;
          color: white;
          margin-bottom: 10px;
        }

        button {
          width: 170px;
          height: 36px;
          background-color: white;
          color: #1e8570;
          border: unset;
        }
      }

      .new-arrivals {
        background-image: url(https://houseplantshop.com/cdn/shop/files/HPS_0089_5b4f1675-54f3-4e95-9602-8b435f1ca461_554x554.jpg?v=1649306484);
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        padding-right: 10px;
        padding-bottom: 20px;
        h1 {
          font-size: 24px;
          color: white;
          margin-bottom: 10px;
        }

        button {
          width: 170px;
          height: 36px;
          background-color: white;
          color: #1e8570;
          border: unset;
        }
      }

      .seed-packets {
        background-image: url(https://houseplantshop.com/cdn/shop/files/Seed_banner_cb7cecbb-b4bf-46b1-8290-de153cafb561_630x350.png?v=1629913113);
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        padding-right: 10px;
        padding-bottom: 20px;
        h1 {
          font-size: 24px;
          color: white;
          margin-bottom: 10px;
        }

        button {
          width: 170px;
          height: 36px;
          background-color: white;
          color: #1e8570;
          border: unset;
        }
      }

      .shipping {
        background-image: url(https://houseplantshop.com/cdn/shop/files/Shipping_9993_554x554.jpg?v=1644360253);
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        padding-right: 10px;
        padding-bottom: 20px;
        h1 {
          font-size: 24px;
          color: white;
          margin-bottom: 10px;
        }

        button {
          width: 170px;
          height: 36px;
          background-color: white;
          color: #1e8570;
          border: unset;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .promo {
      display: flex;
      gap: 20px;
      .left-promo {
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        a {
          text-decoration: unset;
          .house-plant,
          .promotion-item {
            width: 100%;
            height: 430px;
          }

          .house-plant {
            background-image: url(https://houseplantshop.com/cdn/shop/files/September_banner_1d_2cbab15c-27cc-454c-8df1-0ae09fa53d2b_1109x616.jpg?v=1644361302);
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            padding-right: 30px;
            padding-bottom: 50px;
            h1 {
              color: white;
              margin-bottom: 20px;
              font-size: 20px;
            }
            button {
              width: 170px;
              height: 40px;
              color: #1e8570;
              background-color: #fff;
              border: 1px solid #dddddd;
              font-size: 14px;
              font-weight: 600;
              cursor: pointer;
            }
          }

          .promotion-item {
            background-image: url(https://houseplantshop.com/cdn/shop/files/gcArtboard_1_copy_2_1109x617.png?v=1644359265);
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            padding-right: 30px;
            padding-bottom: 50px;
            h1 {
              color: white;
              margin-bottom: 20px;
              font-size: 20px;
            }
            button {
              width: 170px;
              height: 40px;
              color: #1e8570;
              background-color: #fff;
              border: 1px solid #dddddd;
              font-size: 14px;
              font-weight: 600;
              cursor: pointer;
            }
          }
        }
      }

      .right-promo {
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        a {
          text-decoration: unset;
          .new-arrivals,
          .seed-packets,
          .shipping {
            width: 100%;
            height: 280px;
          }

          .new-arrivals {
            background-image: url(https://houseplantshop.com/cdn/shop/files/HPS_0089_5b4f1675-54f3-4e95-9602-8b435f1ca461_554x554.jpg?v=1649306484);
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            padding-right: 20px;
            padding-bottom: 25px;
            h1 {
              color: white;
              margin-bottom: 12px;
              font-size: 20px;
            }
            button {
              width: 170px;
              height: 40px;
              color: #1e8570;
              background-color: #fff;
              border: 1px solid #dddddd;
              font-size: 14px;
              font-weight: 600;
              cursor: pointer;
            }
          }

          .seed-packets {
            background-image: url(https://houseplantshop.com/cdn/shop/files/Seed_banner_cb7cecbb-b4bf-46b1-8290-de153cafb561_630x350.png?v=1629913113);
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            padding-right: 20px;
            padding-bottom: 25px;
            h1 {
              color: white;
              margin-bottom: 12px;
              font-size: 20px;
            }
            button {
              width: 170px;
              height: 40px;
              color: #1e8570;
              background-color: #fff;
              border: 1px solid #dddddd;
              font-size: 14px;
              font-weight: 600;
              cursor: pointer;
            }
          }

          .shipping {
            background-image: url(https://houseplantshop.com/cdn/shop/files/Shipping_9993_554x554.jpg?v=1644360253);
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            padding-right: 20px;
            padding-bottom: 25px;
            h1 {
              color: white;
              margin-bottom: 12px;
              font-size: 20px;
            }
            button {
              width: 170px;
              height: 40px;
              color: #1e8570;
              background-color: #fff;
              border: 1px solid #dddddd;
              font-size: 14px;
              font-weight: 600;
              cursor: pointer;
            }
          }
        }
      }
    }
    .promo-responsive {
      display: none;
    }
  }

  @media only screen and (min-width: 992px) {
    .promo {
      display: flex;
      gap: 20px;
      .left-promo {
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        a {
          text-decoration: unset;
          .house-plant,
          .promotion-item {
            width: 100%;
            height: 430px;
          }

          .house-plant {
            background-image: url(https://houseplantshop.com/cdn/shop/files/September_banner_1d_2cbab15c-27cc-454c-8df1-0ae09fa53d2b_1109x616.jpg?v=1644361302);
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            padding-right: 30px;
            padding-bottom: 50px;
            h1 {
              color: white;
              margin-bottom: 20px;
              font-size: 22px;
            }
            button {
              width: 183px;
              height: 50px;
              color: #1e8570;
              background-color: #fff;
              border: 1px solid #dddddd;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
            }
          }

          .promotion-item {
            background-image: url(https://houseplantshop.com/cdn/shop/files/gcArtboard_1_copy_2_1109x617.png?v=1644359265);
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            padding-right: 30px;
            padding-bottom: 50px;
            h1 {
              color: white;
              margin-bottom: 20px;
              font-size: 22px;
            }
            button {
              width: 183px;
              height: 50px;
              color: #1e8570;
              background-color: #fff;
              border: 1px solid #dddddd;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
            }
          }
        }
      }

      .right-promo {
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        a {
          text-decoration: unset;
          .new-arrivals,
          .seed-packets,
          .shipping {
            width: 100%;
            height: 280px;
          }

          .new-arrivals {
            background-image: url(https://houseplantshop.com/cdn/shop/files/HPS_0089_5b4f1675-54f3-4e95-9602-8b435f1ca461_554x554.jpg?v=1649306484);
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            padding-right: 20px;
            padding-bottom: 25px;
            h1 {
              color: white;
              margin-bottom: 20px;
              font-size: 22px;
            }
            button {
              width: 183px;
              height: 50px;
              color: #1e8570;
              background-color: #fff;
              border: 1px solid #dddddd;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
            }
          }

          .seed-packets {
            background-image: url(https://houseplantshop.com/cdn/shop/files/Seed_banner_cb7cecbb-b4bf-46b1-8290-de153cafb561_630x350.png?v=1629913113);
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            padding-right: 20px;
            padding-bottom: 25px;
            h1 {
              color: white;
              margin-bottom: 20px;
              font-size: 22px;
            }
            button {
              width: 183px;
              height: 50px;
              color: #1e8570;
              background-color: #fff;
              border: 1px solid #dddddd;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
            }
          }

          .shipping {
            background-image: url(https://houseplantshop.com/cdn/shop/files/Shipping_9993_554x554.jpg?v=1644360253);
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            padding-right: 20px;
            padding-bottom: 25px;
            h1 {
              color: white;
              margin-bottom: 20px;
              font-size: 22px;
            }
            button {
              width: 183px;
              height: 50px;
              color: #1e8570;
              background-color: #fff;
              border: 1px solid #dddddd;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
            }
          }
        }
      }
    }
    .promo-responsive {
      display: none;
    }
  }

  @media only screen and (min-width: 1200px) {
    .promo {
      display: flex;
      gap: 20px;
      .left-promo {
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        a {
          text-decoration: unset;
          .house-plant,
          .promotion-item {
            width: 100%;
            height: 430px;
          }

          .house-plant {
            background-image: url(https://houseplantshop.com/cdn/shop/files/September_banner_1d_2cbab15c-27cc-454c-8df1-0ae09fa53d2b_1109x616.jpg?v=1644361302);
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            padding-right: 30px;
            padding-bottom: 50px;
            h1 {
              color: white;
              margin-bottom: 20px;
            }
            button {
              width: 200px;
              height: 50px;
              color: #1e8570;
              background-color: #fff;
              border: 1px solid #dddddd;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
            }
          }

          .promotion-item {
            background-image: url(https://houseplantshop.com/cdn/shop/files/gcArtboard_1_copy_2_1109x617.png?v=1644359265);
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            padding-right: 30px;
            padding-bottom: 50px;
            h1 {
              color: white;
              margin-bottom: 20px;
            }
            button {
              width: 200px;
              height: 50px;
              color: #1e8570;
              background-color: #fff;
              border: 1px solid #dddddd;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
            }
          }
        }
      }

      .right-promo {
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        a {
          text-decoration: unset;
          .new-arrivals,
          .seed-packets,
          .shipping {
            width: 100%;
            height: 280px;
          }

          .new-arrivals {
            background-image: url(https://houseplantshop.com/cdn/shop/files/HPS_0089_5b4f1675-54f3-4e95-9602-8b435f1ca461_554x554.jpg?v=1649306484);
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            padding-right: 20px;
            padding-bottom: 25px;
            h1 {
              color: white;
              margin-bottom: 12px;
            }
            button {
              width: 183px;
              height: 44px;
              color: #1e8570;
              background-color: #fff;
              border: 1px solid #dddddd;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
            }
          }

          .seed-packets {
            background-image: url(https://houseplantshop.com/cdn/shop/files/Seed_banner_cb7cecbb-b4bf-46b1-8290-de153cafb561_630x350.png?v=1629913113);
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            padding-right: 20px;
            padding-bottom: 25px;
            h1 {
              color: white;
              margin-bottom: 12px;
            }
            button {
              width: 183px;
              height: 44px;
              color: #1e8570;
              background-color: #fff;
              border: 1px solid #dddddd;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
            }
          }

          .shipping {
            background-image: url(https://houseplantshop.com/cdn/shop/files/Shipping_9993_554x554.jpg?v=1644360253);
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            padding-right: 20px;
            padding-bottom: 25px;
            h1 {
              color: white;
              margin-bottom: 12px;
            }
            button {
              width: 183px;
              height: 44px;
              color: #1e8570;
              background-color: #fff;
              border: 1px solid #dddddd;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
            }
          }
        }
      }
    }
    .promo-responsive {
      display: none;
    }
  }
`;
