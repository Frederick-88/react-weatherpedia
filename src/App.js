import React, { useState, useEffect } from "react";
import axios from "axios";
import sunny from "./assets/sunnyfix.gif";
import rainy from "./assets/rainyfix.gif";
import logo from "./assets/logo.png";
import "./style.css";

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

  const picture = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "25rem",
    };
  };

  return (
    <div className="main-bg">
      <div className="text-center">
        <img src={logo} style={{ width: "15rem", margin: "1rem" }} alt="..." />
        <hr className="hr-navbar mt-0" />
      </div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-5 mb-4">
            <div className="w-100 rounded-circle " style={picture(rainy)} />
          </div>

          <div className="col-md-7 text-white text-center align-self-center">
            <div className="d-flex d-row justify-content-center">
              <i class="fas fa-map-marker-alt icon-fx" />
              <h3 className="my-0">Batam,Indonesia</h3>
            </div>
            <h6 className="celcius-txt my-0">18°C</h6>
            <h3>RAINY</h3>
            <i className="fas fa-cloud-showers-heavy fa-4x mb-4" />
            <p>Last Update: 09/06/2020, 14:59</p>
          </div>
        </div>

        <div className="row text-center mt-4 text-white">
          <div className="col-md-4">
            <p className="display-4 my-0">70%</p>
            <h3>HUMIDITY</h3>
          </div>
          <div className="vertical-line" />
          <div className="col-md-3">
            <p className="display-4 my-0">11km</p>
            <h3>VISIBILITY</h3>
          </div>
          <div className="vertical-line" />
          <div className="col-md-4">
            <p className="display-4 my-0">10km/h</p>
            <h3>WIND SPEED</h3>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="my-0">Stay updated with :</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
