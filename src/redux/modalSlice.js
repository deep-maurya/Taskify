import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeModal: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.activeModal = action.payload;
    },
    closeModal: (state) => {
      state.activeModal = null;
    },
    toggleModal: (state, action) => {
      state.activeModal =
        state.activeModal === action.payload ? null : action.payload;
    },
  },
});

export const { openModal, closeModal, toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
