import axios from "axios";
import React, { useEffect, useState } from "react";

function TouristAttraction() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:4001");
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="tourBox">
      <img className="photoOne" src="" alt="ที่ท่องเที่ยว" />
      <div className="right-layer">
        <p className="title">location</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          tenetur alias commodi dolores expedita amet libero et quaerat officia
          minus, dignissimos cumque vitae saepe quia at ullam esse perferendis?
          Quibusdam.
        </p>
        <p>หมวดหมู่</p>
        <img className="photoTwo" src="" alt="ที่ท่องเที่ยว" />
        <img className="photoThree" src="" alt="ที่ท่องเที่ยว" />
        <img className="photoFour" src="" alt="ที่ท่องเที่ยว" />
      </div>
    </div>
  );
}

export default TouristAttraction;
