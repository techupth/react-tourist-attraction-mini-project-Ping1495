import { useState } from "react";

function Header() {
  const [inputFindPlace, setInputFindPlace] = useState("");
  const handleInput = (event) => setInputFindPlace(event.target.value);
  return (
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
  );
}

export default Header;
