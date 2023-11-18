import React from "react";
import PropTypes from "prop-types";
import "./Br2jsx.css";
class Br2jsx extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  };

  render() {
/*
    const text = this.props.text.split(/<br\s?\/?>/).map((el, id) => {
      return (
        <>
          {id !== 0 && <br key={id}></br>} {el}
        </>
      );
    });

    return <div className="Br2jsx">{text}</div>;
*/
let lines=this.props.text.split(/<br *\/?>/)
let jsxarr=[]
for (let i=0; i<lines.length; i++) {
  jsxarr.push(i ? <br key={i}></br> : null);
  jsxarr.push(lines[i]);
  /*
  if (i)
  jsxarr.push(  <br />);
  jsxarr.push(lines[i]);
  */
  /*
  jsxarr.push(lines[i]);
  if (i<lines.length-1)
  jsxarr.push(  <br />);
*/
}
return <div className="Br2jsx">{jsxarr}</div>;
  }
}
export default Br2jsx;

