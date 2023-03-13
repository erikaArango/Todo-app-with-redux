import React from "react";
import "./styles.css";

const TodoForm = () => {



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