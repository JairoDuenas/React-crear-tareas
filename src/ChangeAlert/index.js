import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Parece que hay cambios en otra pestaña o ventana</p>
          <p>¿Quiere sincronizar los cambios?</p>
          <button className="TodoForm-button TodoForm-button--add"
            onClick={() => toggleShow(false)}
          >
            Sincronizar</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}


export { ChangeAlert };