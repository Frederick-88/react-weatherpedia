import React from "react";

import rainy from "../assets/rainyfix.gif";
import logo from "../assets/logo.png";
import "../style.css";

function Rainy(props) {
  const picture = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "25rem",
    };
  };

  return (
    <div className="rainy-bg">
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
              <i className="fas fa-map-marker-alt icon-fx" />
              <h3 className="my-0">
                {props.dataLocationWeather.name},{" "}
                {props.dataLocationWeather.country}
              </h3>
            </div>
            <h6 className="celcius-txt my-0">
              {props.dataCurrentWeather.temperature}°C
            </h6>
            <h3>RAINY</h3>
            <i className="fas fa-cloud-showers-heavy fa-4x mb-4" />
            <p>Last Update: {props.dataLocationWeather.localtime}</p>
          </div>
        </div>

        <div className="row text-center mt-4 text-white">
          <div className="col-md-4">
            <p className="display-4 my-0">
              {props.dataCurrentWeather.humidity}%
            </p>
            <div className="d-flex d-row justify-content-center">
              <h3>HUMIDITY</h3>
              <i className="fas fa-tint icon-fx2" />
            </div>
          </div>
          <div className="vertical-line" />
          <div className="col-md-3">
            <p className="display-4 my-0">
              {props.dataCurrentWeather.visibility}km
            </p>
            <div className="d-flex d-row justify-content-center">
              <h3>VISIBILITY</h3>
              <i className="far fa-eye icon-fx2" />
            </div>
          </div>
          <div className="vertical-line" />
          <div className="col-md-4">
            <p className="display-4 my-0">
              {props.dataCurrentWeather.wind_speed}km/h
            </p>
            <div className="d-flex d-row justify-content-center">
              <h3>WIND SPEED</h3>
              <i className="fas fa-wind icon-fx2" />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control py-4"
              placeholder="Search the city you want to check about . . ."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-info px-4"
                type="button"
                id="button-addon2"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-white">Check out other cities with weather :</h2>
          <div className="d-flex d-row pb-4">
            <button className="btn btn-warning d-flex d-row py-2 mx-2">
              <h3 className="my-0">SUNNY</h3>
              <i className="fas fa-sun icon-fx2" />
            </button>
            <button className="btn btn-info d-flex d-row py-2 mx-2">
              <h3 className="my-0">RAINY</h3>
              <i className="fas fa-cloud-showers-heavy icon-fx2" />
            </button>
            <button className="btn btn-secondary d-flex d-row py-2 mx-2">
              <h3 className="my-0">STORM</h3>
              <i className="fas fa-bolt icon-fx2" />
            </button>
            <button className="btn btn-success d-flex d-row py-2 mx-2">
              <h3 className="my-0">WINDY</h3>
              <i className="fas fa-wind icon-fx2" />
            </button>
            <button className="btn btn-primary d-flex d-row py-2 mx-2">
              <h3 className="my-0">CLOUDY</h3>
              <i className="fas fa-cloud icon-fx2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rainy;
