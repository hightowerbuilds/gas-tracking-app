import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './components/Counter/counterSlice'; 
import editModalReducer from './components/EditModal/editModalSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    editModal: editModalReducer,
  },
});
