"use client";
import React, { useState } from "react";
import { Feature } from "../../_style-components/home-page-css/Feature";
import { Container } from "../../_style-components/home-page-css/Container";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";

///// import images
import facebook from "@/public/images/facebook.png";
import twitter from "@/public/images/twitter.png";
import linked_in from "@/public/images/linked-in.png";
import pinterest from "@/public/images/pinterest.png";

////// import icons
import { FcGoogle } from "react-icons/fc";

interface Props {
  setSelectedItem: (value: any) => void;
}

const FeatureProducts = (props: Props) => {
  const [cardValue, setCardValue] = useState(1);
  const [choosePlant, setChoosePlant] = useState(0);

  const products = {
    id: "1b9d6bcd",
    name: "Monstera Deliciosa Mint Large Form",
    price: 29.99,
    image: [
      {
        big_image:
          "https://houseplantshop.com/cdn/shop/products/image_png_1350410938_837x837.png?v=1643765015",
        small_image:
          "https://houseplantshop.com/cdn/shop/products/image_png_1350410938_75x75_crop_center.png?v=1643765015",
      },
      {
        big_image:
          "https://houseplantshop.com/cdn/shop/products/1-Monstera-SwissCheese-DETAIL-6_837x837.jpg?v=1623090125",
        small_image:
          "https://houseplantshop.com/cdn/shop/products/1-Monstera-SwissCheese-DETAIL-6_75x75_crop_center.jpg?v=1623090125",
      },
      {
        big_image:
          "https://houseplantshop.com/cdn/shop/products/1-Monstera-SwissCheese-6_837x837.jpg?v=1623090125",
        small_image:
          "https://houseplantshop.com/cdn/shop/products/1-Monstera-SwissCheese-6_75x75_crop_center.jpg?v=1623090125",
      },
      {
        big_image:
          "https://houseplantshop.com/cdn/shop/products/1-Monstera-SwissCheese-HOLD-6_837x837.jpg?v=1623090125",
        small_image:
          "https://houseplantshop.com/cdn/shop/products/1-Monstera-SwissCheese-HOLD-6_75x75_crop_center.jpg?v=1623090125",
      },
    ],
    quantity: cardValue,
    total_price: Math.round(29.99 * cardValue * 100) / 100,
  };

  const product = {
    ...products,
    image:
      "https://houseplantshop.com/cdn/shop/products/image_png_1350410938_837x837.png?v=1643765015",
  };

  const onSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4001/card");
      const cartItems = await response.json();
      console.log("cartItems", cartItems);

      const existingProduct = cartItems.find(
        (item: any) => item.id === product.id
      );
      console.log("existingProduct", existingProduct);

      if (!existingProduct) {
        props.setSelectedItem(Math.random());

        await fetch(`http://localhost:4001/card`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });
        setCardValue(1);
        alert("Product has been added to the cart");
      } else {
        const updatedProduct = {
          ...existingProduct,
          quantity: +existingProduct.quantity + product.quantity,
        };

        await fetch(`http://localhost:4001/card/${existingProduct.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        });

        setCardValue(1);
        alert("Product already exists, updated quantity!");
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
      alert("Failed to load cart. Please try again.");
    }
  };

  const onChangeImage = (params: number) => {
    setChoosePlant(params);
  };

  return (
    <Feature>
      <Container>
        <div className="product">
          <div className="product-gallery">
            <div className="main-img">
              <img
                src={products.image[choosePlant]?.big_image}
                width={677}
                height={677}
                alt=""
              />
            </div>

            <div className="more-img">
              {products.image.map((item: any, index: number) => {
                return (
                  <img
                    key={index}
                    src={item.small_image}
                    onClick={() => {
                      onChangeImage(index);
                    }}
                    style={{ cursor: "pointer" }}
                    className={choosePlant == index ? "active" : ""}
                    alt=""
                  />
                );
              })}
            </div>
          </div>

          <div className="product-main">
            <h1>{products.name}</h1>
            <div className="price">${products.price}</div>

            <div className="form-field-select">
              <label htmlFor="">Quantity</label>
              <input
                type="number"
                name=""
                id=""
                min={1}
                placeholder="1"
                value={cardValue}
                onChange={(e: any) => setCardValue(Number(e.target.value))}
              />
            </div>

            <Button
              style={{
                height: "48px",
                color: "#1e8570",
                backgroundColor: "white",
                width: "100%",
                fontWeight: "500",
                fontSize: "16px",
              }}
              onClick={() => {
                onSubmit();
              }}
            >
              Add to Card
            </Button>
            <Button
              style={{
                height: "48px",
                color: "white",
                backgroundColor: "black",
                width: "100%",
                fontWeight: "500",
                fontSize: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Buy with <FcGoogle style={{ marginLeft: "7px" }} />
              Pay
            </Button>

            <Link href={""}>More payment options</Link>
            <Link href={""}>View full details</Link>

            <p>Share this:</p>
            <div className="internet-contact">
              <Image src={facebook} width={24} height={24} alt="facebook" />
              <Image src={twitter} width={24} height={24} alt="twitter" />
              <Image src={linked_in} width={24} height={24} alt="linked_in" />
              <Image src={pinterest} width={24} height={24} alt="pinterest" />
            </div>
          </div>
        </div>
      </Container>
    </Feature>
  );
};

export default FeatureProducts;
