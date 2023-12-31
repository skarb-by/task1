import React from "react";

import { mobileEvents } from "../Events/Events.js";

class MobileFilter extends React.PureComponent {
  render() {
    console.log("MobileFilter render");

    return (
      <div className="Filter">
        <button
          className="FilterAll"
          onClick={() => mobileEvents.emit("EFilterAll")}
        >
          Все
        </button>
        <button
          className="FilterActive"
          onClick={() => mobileEvents.emit("EFilterActive")}
        >
          Активные
        </button>
        <button
          className="FilterBlocked"
          onClick={() => mobileEvents.emit("EFilterBlocked")}
        >
          Заблокированные
        </button>
        <button
          className="FilterMTS"
          onClick={() => mobileEvents.emit("EFilterMTS")}
        >
          МТС
        </button>
        <button
          className="FilterA1"
          onClick={() => mobileEvents.emit("EFilterA1")}
        >
          А1
        </button>
      </div>
    );
  }
}

export default MobileFilter;
