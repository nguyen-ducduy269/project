import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const CheckOutPage = () => {
  const [data, setData]: any = useState([]);
  const [discount, setDiscount] = useState("");
  const [changePercent, setChangePercent] = useState(0);
  const city = [
    "An Giang",
    "Hà Giang",
    "Ninh Thuận",
    "Bà Rịa – Vũng Tàu",
    "Hà Nam",
    "Phú Thọ",
    "Bạc Liêu",
    "Hà Nội",
    "Phú Yên",
    "Bắc Giang",
    "Hà Tĩnh",
    "Quảng Bình",
    "Bắc Kạn",
    "Hải Dương",
    "Quảng Nam",
    "Bắc Ninh",
    "Hải Phòng",
    "Quảng Ngãi",
    "Bến Tre",
    "Hậu Giang",
    "Quảng Ninh",
    "Bình Dương",
    'Hòa Bình", "Quảng Trị',
    "Bình Định",
    "Thành phố Hồ Chí Minh",
    "Sóc Trăng",
    "Bình Phước",
    "Hưng Yên",
    "Sơn La",
    "Bình Thuận",
    "Khánh Hòa",
    "Tây Ninh",
    "Cà Mau",
    "Kiên Giang",
    "Thái Bình",
    "Cao Bằng",
    "Kon Tum",
    "Thái Nguyên",
    "Cần Thơ",
    "Lai Châu",
    "Thanh Hóa",
    "Đà Nẵng",
    "Lạng Sơn",
    "Thừa Thiên Huế",
    "Đắk Lắk",
    "Lào Cai",
    "Tiền Giang",
    "Đắk Nông",
    "Lâm Đồng",
    "Trà Vinh",
    "Điện Biên",
    "Long An",
    "Tuyên Quang",
    "Đồng Nai",
    "Nam Định",
    "Vĩnh Long",
    "Đồng Tháp",
    "Nghệ An",
    "Vĩnh Phúc",
    "Gia Lai",
    "Ninh Bình",
    "Yên Bá",
  ];
  let finalTotalPrice = 0;
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [addressText, setAddressText] = useState("");
  const [apartment, setApartment] = useState("");
  const [ward, setWard] = useState("");
  const [place, setPlace] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [items, setItems] = useState([]);

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const users = await response.json();
    setData(users);
    setItems(users);
  };

  useEffect(() => {
    fetchData("http://localhost:4001/card");
  }, []);

  for (let i = 0; i < data.length; i++) {
    finalTotalPrice += Number(data[i]?.price * data[i]?.quantity);
  }

  const applyDiscount = () => {
    if (discount === "DiscountGift1") {
      alert("Apply discount code successfully!");
      setChangePercent(10);
    } else if (discount === "DiscountGift2") {
      alert("Apply discount code successfully!");
      setChangePercent(20);
    } else if (discount === "Gift1") {
      alert("Apply discount code successfully!");
      setChangePercent(3);
    } else if (discount === "Gift2") {
      alert("Apply discount code successfully!");
      setChangePercent(5);
    } else {
      alert("Discount code does not exist!");
      setChangePercent(0);
      return false;
    }
  };

  const PayNow = () => {
    const custom_product = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      addressText: addressText,
      apartment: apartment,
      ward: ward,
      place: place,
      items: items,
      changePercent: changePercent,
      timeOrder: new Date()
        .toLocaleString("en-GB", {
          timeZone: "Asia/Ho_Chi_Minh",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
        .replace(",", ""),
      route: [
        {
          state: false,
          p_state: "Wait for the store has confirmed your order!",
          aother_state: "",
          timeOrder: new Date()
            .toLocaleString("en-GB", {
              timeZone: "Asia/Ho_Chi_Minh",
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })
            .replace(",", ""),
          id: 1,
        },
      ],
    };

    console.log("custom_product", custom_product);
    axios.post("http://localhost:4001/order", custom_product);

    if (email === "") {
      window.scrollTo(0, 100);
      alert("The email cannot be left blank!");
    } else if (firstName === "" && lastName === "") {
      window.scrollTo(0, 250);
      alert("The name cannot be left blank!");
    } else if (email === "" && firstName === "" && lastName === "") {
      window.scrollTo(0, 100);
      alert("The name and the email cannot be left blank!");
    } else if (
      addressText === "" ||
      apartment === "" ||
      ward === "" ||
      place === ""
    ) {
      window.scrollTo(0, 400);
      alert("Delivery address is not complete!");
    } else if (phoneNumber === "") {
      window.scrollTo(0, 650);
      alert("The phone number cannot be left blank!");
    } else {
      alert("Your order has been placed successfully");
      clearCart();
      console.log("items", items);
    }
  };

  const clearCart = async () => {
    try {
      const deleteRequests = items.map((item: any) =>
        fetch(`http://localhost:4001/card/${item.id}`, { method: "DELETE" })
      );

      await Promise.all(deleteRequests);
      setData([]);
      setEmail("");
      setFirstName("");
      setLastName("");
      setCompany("");
      setAddressText("");
      setApartment("");
      setWard("");
      setPlace("");
      setPhoneNumber("");
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  return (
    <div className="check-out">
      <div className="contact">
        <div className="form-email">
          <label htmlFor="email">Contact</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </div>

        <select name="" id="">
          <option value="">Viet Nam</option>
        </select>

        <div className="name">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e: any) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e: any) => setLastName(e.target.value)}
          />
        </div>

        <input
          type="text"
          placeholder="Company (optional)"
          value={company}
          onChange={(e: any) => setCompany(e.target.value)}
        />

        <input
          type="text"
          placeholder="Apartment, house number, etc. (optional)"
          value={apartment}
          onChange={(e: any) => setApartment(e.target.value)}
        />

        <input
          type="text"
          placeholder="Address"
          value={addressText}
          onChange={(e: any) => setAddressText(e.target.value)}
        />

        <div className="place">
          <input
            type="text"
            placeholder="Ward"
            value={ward}
            onChange={(e: any) => setWard(e.target.value)}
          />

          <select
            name=""
            id=""
            placeholder="State"
            value={place}
            onChange={(e: any) => setPlace(e.target.value)}
          >
            {city.map((location: any, i: number) => {
              return <option key={i}>{location}</option>;
            })}
          </select>

          <input type="text" placeholder="ZIP Code" />
        </div>

        <input
          type="text"
          placeholder="Phone (optional)"
          value={phoneNumber}
          onChange={(e: any) => setPhoneNumber(e.target.value)}
        />

        <div className="pay-now" onClick={() => PayNow()}>
          Pay Now
        </div>
      </div>

      {data.length == 0 ? (
        <div className="summary">
          <div className="order">
            <Link href={"/"}>Payment Success! Continue Shopping?</Link>
          </div>
        </div>
      ) : (
        <div className="summary">
          <div className="order">
            {data.map((item: any, i: number) => {
              return (
                <div className="order-item" key={i}>
                  <div className="image">
                    <img src={item.image} alt="" />
                  </div>

                  <div className="detail">
                    <div className="name">{item.name}</div>
                    <div className="pot">{item.size}</div>
                    <div className="quantity">Quantity: {item.quantity}</div>
                  </div>

                  <div className="total-price">
                    $
                    {Math.round(Number(item?.price * item?.quantity) * 100) /
                      100}
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className="discount-code">
            <input
              type="text"
              placeholder="Discount code or gift card"
              value={discount}
              onChange={(e: any) => setDiscount(e.target.value)}
            />

            <button className="apply" onClick={() => applyDiscount()}>
              Apply
            </button>
          </div> */}

          <div className="final">
            <div className="subtotal">
              Subtotal{" "}
              <p>
                $
                {(Math.round(finalTotalPrice * 100) / 100).toLocaleString(
                  "en-US",
                  { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                )}
              </p>
            </div>

            {/* <div className="shipping">
              Shipping Discount <p>{changePercent}%</p>
            </div>

            <div className="total">
              Total{" "}
              {discount !== "" ? (
                <p>
                  $
                  {(
                    Math.round(
                      (finalTotalPrice -
                        finalTotalPrice * (changePercent / 100)) *
                        100
                    ) / 100
                  ).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              ) : (
                <p>
                  $
                  {(Math.round(finalTotalPrice * 100) / 100).toLocaleString(
                    "en-US",
                    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                  )}
                </p>
              )}
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOutPage;
