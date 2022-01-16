import React from "react";
import QuoteButton from "../QuoteButton";
import DesignElement from "../DesignElement";

export default function HomeEnd() {
  return (
    <div className="container-fluid HomeEnd">
      <div className="row justify-content-between home-content">
        <div className="col-lg-6 home-end-text">
          <div className="row">
            <div className="col">
              <h1>Unmatched Quality</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi hic iure nobis! Sequi alias doloremque iure debitis exercitationem ut officiis!</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 offeset-lg-5 align-self-end quote-btn">
          <QuoteButton />
        </div>
      </div>
      <DesignElement word="quality" cName="quality" />
    </div>
  );
}
