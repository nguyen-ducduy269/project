import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Container } from "@/app/_style-components/home-page-css/Container";
import { PlantCareCss } from "@/app/_style-components/plant-care/PlantCareCss";

const PlantCare = () => {
  const [data, setData]: any = useState([]);

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const users = await response.json();
    setData(users);
  };

  useEffect(() => {
    fetchData("http://localhost:4001/plant_care");
  }, []);

  return (
    <>
      <PlantCareCss>
        <Container>
          <div className="header">
            <h1>Plant Care Guides</h1>
            <p>
              Access our digital care guide booklet here. It includes
              species-specific care info with lots of great plant tips!
            </p>
            <a href="https://drive.google.com/file/d/1TZsCFzGogY154kv6FDsxbBthwkkEwWoA/view">
              <button className="to-pdf">Care Guide PDF</button>
            </a>
          </div>

          <div className="content">
            {data.map((item: any, i: number) => {
              return (
                <Link
                  href={`/care/${item.id}`}
                  onClick={() => {
                    localStorage.setItem(
                      "plant-care-item",
                      JSON.stringify(item)
                    );
                  }}
                  key={i}
                >
                  <div className="content-item">
                    <img src={item.image} alt="" />

                    <div className="item">{item.name}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </PlantCareCss>
    </>
  );
};

export default PlantCare;
