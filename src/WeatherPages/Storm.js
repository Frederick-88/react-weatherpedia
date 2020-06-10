import React, { useState } from "react";

import storm from "../assets/stormfix.gif";
import logo from "../assets/logo.png";
import "../style.css";

function Storm(props) {
  const [inputCity, setInputCity] = useState("");
  const [inputCountry, setInputCountry] = useState("");

  const picture = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "25rem",
    };
  };

  const handleChangeCityInput = (event) => {
    let { value } = event.currentTarget;
    setInputCity(value);
  };

  const handleChangeCountryInput = (event) => {
    let { value } = event.currentTarget;
    setInputCountry(value);
  };

  const handleSubmit = () => {
    if (inputCity && inputCountry) {
      props.getDataCity(inputCity);
      props.getDataCountry(inputCountry);
    } else {
      window.alert("Please fill city & country form correctly");
    }
  };

  return (
    <div className="storm-bg">
      <div className="text-center">
        <img src={logo} style={{ width: "15rem", margin: "1rem" }} alt="..." />
        <hr className="hr-navbar mt-0" />
      </div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-5 mb-4">
            <div className="w-100 rounded-circle " style={picture(storm)} />
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
            <h3>STORM</h3>
            <i className="fas fa-bolt fa-4x mb-4" />
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

        <div className="mt-4 pb-5">
          <div class="input-group">
            <input
              type="text"
              class="form-control py-4"
              placeholder="Search the City you want to check about . . ."
              onChange={handleChangeCityInput}
              required
            />
            <input
              type="text"
              class="form-control py-4"
              placeholder="Search the Country you want to check about . . ."
              onChange={handleChangeCountryInput}
              required
            />
            <div class="input-group-prepend">
              <button
                className="btn btn-secondary px-4"
                type="button"
                id="button-addon2"
                onClick={handleSubmit}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Storm;
