"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

///// impotr components
import { CollectionsStyle } from "@/app/_style-components/collections/CollectionsStyle";
import { Container } from "@/app/_style-components/home-page-css/Container";

///// import icons
import { SlArrowRight } from "react-icons/sl";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdCircle, MdOutlineDone } from "react-icons/md";
import { IoCloseSharp, IoOptionsOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { BsChevronDoubleRight } from "react-icons/bs";

///// import images
import facebook from "@/public/images/facebook.png";
import twitter from "@/public/images/twitter.png";
import linked_in from "@/public/images/linked-in.png";
import pinterest from "@/public/images/pinterest.png";
import axios from "axios";

interface Props {
  item: string;
  setSelectedItem: (value: any) => void;
  title: string;
  setChangePage: (value: any) => void;
  changePage: number;
}

const list = [
  { name: "Featured", filter: "?feature=true" },
  { name: "Newest", filter: "?newest=true" },
  { name: "Highest Ratings", filter: "?highest_rate=true" },
  { name: "Lowest Ratings", filter: "?lowest_rate=true" },
];

const Collections = (props: Props) => {
  const [openQuickShopPopUp, setOpenQuickShopPopUp] = useState(false);
  const [openChooseOptionPopUp, setOpenChooseOptionPopUp] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const [popUpInfor, setPopUpInfor] = useState<any>([]);
  const [changeQuickShopPopUpImg, setChangeQuickShopPopUpImg] = useState(0);
  const [changePot, setChangePot] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [display, setDisplay] = useState(false); ///// ẩn hiện menu filter sản phẩm
  const [openIndex, setOpenIndex] = useState(0); ///// lựa chọn loại filter

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const users = await response.json();
    setAllProduct(users);
  };

  useEffect(() => {
    fetchData(
      `http://localhost:4001/${props.item}?_page=${props.changePage}&_limit=20`
    );
  }, [props.changePage]);

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

  const onAddToCart = async (item: any) => {
    const total_price = item.price * quantity;

    const productAddToCard = {
      id: item?.id,
      name: item?.name,
      image: item.main_image,
      size: item?.pot?.[changePot]?.name,
      price: item?.price,
      ca: item?.pot?.[changePot]?.ca,
      fl: item?.pot?.[changePot]?.fl,
      quantity: quantity,
      total_price: Math.round(total_price * 100) / 100,
    };

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
        setQuantity(1);
      } else {
        props.setSelectedItem(Math.random());

        try {
          axios.post("http://localhost:4001/card", productAddToCard);
          alert("Successfull add product to your card! Continue Shopping?");
          setQuantity(1);
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

  const handleClickScroll = () => {
    window.scrollTo(0, 300);
  };

  return (
    <CollectionsStyle>
      <Container>
        <div className="shoptify-collection">
          <div className="collections">
            <div className="title">
              <Link href={"/"}>Home</Link> <SlArrowRight /> {props.title}
            </div>

            <div className="head">
              <h1>{props.title}</h1>

              <button className="menu" onClick={() => setDisplay(true)}>
                <IoOptionsOutline />
              </button>
            </div>

            {display ? (
              <div className="drop-down">
                <h3>Sort by</h3>
                <ul onClick={() => setDisplay(false)}>
                  {list.map((item: any, index: number) => {
                    return (
                      <li
                        key={index}
                        onClick={() => {
                          setOpenIndex(index);
                          fetchData(
                            `http://localhost:4001/${props.item}${item.filter}`
                          );
                        }}
                      >
                        {item.name}{" "}
                        {openIndex == index ? <MdOutlineDone /> : ""}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              ""
            )}

            <div className="all-product">
              {allProduct?.map((item: any, index: number) => {
                return (
                  <div className="product-item" key={index}>
                    <Link
                      href={"/product"}
                      onClick={() => {
                        localStorage.setItem(
                          "detail-products",
                          JSON.stringify(item)
                        );
                      }}
                    >
                      <img src={item?.main_image} alt="" />
                    </Link>

                    <div className="stars">{rateStar(item?.rate)}</div>

                    <div className="product-price">from ${item?.price}</div>

                    <div className="owner">{item?.name}</div>

                    <div className="option">
                      <button
                        className="quick-shop"
                        onClick={() => {
                          setOpenQuickShopPopUp(true);
                          setPopUpInfor(item);
                        }}
                      >
                        Quick shop
                      </button>

                      {item?.sold_out == true ? (
                        <button
                          style={{
                            backgroundColor: "#808080ba",
                            border: "unset",
                            color: "#00634b",
                            fontWeight: "600",
                          }}
                        >
                          Sold Out
                        </button>
                      ) : (
                        <button
                          className="choose-option"
                          onClick={() => {
                            setOpenChooseOptionPopUp(true);
                            setPopUpInfor(item);
                          }}
                        >
                          Choose Options
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {openQuickShopPopUp == true ? (
              <div className="quick-shop-pop-up">
                <div className="pop-up">
                  <div className="product-image">
                    <img
                      src={
                        popUpInfor?.detail_image?.[changeQuickShopPopUpImg]
                          ?.big_image
                      }
                      alt=""
                      className="main-img"
                    />

                    <div className="more-img">
                      {popUpInfor?.detail_image?.map(
                        (item: any, index: number) => {
                          return (
                            <img
                              key={index}
                              src={item.small_image}
                              onClick={() => {
                                setChangeQuickShopPopUpImg(index);
                              }}
                              style={{ cursor: "pointer" }}
                              className={
                                changeQuickShopPopUpImg == index ? "active" : ""
                              }
                              alt=""
                            />
                          );
                        }
                      )}
                    </div>
                  </div>

                  <div className="content">
                    <div className="detail-information">
                      <ul>
                        <li>
                          <MdCircle /> <strong>Botanical Name :</strong>
                          {popUpInfor?.botanical_name}
                        </li>

                        <li>
                          <MdCircle /> <strong>Common Name(s) :</strong>
                          {popUpInfor?.common_name}
                        </li>

                        <li>
                          <MdCircle /> <strong>Description :</strong>{" "}
                          {popUpInfor?.detail_description}
                        </li>
                      </ul>

                      <div className="covid">{popUpInfor?.covid}</div>

                      <div className="share-contact">
                        <p>Share this:</p>
                        <div className="internet-contact">
                          <Image
                            src={facebook}
                            width={24}
                            height={24}
                            alt="facebook"
                          />
                          <Image
                            src={twitter}
                            width={24}
                            height={24}
                            alt="twitter"
                          />
                          <Image
                            src={linked_in}
                            width={24}
                            height={24}
                            alt="linked_in"
                          />
                          <Image
                            src={pinterest}
                            width={24}
                            height={24}
                            alt="pinterest"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="summary">
                      <div className="name">{popUpInfor?.name}</div>

                      <div className="price">${popUpInfor?.price}</div>

                      <div className="choose-size">
                        <div className="title">Size</div>

                        <div className="button">
                          {popUpInfor?.pot?.map((item: any, index: number) => {
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
                      </div>

                      {popUpInfor?.pot_style ? (
                        <div className="choose-type">
                          <div className="title">Pop Type</div>

                          <div className="type">
                            {popUpInfor?.pot_style?.map((item: any) => {
                              return (
                                <button
                                  className={
                                    item.status == true ? "active" : ""
                                  }
                                  style={{ cursor: "pointer" }}
                                  key={item.id}
                                >
                                  {item.name}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      <form action="">
                        <input
                          type="number"
                          name="quantity"
                          id=""
                          min={1}
                          value={quantity}
                        />
                        {quantity <= 1 ? (
                          <button className="minus">-</button>
                        ) : (
                          <button
                            className="plus"
                            onClick={() => setQuantity(Number(quantity - 1))}
                          >
                            -
                          </button>
                        )}
                        <button
                          className="plus"
                          onClick={() => setQuantity(Number(quantity + 1))}
                        >
                          +
                        </button>
                      </form>

                      {popUpInfor?.sold_out == true ? (
                        <>
                          <button
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
                              border: "unset",
                            }}
                          >
                            Sold Out
                          </button>

                          <button
                            style={{
                              height: "48px",
                              color: "white",
                              backgroundColor: "gray",
                              width: "100%",
                              fontWeight: "500",
                              fontSize: "16px",
                              display: "flex",
                              marginTop: "10px",
                              border: "unset",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            Buy with <FcGoogle /> Pay
                          </button>
                        </>
                      ) : (
                        <>
                          <button
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
                              marginBottom: "10px",
                              border: "1px solid #dddddd",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              onAddToCart(popUpInfor);
                              setOpenQuickShopPopUp(false);
                            }}
                          >
                            Add to Cart
                          </button>

                          <button
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
                            Buy with <FcGoogle /> Pay
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  <div
                    className="exit"
                    onClick={() => setOpenQuickShopPopUp(false)}
                  >
                    <IoCloseSharp />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {openChooseOptionPopUp == true ? (
              <div className="choose-option-pop-up">
                <div className="choose-option">
                  <div className="name">{popUpInfor?.name}</div>

                  <div className="price">${popUpInfor?.price}</div>

                  <div className="choose-size">
                    <div className="title">Size</div>

                    <div className="button">
                      {popUpInfor?.pot?.map((item: any, index: number) => {
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
                  </div>

                  {popUpInfor?.pot_style ? (
                    <div className="choose-type">
                      <div className="title">Pop Type</div>

                      <div className="type">
                        {popUpInfor?.pot_style?.map((item: any) => {
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
                    </div>
                  ) : (
                    ""
                  )}

                  <form action="">
                    <input
                      type="number"
                      name=""
                      id=""
                      min={1}
                      value={quantity}
                    />

                    {quantity <= 1 ? (
                      <button className="minus">-</button>
                    ) : (
                      <button
                        className="plus"
                        onClick={() => setQuantity(Number(quantity - 1))}
                      >
                        -
                      </button>
                    )}
                    <button
                      className="plus"
                      onClick={() => setQuantity(Number(quantity + 1))}
                    >
                      +
                    </button>
                  </form>

                  {popUpInfor?.sold_out == true ? (
                    <>
                      <button
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
                      </button>

                      <button
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
                        Buy with <FcGoogle /> Pay
                      </button>
                    </>
                  ) : (
                    <>
                      <button
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
                          marginBottom: "10px",
                          border: "1px solid #dddddd",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          onAddToCart(popUpInfor);
                          setOpenChooseOptionPopUp(false);
                        }}
                      >
                        Add to Cart
                      </button>

                      <button
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
                        Buy with <FcGoogle /> Pay
                      </button>
                    </>
                  )}

                  <div
                    className="exit"
                    onClick={() => setOpenChooseOptionPopUp(false)}
                  >
                    <IoCloseSharp />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {allProduct.length >= 10 ? (
              <div className="change-page">
                {props?.changePage != 1 ? (
                  <button
                    onClick={() => {
                      props.setChangePage(props?.changePage - 1);
                      handleClickScroll();
                    }}
                  >
                    <BsChevronDoubleLeft /> Previous Page
                  </button>
                ) : (
                  <button style={{ backgroundColor: "gray", color: "white" }}>
                    <BsChevronDoubleLeft /> Previous Page
                  </button>
                )}

                {props.changePage == 1 ? (
                  <div
                    className="page-active active"
                    onClick={() => props.setChangePage(1)}
                  >
                    1
                  </div>
                ) : (
                  <div
                    className="page-active"
                    onClick={() => props.setChangePage(1)}
                  >
                    1
                  </div>
                )}

                {props.changePage == 2 ? (
                  <div
                    className="page-active active"
                    onClick={() => props.setChangePage(2)}
                  >
                    2
                  </div>
                ) : (
                  <div
                    className="page-active"
                    onClick={() => props.setChangePage(2)}
                  >
                    2
                  </div>
                )}

                {props.changePage == 3 ? (
                  <div
                    className="page-active active"
                    onClick={() => props.setChangePage(3)}
                  >
                    3
                  </div>
                ) : (
                  <div
                    className="page-active"
                    onClick={() => props.setChangePage(3)}
                  >
                    3
                  </div>
                )}

                {props.changePage != 3 ? (
                  <button
                    onClick={() => {
                      props.setChangePage(props.changePage + 1);
                      handleClickScroll();
                    }}
                  >
                    Next Page <BsChevronDoubleRight />
                  </button>
                ) : (
                  <button style={{ backgroundColor: "gray", color: "white" }}>
                    Next Page <BsChevronDoubleRight />
                  </button>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </Container>
    </CollectionsStyle>
  );
};

export default Collections;
