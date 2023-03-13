import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { addTodo } from "store/slices/Todos";

const TodoForm = () => {

  const todoAdd = useSelector((state) => state.todos.list)



  return (
    <div className="Todo-form">
        <form>
            <input placeholder="Enter a Todo" className="Todo-form-input"></input>
            <button type="submit">Go</button>
        </form>

    </div>
  )
}

export default TodoForm