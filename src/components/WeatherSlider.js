import React from "react";

const WeatherSlider = (props) => {
  const { data } = props;
  const { daily } = data;
  console.log(props.data);
  return (

        <div className="slider">
        {
          daily && daily.map((x) => <div className="slider-element-a">
            <div className="slider-a">
            <h4>{Math.floor(x.temp.max - 273.15)}</h4>
            <h5>{Math.floor(x.temp.min - 273.15)}</h5>
            </div>
            {
              x.weather.map((e) => <p>{e.main}</p>)
            }
          </div>)
        }
      </div>
  );
};

export default WeatherSlider;
