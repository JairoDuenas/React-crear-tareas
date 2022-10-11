import { List, ListSubheader } from "@mui/material";
import React from "react";

function TodoList(props) {
  const renderFunc = props.children || props.render;

  return (
    <List
      className="TodoList-container"
      component='nav'
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Lista de tareas
        </ListSubheader>
      }
      sx={{widt: '100%'}}
    >
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}


      {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}
      
    </List>
  );
}

export { TodoList };