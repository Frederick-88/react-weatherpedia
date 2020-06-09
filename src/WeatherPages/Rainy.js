import React, { useState, useEffect } from "react";
import axios from "axios";
import sunny from "./assets/sunnyfix.gif";
import rainy from "./assets/rainyfix.gif";
import cloudy from "./assets/cloudyfix.gif";
import windy from "./assets/windyfix.gif";
import storm from "./assets/stormfix.gif";
import logo from "./assets/logo.png";
import "./style.css";

function Rainy() {
  const [dataWeather, setDataWeather] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=f4f84825d6ef4021892c477a6fca9f58"
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
      height: "600px",
    };
  };

  return (
    <div style={{ backgroundColor: "#0c5563" }}>
      {/* <div className="w-100 vh-100" style={picture  (sunny)}> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-navbar">
        <a class="navbar-brand" href="#">
          <img src={logo} className="img-navbar" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item active">
              <a class="nav-link text-white" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="w-50 rounded-circle" style={picture(rainy)} />
      <div class="jumbotron bg-transparent">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead bg-transparent">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr class="my-4" />
        {/* <div className="w-100" style={picture(sunny)}></div> */}
        {/* <div className="w-100" style={picture(rainy)}></div> */}

        {/* <img src={sunny} /> */}
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <a class="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>

      {/* <p>{`data${dataWeather}`}</p> */}
    </div>
  );
}

export default Rainy;
