import React from "react";
import { Link } from "react-router-dom";

export default function PortfolioItem(props) {
  return (
    <div className="PortfolioItem">
      <Link to={`/portfolio/${props.id}`}>
        <h1 className="PortfolioItem-title">{props.title}</h1>
        <div className="PortfolioItem-image ratio ratio-4x3">
          <img className="img-fluid" src={props.img} alt="Portfolio" />
        </div>
      </Link>
    </div>
  );
}
