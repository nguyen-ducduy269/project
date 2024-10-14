"use client";
import React, { useEffect } from "react";
import { Promomosaic } from "../../_style-components/home-page-css/Promomosaic";
import { Container } from "../../_style-components/home-page-css/Container";

import Link from "next/link";
import Aos from "aos";

const Promo = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Promomosaic>
      <Container>
        <div className="promo">
          <div className="left-promo">
            <Link href={""}>
              <div
                className="house-plant"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h1>House Plant Accessories</h1>
                <button>Shop Accessories</button>
              </div>
            </Link>

            <Link href={""}>
              <div
                className="promotion-item"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h1>Promotional Item</h1>
                <button>Shop Gift Cards</button>
              </div>
            </Link>
          </div>

          <div className="right-promo">
            <Link href={""}>
              <div
                className="new-arrivals"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h1>New Arrivals</h1>
                <button>Shop Now</button>
              </div>
            </Link>

            <Link href={""}>
              <div
                className="seed-packets"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h1>Seed Packets</h1>
                <button>Shop Seed</button>
              </div>
            </Link>

            <Link href={""}>
              <div
                className="shipping"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h1>Shipping Infor</h1>
                <button>How We Ship Plants</button>
              </div>
            </Link>
          </div>
        </div>

        <div className="promo-responsive">
          <Link href={""}>
            <div
              className="house-plant"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1>House Plant Accessories</h1>
              <button>Shop Accessories</button>
            </div>
          </Link>

          <Link href={""}>
            <div
              className="promotion-item"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1>Promotional Item</h1>
              <button>Shop Gift Cards</button>
            </div>
          </Link>

          <Link href={""}>
            <div
              className="new-arrivals"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1>New Arrivals</h1>
              <button>Shop Now</button>
            </div>
          </Link>

          <Link href={""}>
            <div
              className="seed-packets"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1>Seed Packets</h1>
              <button>Shop Seed</button>
            </div>
          </Link>

          <Link href={""}>
            <div
              className="shipping"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1>Shipping Infor</h1>
              <button>How We Ship Plants</button>
            </div>
          </Link>
        </div>
      </Container>
    </Promomosaic>
  );
};

export default Promo;
