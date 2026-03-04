import { useNavigate } from "react-router-dom";
import { useTodos } from "../hooks/useTodos";
import { TodoForm } from "../components/TodoForm";

export function NewTodo() {
  const navigate = useNavigate();
  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;

  return (
    <TodoForm
      label="NUEVA TAREA"
      submitText="AÑADIR"
      submitEvent={(text) => {
        addTodo(text);
        navigate("/");
      }}
    />
  );
}
