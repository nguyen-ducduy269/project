import { Container } from "@/app/_style-components/home-page-css/Container";
import React, { useEffect, useState } from "react";
import { AllOrderStyle } from "@/app/_style-components/all-order/All_Order_Css";
import Link from "next/link";

const All_Order = () => {
  const [orderData, setOrderData] = useState([]);

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const users = await response.json();
    setOrderData(users);
  };

  useEffect(() => {
    fetchData("http://localhost:4001/order");
  }, []);

  console.log(orderData);

  const changePage = (params: any) => {
    localStorage.setItem("detail-order", JSON.stringify(params));
  };

  return (
    <AllOrderStyle>
      <Container>
        <div className="title">Your orders</div>

        <div className="orders">
          <table>
            <tr>
              <th>STT</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Day Order</th>
              <th></th>
            </tr>
            {orderData
              .slice()
              .reverse()
              ?.map((item: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item?.firstName}</td>
                    <td>{item?.lastName}</td>
                    <td>{item?.phoneNumber}</td>
                    <td>{item?.timeOrder}</td>
                    <td>
                      <Link href={"/order"} onClick={() => changePage(item)}>
                        See detail!
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </Container>
    </AllOrderStyle>
  );
};

export default All_Order;
