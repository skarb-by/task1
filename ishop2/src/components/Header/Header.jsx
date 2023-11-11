import "./Header.css";
import React from "react";
import PropTypes from "prop-types";

const shopNameText = "ZARA-Беларусь";

class Header extends React.Component {
  static propTypes = {
    shopNameText: PropTypes.string,
  };

  render() {
    return <div className="ShopCaption">{shopNameText}</div>;
  }
}

export default Header;
