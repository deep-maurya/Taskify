import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeModal: null,
  modalData: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.activeModal = action.payload.type;
      state.modalData = action.payload?.data || null;
    },
    closeModal: (state) => {
      state.activeModal = null;
      state.modalData = null;
    },
    toggleModal: (state, action) => {
      if (state.activeModal === action.payload.type) {
        state.activeModal = null;
        state.modalData = null;
      } else {
        state.activeModal = action.payload.type;
        state.modalData = action.payload?.data || null;
      }
    },
  },
});

export const { openModal, closeModal, toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
