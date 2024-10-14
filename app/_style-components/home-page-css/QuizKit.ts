import styled from "styled-components";

export const QuizKit = styled.div`
  height: 700px;
  background-image: url(https://d33x1o3gj9io8i.cloudfront.net/images/1244/lg_Pzg8hUCPTxWW0AF5pZTu);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position: center;
  margin-bottom: 50px;
  h1 {
    font-weight: 400;
    width: 100%;
    margin: 0px auto 20px;
    line-height: 1.2;
    font-size: 67px;
    color: rgb(255, 255, 255);
    text-transform: none;
    letter-spacing: initial;
    text-align: center;
  }

  button {
    padding: 16px;
    border-radius: 15px;
    width: auto;
    min-width: 160px;
    font-size: 12px;
    font-weight: 500;
    margin: 10px 0px 0px;
    color: rgb(3, 105, 78);
    background-color: rgb(189, 214, 195);
    border: 2px solid rgb(255, 255, 255);
    line-height: 1.3;
    height: auto;
    min-height: auto;
    letter-spacing: initial;
  }
`;

export const PlantCare = styled.div`
  height: 502px;
  margin-top: 50px;
  background-image: url(https://houseplantshop.com/cdn/shop/files/Care_Guide_image3_1688x628_crop_center.jpg?v=1614308684);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 30px;
  h2 {
    font-size: 34px;
    font-weight: 700;
    color: white;
    margin-bottom: 10px;
  }

  div {
    font-size: 16px;
    color: white;
    font-weight: 600;
    margin-bottom: 40px;
  }

  button {
    color: #00634b;
    background-color: #f8ba8c;
    border: 1px solid #f8ba8c;
    width: 132px;
    height: 52px;
    font-size: 16px;
    font-weight: 500;
  }

  @media only screen and (min-width: 320px) {
    width: 95%;
    margin: 0 auto;
    height: 335px;
    padding-right: 15px;
    h2 {
      font-size: 22px;
      width: 50%;
    }

    div {
      font-size: 12px;
    }

    button {
      width: 96px;
      height: 37px;
      font-size: 12px;
    }
  }

  @media only screen and (min-width: 720px) {
    width: 95%;
    margin: 0 auto;
    height: 505px;
    padding-right: 15px;
    h2 {
      font-size: 30px;
      width: 35%;
    }

    div {
      font-size: 16px;
    }

    button {
      width: 105px;
      height: 42px;
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 992px) {
    width: 100%;
    height: 502px;
    margin-top: 50px;
    background-image: url(https://houseplantshop.com/cdn/shop/files/Care_Guide_image3_1688x628_crop_center.jpg?v=1614308684);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-right: 30px;
    h2 {
      font-size: 34px;
      font-weight: 700;
      color: white;
      margin-bottom: 10px;
    }

    div {
      font-size: 16px;
      color: white;
      font-weight: 600;
      margin-bottom: 40px;
    }

    button {
      color: #00634b;
      background-color: #f8ba8c;
      border: 1px solid #f8ba8c;
      width: 132px;
      height: 52px;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;
