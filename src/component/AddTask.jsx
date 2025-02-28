'use client';
import { useState } from 'react';
import useKanban from '../hooks/kanban';
import useModal from '../hooks/modal';

const AddTask = ({ type = 'addTask' }) => {
  const { taskAdd } = useKanban();
  const { isOpen, closeModal, modalData } = useModal();

  const [taskTitle, setTaskTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [description, setDescription] = useState('');

  if (!isOpen(type)) return null;

  const handleAddTask = () => {
    if (!taskTitle.trim()) {
      alert('Task title is required');
      return;
    }

    taskAdd(modalData.columnId, taskTitle, description, priority);
    closeModal();

    setTaskTitle('');
    setDescription('');
    setPriority('Medium');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-700 bg-opacity-50">
      <div className="relative p-6 w-full max-w-md bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Add New Task</h3>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>
        <div className="py-4">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Task Title
              </label>
              <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter task title"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Priority
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                <option value="High">🔥 High</option>
                <option value="Medium">⚡ Medium</option>
                <option value="Low">🌱 Low</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter task description"
              ></textarea>
            </div>
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="text-neutral-900 bg-neutral-300 hover:bg-neutral-200 font-bold rounded-lg text-sm px-5 py-2.5"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddTask}
                className="text-white bg-neutral-900 hover:bg-neutral-800 font-bold rounded-lg text-sm px-5 py-2.5"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
