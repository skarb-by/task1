import "./RainbowFrame.css";
import React from "react";
import PropTypes from "prop-types";

class RainbowFrame extends React.Component {
  static propTypes = {
    colors: PropTypes.array,
  };

  render() {
    const cbReduce = (acc, item) => {
      return (
        <div style={{ border: "solid 8px " + item, padding: "5px" }}>{acc}</div>
      );
    };

    const rainbowFrame = this.props.colors.reduce(
      cbReduce,
      this.props.children
    );

    return <div className="RainbowFrame">{rainbowFrame}</div>;
  }
}

export default RainbowFrame;
