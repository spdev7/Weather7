import React from "react";

const WeatherSlider = (props) => {
  const { data } = props;
  const { daily } = data;
  console.log(daily);
  return (

      <div className="slider">
          <h1>Weather</h1>
        <div class="slider-element">1</div>
        <div class="slider-element">2</div>
        <div class="slider-element">3</div>
        <div class="slider-element">4</div>
        <div class="slider-element">5</div>
        {/* {daily && daily.map((x) => x.weather.map((e) => <div>{e.main}</div>))}
      </div>
      <div>
        {daily &&
          daily.map((x) => (
            <div>
              <h1>{Math.floor(x.temp.max - 273.15)}</h1>
              <h2>{Math.floor(x.temp.min - 273.15)}</h2>
            </div>
          ))} */}
      </div>
  );
};

export default WeatherSlider;
