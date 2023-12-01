import "./Filter.css";
import React, { useState, useRef } from "react";

const Filter = ({ data }) => {
  const [words, setWords] = useState(data);
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState("");

  const checkedEl = useRef(null);
  const inputEl = useRef(null);

  React.useEffect(() => {
    document.title = `В алфавитном? ${checked ? "ДА" : "НЕТ"}`;
  }, [checked]);

  function onChange() {
    setInput(inputEl.current.value.toLowerCase(), processText());
  }

  function checkbox() {
    setChecked(checkedEl.current.checked, processText());
  }

  function processText() {
    const input = inputEl.current.value.toLowerCase();
    const checked = checkedEl.current.checked;
    let words = data.slice();
    words = words.filter((w) => w);
    if (input) words = words.filter((word) => word.includes(input));
    if (checked) words.sort();
    setWords(words.slice());
  }

  function clear() {
    setInput("");
    setChecked(false);
    setWords(data);
  }

  const styles = {
    color: checked ? "green" : "red",
    fontSize: "25px",
  };
  const style = { color: "red", fontSize: "25px" };

  return (
    <div className="Filter">
      <input
        type="checkbox"
        ref={checkedEl}
        checked={checked}
        onChange={checkbox}
      />
      <input type="text" ref={inputEl} value={input} onChange={onChange} />
      <button onClick={clear}>сброс</button>
      <div className="FilterOut">
        <p> {words.join("\n")}</p>
      </div>
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
  );
};

export default Filter;
