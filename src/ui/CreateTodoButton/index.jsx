import React from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Stack } from "@mui/material";

function CreateTodoButton(props) {
  return (
    <Stack direction='row' justifyContent='flex-end'>
      <Button 
        sx={{
          '&:hover':{
            transform: 'scale(1.2)'
          },
          width: '60px',
          height: '60px',
          borderRadius: '50%'
        }}
        variant="contained"
        className="CreateTodoButton"
        onClick={props.onClick}
      >
        {<AddIcon sx={{
          "&:hover": {
            transition: '.3s ease',
            cursor: "pointer",
            transform: 'rotate(224deg)'
          },
        }}
        />}
      </Button>

    </Stack>
  );
}



export { CreateTodoButton };