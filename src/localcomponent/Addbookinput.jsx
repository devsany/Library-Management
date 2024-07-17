import React from "react";

const Addbookinput = ({ type, title, placeholder }) => {
  return (
    <div>
      <div className="col">
        <span>{title}</span>
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default Addbookinput;
