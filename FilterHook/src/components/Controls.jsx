import React, { useState, useEffect } from "react";

const Controls = ({ apply }) => {
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState("");

  function onChange(eo) {
    setInput(eo.target.value.toLowerCase());
  }

  function checkbox(eo) {
    setChecked(eo.target.checked);
  }

  function clear() {
    setInput("");
    setChecked(false);
  }
  useEffect(() => {
    apply(input, checked);
    document.title = `В алфавитном? ${checked ? "ДА" : "НЕТ"}`;
  }, [checked, input]);

  const styles = {
    color: checked ? "green" : "red",
    fontSize: "25px",
  };
  const style = { color: "red", fontSize: "25px" };
  return (
    <>
      <div className="Filter">
        <input type="checkbox" checked={checked} onChange={checkbox} />
        <input type="text" value={input} onChange={onChange} />
        <button onClick={clear}>сброс</button>
      </div>
      <div className="Info">
        <div>
          <span>
            Вы ввели: <span style={style}>{input}</span>
          </span>
        </div>
        <div>
          <span>
            В алфавитном порядке?{" "}
            <span style={styles}>{checked ? "ДА" : "НЕТ"}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Controls;
