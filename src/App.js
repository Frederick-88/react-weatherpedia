import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [dataWeather, setDataWeather] = useState("");
  useEffect(() => {
    axios
      .get(
        "http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02"
      )
      .then((response) => {
        console.log(response);
        setDataWeather(response.data);
      });
  });
  console.log(dataWeather);

  return (
    <div>
      <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr class="my-4" />
        <div></div>
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <a class="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
      <p>{`data${dataWeather}`}</p>
    </div>
  );
}

export default App;
