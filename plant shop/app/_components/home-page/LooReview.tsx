"use client";
import React, { useEffect, useState } from "react";
import { Review } from "../../_style-components/home-page-css/Review";
import { Container } from "../../_style-components/home-page-css/Container";
import Link from "next/link";

////// import icons
import { FaStar } from "react-icons/fa";
import { IoOptionsOutline } from "react-icons/io5";
import { VscPassFilled } from "react-icons/vsc";
import { MdOutlineDone } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";

const list = [
  { name: "Featured", filter: "?feature=true" },
  { name: "Newest", filter: "?newest=true" },
  { name: "Highest Ratings", filter: "?highest_rate=true" },
  { name: "Lowest Ratings", filter: "?lowest_rate=true" },
];

const LooReview = () => {
  const [display, setDisplay] = useState(false); ///// ẩn hiện menu filter sản phẩm
  const [openIndex, setOpenIndex] = useState(0); ///// lựa chọn loại filter
  const [openAlert, setOpenAlert] = useState(false); ///// ẩn hiện thông tin dấu ! trong popup
  const [openPopUp, setOpenPopUp] = useState(false); ///// ẩn hiện popup
  const [popUpInfor, setPopUpInfor] = useState<any>([]); ///// set thông tin bên trong pop up
  const [data, setData] = useState([]); /////// data ban đầu

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const users = await response.json();
    setData(users);
  };

  useEffect(() => {
    fetchData("http://localhost:4001/users?_page=1&_limit=35");
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

  return (
    <Review>
      <Container>
        <div className="rate">
          <div className="views">
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>1,722 Reviews</p>
          </div>

          <button className="menu" onClick={() => setDisplay(true)}>
            <IoOptionsOutline />
          </button>

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
                        fetchData(`http://localhost:4001/users${item.filter}`);
                      }}
                    >
                      {item.name} {openIndex == index ? <MdOutlineDone /> : ""}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="custom-reviews">
          {data.map((custom: any) => {
            return (
              <div
                className="customs"
                key={custom.id}
                onClick={() => {
                  setOpenPopUp(true);
                  setPopUpInfor(custom);
                }}
              >
                <img src={custom.main_image} alt="" />

                <div className="details">
                  <div className="title">
                    {custom.title} {custom.ticked ? <VscPassFilled /> : ""}
                  </div>

                  <div className="stars">{rateStar(custom.rate)}</div>

                  <div className="description">{custom.description}</div>

                  {custom.repiled ? (
                    <div className="repiled">
                      <strong>House Plant Shop</strong> repiled.
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="more-infor">
                    {custom.small_image ? (
                      <img src={custom.small_image} alt="" />
                    ) : (
                      <div style={{ width: "40px", height: "50px" }}></div>
                    )}

                    {custom.infor ? <div>{custom.infor}</div> : <div></div>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {openPopUp ? (
          <div className="pop-up">
            {popUpInfor ? (
              <div className="see-more">
                <img src={popUpInfor.main_image} alt="" />

                <div className="main">
                  <div className="head">
                    <div className="title">{popUpInfor.title}</div>

                    {popUpInfor.ticked ? (
                      <div className="verified">
                        <VscPassFilled />
                        Verified purchase
                        <CiCircleInfo onClick={() => setOpenAlert(true)} />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  {openAlert ? (
                    <div
                      className="alert"
                      onClick={() => setOpenAlert(false)}
                      style={{ cursor: "pointer" }}
                    >
                      <p>
                        This review was collected from a verified customer who
                        purchased this item.
                      </p>
                      <a href="">Learn more</a>
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="stars">{rateStar(popUpInfor.rate)}</div>

                  <div className="review-content">
                    <div className="description">{popUpInfor.description}</div>

                    {popUpInfor.repiled ? (
                      <div className="repiled">
                        <div className="title">
                          <strong>House Plant Shop</strong> repiled
                        </div>
                        <p>{popUpInfor.repiled}</p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="more-infor">
                    {popUpInfor.small_image ? (
                      <img src={popUpInfor.small_image} alt="" />
                    ) : (
                      ""
                    )}

                    <div className="owner">
                      <div className="name">{popUpInfor.infor}</div>
                      <button
                        onClick={() => {
                          localStorage.setItem(
                            "detail-products",
                            JSON.stringify(popUpInfor)
                          );
                        }}
                      >
                        <Link href={"/product"}>
                          <AiOutlineShopping /> View products
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  style={{ cursor: "pointer" }}
                  className="exit"
                  onClick={() => setOpenPopUp(false)}
                >
                  <AiOutlineClose />
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </Container>
    </Review>
  );
};

export default LooReview;
