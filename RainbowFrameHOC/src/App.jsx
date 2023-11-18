import React from "react";
import "./components/withRainbowFrame.css";
import DoubleButton from "./components/DoubleButton.jsx";

import { withRainbowFrame } from "./components/withRainbowFrame.jsx";

class App extends React.Component {
  cbPressed = (num) => {
    alert(num);
  };

  render() {
    let colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "#00BFFF",
      "blue",
      "purple",
      "black",
      "grey",
    ];
    let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

    return (
      <div className="withRainbowFrameApp">
        <DoubleButton
          caption1="однажды"
          caption2="пору"
          cbPressed={this.cbPressed}
        >
          в студёную зимнюю
        </DoubleButton>

        <FramedDoubleButton
          caption1="я из лесу"
          caption2="мороз"
          cbPressed={this.cbPressed}
        >
          вышел, был сильный
        </FramedDoubleButton>
      </div>
    );
  }
}
export default App;
