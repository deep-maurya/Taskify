'use client';
import { Provider } from 'react-redux';
import store from '../redux/strore';
import AlwaysOpenModal from '../component/Modal';

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      {children}
      <AlwaysOpenModal />
    </Provider>
  );
}
