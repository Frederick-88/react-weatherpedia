import React, { useState, useEffect } from "react";
import axios from "axios";
import windy from "../assets/windyfix.gif";
import logo from "../assets/logo.png";
import "../style.css";

function Windy() {
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
    <div className="windy-bg">
      <div className="text-center">
        <img src={logo} style={{ width: "15rem", margin: "1rem" }} alt="..." />
        <hr className="hr-navbar mt-0" />
      </div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-5 mb-4">
            <div className="w-100 rounded-circle " style={picture(windy)} />
          </div>

          <div className="col-md-7 text-white text-center align-self-center">
            <div className="d-flex d-row justify-content-center">
              <i class="fas fa-map-marker-alt icon-fx" />
              <h3 className="my-0">Batam, Indonesia</h3>
            </div>
            <h6 className="celcius-txt my-0">18°C</h6>
            <h3>WINDY</h3>
            <i className="fas fa-wind fa-4x mb-4" />
            <p>Last Update: 09/06/2020, 14:59</p>
          </div>
        </div>

        <div className="row text-center mt-4 text-white">
          <div className="col-md-4">
            <p className="display-4 my-0">70%</p>
            <div className="d-flex d-row justify-content-center">
              <h3>HUMIDITY</h3>
              <i class="fas fa-tint icon-fx2" />
            </div>
          </div>
          <div className="vertical-line" />
          <div className="col-md-3">
            <p className="display-4 my-0">11km</p>
            <div className="d-flex d-row justify-content-center">
              <h3>VISIBILITY</h3>
              <i class="far fa-eye icon-fx2" />
            </div>
          </div>
          <div className="vertical-line" />
          <div className="col-md-4">
            <p className="display-4 my-0">10km/h</p>
            <div className="d-flex d-row justify-content-center">
              <h3>WIND SPEED</h3>
              <i class="fas fa-wind icon-fx2" />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control py-4"
              placeholder="Search the city you want to check about . . ."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-success px-4"
                type="button"
                id="button-addon2"
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-white">Check out other cities with weather :</h2>
          <div className="d-flex d-row pb-4">
            <button className="btn btn-warning d-flex d-row py-2 mx-2">
              <h3 className="my-0">SUNNY</h3>
              <i class="fas fa-sun icon-fx2" />
            </button>
            <button className="btn btn-info d-flex d-row py-2 mx-2">
              <h3 className="my-0">RAINY</h3>
              <i class="fas fa-cloud-showers-heavy icon-fx2" />
            </button>
            <button className="btn btn-secondary d-flex d-row py-2 mx-2">
              <h3 className="my-0">STORM</h3>
              <i class="fas fa-bolt icon-fx2" />
            </button>
            <button className="btn btn-success d-flex d-row py-2 mx-2">
              <h3 className="my-0">WINDY</h3>
              <i class="fas fa-wind icon-fx2" />
            </button>
            <button className="btn btn-primary d-flex d-row py-2 mx-2">
              <h3 className="my-0">CLOUDY</h3>
              <i class="fas fa-cloud icon-fx2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Windy;
