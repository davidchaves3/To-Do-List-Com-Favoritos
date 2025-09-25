import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TasksProvider } from "./context/TasksContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TasksProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TasksProvider>
  </React.StrictMode>
);
