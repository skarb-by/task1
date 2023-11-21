import React from "react";
import PropTypes from "prop-types";

import "./MobileCompany.css";

import MobileClient from "../MobileClient/MobileClient.jsx";
import MobileFilter from "../MobileFilter/MobileFilter.jsx";
import { mobileEvents } from "../Events/Events.jsx";
import Header from "../Header/Header.jsx";

let companyName = "A1 and МТС";

class MobileCompany extends React.PureComponent {
  static propTypes = {
    clients: PropTypes.array.isRequired,
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
    name: companyName,
    clients: this.props.clients,
    isEditMode: false,
    status: 0,
  };

  componentDidMount = () => {
    mobileEvents.addListener("Eedit", this.edit);
    mobileEvents.addListener("EsSave", this.save);
    mobileEvents.addListener("Edelete", this.delete);
    mobileEvents.addListener("EFilterAll", this.filterAll);
    mobileEvents.addListener("EFilterActive", this.filterActive);
    mobileEvents.addListener("EFilterBlocked", this.filterBlocked);
    mobileEvents.addListener("EFilterMTS", this.filterMTS);
    mobileEvents.addListener("EFilterA1", this.filterA1);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener("Eedit", this.edit);
    mobileEvents.addListener("Esave", this.save);
    mobileEvents.addListener("Edelete", this.delete);
    mobileEvents.removeListener("EFilterAll", this.filterAll);
    mobileEvents.removeListener("EFilterActive", this.filterActive);
    mobileEvents.removeListener("EFilterBlocked", this.filterBlocked);
    mobileEvents.removeListener("EFilterMTS", this.filterMTS);
    mobileEvents.removeListener("EFilterA1", this.filterA1);
  };

  edit = (client) => {
    alert(
      `клиента: ${client.fam} ${client.im} ${client.otch} \nкомпании: ${client.com}`
    );
  };
  newId = () => {
    const clients = this.state.clients;
    const max = clients.reduce((acc, curr) =>
      acc.id > curr.id ? acc.id : curr.id
    );
    return max + 1;
  };
  save = (client) => {
    this.setState({ isEditMode: false });
    const isOldClients = this.state.clients.some((el) => el.id === client.id);

    if (!isOldClients) {
      this.setState((prev) => ({
        clients: [...prev.clients, { ...client, id: this.newId() }],
      }));
    } else {
      const newClientsArr = this.state.clients.map((e) =>
        e.id === client.id ? client : e
      );
      this.setState({ clients: [...newClientsArr] });
    }
  };

  delete = (client) => {
    const newClients = [...this.state.clients];
    const newClientsArr = [];

    for (let i = 0; i < newClients.length; i++)
      if (newClients[i].id !== client.id) newClientsArr.push(newClients[i]);
    this.setState({ clients: newClientsArr });
  };

  addClient = () => {
    this.setState({ isEditMode: true });
  };
  cancel = () => {
    this.setState({ isEditMode: false });
  };

  add = (eo) => {
    if (
      this.famEl.current.value !== "" &&
      this.balanceEl.current.value !== ""
    ) {
      const elem = {
        com: this.comEl.current.value,
        fam: this.famEl.current.value,
        im: this.imEl.current.value,
        otch: this.otchEl.current.value,
        balance: +this.balanceEl.current.value,
      };

      this.save(elem);
    }
  };
  filterAll = () => this.setState({ status: 0, name: companyName });
  filterActive = () => this.setState({ status: 1, name: "Активные" });
  filterBlocked = () => this.setState({ status: 2, name: "Заблокированные" });
  filterMTS = () => this.setState({ status: 3, name: "МТС" });
  filterA1 = () => this.setState({ status: 4, name: "A1" });

  render() {
    console.log("MobileCompany render");

    const FormAddClient = (
      <tr>
        <td>
          <input ref={this.comEl} type="text"></input>
        </td>
        <td>
          <input ref={this.famEl} type="text"></input>
        </td>
        <td>
          <input ref={this.imEl} type="text"></input>
        </td>
        <td>
          <input ref={this.otchEl} type="text"></input>
        </td>
        <td>
          <input ref={this.balanceEl} type="number"></input>
        </td>
        <td></td>
        <td>
          <button onClick={this.add}>Добавить</button>
        </td>
        <td>
          <button onClick={this.cancel}>Отмена</button>
        </td>
      </tr>
    );

    const filteredClients = this.state.clients.filter((client) => {
      switch (this.state.status) {
        case 1:
          return client.balance > 0;
        case 2:
          return client.balance < 0;
        case 3:
          return client.com === "МТС";
        case 4:
          return client.com === "А1";
        default:
          return true;
      }
    });

    const clientsCode = filteredClients.map((client) => {
      return (
        <MobileClient
          key={client.id}
          client={client}
          mode={this.state.isEditMode}
        />
      );
    });

    return (
      <div className="MobileCompany">
        <Header name={this.state.name} />
        <MobileFilter />
        <table>
          <thead>
            <tr>
              <td>Компания</td>
              <td>Фамилия</td>
              <td>Имя</td>
              <td>Отчество</td>
              <td>Баланс</td>
              <td>Статус</td>
              <td>Редактировать</td>
              <td>Удалить</td>
            </tr>
          </thead>
          <tbody>
            {clientsCode}
            {this.state.isEditMode === true ? FormAddClient : null}
          </tbody>
        </table>
        <button onClick={this.addClient}>Добавить клиента</button>
      </div>
    );
  }
}

export default MobileCompany;
