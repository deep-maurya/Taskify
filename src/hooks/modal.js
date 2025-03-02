import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal, toggleModal } from '../redux/modalSlice';

const useModal = () => {
  const dispatch = useDispatch();
  const activeModal = useSelector((state) => state.modal.activeModal);
  const modalData = useSelector((state) => state.modal.modalData);

  return {
    activeModal,
    modalData,
    isOpen: (type) => activeModal === type,
    openModal: (type, data = null) => dispatch(openModal({ type, data })), // ✅ Ensure no direct state updates
    closeModal: () => dispatch(closeModal()),
    toggleModal: (type, data = null) => dispatch(toggleModal({ type, data })),
  };
};

export default useModal;
