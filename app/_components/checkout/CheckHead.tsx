import React from "react";
import Link from "next/link";

import { Container } from "@/app/_style-components/home-page-css/Container";
import { BsBagCheckFill } from "react-icons/bs";

const CheckHead = () => {
  return (
    <div className="check">
      <Container>
        <div className="check-head">
          <Link href={"/"}>
            <img
              src="https://cdn.shopify.com/s/files/1/2528/3612/files/HPS-social-proile-pic_copy_x320.png?v=1614304532"
              alt=""
            />
          </Link>

          <Link href={"/all-order"}>
            Check your order? Click here <BsBagCheckFill />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CheckHead;
