"use client";
import React, { useState } from "react";

///// import components
import Header from "@/app/_components/home-page/Header";
import Bar from "@/app/_components/home-page/Bar";
import SiteHeader from "@/app/_components/home-page/SiteHeader";
import Footer from "@/app/_components/home-page/Footer";
import ContactPage from "@/app/_components/contact/Contact";

const Contact = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Header />
      <Bar />
      <SiteHeader selectedItem={selectedItem} />
      <ContactPage />
      <Footer />
    </>
  );
};

export default Contact;
