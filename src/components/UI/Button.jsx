import React from "react";

const Button = ({ type, onClick, label }) => {
  return (
    <button
      className="text-grey-500 mr-5 py-2 px-6 rounded-lg border-0 text-sm font-medium bg-blue-50 text-blue-700 hover:bg-amber-50 hover:text-amber-700"
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
