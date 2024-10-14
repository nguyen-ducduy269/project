"use client";
import React from "react";
import { useState } from "react";

//// import components
import Bar from "@/app/_components/home-page/Bar";
import Footer from "@/app/_components/home-page/Footer";
import Header from "@/app/_components/home-page/Header";
import SiteHeader from "@/app/_components/home-page/SiteHeader";
import MainContent from "@/app/_components/card/MainContent";

const Cart = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Header />
      <Bar />
      <SiteHeader selectedItem={selectedItem} />
      <MainContent setSelectedItem={setSelectedItem} />
      <Footer />
    </>
  );
};

export default Cart;
