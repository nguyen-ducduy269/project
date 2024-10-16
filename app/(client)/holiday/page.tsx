"use client";
import React, { useState } from "react";

///// import components
import Header from "@/app/_components/home-page/Header";
import Bar from "@/app/_components/home-page/Bar";
import SiteHeader from "@/app/_components/home-page/SiteHeader";
import Footer from "@/app/_components/home-page/Footer";
import dynamic from "next/dynamic";

const Collections = dynamic(
  () => import("@/app/_components/collections/Collections"),
  { ssr: false }
);

const Holiday = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [changePage, setChangePage] = useState(1);
  const item = "holiday_plant";
  const title = "Holiday Plants";

  return (
    <>
      <Header />
      <Bar />
      <SiteHeader selectedItem={selectedItem} />
      <Collections
        item={item}
        title={title}
        setSelectedItem={setSelectedItem}
        setChangePage={setChangePage}
        changePage={changePage}
      />
      <Footer />
    </>
  );
};

export default Holiday;
