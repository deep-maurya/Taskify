'use client';
import { Provider } from 'react-redux';
import store from '../redux/strore';
import AlwaysOpenModal from '../component/Modal';
import CreateTaskModal from '@/component/CreateTaskModal';

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
