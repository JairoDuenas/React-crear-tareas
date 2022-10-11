import { Stack, TextField } from "@mui/material";
import React from "react";

function TodoSearch({ searchValue, setSearchValue, loading }) {

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <Stack 
      width='100%'
      alignItems='center'
    >
      <TextField 
        id='outlined-basic'
        label="Buscar tarea"
        variant="outlined"
        autoComplete="off"
        placeholder="Escribe la tarea"
        size="small"
        sx={{
          width: '70%',
          background: '#e1f5fe;'
        }}
        
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
      />

    </Stack>
  );
}
export { TodoSearch };