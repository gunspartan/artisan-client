import React from "react";

function DesignElement(props) {
  return (
    <div className={`DesignElement ${props.cName}`}>
      <h1>{props.word}</h1>
    </div>
  );
}

export default DesignElement;
