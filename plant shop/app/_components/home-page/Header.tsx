"use client";
import Link from "next/link";
import { Container } from "../../_style-components/home-page-css/Container";
import { HeaderMain } from "../../_style-components/home-page-css/Header";

const Header = () => {
  return (
    <>
      <HeaderMain>
        <Container>
          <div className="one">
            <a href="https://houseplantbox.com/">
              <img
                src="https://houseplantshop.com/cdn/shop/t/20/assets/new-logo.png?v=57253369310833674581646639252"
                alt=""
              />
            </a>
          </div>

          <div className="one">
            <Link href={"/"}>
              <img
                src="https://houseplantshop.com/cdn/shop/t/20/assets/HPS-corelogo-a.png?v=42881124244934145341646639249"
                alt=""
              />
            </Link>
          </div>
        </Container>
      </HeaderMain>
    </>
  );
};

export default Header;
