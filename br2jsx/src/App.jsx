import React, { Suspense } from "react";

const LazyComp = React.lazy(() => import("./components/Br2jsx.jsx"));
class App extends React.Component {
  render() {
    let text =
      "первый<br>второй<br/>третий<br />четвертый<br />пятый<br />шестой<br />последний";
    return (
      <Suspense fallback={<div style={{ fontSize: "100px" }}>Загрузка...</div>}>
        <LazyComp text={text} />
      </Suspense>
    );
  }
}

export default App;
