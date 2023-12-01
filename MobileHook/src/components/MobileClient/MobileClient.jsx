import React, { useRef, useState } from "react";

import { mobileEvents } from "../Events/Events.jsx";

const MobileClient = React.memo((props) => {
  const comEl = useRef(null);
  const famEl = useRef(null);
  const imEl = useRef(null);
  const otchEl = useRef(null);
  const balanceEl = useRef(null);

  const [modeEditing, setModeEditing] = useState(false);

  function del() {
    mobileEvents.emit("Edelete", props.client);
  }

  function edit() {
    setModeEditing(true);
    mobileEvents.emit("Eedit", props.client);
  }

  function save() {
    if (famEl.current.value !== "" && balanceEl.current.value !== "") {
      setModeEditing(false);

      const elem = {
        id: props.client.id,
        com: comEl.current.value,
        fam: famEl.current.value,
        im: imEl.current.value,
        otch: otchEl.current.value,
        balance: +balanceEl.current.value,
      };
      mobileEvents.emit("Esave", elem);
    }
  }

  console.log(`MobileClient id= ${props.client.id} render`);

  const isActive = props.client.balance > 0;

  return (
    <tr>
      <td>
        {modeEditing === false ? (
          props.client.com
        ) : (
          <input
            ref={comEl}
            type="text"
            defaultValue={props.client.com}
          ></input>
        )}
      </td>
      <td>
        {modeEditing === false ? (
          props.client.fam
        ) : (
          <input
            ref={famEl}
            type="text"
            defaultValue={props.client.fam}
          ></input>
        )}
      </td>
      <td>
        {modeEditing === false ? (
          props.client.im
        ) : (
          <input ref={imEl} type="text" defaultValue={props.client.im}></input>
        )}
      </td>
      <td>
        {modeEditing === false ? (
          props.client.otch
        ) : (
          <input
            ref={otchEl}
            type="text"
            defaultValue={props.client.otch}
          ></input>
        )}
      </td>
      <td>
        {modeEditing === false ? (
          props.client.balance
        ) : (
          <input
            ref={balanceEl}
            type="number"
            defaultValue={props.client.balance}
          ></input>
        )}
      </td>
      <td style={{ backgroundColor: isActive ? "green" : "red" }}>
        {isActive ? "Active" : "Blocked"}
      </td>
      <td>
        {modeEditing === false ? (
          <button onClick={edit}>Редактировать</button>
        ) : (
          <button onClick={save}>Сохранить</button>
        )}
      </td>
      <td>
        <button onClick={del}>Удалить</button>
      </td>
    </tr>
  );
});

export default MobileClient;
