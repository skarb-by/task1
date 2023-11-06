import React from "react";
import RainbowFrame from "./components/RainbowFrame.jsx";

class App extends React.Component {
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
    return <RainbowFrame colors={colors}>Hello!</RainbowFrame>;
  }
}
export default App;
