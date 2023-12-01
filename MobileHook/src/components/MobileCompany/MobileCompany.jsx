import React, { useState, useEffect, useRef } from "react";

import "./MobileCompany.css";

import MobileClient from "../MobileClient/MobileClient.jsx";
import MobileFilter from "../MobileFilter/MobileFilter.jsx";
import { mobileEvents } from "../Events/Events.jsx";
import Header from "../Header/Header.jsx";

const MobileCompany = (props) => {
  const [clients, setClients] = useState(props.clients);
  const [modeAdd, setModeAdd] = useState(false);
  const [status, setStatus] = useState(0);
  const [name, setName] = useState("A1 and МТС");

  const comEl = useRef(null);
  const famEl = useRef(null);
  const imEl = useRef(null);
  const otchEl = useRef(null);
  const balanceEl = useRef(null);

  useEffect(() => {
    mobileEvents.addListener("Eedit", edit);
    mobileEvents.addListener("Esave", save);
    mobileEvents.addListener("Edelete", del);
    mobileEvents.addListener("EFilterAll", filterAll);
    mobileEvents.addListener("EFilterActive", filterActive);
    mobileEvents.addListener("EFilterBlocked", filterBlocked);
    mobileEvents.addListener("EFilterMTS", filterMTS);
    mobileEvents.addListener("EFilterA1", filterA1);
    document.title = `${name}`;

    return () => {
      mobileEvents.removeListener("Eedit", edit);
      mobileEvents.removeListener("Esave", save);
      mobileEvents.removeListener("Edelete", del);
      mobileEvents.removeListener("EFilterAll", filterAll);
      mobileEvents.removeListener("EFilterActive", filterActive);
      mobileEvents.removeListener("EFilterBlocked", filterBlocked);
      mobileEvents.removeListener("EFilterMTS", filterMTS);
      mobileEvents.removeListener("EFilterA1", filterA1);
    };
  }, [clients, name]);

  function edit(client) {
    alert(
      `клиента: ${client.fam} ${client.im} ${client.otch} \nкомпании: ${client.com}`
    );
  }

  function newId() {
    const newClients = [...clients];

    const max = newClients.reduce((acc, curr) =>
      acc.id > curr.id ? acc.id : curr.id
    );
    return max + 1;
  }

  function save(client) {
    const isOldClients = clients.some((el) => el.id === client.id);

    if (!isOldClients) {
      setClients([...clients, { ...client, id: newId() }]);
    } else {
      const newClientsArr = clients.map((e) =>
        e.id === client.id ? client : e
      );

      setClients([...newClientsArr]);
    }
  }

  function del(client) {
    const newClients = [...clients];
    const newClientsArr = [];

    for (let i = 0; i < newClients.length; i++)
      if (newClients[i].id !== client.id) newClientsArr.push(newClients[i]);

    setClients(newClientsArr);
  }

  function addClient() {
    setModeAdd(true);
  }

  function cancel() {
    setModeAdd(false);
  }

  function add() {
    if (famEl.current.value !== "" && balanceEl.current.value !== "") {
      setModeAdd(false);
      const elem = {
        com: comEl.current.value,
        fam: famEl.current.value,
        im: imEl.current.value,
        otch: otchEl.current.value,
        balance: +balanceEl.current.value,
      };

      save(elem);
    }
  }

  function filterAll() {
    setStatus(0);
    setName("A1 and МТС");
  }

  function filterActive() {
    setStatus(1);
    setName("Активные");
  }
  function filterBlocked() {
    setStatus(2);
    setName("Заблокированные");
  }
  function filterMTS() {
    setStatus(3);
    setName("МТС");
  }
  function filterA1() {
    setStatus(4);
    setName("А1");
  }

  const filteredClients = clients.filter((client) => {
    switch (status) {
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
    return <MobileClient key={client.id} client={client} modeAdd={modeAdd} />;
  });

  const FormAddClient = (
    <tr>
      <td>
        <input ref={comEl} type="text"></input>
      </td>
      <td>
        <input ref={famEl} type="text"></input>
      </td>
      <td>
        <input ref={imEl} type="text"></input>
      </td>
      <td>
        <input ref={otchEl} type="text"></input>
      </td>
      <td>
        <input ref={balanceEl} type="number"></input>
      </td>
      <td></td>
      <td>
        <button onClick={add}>Добавить</button>
      </td>
      <td>
        <button onClick={cancel}>Отмена</button>
      </td>
    </tr>
  );

  return (
    <div className="MobileCompany">
      <Header name={name} />
      <MobileFilter status={status} name={name} />
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
          {modeAdd === true ? FormAddClient : null}
        </tbody>
      </table>
      <button onClick={addClient}>Добавить клиента</button>
    </div>
  );
};
export default MobileCompany;
