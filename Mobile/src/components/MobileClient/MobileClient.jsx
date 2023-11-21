import React from "react";
import PropTypes from "prop-types";
import { mobileEvents } from "../Events/Events.jsx";

class MobileClient extends React.PureComponent {
  static propTypes = {
    client: PropTypes.shape({
      id: PropTypes.number,
      fam: PropTypes.string,
      im: PropTypes.string,
      otch: PropTypes.string,
      balance: PropTypes.number,
    }),
  };

  constructor(props) {
    super(props);
    this.comEl = React.createRef();
    this.famEl = React.createRef();
    this.imEl = React.createRef();
    this.otchEl = React.createRef();
    this.balanceEl = React.createRef();
  }

  state = {
    mode: this.props.mode,
  };

  delete = (eo) => {
    mobileEvents.emit("Edelete", this.props.client);
  };

  edit = (eo) => {
    this.setState({ mode: true });
    mobileEvents.emit("Eedit", this.props.client);
  };

  save = (eo) => {
    if (
      this.famEl.current.value !== "" &&
      this.balanceEl.current.value !== ""
    ) {
      this.setState({ mode: false });

      const elem = {
        id: this.props.client.id,
        com: this.comEl.current.value,
        fam: this.famEl.current.value,
        im: this.imEl.current.value,
        otch: this.otchEl.current.value,
        balance: +this.balanceEl.current.value,
      };
      mobileEvents.emit("Esave", elem);
    }
  };

  render() {
    console.log("MobileClient id=" + this.props.client.id + " render");

    const isActive = this.props.client.balance > 0;

    return (
      <tr>
        <td>
          {this.state.mode === false ? (
            this.props.client.com
          ) : (
            <input
              ref={this.comEl}
              type="text"
              defaultValue={this.props.client.com}
            ></input>
          )}
        </td>
        <td>
          {this.state.mode === false ? (
            this.props.client.fam
          ) : (
            <input
              ref={this.famEl}
              type="text"
              defaultValue={this.props.client.fam}
            ></input>
          )}
        </td>
        <td>
          {this.state.mode === false ? (
            this.props.client.im
          ) : (
            <input
              ref={this.imEl}
              type="text"
              defaultValue={this.props.client.im}
            ></input>
          )}
        </td>
        <td>
          {this.state.mode === false ? (
            this.props.client.otch
          ) : (
            <input
              ref={this.otchEl}
              type="text"
              defaultValue={this.props.client.otch}
            ></input>
          )}
        </td>
        <td>
          {this.state.mode === false ? (
            this.props.client.balance
          ) : (
            <input
              ref={this.balanceEl}
              type="number"
              defaultValue={this.props.client.balance}
            ></input>
          )}
        </td>
        <td style={{ backgroundColor: isActive ? "green" : "red" }}>
          {isActive ? "Active" : "Blocked"}
        </td>
        <td>
          {this.state.mode === false ? (
            <button onClick={this.edit}>Редактировать</button>
          ) : (
            <button onClick={this.save}>Сохранить</button>
          )}
        </td>
        <td>
          <button onClick={this.delete}>Удалить</button>
        </td>
      </tr>
    );
  }
}

export default MobileClient;
