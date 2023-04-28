import { useState } from "react";

export const ToDoAdd = ({ onAddTodo }) => {

   const [inputValue, setInputValue] = useState('');

   const onInputChange = ( { target } ) => {
     setInputValue(target.value);
   }

   const onHandleSubmit = ( e ) => {
     e.preventDefault()
     const newInput = inputValue.trim()
     if (newInput.length < 1)return;
    
     const newTodo = {
       description: newInput ,
       id: Math.random() * 3 ,
       done:false
     }

     onAddTodo(newTodo)
     setInputValue('')
   }

  return (
    <form onSubmit={ onHandleSubmit}>
      <div className="todo_align login_input_box">
        <input 
          type="text" 
          placeholder="Agrega nuevo toDo"
          value={inputValue}
          onChange={ onInputChange }
        />
        <button type="submit">Agregar toDo</button>
      </div>
    </form>
  );
};
