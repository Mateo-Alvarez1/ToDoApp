import { AiFillDelete} from "react-icons/ai";

export const ToDoItem = ({ todo  , onDeleteTodo , onToggleTodo }) => {
  return (
    <li>
      <div className={`check_task ${ (todo.done) ? 'done' : '' }`} onClick={ () => onToggleTodo( todo.id ) } ></div>
      <p style={{ color: "#000000b4" }} >{ todo.description }</p>
      <AiFillDelete onClick={ () => onDeleteTodo(todo.id)} className="delete_button"/>
    </li>
  )
}
