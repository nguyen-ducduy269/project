"use client";
import React, { useState } from "react";

///// import components
import Header from "@/app/_components/home-page/Header";
import Bar from "@/app/_components/home-page/Bar";
import SiteHeader from "@/app/_components/home-page/SiteHeader";
import Footer from "@/app/_components/home-page/Footer";
import BusinessPage from "@/app/_components/business/Business";

const Business = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Header />
      <Bar />
      <SiteHeader selectedItem={selectedItem} />
      <BusinessPage />
      <Footer />
    </>
  );
};

export default Business;
