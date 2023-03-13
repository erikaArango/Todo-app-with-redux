import React, {useEffect} from "react";
import { fetchAllTodos } from "store/slices/Todos";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import TodoListItem from "components/TodoListItem";

const TodoList = () => {

  const {list} = useSelector( state => state.todos);

  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(fetchAllTodos());
    
  }, [])
  


  const handleDelete = (todoId) => {
    // Fix an ability to delete task
  };

  const toggleCheck = (todoId, isChecked) => {
    // Fix an ability to toggle task
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>

      <div className="todo-list-content">
        <ul>
        {list.map((item) =>(
          <li key={item.id} >
           <TodoListItem 
            label={item.label}
            onCheck= {toggleCheck}
            checked={item.checked}
            onDelete={handleDelete}
            item={item} /> 

          </li>
        ))}
        </ul>
      </div>

      <div className="no-todos">
        Looks like you&apos;re absolutely free today!
      </div>
    </div>
  );
};

export default TodoList;
