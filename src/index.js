import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PomodoroContextApp } from "./context/PomodoroContextApp";
import { ToDoListContextApp } from "./context/ToDoListContextApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ToDoListContextApp>
    <PomodoroContextApp>
      <App />
    </PomodoroContextApp>
  </ToDoListContextApp>
);
