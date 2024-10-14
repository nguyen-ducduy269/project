"use client";
import React from "react";
import { Inner } from "../../_style-components/home-page-css/Inner";
import { Container } from "../../_style-components/home-page-css/Container";

const PromoInner = () => {
  return (
    <Inner>
      <Container>
        <div className="promo-inner">
          <a href="">
            <img
              src="https://houseplantshop.com/cdn/shop/files/APPArtboard_141_copy_21_8fb82765-89bc-4999-a45f-f64a254dc684_832x463.png?v=1649482241"
              alt=""
            />
          </a>

          <a href="">
            <img
              src="https://houseplantshop.com/cdn/shop/files/gregArtboard_501_copy_33_1001x477.png?v=1660879113"
              alt=""
            />
          </a>
        </div>
      </Container>
    </Inner>
  );
};

export default PromoInner;
