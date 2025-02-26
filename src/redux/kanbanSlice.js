import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  columns: [],
};

const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    addColumn: (state, action) => {
      state.columns.push({ id: Date.now(), title: action.payload });
    },
    deleteColumn: (state, action) => {
      state.columns = state.columns.filter((col) => col.id !== action.payload);
    },
  },
});

export const { addColumn, deleteColumn } = kanbanSlice.actions;
export default kanbanSlice.reducer;
