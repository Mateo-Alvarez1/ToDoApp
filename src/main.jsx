import React from "react";
import ReactDOM from "react-dom/client";
import { ToDoApp } from "./ToDoApp";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <ToDoApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
