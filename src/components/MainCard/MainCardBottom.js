import React from "react";

const BottomBox = ({ pa,pb }) => (
  <div className="bottombox">
    <button className="btn">{pa}</button>
    <button className="btn">{pb}</button>
  </div>
);

const MainCardBottom = () => {
  return (
    <div className="bottom-component">
        <h1>MainCardBottom</h1>
        <BottomBox pa={"das"} pb={"fdsdf"}/>
        <BottomBox/>
        <BottomBox/>
        <BottomBox/>
    </div>
  );
};

export default MainCardBottom;
