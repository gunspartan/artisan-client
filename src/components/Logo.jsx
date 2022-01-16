import React from "react";
import { Link } from "react-router-dom";

function Logo(props) {
  return (
    <Link className="navbar-brand" to="/">
      <img src={props.logo} alt="logo" />
    </Link>
  );
}

export default Logo;
