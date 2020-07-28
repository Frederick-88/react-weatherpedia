import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";
import Rainy from "./Rainy";
import Sunny from "./Sunny";
import Storm from "./Storm";
import Windy from "./Windy";
import Cloudy from "./Cloudy";

function Index() {
  const [data, setData] = useState({});

  const [dataInputCity, setDataInputCity] = useState("");
  const [dataInputCountry, setDataInputCountry] = useState("");

  useEffect(() => {
    let city = "Singapore";
    let country = "Singapore";
    if (dataInputCity && dataInputCountry) {
      city = dataInputCity;
      country = dataInputCountry;
    }
    // to make it goes automatically, rare code writing. go
    (async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=08c63bb12c5a4132f5d570f08f17872d`
      );
      setData(response.data);
    })();
  }, [dataInputCity, dataInputCountry]);

  const getDataCity = (data) => {
    setDataInputCity(data);
  };

  const getDataCountry = (data) => {
    setDataInputCountry(data);
  };

  const showWeather = () => {
    // mendefine supaya props ini bisa dimasukkan ke dalam component dibawah.
    const props = {
      data,
      getDataCity,
      getDataCountry,
    };

    let Weather = <div>Loading...</div>;

    if (data && data.weather && data.weather[0] && data.weather[0].id) {
      let weatherId = data.weather[0].id;
      if (weatherId <= 804 && weatherId >= 800) {
        Weather = <Sunny {...props} />;
      } else if (weatherId <= 781 && weatherId >= 701) {
        Weather = <Windy {...props} />;
      } else if (weatherId <= 321 && weatherId >= 300) {
        Weather = <Cloudy {...props} />;
      } else if (weatherId <= 531 && weatherId >= 500) {
        Weather = <Rainy {...props} />;
      } else {
        Weather = <Storm {...props} />;
      }
    }

    return Weather;
  };

  return <div> {showWeather()}</div>;
}

export default Index;
