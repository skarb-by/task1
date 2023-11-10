import React, { Suspense } from "react";
//import RainbowFrame from "./components/RainbowFrame.jsx";
const LazyComp = React.lazy(() => import("./components/RainbowFrame.jsx"));

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
    return (
      <Suspense fallback={<div style={{ fontSize: "100px" }}>Загрузка...</div>}>
        <LazyComp colors={colors}>Hello!</LazyComp>
      </Suspense>
    );
  }
}
export default App;
