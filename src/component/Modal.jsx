'use client';
import useKanban from '../hooks/kanban';
import useModal from '../hooks/modal';
import { X } from 'lucide-react';

const AlwaysOpenModal = ({ type = 'addColumn' }) => {
  const { columnName, setColumnName, createColumn } = useKanban();
  const { isOpen, closeModal } = useModal();

  if (!isOpen(type)) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100] min-h-screen">
      <div className="bg-white shadow-xl w-full max-w-md p-6 rounded-xl relative">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3">
          <h3 className="text-xl font-semibold text-gray-900">
            Add New Column
          </h3>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input Field */}
        <div className="flex flex-col py-6 gap-2">
          <label className="text-sm font-semibold text-gray-900 mb-2">
            Enter Column Name
          </label>
          <input
            type="text"
            value={columnName}
            onChange={(e) => setColumnName(e.target.value)}
            className="w-full p-3 bg-green-100 text-gray-900 rounded-lg border border-gray-300 focus:ring-neutral-500 focus:border-neutral-500 transition"
            placeholder="Enter column name..."
          />
        </div>

        {/* Buttons */}
        <div className="py-3 flex justify-between gap-2">
          <button
            onClick={closeModal}
            className="bg-gray-200 text-gray-700 font-semibold rounded-lg text-sm px-5 py-3 hover:bg-gray-300 transition-all"
          >
            Cancel
          </button>
          <button
            className="bg-neutral-900 text-white font-semibold rounded-lg text-sm px-5 py-3 hover:bg-neutral-800 transition-all"
            onClick={() => {
              if (columnName.trim() === '') {
                alert('Column name cannot be empty!');
                return;
              }
              createColumn();
              closeModal();
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlwaysOpenModal;
