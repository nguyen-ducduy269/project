"use client";
import CheckHead from "@/app/_components/checkout/CheckHead";
import CheckOutPage from "@/app/_components/checkout/CheckOut";
import { CheckOutCss } from "@/app/_style-components/checkout/CheckOutCss";
import React from "react";

const CheckOut = () => {
  return (
    <>
      <CheckOutCss>
        <CheckHead />
        <CheckOutPage />
      </CheckOutCss>
    </>
  );
};

export default CheckOut;
