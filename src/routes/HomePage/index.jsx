import React from 'react';
import { useTodos } from "../useTodos";
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { TodosError } from '../../ui/TodosError';
import { TodosLoading } from '../../ui/TodosLoading';
import { EmptyTodos } from '../../ui/EmptyTodos';
import { ChangeAlert } from '../../ui/ChangeAlert';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const navigate = useNavigate();

  const { states, stateUpdaters } = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos, 
    completedTodos,
    searchValue, 
  } = states;
  
  const {
    completeTodo,
    deleteTodo,
    setSearchValue,
    sincronizeTodos,
  } = stateUpdaters;

return (
  <React.Fragment>

    <TodoHeader loading={loading}>
      <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </TodoHeader>
    
    <TodoList
      error={error}
      loading={loading}
      searchedTodos={searchedTodos}
      totalTodos={totalTodos}
      searchText={searchValue}
      onError={() => <TodosError/>}
      onLoading={() => <TodosLoading/>}
      onEmptyTodos={() => <EmptyTodos/>}
      onEmptySearchResults={
        (searchText) => <p>No hay resultados para {searchText} </p>}

      render={todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onEdit={() => console.log('editar todo')}
          onDelete={() => deleteTodo(todo.text)}
        />
      )}
    >
      {todo => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          onEdit={() => {
            navigate(
              '/edit/' + todo.id,
              {
                states: { todo }
              })
          }}
          onComplete={() => completeTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
        />
      )}
    </TodoList>

    <CreateTodoButton
      onClick={() => navigate('/new')}
    />

    <ChangeAlert 
      sincronize={sincronizeTodos} 
    />
  </React.Fragment>
);
}


export default HomePage;
