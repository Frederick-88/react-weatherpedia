import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";
import Rainy from "./Rainy";
import Sunny from "./Sunny";
import Storm from "./Storm";
import Windy from "./Windy";
import Cloudy from "./Cloudy";

function Index() {
  const [dataLocationWeather, setDataLocationWeather] = useState({});
  const [dataCurrentWeather, setDataCurrentWeather] = useState({});
  // const [ComponentDisplay, setComponentDisplay] = useState("");

  useEffect(() => {
    axios
      // .get(
      //   "http://api.openweathermap.org/data/2.5/group?id=1642911,1214520,1642858,1631761&appid=08c63bb12c5a4132f5d570f08f17872d"
      // )
      .get(
        "http://api.weatherstack.com/current?access_key=1e67d54abd920dccb5d3d34c733c3c3b&query=Batam,Indonesia"
      )
      .then((response) => {
        console.log(response.data);
        setDataLocationWeather(response.data.location);
        setDataCurrentWeather(response.data.current);
      });
  }, []);

  let weatherCondition = dataCurrentWeather.weather_code;

  const showWeather = () => {
    // mendefine supaya props ini bisa dimasukkan ke dalam component dibawah.
    const props = {
      dataCurrentWeather,
      dataLocationWeather,
    };

    let Weather = <></>;
    if (weatherCondition <= 116) {
      Weather = <Sunny {...props} />;
    } else if (weatherCondition <= 263) {
      Weather = <Windy {...props} />;
    } else if (weatherCondition <= 293) {
      Weather = <Cloudy {...props} />;
    } else if (weatherCondition <= 302) {
      Weather = <Rainy {...props} />;
    } else {
      Weather = <Storm {...props} />;
    }

    return Weather;
  };

  return <div> {showWeather()}</div>;
}

export default Index;
