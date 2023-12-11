import "./Header.css";
import React from "react";

const Header = ({ name }) => {
  console.log(`Header ${name} render`);
  return <div className="MobileCaption">{name}</div>;
};

export default React.memo(Header);
