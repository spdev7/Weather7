import React from "react";

const BottomBox = ({ parameterA, parameterB }) => (
  <div className="bottombox">
    <button className="btn">{parameterA}</button>
    <button className="btn">{parameterB}</button>
  </div>
);

const BottomComponent = () => {
  return (
    <div className="bottom-component">
        <BottomBox parameterA={"das"} parameterB={"fdsdf"}/>
        <BottomBox/>
        <BottomBox/>
        <BottomBox/>
    </div>
  );
};

export default BottomComponent;
