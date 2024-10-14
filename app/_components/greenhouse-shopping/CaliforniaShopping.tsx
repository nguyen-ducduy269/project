import React from "react";

import { CaliforniaShoppingCss } from "@/app/_style-components/greenhouse-shopping/CaliforniaShoppingCss";
import { Container } from "@/app/_style-components/home-page-css/Container";
import { IoHome } from "react-icons/io5";

const CaliforniaShopping = () => {
  return (
    <CaliforniaShoppingCss>
      <img
        className="shopping-img"
        src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/p9010024-1652905707602.jpg?v=1652905711"
        alt=""
      />

      <div className="main-content">
        <h1>
          Come visit our San Marcos, California greenhouse for in-person
          shopping!
        </h1>

        <Container>
          <div className="question">
            <h3>What to expect?</h3>
            <p>
              All of our house plants will be marked down 50% off the retail
              price online. Accessories and planters will be marked down as
              well. Please note that we are operating a wholesale shop so we do
              not have large parking spaces or public restrooms.{" "}
            </p>

            <h3>What days/times are you open?</h3>
            <p>We are open Mondays-Fridays (9 AM - 3 PM)</p>

            <h3>What should I bring?</h3>
            <p>
              Just yourself and maybe a friend that loves house plants as well.
            </p>

            <h3>What is the Greenhouse Pricing?</h3>
            <div className="price-img">
              <img
                src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/price-listartboard-1-copy-5-1652904786037.png?v=1652904788"
                alt=""
              />
            </div>
          </div>

          <h3 className="address">
            <IoHome /> 389 East Olive Street, San Marcos, 92069 *First
            greenhouse entrance on the left.{" "}
          </h3>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3339.387551124111!2d-117.15215512486111!3d33.17770206340242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db8bb14e4c59c5%3A0x3ce2262806e09d6d!2s389%20Olive%20St%2C%20San%20Marcos%2C%20CA%2092069%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1704791951841!5m2!1svi!2s"
              loading="lazy"
            ></iframe>
          </div>
        </Container>
      </div>
    </CaliforniaShoppingCss>
  );
};

export default CaliforniaShopping;
