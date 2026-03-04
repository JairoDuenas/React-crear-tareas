import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NewTodo } from "../components/NewTodo";
import { EditTodo } from "../components/EditTodo";
import { NotFound } from "../components/NotFound";

export function MyRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewTodo />} />
        <Route path="/edit/:id" element={<EditTodo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
