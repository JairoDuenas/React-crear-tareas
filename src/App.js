import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import NotFound from "./ui/NotFound";
import EditTodoPage from "./routes/EditTodoPage";
import HomePage from "./routes/HomePage";
import NewTodoPage from "./routes/NewTodoPage";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
        <Route path="*" element={<NotFound />}  />
      </Routes>
    </HashRouter>
  );
}

export default App;
