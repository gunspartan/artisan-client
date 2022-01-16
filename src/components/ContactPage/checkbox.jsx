import React from "react";

export const checkbox = () => {
  return (
    <div>
      <div className="checkbox-wrapper">
        <label className="checkbox" htmlFor="refinish">
          <input
            onChange={handleCheckbox}
            type="checkbox"
            name="serviceType"
            value="refinish"
            id="refinsh"
            required
          />
          Refinish
        </label>
      </div>
      <div className="checkbox-wrapper">
        <label className="checkbox" htmlFor="resurface">
          <input
            onChange={handleCheckbox}
            type="checkbox"
            name="serviceType"
            value="resurface"
            id="resurface"
            required
          />
          Resurface
        </label>
      </div>
      <div className="checkbox-wrapper">
        <label className="checkbox" htmlFor="custom">
          <input
            onChange={handleCheckbox}
            type="checkbox"
            name="serviceType"
            value="customDesign"
            id="custom"
            required
          />
          Custom Design
        </label>
      </div>
    </div>
  );
};
