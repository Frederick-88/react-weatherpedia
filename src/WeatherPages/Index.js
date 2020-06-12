import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";
import Rainy from "./Rainy";
import Sunny from "./Sunny";
import Storm from "./Storm";
import Windy from "./Windy";
import Cloudy from "./Cloudy";

function Index() {
  const [dataWeather, setDataWeather] = useState({});
  const [dataTemperature, setDataTemperature] = useState({});
  const [dataVisibility, setDataVisibility] = useState({});
  const [WindSpeed, setWindSpeed] = useState({});
  const [CityName, setCityName] = useState({});
  const [CountryCode, setCountryCode] = useState({});

  const [dataInputCity, setDataInputCity] = useState("");
  const [dataInputCountry, setDataInputCountry] = useState("");

  useEffect(async () => {
    if (dataInputCity && dataInputCountry) {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${dataInputCity},${dataInputCountry}&units=metric&appid=08c63bb12c5a4132f5d570f08f17872d`
      );
      setDataWeather(response.data.weather[0]);
      setDataTemperature(response.data.main.temp);
      setWindSpeed(response.data.wind.speed);
      setDataVisibility(response.data.visibility);
      setCityName(response.data.name);
      setCountryCode(response.data.sys.country);
    } else {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Singapore,Singapore&units=metric&appid=08c63bb12c5a4132f5d570f08f17872d`
      );
      setDataWeather(response.data.weather[0]);
      setDataTemperature(response.data.main.temp);
      setWindSpeed(response.data.wind.speed);
      setDataVisibility(response.data.visibility);
      setCityName(response.data.name);
      setCountryCode(response.data.sys.country);
    }
  }, [dataInputCity, dataInputCountry]);

  let weatherCondition = dataWeather.id;

  const getDataCity = (data) => {
    setDataInputCity(data);
  };

  const getDataCountry = (data) => {
    setDataInputCountry(data);
  };

  const showWeather = () => {
    // mendefine supaya props ini bisa dimasukkan ke dalam component dibawah.
    const props = {
      dataWeather,
      dataTemperature,
      dataVisibility,
      WindSpeed,
      CityName,
      CountryCode,
      getDataCity,
      getDataCountry,
    };

    // let Weather = <></>;
    // if (weatherCondition <= 804 && weatherCondition >= 800) {
    //   Weather = <Sunny {...props} />;
    // } else if (weatherCondition <= 781 && weatherCondition >= 701) {
    //   Weather = <Windy {...props} />;
    // } else if (weatherCondition <= 321 && weatherCondition >= 300) {
    //   Weather = <Cloudy {...props} />;
    // } else if (weatherCondition <= 531 && weatherCondition >= 500) {
    //   Weather = <Rainy {...props} />;
    // } else {
    //   Weather = <Storm {...props} />;
    // }

    // return Weather;
  };

  return <div> {showWeather()}</div>;
}

export default Index;
