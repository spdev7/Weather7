import React, { Component } from "react";
import MainCardGraph from "./MainCardGraph";

const BottomBox = ({ pa, pb }) => (
  <div className="bottombox">
    <div>{pa}</div>
    <div>{pb}</div>
  </div>
);

export default class MainCard extends Component {
  render() {
    return (
      <div className="main-card-parent">
        <div className="main-card-header">
          <h1>27^c</h1>
          <img src="" />
        </div>
        <MainCardGraph />
        <div className="main-card-bottom">
          <BottomBox pa={"das"} pb={"fdsdf"} />
          <BottomBox />
          <BottomBox />
          <BottomBox />
        </div>
      </div>
    );
  }
}
