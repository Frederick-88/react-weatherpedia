import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Rainy from "./WeatherPages/Rainy";
import Sunny from "./WeatherPages/Sunny";
import Storm from "./WeatherPages/Storm";
import Windy from "./WeatherPages/Windy";
import Cloudy from "./WeatherPages/Cloudy";

function App() {
  const [dataWeather, setDataWeather] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.weatherbit.io/v2.0/current?country=Indonesia,NC&key=f4f84825d6ef4021892c477a6fca9f58"
      )
      .then((response) => {
        console.log(response.data);
        setDataWeather(response.data);
      });
  }, []);

  return (
    <div>
      {/* <Rainy /> */}
      <Sunny />
      {/* <Storm /> */}
      {/* <Windy /> */}
      {/* <Cloudy /> */}
    </div>
  );
}

export default App;
