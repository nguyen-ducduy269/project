"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "antd";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

///// import components
import { Product } from "@/app/_style-components/detail-product/Product";
import { Container } from "@/app/_style-components/home-page-css/Container";

///// import icons
import { GoChevronRight } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CiStar } from "react-icons/ci";
import { MdCircle } from "react-icons/md";

///// import images
import facebook from "@/public/images/facebook.png";
import twitter from "@/public/images/twitter.png";
import linked_in from "@/public/images/linked-in.png";
import pinterest from "@/public/images/pinterest.png";

interface Props {
  setSelectedItem: (value: any) => void;
}

const DetailProduct = (props: Props) => {
  const [product, setProduct] = useState<Record<string, any>>({});
  const [changeImage, setChangeImage] = useState(0); ///// change image
  const [changePot, setChangePot] = useState(0); //// change pot
  const [quantity, setQuantity] = useState(1); //////change quantity

  useEffect(() => {
    if (localStorage.getItem("detail-products")) {
      setProduct(JSON.parse(localStorage.getItem("detail-products")!));
    }
  }, []);

  const rateStar = (params: number) => {
    if (params === 5) {
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      );
    }
    if (params === 4) {
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <CiStar />
        </>
      );
    }
    if (params === 3) {
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <CiStar />
          <CiStar />
        </>
      );
    }
    if (params === 2) {
      return (
        <>
          <FaStar />
          <FaStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </>
      );
    }
    if (params === 1) {
      return (
        <>
          <FaStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </>
      );
    }
    if (params === 0) {
      return (
        <>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </>
      );
    }
  };

  const onChangeImage = (params: number) => {
    setChangeImage(params);
  };

  if (!product) {
    return null;
  }

  const total_price = product.price * quantity;

  const productAddToCard = {
    id: product?.id,
    name: product?.name,
    image: product?.detail_image?.[0]?.big_image,
    size: product?.pot?.[changePot]?.name,
    price: product?.price,
    ca: product?.pot?.[changePot]?.ca,
    fl: product?.pot?.[changePot]?.fl,
    quantity: quantity,
    total_price: Math.round(total_price * 100) / 100,
  };

  const onAddToCart = async () => {
    try {
      const response = await fetch("http://localhost:4001/card");
      const cartItems = await response.json();
      console.log("cartItems", cartItems);

      const existingProduct = cartItems.find(
        (item: any) => item.id === productAddToCard.id
      );
      console.log("existingProduct", existingProduct);

      if (existingProduct) {
        const updatedProduct = {
          ...existingProduct,
          quantity: +existingProduct.quantity + productAddToCard.quantity,
        };

        await fetch(`${"http://localhost:4001/card"}/${existingProduct.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        });

        alert("Product already exists, updated quantity!");
      } else {
        props.setSelectedItem(Math.random());

        try {
          axios.post("http://localhost:4001/card", productAddToCard);
          alert("Successfull add product to your card! Continue Shopping?");
        } catch (postError) {
          console.error("Failed to add product:", postError);
          alert("Failed to add product to cart. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
      alert("Failed to load cart. Please try again.");
    }
  };

  return (
    <Product>
      <Container>
        <div className="head">
          <Link href={"/"}>Home</Link>
          <GoChevronRight />
          {product.name}
        </div>

        <div className="main-content">
          <div className="main-img">
            <img src={product?.detail_image?.[changeImage]?.big_image} alt="" />

            <div className="more-img">
              {product?.detail_image?.map((item: any, index: number) => {
                return (
                  <img
                    key={index}
                    src={item?.small_image}
                    onClick={() => {
                      onChangeImage(index);
                    }}
                    style={{ cursor: "pointer" }}
                    className={changeImage == index ? "active" : ""}
                    alt=""
                  />
                );
              })}
            </div>
          </div>

          <div className="content">
            <div className="detail-information">
              <h1>{product?.name}</h1>

              <div className="stars">{rateStar(product?.rate)}</div>

              <div className="price">${product?.price}</div>

              <ul>
                {product?.botanical_name ? (
                  <li>
                    <MdCircle /> <strong>Botanical Name:</strong>{" "}
                    {product?.botanical_name}
                  </li>
                ) : (
                  ""
                )}
                {product?.common_name ? (
                  <li>
                    <MdCircle /> <strong>Common Names:</strong>{" "}
                    {product?.common_name}
                  </li>
                ) : (
                  ""
                )}
                <li>
                  <MdCircle /> <strong>Description:</strong>{" "}
                  {product?.detail_description}
                </li>
              </ul>

              {product.include_title ? (
                <div style={{ marginTop: "30px" }}>
                  <strong>
                    Winter Plant Shipping Protection Includes (As Needed):
                  </strong>
                </div>
              ) : (
                ""
              )}

              {product.include ? (
                <div>
                  {product?.include?.map((item: any, i: number) => {
                    return (
                      <div style={{ marginTop: "10px" }} key={i}>
                        - {item}
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}

              {product?.covid ? (
                <div
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "25px",
                  }}
                >
                  {product?.covid}
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="summary">
              <h4>Size</h4>

              <div className="select-size">
                {product?.pot?.map((item: any, index: number) => {
                  return (
                    <button
                      className={changePot == item.id ? "active" : ""}
                      onClick={() => setChangePot(index)}
                      style={{ cursor: "pointer" }}
                      key={item.id}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>

              <div>
                <p>
                  CA Greenhouse:
                  {product?.pot?.[changePot]?.ca
                    ? product?.pot?.[changePot]?.ca
                    : 0}
                </p>
                <p>
                  Fl Greenhouse:
                  {product?.pot?.[changePot]?.fl
                    ? product?.pot?.[changePot]?.fl
                    : 0}
                </p>
              </div>

              {product?.pot_style ? (
                <div className="pot_style">
                  <h4>Pot Style</h4>

                  {product?.pot_style?.map((item: any) => {
                    return (
                      <button
                        className={item.status == true ? "active" : ""}
                        style={{ cursor: "pointer" }}
                        key={item.id}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              ) : (
                ""
              )}

              <div className="form">
                <label htmlFor="">Quantity</label>
                <input
                  type="number"
                  name=""
                  id=""
                  min={1}
                  placeholder="1"
                  value={quantity}
                  onChange={(e: any) => setQuantity(Number(e.target.value))}
                />
              </div>

              {product.sold_out == true ? (
                <>
                  <Button
                    style={{
                      height: "48px",
                      color: "white",
                      backgroundColor: "gray",
                      width: "100%",
                      fontWeight: "500",
                      fontSize: "16px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Sold Out
                  </Button>

                  <Button
                    style={{
                      height: "48px",
                      color: "white",
                      backgroundColor: "gray",
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
                </>
              ) : (
                <>
                  <Button
                    style={{
                      height: "48px",
                      color: "#1e8570",
                      backgroundColor: "white",
                      width: "100%",
                      fontWeight: "500",
                      fontSize: "16px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      onAddToCart();
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
                      cursor: "pointer",
                    }}
                  >
                    Buy with <FcGoogle style={{ marginLeft: "7px" }} />
                    Pay
                  </Button>
                </>
              )}

              <Link href={""}>More payment options</Link>
              <p>Share this:</p>
              <div className="internet-contact">
                <Image src={facebook} width={24} height={24} alt="facebook" />
                <Image src={twitter} width={24} height={24} alt="twitter" />
                <Image src={linked_in} width={24} height={24} alt="linked_in" />
                <Image src={pinterest} width={24} height={24} alt="pinterest" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Product>
  );
};

export default DetailProduct;
