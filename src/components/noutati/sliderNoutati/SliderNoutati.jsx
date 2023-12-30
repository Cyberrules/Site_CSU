import ScrollCarousel from "scroll-carousel-react";
import React, { useState, useEffect } from "react";
import CardStireNews from "../cardStireNews/CardStireNews";
import './SliderNoutati.scss'

const SliderNoutati = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5050/api/stire");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  const testData = [
    {
      titlu: "Titlu 1",
      datapublicarii: "01.01.2023",
      continut: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imagine1: "base64_encoded_image_data_1",
    },
    {
      titlu: "Titlu 2",
      datapublicarii: "02.01.2023",
      continut: "Praesent ullamcorper odio vel risus elementum...",
      imagine1: "base64_encoded_image_data_2",
    },
    {
        titlu: "Titlu 3",
        datapublicarii: "02.01.2023",
        continut: "Praesent ullamcorper odio vel risus elementum...",
        imagine1: "base64_encoded_image_data_2",
      },
      {
        titlu: "Titlu 4",
        datapublicarii: "02.01.2023",
        continut: "Praesent ullamcorper odio vel risus elementum...",
        imagine1: "base64_encoded_image_data_2",
      },
  ];

  return (
    <div className="containerSlider">
      <ScrollCarousel
        autoplay
        autoplaySpeed={20}
        speed={2}
        onReady={() => console.log("I am ready")}
      >
        {testData.map((item, index) => (
            /*{newsData.map((item, index) => (*/ 
          <CardStireNews
            key={index}
            titluStire={item.titlu.substring(0, 50)}
            data={item.datapublicarii}
            descriere={item.continut}
            imagine={item.imagine1}
          />
        ))}
      </ScrollCarousel>
    </div>
  );
};

export default SliderNoutati;
