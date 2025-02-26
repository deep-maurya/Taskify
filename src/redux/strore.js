import { configureStore } from '@reduxjs/toolkit';
import kanbanReducer from './kanbanSlice';
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    kanban: kanbanReducer,
    modal: modalReducer,
  },
});

export default store;
