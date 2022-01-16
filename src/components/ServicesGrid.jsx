import React from "react";

export default function ServicesGrid(props) {
  return (
    <div className="ServicesGrid ratio ratio-1x1">
      <img className="" src={props.image} alt="" />
      <div className="text-box">
        <h1 className="text-center">{props.title}</h1>
      </div>
    </div>
  );
}
