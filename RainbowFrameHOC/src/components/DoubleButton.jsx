import React from "react";
import PropTypes from "prop-types";

class DoubleButton extends React.Component {
  static propTypes = {
    caption1: PropTypes.string,
    caption2: PropTypes.string,
    children: PropTypes.string,
    cbPressed: PropTypes.func,
  };

  render() {
    return (
      <div>
        <input
          type="button"
          onClick={() => this.props.cbPressed(this.props.caption1)}
          value={this.props.caption1}
        />
        <span>{this.props.children}</span>
        <input
          type="button"
          onClick={() => this.props.cbPressed(this.props.caption2)}
          value={this.props.caption2}
        />
      </div>
    );
  }
}

export default DoubleButton;
