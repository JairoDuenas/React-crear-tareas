import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import { EditIcon } from "../TodoIcon/EditIcon";

function TodoItem(props) {
  return (
    <List sx={{
      borderRadius: '10px',
      width: '100%',
      maxWidth: 'auto',
      bgcolor: '#e7eef4'
    }}>
      <ListItem alignItems="flex-start" disablePadding>
        <ListItemIcon >
          <CompleteIcon
            completed={props.completed}
            onComplete={props.onComplete}
          />
        </ListItemIcon>
        <ListItemText
          sx={{marginTop: '20px'}}
            style={{ textDecoration : props.completed ? 'line-through' : 'none' }} 
            // className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
            >
            {props.text}
        </ListItemText>

        
        <ListItemIcon>
          <EditIcon
            onEdit={props.onEdit}
            />
            </ListItemIcon>
          <ListItemIcon>
              <DeleteIcon
                onDelete={props.onDelete}
                />

          </ListItemIcon>
      </ListItem>
      <Divider variant="inset" component="li" />
                </List>
  );
}

export { TodoItem };