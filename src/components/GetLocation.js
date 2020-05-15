import React, { Component } from "react";

export default class GetLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      longitude: null,
      latitude: null,
    };
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
    const { longitude, latitude } = this.state;
    console.log({ longitude, latitude });
    return (
      <div className="getLocation">
        <button onClick={this.setLocation}></button>
        <h1>{latitude}</h1>
        <h1>{longitude}</h1>
      </div>
    );
  }
}
