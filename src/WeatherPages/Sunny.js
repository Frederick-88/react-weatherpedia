import React, { useState } from "react";
import moment from "moment";
import sunny from "../assets/sunnyfix.gif";
import logo from "../assets/logo.png";
import "../style.css";

function Sunny(props) {
  const temperature = Math.ceil(props.data.main.temp);

  let convertDate = moment.unix(props.data.dt);
  let lastUpdateTime = convertDate.format("dddd, MMMM Do YYYY, h:mm:ss a");

  const description = props.data.weather[0].description.toUpperCase();

  const visibility = props.data.visibility / 1000;

  const [inputCity, setInputCity] = useState("");
  const [inputCountry, setInputCountry] = useState("");

  const picture = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
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
    <div className="sunny-bg">
      <div className="text-center">
        <img src={logo} style={{ width: "15rem", margin: "1rem" }} alt="..." />
        <hr className="hr-navbar mt-0" />
      </div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-5 mb-4 d-flex justify-content-center">
            <div className="rounded-circle gif-fx" style={picture(sunny)} />
          </div>

          <div className="col-md-7 text-dark text-center align-self-center">
            <div className="d-flex d-row justify-content-center">
              <i className="fas fa-map-marker-alt fa-2x mr-3" />
              <h3 className="my-0">
                {props.data.name}, {props.data.sys.country}
              </h3>
            </div>
            <h6 className="celcius-txt my-0">{temperature}°C</h6>
            <h4>{description}</h4>
            <i className="fas fa-sun fa-4x mb-4" />
            <p>Last Update: {lastUpdateTime}</p>
          </div>
        </div>

        <div className="row text-center mt-4 text-dark">
          <div className="col-md-4">
            <p className="display-4 my-0">{props.data.main.humidity}%</p>
            <div className="d-flex d-row justify-content-center">
              <h3>HUMIDITY</h3>
              <i className="fas fa-tint icon-fx2" />
            </div>
          </div>
          <div className="vertical-line only-desktop" />
          <div className="horizontal-line only-mobile" />
          <div className="col-md-3">
            <p className="display-4 my-0">{visibility ? visibility : "- "}km</p>
            <div className="d-flex d-row justify-content-center">
              <h3>VISIBILITY</h3>
              <i className="far fa-eye icon-fx2" />
            </div>
          </div>
          <div className="vertical-line only-desktop" />
          <div className="horizontal-line only-mobile" />
          <div className="col-md-4">
            <p className="display-4 my-0">{props.data.wind.speed}km/h</p>
            <div className="d-flex d-row justify-content-center">
              <h3>WIND SPEED</h3>
              <i className="fas fa-wind icon-fx2" />
            </div>
          </div>
        </div>

        <div className="mt-4 only-desktop">
          <div className="input-group">
            <input
              type="text"
              className="form-control py-4"
              placeholder="Search the City you want to check about . . ."
              onChange={handleChangeCityInput}
              required
            />
            <input
              type="text"
              className="form-control py-4"
              placeholder="Search the Country you want to check about . . ."
              onChange={handleChangeCountryInput}
              required
            />
            <div className="input-group-prepend">
              <button
                className="btn btn-warning px-4"
                type="button"
                id="button-addon2"
                onClick={handleSubmit}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 only-mobile">
          <div className="input-group">
            <input
              type="text"
              className="form-control py-4"
              placeholder="Check City"
              onChange={handleChangeCityInput}
              required
            />
            <input
              type="text"
              className="form-control py-4"
              placeholder="Check Country"
              onChange={handleChangeCountryInput}
              required
            />
            <div className="input-group-prepend">
              <button
                className="btn btn-warning px-4"
                type="button"
                id="button-addon2"
                onClick={handleSubmit}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a className="btn btn-primary home-btn" href="/" role="button">
            <i className="fas fa-arrow-circle-left mr-3"></i>
            Back to Home
          </a>
        </div>
      </div>
      <div className="footer-bg d-flex justify-content-center">
        <div className="align-self-center text-center">
          <h4 className="text-white">Check out the Founder!</h4>
          <a
            className="icon-fx"
            href="https://github.com/Frederick-88"
            target="blank"
          >
            <i className="fab fa-github" />
          </a>
          <a className="icon-fx" href="https://fdtech.asia/" target="blank">
            <i className="fab fa-safari" />
          </a>
          <a
            className="icon-fx"
            href="https://www.linkedin.com/in/chen-frederick-1324301a8/"
            target="blank"
          >
            <i className="fab fa-linkedin" />
          </a>
          <p className="text-white mb-0 mt-2">© 2020 Weatherpedia Batam</p>
        </div>
      </div>
    </div>
  );
}

export default Sunny;
