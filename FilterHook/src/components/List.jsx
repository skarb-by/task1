import React from "react";

const List = (props) => {
  return (
    <div className="FilterOut">
      <p>{props.words.join("\n")}</p>
    </div>
  );
};

export default List;
