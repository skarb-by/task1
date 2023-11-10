import React from "react";
import PropTypes from "prop-types";
import "./Br2jsx.css";
class Br2jsx extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  };

  render() {
    const text = this.props.text.split(/<br\s?\/?>/).map((el, id) => {
      return (
        <>
          {id !== 0 && <br />} {el}
        </>
      );
    });

    return <div className="Br2jsx">{text}</div>;
  }
}
export default Br2jsx;

