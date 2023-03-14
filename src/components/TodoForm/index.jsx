import React from "react";
import { useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "store/slices/Todos";

const TodoForm = () => {

  const dispatch = useDispatch();
  const addTodo = useSelector((state) => state.todos.list)

  const [label, setLabel] = useState("");

  return (
    <div className="Todo-form">
        <form>
            <input placeholder="Enter a Todo" className="Todo-form-input" onChange={(event) => {setLabel(event.target.value)}} ></input>
            <button onClick={() => {dispatch(addTodo({id: 0, label: "", checked: false}))}} type="submit">ADD TODO</button>
        </form>

    </div>
  )
}

export default TodoForm