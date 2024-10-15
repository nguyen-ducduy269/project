"use client";
import React, { useEffect, useState } from "react";
import { Site } from "../../_style-components/home-page-css/Site";
import { Container } from "../../_style-components/home-page-css/Container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "antd";

//// import icons
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

///// import image
import images from "@/public/images/logo.webp";

interface Props {
  selectedItem: any;
}

const SiteHeader = (props: Props) => {
  const [display, setDisplay] = useState(false);
  const [cardNumber, setCardNumber] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filterName, setFilterName] = useState<string>("");
  const [filter, setFilter] = useState<object>();
  const [open, setOpen] = useState(false);

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const users = await response.json();
    setCardNumber(users);
  };

  const fetchData1 = async (url: string) => {
    const response = await fetch(url);
    const users = await response.json();
    setFilterData(users);
  };

  useEffect(() => {
    fetchData("http://localhost:4001/card");
    fetchData1("http://localhost:4001/users");
  }, [props.selectedItem]);

  const Search = () => {
    setOpen(true);
    if (!filterName) return;
    const filter = filterName.toLowerCase();
    const filterValue = filterData.filter((person: any) => {
      return person.infor.toLowerCase().includes(filter);
    });
    console.log(filterValue);
    setFilter(filterValue);
  };

  const value = filter ? Object.values(filter) : [];

  const truncateString = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  };

  return (
    <>
      <Site>
        <Container>
          <div className="site-header-main">
            <Link href={"/"}>
              <Image src={images} alt="" width={201} height={46} />
            </Link>

            <div className="site-input">
              <input
                type="text"
                value={filterName}
                onChange={(e: any) => setFilterName(e.target.value)}
                id="searchInput"
                placeholder="What are you looking for?"
              />
              <Button type="primary" onClick={() => Search()}>
                <CiSearch />
              </Button>
            </div>

            <Link href={"/cart"} className="shopping">
              <div className="shopping-cart">
                <FaShoppingCart />

                <div className="number-cart">{cardNumber.length}</div>
              </div>
            </Link>
          </div>

          {open == true ? (
            <div className="filter-list">
              <table>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th></th>
                </tr>
                {value?.map((item: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td>{truncateString(item?.infor, 30)}</td>
                      <td>{item?.title}</td>
                      <td>${item?.price}</td>
                      <td>
                        <Link
                          href="/product"
                          onClick={() => {
                            localStorage.setItem(
                              "detail-products",
                              JSON.stringify(item)
                            );
                            setOpen(false);
                            window.location.reload();
                          }}
                        >
                          See details
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          ) : (
            ""
          )}

          <div className="site-main">
            <div className="site-page">
              <Link href={"/all-product"}>All Product</Link>
              <Link href={"/holiday"}>Holiday Plants</Link>
              <Link href={"/care"}>Plants Care</Link>
              <Link href={"/subscription"}>Monthly Subscription Box</Link>
              <Link href={"/shopping"}>California Greenhouse Shopping</Link>
              <Link href={"/contact"}>Contact Us</Link>
              <Link href={"/business"}>For Business</Link>
            </div>

            <div className="log-in">Admin</div>
          </div>

          <div className="response-site">
            <div className="header-response">
              <AiOutlineMenu onClick={() => setDisplay(true)} />

              <Link href={"/"}>
                <Image src={images} alt="" width={201} height={46} />
              </Link>

              <div className="shopping">
                <div className="shopping-cart">
                  <FaShoppingCart />
                  <div className="number-cart">{cardNumber.length}</div>
                </div>
              </div>
            </div>

            <div className="response-search">
              <input type="text" placeholder="What are you looking for?" />
              <Button type="primary">
                <CiSearch />
              </Button>
            </div>

            {display ? (
              <div className="menu">
                <div className="head">
                  <Link href={"/log-in"} className="log-in">
                    Log In
                  </Link>

                  <AiOutlineClose onClick={() => setDisplay(false)} />
                </div>

                <div className="site-page">
                  <Link href={"/shop"}>Shop</Link>
                  <Link href={"/holiday"}>Holiday Plants</Link>
                  <Link href={"/care"}>Plants Care</Link>
                  <Link href={"/subscription"}>Monthly Subscription Box</Link>
                  <Link href={"/shopping"}>California Greenhouse Shopping</Link>
                  <Link href={"/contact"}>Contact Us</Link>
                  <Link href={"/business"}>For Business</Link>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </Container>
      </Site>
    </>
  );
};

export default SiteHeader;
