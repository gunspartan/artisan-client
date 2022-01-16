import React from "react";
import { Link } from "react-router-dom";

export default function QuoteButton() {
  return (
    <div className="QuoteButton">
      <Link to="/contact" className="QuoteButton-btn">
        <h2>Get a quote</h2>
        <i className="fas fa-caret-right"></i>
      </Link>
      <hr className="btn-underline" />
    </div>
  );
}
