import "./toDoApp.css";
import { ToDoAdd } from "../components/ToDoAdd";
import { ToDoList } from "../components/toDoList";
import { useEffect, useReducer } from "react";
import { toDoReducer } from "../components/toDoReducer";
import { NavBar } from "../components/NavBar";

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const ToDoPage = () => {
  const [todos, dispatch] = useReducer(toDoReducer, [] , init );


  useEffect(() => {
      localStorage.setItem('todos' , JSON.stringify(todos) )
  }, [todos])
  

  const onAddTodo = (input) => {
    const action = {
      type: "[TODO] add todo",
      payload: input,
    };
    dispatch(action);
  };

  const onDeleteTodo = (id) => {
    const action = {
      type: "[TODO] delete todo",
      payload: id,
    };
    dispatch(action);
  };

  const onToggleTodo = (id) => {
    const action = {
      type: "[TODO] toggle todo",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <div className="toDos_general_Container">

     <NavBar/>

      <div className="toDo_container">
        <div>
          <h1>ToDo App</h1>
        </div>
        <div className="toDos_container">
          <ToDoAdd onAddTodo={onAddTodo} />

          <div className="tasks">
            <h4 style={{ color:'#e25555'}}>
              Pending : <span>{ todos.filter( todo => !todo.done).length  }</span>
            </h4>
            <h4 style={{ color:'#2a6c6d'}}>
              Completed : <span>{ todos.filter( todo => todo.done === true ).length }</span>{" "}
            </h4>
          </div>

          <ToDoList
            todos={todos}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
      </div>
    </div>
  );
};
