import { configureStore } from '@reduxjs/toolkit';
import todos from './slices/Todos'


export default configureStore({
reducer: {
    todos
}
});