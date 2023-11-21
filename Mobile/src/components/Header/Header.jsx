import "./Header.css";
import React from "react";

class Header extends React.PureComponent {
  render() {
    return <div className="MobileCaption">{this.props.name}</div>;
  }
}

export default Header;
