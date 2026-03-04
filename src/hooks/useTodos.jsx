import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function newTodoId(todoList) {
  if (!todoList.length) return 1;
  return Math.max(...todoList.map((t) => t.id)) + 1;
}

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V2", []);

  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((t) => !!t.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = !searchValue.length
    ? todos
    : todos.filter((t) =>
        t.text.toLowerCase().includes(searchValue.toLowerCase()),
      );

  const addTodo = (text) => {
    saveTodos([...todos, { completed: false, text, id: newTodoId(todos) }]);
  };

  const getTodo = (id) => todos.find((t) => t.id === id);

  const completeTodo = (id) => {
    const newTodos = todos.map((t) =>
      t.id === id ? { ...t, completed: true } : t,
    );
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    saveTodos(todos.filter((t) => t.id !== id));
  };

  const editTodo = (id, newText) => {
    const newTodos = todos.map((t) =>
      t.id === id ? { ...t, text: newText, completed: false } : t,
    );
    saveTodos(newTodos);
  };

  return {
    states: {
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      searchedTodos,
      getTodo,
    },
    stateUpdaters: {
      setSearchValue,
      completeTodo,
      addTodo,
      deleteTodo,
      editTodo,
      sincronizeTodos,
    },
  };
}

export { useTodos };
