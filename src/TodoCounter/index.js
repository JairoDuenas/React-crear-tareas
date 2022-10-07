import React from "react";
import './TodoCounter.css';
import logo from "../statics/logo.png"

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <>
      <div className="logo">
        <img 
        src={logo}
        alt="logo-personal"
        />
      </div>
      <h2
        className={
          `TodoCounter ${!!loading && "TodoCounter--loading"}`}
      >
        Has completado {completedTodos} de {totalTodos} tareas
      </h2>
    </>
  );
}

export { TodoCounter };