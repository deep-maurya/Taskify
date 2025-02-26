'use client';
import AddIcon from '@/icons/AddIcon';
import { Trash2 } from 'lucide-react';
import AlwaysOpenModal from './Modal';
import useKanban from '../hooks/kanban';
import useModal from '../hooks/modal';

const Kanbanboard = () => {
  const { columns, removeColumn } = useKanban();
  const { openModal } = useModal();
  {
    console.log(openModal);
  }

  return (
    <div className="text-white">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => openModal('addColumn')}
          className="flex items-center gap-2 bg-neutral-900 border border-neutral-700 px-4 py-2 rounded-lg text-white font-medium hover:bg-neutral-800 transition"
        >
          <AddIcon className="w-5 h-5" />
          <span>Add Column</span>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 h-[calc(100vh-12rem)] overflow-auto">
        {columns.map((column) => (
          <div
            key={column.id}
            className="bg-neutral-900 rounded-lg flex flex-col border border-neutral-700 shadow-lg"
          >
            <div className="flex items-center justify-between border-b border-neutral-700 pr-3">
              <div className="p-3 font-semibold">{column.title}</div>
              <button
                className="p-2 hover:bg-neutral-700 rounded-md"
                onClick={() => removeColumn(column.id)}
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanbanboard;
