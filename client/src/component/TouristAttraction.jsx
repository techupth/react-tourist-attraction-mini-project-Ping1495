import axios from "axios";
import React, { useEffect, useState } from "react";

function TouristAttraction() {
  const [tourData, setTourdata] = useState([]);
  const [inputFindPlace, setInputFindPlace] = useState("");

  let getTourData = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4001/trips?keywords=${inputFindPlace}`
      );
      console.log(result.data.data);
      setTourdata(result.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getTourData();
  }, [inputFindPlace]);

  const handleInput = (event) => setInputFindPlace(event.target.value);

  const miniDescription = (description, maxLength) => {
    if (description && description.length > maxLength) {
      return description.slice(0, maxLength) + "...";
    }

    return description;
  };

  return (
    <>
      <div>
        <h1 className="headline">เที่ยวไหนดี</h1>
        <label htmlFor="findPlace">ค้นหาที่เที่ยว</label>
        <br />
        <input
          type="text"
          id="findPlace"
          name="findPlace"
          placeholder="หาที่เที่ยวแล้วไปกัน..."
          onChange={handleInput}
          value={inputFindPlace}
        ></input>
        <hr />
      </div>

      {tourData.map((item) => {
        return (
          <>
            <div className="tourBox">
              <div className="left-layer">
                <img
                  className="photoOne"
                  src={item.photos[0]}
                  alt="ที่ท่องเที่ยว"
                />
              </div>
              <div className="right-layer">
                <h2 className="title">{item.title}</h2>
                <p className="description">
                  {miniDescription(item.description, 100)}
                </p>

                <a href={item.url} target="_blank">
                  อ่านต่อ
                </a>

                <p>
                  หมวด: &nbsp;
                  {item.tags[0]}
                  &nbsp;
                  {item.tags[1]}
                  &nbsp;
                  {item.tags[2]}
                  &nbsp;
                  {item.tags[3]}
                  &nbsp;
                  {item.tags[4]}
                </p>
                <img
                  className="photoTwo"
                  src={item.photos[1]}
                  alt="ที่ท่องเที่ยว"
                />
                <img
                  className="photoTwo"
                  src={item.photos[2]}
                  alt="ที่ท่องเที่ยว"
                />
                <img
                  className="photoTwo"
                  src={item.photos[3]}
                  alt="ที่ท่องเที่ยว"
                />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default TouristAttraction;
