import React, { useRef, useState } from "react";

import { mobileEvents } from "../Events/Events.js";

const MobileClient =({client}) => {
  const comEl = useRef(null);
  const famEl = useRef(null);
  const imEl = useRef(null);
  const otchEl = useRef(null);
  const balanceEl = useRef(null);

  const [modeEditing, setModeEditing] = useState(false);

  function del() {
    mobileEvents.emit("Edelete",client);
  }

  function edit() {
    setModeEditing(true);
    mobileEvents.emit("Eedit", client);
  }

  function save() {
    if (famEl.current.value !== "" && balanceEl.current.value !== "") {
      setModeEditing(false);

      const elem = {
        id: client.id,
        com: comEl.current.value,
        fam: famEl.current.value,
        im: imEl.current.value,
        otch: otchEl.current.value,
        balance: +balanceEl.current.value,
      };
      mobileEvents.emit("Esave", elem);
    }
  }

  console.log(`MobileClient id= ${client.id} render`);

  const isActive = client.balance > 0;

  return (
    <tr>
      <td>
        {modeEditing === false ? (
         client.com
        ) : (
          <input
            ref={comEl}
            type="text"
            defaultValue={client.com}
          ></input>
        )}
      </td>
      <td>
        {modeEditing === false ? (
          client.fam
        ) : (
          <input
            ref={famEl}
            type="text"
            defaultValue={client.fam}
          ></input>
        )}
      </td>
      <td>
        {modeEditing === false ? (
         client.im
        ) : (
          <input ref={imEl} type="text" defaultValue={client.im}></input>
        )}
      </td>
      <td>
        {modeEditing === false ? (
          client.otch
        ) : (
          <input
            ref={otchEl}
            type="text"
            defaultValue={client.otch}
          ></input>
        )}
      </td>
      <td>
        {modeEditing === false ? (
          client.balance
        ) : (
          <input
            ref={balanceEl}
            type="number"
            defaultValue={client.balance}
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
};

export default React.memo(MobileClient);
