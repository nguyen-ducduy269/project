"use client";
import React from "react";
import { Logo } from "../../_style-components/home-page-css/Logo";
import { Container } from "../../_style-components/home-page-css/Container";
import Image from "next/image";

///// import images
import buzzfeed from "@/public/images/buzzfeed.png";
import forbes from "@/public/images/forbes.png";
import mashable from "@/public/images/mashable.png";
import eaquiree from "@/public/images/esquire.png";
import purewow from "@/public/images/PureWow.png";
import decor from "@/public/images/elle-decor.png";

const Logoist = () => {
  return (
    <Logo>
      <Container>
        <div className="logo">
          <h2>
            Featured with Happy Plant Customers - We Guarantee a Healthy
            Delivery!
          </h2>

          <div className="home-section">
            <Image src={buzzfeed} alt="" />
            <Image src={forbes} alt="" />
            <Image src={mashable} alt="" />
            <Image src={eaquiree} alt="" />
            <Image src={purewow} alt="" />
            <Image src={decor} alt="" />
          </div>
        </div>

        <div className="pxs-image">
          <h2>Be the First To Know!</h2>

          <p>
            Join our SMS list today and be the first to shop our new plants,
            exclusive discounts and more!
          </p>

          <button>Sign me up!</button>
        </div>
      </Container>
    </Logo>
  );
};

export default Logoist;
