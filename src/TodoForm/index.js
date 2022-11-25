import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue (event.target.value);
        //Todo
    };

    const onCancel = () => {
        setOpenModal(false);
        //Todo
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);

        //añadir
    };

    return (
      <form onSubmit={onSubmit}>
        <label>Escribe tu nueva Tarea</label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Escribe tu nueva tarea"
        />
        <div className="TodoForm-buttonContainer">

         <button type="button" 
         className="TodoForm-button TodoForm-button--cancel"
         onClick={onCancel}>
         Cancelar
         </button>

         <button 
         Type="onSubmit"
         className="TodoForm-button TodoForm-button--add"
         >
            Añadir
         </button>

        </div>

      </form>
    );
}

export { TodoForm };