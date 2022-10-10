import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { TodosLoading } from '../../ui/TodosLoading';

export default function EditTodoPage() {
  const location = useLocation()
  const params = useParams();
  const id = Number(params.id);

  const { states, stateUpdaters } = useTodos();
  const { loading, getTodo } = states;
  const { editTodo } = stateUpdaters;

  let todoText;

  if (location.states?.todo) {
    todoText = location.states.todo.text;
  } else if (loading) {
    return (<TodosLoading />)
  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  }
  return (
    <TodoForm
      label="Edita tu TODO"
      defaultTodoText={todoText}
      submitText="Editar"
      submitIcon={<BorderColorIcon />}
      submitEvent={(newText) => editTodo(id, newText)}
    />
  )
}

