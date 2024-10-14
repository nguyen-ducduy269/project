"use client";
import Bar from "@/app/_components/home-page/Bar";
import Footer from "@/app/_components/home-page/Footer";
import Header from "@/app/_components/home-page/Header";
import SiteHeader from "@/app/_components/home-page/SiteHeader";
import DetailProduct from "@/app/_components/product/DetailProduct";
import React from "react";
import { useState } from "react";

//// import components

const Product = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Header />
      <Bar />
      <SiteHeader selectedItem={selectedItem} />
      <DetailProduct setSelectedItem={setSelectedItem} />
      <Footer />
    </>
  );
};

export default Product;
