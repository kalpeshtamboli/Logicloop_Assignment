import React from "react";

const Inputbox = ({ classes, placeholder, label, type }) => {
  return (
    <>
      <label className="">{label}
      <input type={type} className={classes} placeholder={placeholder} />
      </label> 
    </>
  );
};

export default Inputbox;
