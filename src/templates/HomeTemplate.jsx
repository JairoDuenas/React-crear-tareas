import { useNavigate } from "react-router-dom";
import { useTodos } from "../hooks/useTodos";
import { TodoHeader } from "../components/TodoHeader";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { ChangeAlert } from "../components/ChangeAlert";
import {
  EmptyTodos,
  TodosLoading,
  TodosError,
} from "../components/EmptyLoadingError";
import styled from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";

export function HomeTemplate() {
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

  const { completeTodo, deleteTodo, setSearchValue, sincronizeTodos } =
    stateUpdaters;

  return (
    <>
      <GlobalStyles />
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(text) => (
          <EmptySearch>
            SIN RESULTADOS PARA <Query>"{text}"</Query>
          </EmptySearch>
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onEdit={() => navigate("/edit/" + todo.id, { state: { todo } })}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>

      <CreateTodoButton onClick={() => navigate("/new")} />
      <ChangeAlert sincronize={sincronizeTodos} />
    </>
  );
}

const EmptySearch = styled.p`
  text-align: center;
  padding: 48px 32px;
  font-size: 11px;
  letter-spacing: 2px;
  color: var(--dim);
`;

const Query = styled.span`
  color: var(--fg);
`;
