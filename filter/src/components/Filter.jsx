import "./Filter.css";
import React from "react";

class Filter extends React.Component {
  state = {
    input: "",
    checked: false,
    words: this.props.data,
  };

  onChange = (eo) => {
    this.setState({ input: eo.target.value.toLowerCase() }, this.processText);
  };

  checkbox = (eo) => {
    this.setState({ checked: eo.target.checked }, this.processText);
  };

  processText = () => {
    let words = this.props.data.slice();
    words = words.filter((w) => w);
    if (this.state.input)
      words = words.filter((w) => w.toLowerCase().includes(this.state.input));
    if (this.state.checked) words.sort();
    this.setState({ words });
  };

  clear = () => {
    this.setState({ input: "", checked: false }, this.processText);
  };

  render() {
    const styles = {
      color: this.state.checked ? "green" : "red",
      fontSize: "25px",
    };
    const style = { color: "red", fontSize: "25px" };

    return (
      <div className="Filter">
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.checkbox}
        />
        <input type="text" value={this.state.input} onChange={this.onChange} />
        <button onClick={this.clear}>сброс</button>
        <div className="FilterOut">
          <p> {this.state.words.join("\n")}</p>
        </div>
        <div>
          <span>
            Вы ввели: <span style={style}>{this.state.input}</span>
          </span>
        </div>
        <div>
          <span>
            В алфавитном порядке? <span style={styles}>{this.state.checked ? "ДА" : "НЕТ"}</span>
          </span>
        </div>
      </div>
    );
  }
}

export default Filter;
