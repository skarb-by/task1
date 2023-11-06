import React from "react";
import PropTypes from "prop-types";
import "./Br2jsx.css";

class Br2jsx extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  };

  render() {
    const textArray = this.props.text.split(/<br\s?\/?>/);
 
    const text = textArray.map((item, id) => {
      return (
          <>
      {id !== 0 && <br /> }
          {item}
        
        </>
      
    )})
    

    return <div className="Br2jsx">{text}</div>;
  }
}

export default Br2jsx;
