import React, { Component } from "react";

const API_key = "5f4778fdb74257d09fb3ce7653a1e252";

const getData = async (latitude, longitude) => {
  const api_call = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_key}`
  );
  const response = await api_call.json();
  this.setState({
      data:response
  })
};

export default class GetLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      longitude: null,
      latitude: null,
      data:{},
    };
  }

  componentDidMount() {
    this.setLocation();
  }

  setLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getCoordinates,
        this.handleLocationError
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  getCoordinates = (position) => {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
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
    const { longitude, latitude,data } = this.state;
    console.log({data});
    return (
      <div className="getLocation">
        {/* <button onClick={this.setLocation}></button> */}
        <button
          onClick={() => {
              getData(latitude, longitude);
            }}
            >
          ON
        </button>
        <h1>{data}</h1>
        
      </div>
    );
  }
}
