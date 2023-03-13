import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {list: [] },
    reducers: {
        setTodoList: (state,action) => {
            state.list = action.payload;
        }
    }
});

export const {setTodoList} = todoSlice.actions;

export default todoSlice.reducer;

export const fetchAllTodos = () => (dispatch) => {

    axios
    .get('https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos')
    .then((Response) => {
        dispatch (setTodoList(Response.data));
        console.log(Response.data)

    }).catch((error) => console.log(error));
}