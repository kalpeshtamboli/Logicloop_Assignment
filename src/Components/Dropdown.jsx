import React from "react";

const Dropdown = ({ optionValues = [], label = "", placeHolder = "" }) => {
  return (
    <div className="">
      <label>{label} </label>
      <select>
        {optionValues?.map((values) => {
          return <option value={values}>{values}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
