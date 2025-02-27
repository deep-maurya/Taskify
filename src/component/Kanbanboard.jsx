'use client';
import AddIcon from '@/icons/AddIcon';
import { Trash2 } from 'lucide-react';
import useKanban from '../hooks/kanban';
import useModal from '../hooks/modal';
import Image from 'next/image';
import NoTaskBAnner from '@/icons/NoTaskBAnner';

const Kanbanboard = () => {
  const { columns, removeColumn, taskAdd } = useKanban();
  const { openModal } = useModal();

  return (
    <div className="text-white">
      <div className="flex justify-between mb-6">
        <div className="flex items-center gap-3">
          <Image
            src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png"
            width={40}
            height={40}
            alt="User Avatar"
            className="rounded-full border border-neutral-700"
          />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Deepak Maurya</span>
            <span className="text-sm text-neutral-400">(deep-maurya)</span>
          </div>
        </div>
        <button
          onClick={() => openModal('addColumn')}
          className="flex items-center gap-2 bg-neutral-900 border border-neutral-700 px-4 py-2 rounded-lg text-white font-medium hover:bg-neutral-800 transition"
        >
          <AddIcon className="w-5 h-5" />
          <span>Add Column</span>
        </button>
      </div>

      {columns.length > 0 && (
        <div className="grid grid-cols-4 gap-4 mt-10">
          {columns.map((column) => (
            <div
              key={column.id}
              className="bg-neutral-900 rounded-lg flex flex-col border border-neutral-700 shadow-lg h-[20rem] p-3"
            >
              <div className="flex items-center justify-between  ">
                <div className="font-semibold">{column.title}</div>
                <div className="flex">
                  <button
                    className="p-2 hover:bg-neutral-700 rounded-md"
                    onClick={() => removeColumn(column.id)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                  <button
                    className="p-2 hover:bg-neutral-700 rounded-md"
                    onClick={() => openModal('addTask')}
                  >
                    <AddIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="flex-grow flex flex-col gap-2 overflow-auto py-4 border-neutral-700">
                {column.tasks && column.tasks.length > 0 ? (
                  column.tasks.map((task, index) => (
                    <div
                      key={index}
                      className="bg-neutral-800 text-white p-2 rounded-md border border-neutral-700"
                    >
                      {task}
                    </div>
                  ))
                ) : (
                  <div className="flex flex-grow items-center justify-center">
                    <p className="text-gray-400 text-sm italic">
                      No tasks available
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {columns.length <= 0 && (
        <>
          <div className="flex justify-center items-center">
            <NoTaskBAnner />
          </div>
        </>
      )}
    </div>
  );
};

export default Kanbanboard;
