import React, { useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MobileCompany.css";
import { updateName } from "../../redux/nameSlice.js";
import { updateStatus } from "../../redux/statusSlice.js";
import { updateMode } from "../../redux/modeSlice.js";
import { updateDel, updateSave } from "../../redux/clientsSlice.js";
import MobileClient from "../MobileClient/MobileClient.jsx";
import MobileFilter from "../MobileFilter/MobileFilter.jsx";
import { mobileEvents } from "../Events/Events.js";
import Header from "../Header/Header.jsx";

const MobileCompany = () => {
  const dispatch = useDispatch();

  const comEl = useRef(null);
  const famEl = useRef(null);
  const imEl = useRef(null);
  const otchEl = useRef(null);
  const balanceEl = useRef(null);

  const comName = useSelector((state) => state.name);
  const statusSort = useSelector((state) => state.status);
  const modeStatus = useSelector((state) => state.mode);
  const clientsBase = useSelector((state) => state.clients);
  useEffect(() => {
    mobileEvents.addListener("Eedit", edit);
    mobileEvents.addListener("Esave", save);
    mobileEvents.addListener("Edelete", del);
    mobileEvents.addListener("EFilterAll", filterAll);
    mobileEvents.addListener("EFilterActive", filterActive);
    mobileEvents.addListener("EFilterBlocked", filterBlocked);
    mobileEvents.addListener("EFilterMTS", filterMTS);
    mobileEvents.addListener("EFilterA1", filterA1);
    document.title = `${comName.name}`;

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
  }, [clientsBase, comName, statusSort]);

  function edit(client) {
    alert(
      `клиента: ${client.fam} ${client.im} ${client.otch} \nкомпании: ${client.com}`
    );
  }

  function save(id) {
    dispatch(updateSave(id));
  }
  function del(id) {
    dispatch(updateDel(id));
  }

  function addClient() {
    dispatch(updateMode({ mode: true }));
  }

  function cancel() {
    dispatch(updateMode({ mode: false }));
  }

  function add() {
    if (famEl.current.value !== "" && balanceEl.current.value !== "") {
      dispatch(updateMode({ mode: false }));
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
    dispatch(updateStatus({ status: 0 }));
    dispatch(updateName({ name: "A1 and МТС" }));
  }

  function filterActive() {
    dispatch(updateStatus({ status: 1 }));
    dispatch(updateName({ name: "Активные" }));
  }
  function filterBlocked() {
    dispatch(updateStatus({ status: 2 }));
    dispatch(updateName({ name: "Заблокированные" }));
  }
  function filterMTS() {
    dispatch(updateStatus({ status: 3 }));
    dispatch(updateName({ name: "МТС" }));
  }
  function filterA1() {
    dispatch(updateStatus({ status: 4 }));
    dispatch(updateName({ name: "А1" }));
  }

  const filteredClients = clientsBase.clients.filter((client) => {
    switch (statusSort.status) {
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

  const clientsCode = useMemo(
    () =>
      filteredClients.map((client) => (
        <MobileClient key={client.id} client={client} />
      )),
    [filteredClients]
  );

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
  const noClient = (
    <div style={{ fontSize: "50px", color: "red" }}> Клиенты отсутствуют </div>
  );
  return (
    <div className="MobileCompany">
      <Header name={comName.name} />
      <MobileFilter name={comName.name} />
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
          {modeStatus.mode === true ? FormAddClient : null}
        </tbody>
      </table>
      {clientsBase.clients.length === 0 ? noClient : null}
      <button onClick={addClient}>Добавить клиента</button>
    </div>
  );
};
export default MobileCompany;
