import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import './TodoForm.css';

function TodoForm(props) {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {
    navigate('/');
  }
  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoValue);
    navigate('/');
  }
  return (
    <Stack
      sx={{
        background: '#b2dfdb',
        marginTop: '20px',
        marginBottom: '20px',
        borderRadius: '30px',
        width: '95%',
        height: '50vw'
      }}
    >
      <Typography
        variant='h5'
        align='center'
        marginTop='20px'
      >
        {props.label}
      </Typography>

      <TextField
        fullWidth
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe tu tarea..."
        label="Agregar tarea"
        sx={{
          marginTop: '20px',
          width: '90%',
          alignSelf: 'center',
          background:'#e1f5fe'
        }}
      />

      <Stack
        justifyContent='center'
        marginTop='20px'
        direction='row'
        spacing={4}
      >
        <Button
          onClick={onCancel}
          color="warning"
          size="large"
          variant="contained"
        >
          Cancelar
        </Button>
        <Button
          onClick={onSubmit}
          variant="contained"
          color="success"
          size="large"
          endIcon={props.submitIcon}          
        >
          {props.submitText}
        </Button>
      </Stack>
    </Stack>
  );
}

export { TodoForm };