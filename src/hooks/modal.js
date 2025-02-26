'use client';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal, toggleModal } from '../redux/modalSlice';

const useModal = () => {
  const dispatch = useDispatch();
  const activeModal = useSelector((state) => state.modal.activeModal);

  return {
    activeModal,
    isOpen: (type) => activeModal === type,
    openModal: (type) => dispatch(openModal(type)),
    closeModal: () => dispatch(closeModal()),
    toggleModal: (type) => dispatch(toggleModal(type)),
  };
};

export default useModal;
