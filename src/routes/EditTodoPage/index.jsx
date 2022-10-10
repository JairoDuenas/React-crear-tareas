import React from 'react'
import { useParams } from 'react-router-dom';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../useTodos';
import BorderColorIcon from '@mui/icons-material/BorderColor';

export default function EditTodoPage() {
  const params = useParams();
  const id = Number(params.id);

  const { stateUpdaters } = useTodos();
  const { editTodo } = stateUpdaters;

  return (
    <TodoForm
      label="Edita tu TODO"
      submitText="Editar"
      submitIcon={<BorderColorIcon />}
      submitEvent={(newText) => editTodo(id, newText)}
    />
  )
}

