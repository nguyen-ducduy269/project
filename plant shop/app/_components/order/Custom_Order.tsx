import { Container } from "@/app/_style-components/home-page-css/Container";
import { OrderStyle } from "@/app/_style-components/order/OrderStyle";
import React, { useEffect, useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";

const Custom_Order = () => {
  const [changeIndex, setChangeIndex] = useState(0);
  const customData = JSON.parse(localStorage.getItem("detail-order") || "");

  const generateRandomString = (length: number): string => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  };

  useEffect(() => {
    console.log("changeIndex", changeIndex);
  }, [100]);

  console.log("customData", customData.items);

  return (
    <OrderStyle>
      <Container>
        <div className="custom-order">
          <div className="delivery-address">
            <div className="address">
              <p className="title">Delivery address</p>
              <p className="code">Order code: {generateRandomString(10)}</p>
            </div>

            <div className="detail-address">
              <div className="custom">
                <div className="name">
                  {customData?.lastName + " " + customData?.firstName}
                </div>

                <div className="phone-number">{customData?.phoneNumber}</div>

                <div className="email">{customData?.email}</div>

                <div className="custom-address">
                  {customData?.apartment +
                    "," +
                    " " +
                    customData?.addressText +
                    "," +
                    " " +
                    customData?.ward +
                    "," +
                    " " +
                    customData?.place}
                </div>
              </div>

              <div className="route">
                {customData?.route?.map((item: any, index: number) => {
                  return (
                    <div
                      className="each-time"
                      key={index}
                      onChange={() => setChangeIndex(index)}
                    >
                      <div className="tick">
                        {item.state == true ? (
                          <IoIosCheckmarkCircle />
                        ) : (
                          <CiCircleMore />
                        )}
                      </div>
                      <div className="date">{item.timeOrder}</div>
                      <div className="state">
                        {item.p_state ? <p>{item.p_state}</p> : ""}
                        {item.aother_state}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="delivery-order">
            <div className="items">
              {(customData ?? [])?.items?.map((item: any) => {
                return (
                  <div className="item" key={item?.id}>
                    <img src={item?.image} alt="" />

                    <div className="infor">
                      <div className="name">{item?.name}</div>
                      <div className="price">Price: {item?.price}</div>
                      {item?.size ? (
                        <div className="size">Size: {item?.size}</div>
                      ) : (
                        ""
                      )}
                      {item?.ca ? <div className="ca">Ca: {item?.ca}</div> : ""}
                      {item?.fl ? <div className="fl">Fl: {item?.fl}</div> : ""}
                    </div>

                    <div className="quantity">Quantity: {item?.quantity}</div>

                    <div className="final-price">
                      Final Price: $
                      {Math.round(Number(item?.price * item?.quantity) * 100) /
                        100}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </OrderStyle>
  );
};

export default Custom_Order;
