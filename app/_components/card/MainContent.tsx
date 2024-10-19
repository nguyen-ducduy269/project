"use client";
import { Main } from "@/app/_style-components/card-css/Main";
import { Container } from "@/app/_style-components/home-page-css/Container";
import React, { useEffect, useState } from "react";
import Link from "next/link";

////// import icons
import { BsCartPlusFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GoDot } from "react-icons/go";
import axios from "axios";

interface Props {
  setSelectedItem: (value: any) => void;
}

const MainContent = (props: Props) => {
  const [data, setData]: any = useState([]);
  const [reloadPage, setReloadPage] = useState(1);
  let finalTotalPrice = 0;

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const users = await response.json();
    setData(users);
  };

  useEffect(() => {
    fetchData("http://localhost:4001/card");
  }, [reloadPage]);

  for (let i = 0; i < data.length; i++) {
    finalTotalPrice += Number(data[i]?.price * data[i]?.quantity);
  }

  const deleteProduct = (id: any) => {
    if (confirm("Are you sure to delete this product?")) {
      axios.delete(`http://localhost:4001/card/${id}`);
    }
    setReloadPage(Math.random());
    props.setSelectedItem(Math.random());
  };

  return (
    <Main>
      <Container>
        <div className="main-content">
          <div className="title">
            <h1>Your Card</h1>

            {data.length > 0 ? (
              <div className="subtotal">
                <div className="detail">
                  <p>Subtotal</p>
                  <div className="price">
                    $
                    {(Math.round(finalTotalPrice * 100) / 100).toLocaleString(
                      "en-US",
                      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                    )}
                  </div>
                </div>

                <Link href={"/checkout"}>
                  <button>
                    <FaShoppingCart /> Checkout
                  </button>
                </Link>
                <Link href={"/all-order"}>
                  <button>Check your order here!</button>
                </Link>
              </div>
            ) : (
              <Link href={"/all-order"}>Check your order here!</Link>
            )}
          </div>

          {data.length == 0 ? (
            <div className="main">
              <div className="card"></div>

              <div className="empty">
                <p>Your card is empty</p>
                <button>
                  <Link href={"/all-product"}>
                    <BsCartPlusFill /> Continue Shopping
                  </Link>
                </button>
              </div>
            </div>
          ) : (
            <>
              {data.map((products: any, index: number) => {
                return (
                  <div className="main" key={index}>
                    <div className="card">
                      <div className="item">
                        <div className="card-item">
                          <div className="items1">
                            <img src={products?.image} alt="" />

                            <div className="cart-detail">
                              <div className="name">{products?.name}</div>
                              {products?.size ? (
                                <div className="size">
                                  <strong>Size:</strong> {products?.size}
                                </div>
                              ) : (
                                ""
                              )}
                              <div className="product-price">
                                <strong>Price:</strong> ${products?.price}
                              </div>
                            </div>
                          </div>

                          <div className="items2">
                            <div className="quantity">
                              Quantity: {products?.quantity}
                            </div>

                            <div className="total-price">
                              $
                              {Math.round(
                                Number(products?.price * products?.quantity) *
                                  100
                              ) / 100}
                            </div>
                            <div
                              className="delete-button"
                              onClick={() => deleteProduct(products?.id)}
                            >
                              <MdDelete />
                            </div>
                          </div>
                        </div>

                        <div className="greenhouse">
                          {products?.ca ? (
                            <div className="greenhouse-item">
                              <GoDot /> CA Greenhouse: {products?.ca}
                            </div>
                          ) : (
                            ""
                          )}

                          {products?.fl ? (
                            <div className="greenhouse-item">
                              <GoDot /> FL Greenhouse: {products?.fl}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </Container>
    </Main>
  );
};

export default MainContent;
