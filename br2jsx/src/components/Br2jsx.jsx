import React from "react";
import PropTypes from "prop-types";
import "./Br2jsx.css";
import To from "./To";

class Br2jsx extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  };

  render() {
    const textArray = this.props.text.split(/<br\s?\/?>/);

    const text = textArray.map((el, id) => {
      return (
        <To key={id}>
          {id !== 0 && <br />} {el}
        </To>
      );
    });

    return <div className="Br2jsx">{text}</div>;
  }
}

export default Br2jsx;
