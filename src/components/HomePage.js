import React, { Component } from "react";
import Searchbar from "./Searchbar";
import WeatherSlider from "./WeatherSlider";
import MainCard from "./MainCard/MainCard";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      longitude: null,
      latitude: null,
      data: {},
    };
  }

  async componentDidMount() {
    await this.getCoordinates();
    await this.getData();
  }

  getData = async () => {
    return new Promise(async (resolve, reject) => {
      const { latitude, longitude } = this.state;
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${this.props.apiKey}`
      );
      const response = await api_call.json();
      this.setState({
        data: response,
      });
      resolve("Done");
    });
  };

  setLocation = async () => {
    return new Promise(async (resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    });
  };

  getCoordinates = async (position) => {
    let d = await this.setLocation();
    console.log("d", d);
    await this.setState({
      latitude: d.coords.latitude,
      longitude: d.coords.longitude,
    });
  };

  handleLocationError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  };

  render() {
    const { longitude, latitude, data } = this.state;

    return (
      <div>
        <Searchbar />
        <WeatherSlider data={data} />
        <MainCard />
      </div>
    );
  }
}
