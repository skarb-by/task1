import React from "react";

function withRainbowFrame(colors) {
  return function (Comp) {
    class NewComp extends React.Component {
      render() {
        let code = <Comp {...this.props} />;
        colors.forEach((color) => {
          code = (
            <div style={{ border: "solid 8px " + color, padding: "5px" }}>
              {code}
            </div>
          );
        });
        return <div className="withRainbowFrame">{code}</div>;
      }
    }
    return NewComp;
  };
}

export { withRainbowFrame };
