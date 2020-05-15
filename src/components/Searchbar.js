import React, { Component } from "react";
import { BsSearch } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";


export default class Searchbar extends Component {
  getInput = () => console.log("sdfa");

  render() {
    return (
      <div className="searchbarcontainer">
        <div className="searchbar">
          <GrLocation className="location" />
          <input type="text" className="input" onChange={this.getInput} />
          <BsSearch className="searchicon" />
        </div>
      </div>
    );
  }
}
