'use client';
import useKanban from '../hooks/kanban';
import useModal from '../hooks/modal';
import { X } from 'lucide-react';
import { useState } from 'react';

const CreateTaskModal = ({ type = 'createTask' }) => {
  const { columns, taskAdd } = useKanban();
  const { isOpen, closeModal } = useModal();
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState('Medium');
  const [taskAssignee, setTaskAssignee] = useState('');
  const [selectedColumn, setSelectedColumn] = useState(columns[0]?.id || '');

  if (!isOpen(type)) return null;

  const handleCreateTask = () => {
    if (!taskTitle.trim()) {
      alert('Task title cannot be empty!');
      return;
    }
    taskAdd(
      selectedColumn,
      taskTitle,
      taskDescription,
      taskPriority,
      taskAssignee
    );
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
      <div className="bg-white shadow-xl w-full max-w-md p-6 rounded-xl relative">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3">
          <h3 className="text-xl font-semibold text-gray-900">
            Create New Task
          </h3>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col py-6 gap-4">
          <label className="text-sm font-semibold text-gray-900">
            Task Title
          </label>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:ring-neutral-500 focus:border-neutral-500 transition"
            placeholder="Enter task title..."
          />

          <label className="text-sm font-semibold text-gray-900">
            Description
          </label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:ring-neutral-500 focus:border-neutral-500 transition"
            placeholder="Enter task description..."
          ></textarea>

          <label className="text-sm font-semibold text-gray-900">
            Assignee
          </label>
          <input
            type="text"
            value={taskAssignee}
            onChange={(e) => setTaskAssignee(e.target.value)}
            className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:ring-neutral-500 focus:border-neutral-500 transition"
            placeholder="Enter assignee name..."
          />

          <label className="text-sm font-semibold text-gray-900">
            Priority
          </label>
          <select
            value={taskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
            className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:ring-neutral-500 focus:border-neutral-500 transition"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <label className="text-sm font-semibold text-gray-900">
            Select Column
          </label>
          <select
            value={selectedColumn}
            onChange={(e) => setSelectedColumn(e.target.value)}
            className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg border border-gray-300 focus:ring-neutral-500 focus:border-neutral-500 transition"
          >
            {columns.map((col) => (
              <option key={col.id} value={col.id}>
                {col.title}
              </option>
            ))}
          </select>
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
            onClick={handleCreateTask}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;
