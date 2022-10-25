import React from "react";

const Button = ({type, onClick, label}) => {
  return <button type={type} onClick={onClick}>{label}</button>;
};

export default Button;
