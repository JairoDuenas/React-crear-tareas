import React from 'react'
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';
import AddTaskIcon from '@mui/icons-material/AddTask';

export default function NewTodoPage() {
  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;

  return (
    <TodoForm
      label="Escribe tu nuevo TODO"
      submitText="Añadir"
      submitIcon={<AddTaskIcon />}
      submitEvent={(text) => addTodo(text)}
    />
  )
}
