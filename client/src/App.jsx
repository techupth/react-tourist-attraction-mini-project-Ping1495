import "./App.css";
{
  /*import { Router , Routes , Route} from react-route-dom*/
}

import Header from "./component/Header";
import TouristAttraction from "./component/TouristAttraction";

import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <TouristAttraction />
      <TouristAttraction />
      <TouristAttraction />
      <TouristAttraction />
    </div>
  );
}

export default App;
