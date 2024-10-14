import React from "react";
import { Container } from "@/app/_style-components/home-page-css/Container";
import { PLantDetailCss } from "@/app/_style-components/plant-care/PlantDetailCss";
import PlantMore from "./PlantMore";

interface Props {
  setSelectedItem: (value: any) => void;
}

const PlantDetail = (props: Props) => {
  const plant_care_detail = JSON.parse(
    localStorage.getItem("plant-care-item") || ""
  );

  return (
    <>
      <PLantDetailCss>
        <Container>
          <div className="title">
            <h4>Care Guide</h4>
            <h1>{plant_care_detail.name} Care</h1>
          </div>
        </Container>

        <div className="meeting">
          <Container>
            <div className="meet">
              <div className="image">
                <img src={plant_care_detail.meet_img} alt="" />
              </div>

              <div className="meet-content">
                <h1>Meet {plant_care_detail.name}</h1>
                <div className="discription">
                  {plant_care_detail.meet_content}
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Container>
          <div className="condition">
            <div className="main-img">
              <img src={plant_care_detail.condition_img} alt="" />
            </div>

            <div className="condition-detail">
              <div className="light">
                <img
                  src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-00ee98a6--2.png?v=1606857583"
                  alt=""
                />

                <div className="content">
                  <h3>Light</h3>
                  <p>{plant_care_detail.light}</p>
                </div>
              </div>

              <div className="pet">
                <img
                  src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-a6039687--1.png?v=1606857645"
                  alt=""
                />

                <div className="content">
                  <h3>Pet Friendly</h3>
                  <p>{plant_care_detail.pet}</p>
                </div>
              </div>

              <div className="water">
                <img
                  src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-ee98a603--3.png?v=1606857603"
                  alt=""
                />

                <div className="content">
                  <h3>Water</h3>
                  <p>{plant_care_detail.water}</p>
                </div>
              </div>

              <div className="humidity">
                <img
                  src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-039687e5--5.png?v=1606857658"
                  alt=""
                />

                <div className="content">
                  <h3>Humidity</h3>
                  <p>{plant_care_detail.humidity}</p>
                </div>
              </div>

              <div className="temperature">
                <img
                  src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-98a60396--4.png?v=1606857620"
                  alt=""
                />

                <div className="content">
                  <h3>Temperature</h3>
                  <p>{plant_care_detail.temperature}</p>
                </div>
              </div>

              <div className="difficult-level">
                <img
                  src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-9687e5b3--6.png?v=1606857686"
                  alt=""
                />

                <div className="content">
                  <h3>Difficult Level</h3>
                  <p>{plant_care_detail.difficult_level}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div className="common-problems">
          <Container>
            <div className="problem">
              <div className="problem-content">
                <h1>Common Problems Q&A</h1>
                {plant_care_detail.common_problems.map(
                  (problem: any, i: number) => {
                    return <p key={i}>{problem}</p>;
                  }
                )}
              </div>

              <div className="image">
                <img src={plant_care_detail.common_image} alt="" />
              </div>
            </div>
          </Container>
        </div>

        {plant_care_detail.shop.length != 0 ? (
          <Container>
            <div className="shop-detail">
              <h1>Shop Air Plants</h1>

              {plant_care_detail.shop.map((product: any, i: number) => {
                return (
                  <PlantMore
                    key={i}
                    product={product}
                    setSelectedItem={props.setSelectedItem}
                  />
                );
              })}
            </div>
          </Container>
        ) : (
          ""
        )}
      </PLantDetailCss>
    </>
  );
};

export default PlantDetail;
