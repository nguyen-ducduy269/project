"use client";
import React, { useState } from "react";

///// import components
import Header from "@/app/_components/home-page/Header";
import Bar from "@/app/_components/home-page/Bar";
import SiteHeader from "@/app/_components/home-page/SiteHeader";
import Footer from "@/app/_components/home-page/Footer";
import dynamic from "next/dynamic";

const Custom_Order = dynamic(
  () => import("@/app/_components/order/Custom_Order"),
  { ssr: false }
);

const Order = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Header />
      <Bar />
      <SiteHeader selectedItem={selectedItem} />
      <Custom_Order />
      <Footer />
    </>
  );
};

export default Order;
