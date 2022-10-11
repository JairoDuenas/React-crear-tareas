import { Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../statics/logo.png"

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <Stack
      
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 6 }}
        display='flex'
        alignItems='center'
        justifyContent='center'
        marginBottom='10px'
      >
        <Stack
          sx={{
            marginTop: '20px',
            height: '70px',
            width: '70px'
          }}>
        <img 
          src={logo}
          alt="logo-personal"
        />
        </Stack>
        <Typography variant="h6"
          className={
            `TodoCounter ${!!loading && "TodoCounter--loading"}`}
        >
          Has completado {completedTodos} de {totalTodos} tareas
        </Typography>
      </Stack>
    </Stack>
  );
}

export { TodoCounter };