import React from 'react'
import { TodoForm } from '../../ui/TodoForm';

export default function NewTodoPage() {
  return (
    <TodoForm
      label="Escribe tu nuevo TODO"
      submitText="Añadir"
      submitEvent={() => console.log("Llamar a addTodo")}
    />
  )
}
