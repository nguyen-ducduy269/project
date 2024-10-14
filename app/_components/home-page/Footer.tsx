"use client";
import React from "react";
import { Foot } from "../../_style-components/home-page-css/Foot";
import { Container } from "../../_style-components/home-page-css/Container";
import Image from "next/image";

///// import icons
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { BiLogoFacebook, BiSolidEnvelope } from "react-icons/bi";

///// import images
import ApplePay from "@/public/images/Apple-Pay.png";
import GooglePay from "@/public/images/Google_Pay.png";
import Visa from "@/public/images/visa.png";
import Meta from "@/public/images/Meta-Logo.png";

const Footer = () => {
  return (
    <Foot>
      <Container>
        <div className="site-footer-block">
          <div className="site-item">
            <h2>Everything House Plants</h2>

            <div className="information">
              We’re your online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </div>

            <div className="address">
              <p>Greenhouse Locations:</p>
              <p>
                CA: 1, Lane 68/2, Dinh Quan Street, Phuc Dien, Bac Tu Liem,
                Hanoi
              </p>
            </div>
          </div>

          <div className="site-item">
            <h2>Get the Scoop</h2>

            <p>Subcribe to our newsletter.</p>

            <div className="submit">
              <input type="text" placeholder="Email address" />

              <button>Sign up</button>
            </div>
          </div>

          <div className="site-item">
            <h2>Follow us</h2>
            <div className="icons">
              <BiLogoFacebook />
              <AiOutlineTwitter />
              <BsPinterest />
              <AiFillInstagram />
              <BiSolidEnvelope />
            </div>
          </div>

          <div className="site-item">
            <h2>@houseplantshop</h2>

            <div>
              Connect with us on social and share your plants with{" "}
              <a href="">#sharemyhps</a>
            </div>
          </div>
        </div>

        <div className="site-footer-item">
          <div className="site-left">
            <div className="navigation">
              <div className="nav-item">
                <a href="">Shop</a>
              </div>
              <div className="nav-item">
                <a href="">About Us</a>
              </div>
              <div className="nav-item">
                <a href="">LIVE Weather</a>
              </div>
              <div className="nav-item">
                <a href="">Plant Care</a>
              </div>
              <div className="nav-item">
                <a href="">Contact</a>
              </div>
              <div className="nav-item">
                <a href="">FAQ</a>
              </div>
              <div className="nav-item">
                <a href="">Shipping</a>
              </div>
              <div className="nav-item">
                <a href="">Terms and Conditions</a>
              </div>
              <div className="nav-item">
                <a href="">Wholesale | Dropshipping</a>
              </div>
              <div className="nav-item">
                <a href="">House Plant Shop VietNam</a>
              </div>
              <div className="nav-item">
                <a href="">House Plant Resource</a>
              </div>
              <div className="nav-item">
                <a href="">Shopify Collective</a>
              </div>
              <div className="nav-item">
                <a href="">Climate Commitment</a>
              </div>
              <div className="nav-item">
                <a href="">PPC | Plant Products Company</a>
              </div>
            </div>

            <div className="credit">Copyright © 2023 House Plant Shop.</div>

            <div className="shopify">Powered by Shopify</div>
          </div>

          <div className="site-right">
            <img
              src="https://logowik.com/content/uploads/images/amazon6707.jpg"
              alt=""
            />

            <img
              src="https://i.pinimg.com/736x/c9/10/94/c910944ac6247ed2d0d47279453c5959.jpg"
              alt=""
            />

            <Image src={ApplePay} alt="" />

            <img
              src="https://cdn.icon-icons.com/icons2/1178/PNG/512/discover_82082.png"
              alt=""
            />

            <Image src={Meta} alt="" style={{ backgroundColor: "white" }} />

            <Image
              src={GooglePay}
              alt=""
              style={{ backgroundColor: "white" }}
            />

            <Image src={Visa} alt="" style={{ backgroundColor: "white" }} />

            <img
              src="https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png"
              alt=""
            />
          </div>
        </div>
      </Container>
    </Foot>
  );
};

export default Footer;
