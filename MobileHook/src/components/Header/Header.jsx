import "./Header.css";
import React from "react";

const Header = React.memo((props) => {
  console.log(`Header ${props.name} render`);
  return <div className="MobileCaption">{props.name}</div>;
});

export default Header;
