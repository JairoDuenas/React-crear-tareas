import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useTodos } from "../hooks/useTodos";
import { TodoForm } from "../components/TodoForm";
import { TodosLoading } from "../components/EmptyLoadingError";

export function EditTodo() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const id = Number(params.id);

  const { states, stateUpdaters } = useTodos();
  const { loading, getTodo } = states;
  const { editTodo } = stateUpdaters;

  let todoText;
  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <TodosLoading />;
  } else {
    const todo = getTodo(id);
    if (!todo) {
      navigate("/");
      return null;
    }
    todoText = todo.text;
  }

  return (
    <TodoForm
      label="EDITAR TAREA"
      defaultTodoText={todoText}
      submitText="GUARDAR"
      submitEvent={(newText) => {
        editTodo(id, newText);
        navigate("/");
      }}
    />
  );
}
