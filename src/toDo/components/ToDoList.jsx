import { ToDoItem } from "./toDoItem";

export const ToDoList = ({ todos = [] , onDeleteTodo , onToggleTodo }) => {
  return (
    <ul>
      {
        todos.map(todo => (
          <ToDoItem 
            key={todo.id} 
            todo={todo} 
            onDeleteTodo={onDeleteTodo} 
            onToggleTodo={onToggleTodo}
           />
        ))
      }
    </ul>
  );
};
