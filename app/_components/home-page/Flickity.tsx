"use client";
import React from "react";
import { Carousel } from "antd";
import { Slide } from "../../_style-components/home-page-css/Slide";

const data = [
  {
    className: "tropical",
    title: "Tropical Plants.",
    description: "Refresh your home with new vibrant plants this Fall!",
    button: "Shop tropical plants",
  },
  {
    className: "sub-box",
    title: "House Plants delivered monthly.",
    description: "Starting at $15.99 with Free Shipping",
    button: "Shop Subscription Boxes",
  },
  {
    className: "rosy-soil",
    title: "Rosy Potting Soil",
    description: "Shop this eco-friendly, 100% natural potting mix!",
    button: "Shop Now",
  },
  {
    className: "books",
    title: "The Bookstore",
    description: "Take a look at our selection of plant books!",
    button: "Shop Books",
  },
  {
    className: "creepy",
    title: "Spooky Collection",
    description: "We’ve curated a selection of our best boo-tanicals!",
    button: "Shop Spooky Plants",
  },
  {
    className: "vining-plants",
    title: "Trailing & Vining Plants",
    description: "Create a beautiful cascade of foliage!",
    button: "Shop Trailing Plants",
  },
];

const Flickity = () => {
  return (
    <Slide>
      <Carousel autoplay>
        {data.map((item: any, i: number) => {
          return (
            <h3 className={item.className} key={i}>
              <div className="slide">
                <div className="slide-title">{item.title}</div>

                <div className="slide-description">{item.description}</div>

                <button>{item.button}</button>
              </div>
            </h3>
          );
        })}
      </Carousel>
    </Slide>
  );
};

export default Flickity;

