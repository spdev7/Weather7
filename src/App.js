import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Searchbar from "./components/Searchbar";
import HomePage from "./components/HomePage";
import WeatherSlider from './components/WeatherSlider';
import MainCard from './components/MainCard/MainCard';

const API_key = "5f4778fdb74257d09fb3ce7653a1e252";

const App = () => {
  return (
    <div className="container">
      <HomePage apiKey={API_key} />
    </div>
  );
};

export default App;
