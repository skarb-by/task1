import "./Filter.css";
import React, { useState } from "react";
import Controls from "./Controls.jsx";
import List from "./List.jsx";

const Filter = ({ data }) => {
  const [words, setWords] = useState([]);

  function apply(input, checked) {
    let words = data.slice();
    if (input) words = words.filter((word) => word.includes(input));
    if (checked) words.sort();
    setWords(words);
  }

  return (
    <div className="FilterHook">
      <Controls apply={apply} />
      <List words={words} />
    </div>
  );
};

export default Filter;
