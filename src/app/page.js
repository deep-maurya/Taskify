'use client';
import CreateTaskModal from '@/component/CreateTaskModal';
import AlwaysOpenModal from '@/component/Modal';
import useKanban from '@/hooks/kanban';
import useModal from '@/hooks/modal';
import NoTaskBAnner from '@/icons/NoTaskBAnner';
import {
  Home as HomeIcon,
  Calendar,
  Inbox,
  Plus,
  Trash2,
  User,
  Tag,
  Flag,
} from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { name: 'Inbox', icon: Inbox },
  { name: 'Today', icon: HomeIcon },
  { name: 'Upcoming', icon: Calendar },
];

export default function AdminPanel() {
  const [active, setActive] = useState('Inbox');
  const { columns, removeColumn, taskAdd } = useKanban();
  const { openModal } = useModal();

  return (
    <>
      <AlwaysOpenModal />
      <CreateTaskModal />
      <div className="h-screen flex overflow-visible bg-gray-50">
        <aside className="w-72 bg-white border-r border-gray-200 p-6 flex flex-col shadow-lg fixed left-0 top-0 h-full z-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Todoist
          </h2>
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActive(item.name)}
                className={`flex items-center gap-4 p-3 rounded-lg w-full text-sm transition-all ${
                  active === item.name
                    ? 'bg-neutral-800 text-white shadow-md'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </button>
            ))}
          </nav>
          <div className="flex flex-col gap-5 items-center">
            <NoTaskBAnner />
            <h3>Always for you staus</h3>
          </div>
        </aside>

        <div className="flex-1 h-screen flex flex-col ml-72">
          <header className="bg-white shadow-md p-6 flex justify-between items-center fixed top-0 right-0 left-72 z-10">
            <h1 className="text-3xl font-semibold text-gray-900">{active}</h1>
            <button
              onClick={() => openModal('addColumn')}
              className="flex items-center gap-3 bg-neutral-800 text-white px-5 py-2 rounded-lg hover:bg-neutral-700 transition-all shadow-lg font-medium text-md"
            >
              <Plus className="w-6 h-6" /> Add Task
            </button>
          </header>

          <div className="pt-24 flex-1 overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 p-6 pb-12 min-w-max h-[calc(100vh-96px)]">
              {columns.map((column, index) => (
                <div
                  key={column.id}
                  className={`bg-white p-5 rounded-xl shadow-lg border border-gray-200 w-[400px] flex flex-col h-full ${
                    index === columns.length - 1 ? 'mr-6' : ''
                  }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {column.title}
                    </h2>
                    <button className="text-gray-500 hover:text-red-500">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex-1 space-y-3 scrollbar-hide overflow-y-auto">
                    {column.tasks.length > 0 ? (
                      column.tasks.map((task, index) => (
                        <div
                          key={index}
                          className={`bg-gray-100 p-4 rounded-lg shadow-sm border-l-4 ${
                            task.priority === 'High'
                              ? 'border-red-500'
                              : task.priority === 'Medium'
                              ? 'border-yellow-500'
                              : task.priority === 'Low'
                              ? 'border-green-500'
                              : 'border-gray-300'
                          }`}
                        >
                          <h3 className="text-md font-semibold text-gray-900">
                            {task.title}
                          </h3>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mt-2">
                            {task.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded"
                              >
                                <Tag className="w-3 h-3 inline-block mr-1" />{' '}
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex justify-between items-center mt-3 text-gray-600 text-xs">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4 text-gray-500" />
                              <span>{task.assignee}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Flag
                                className={`w-4 h-4 ${
                                  task.priority === 'High'
                                    ? 'text-red-500'
                                    : task.priority === 'Medium'
                                    ? 'text-yellow-500'
                                    : 'text-green-500'
                                }`}
                              />
                              <span>{task.priority}</span>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-400 text-center italic">
                        No tasks yet
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() =>
                      openModal('createTask', { column_id: column?.id ?? null })
                    }
                    className="mt-4 bg-neutral-800 text-white font-semibold rounded-lg text-sm px-5 py-3 hover:bg-neutral-700 transition-all flex items-center justify-center gap-2"
                  >
                    <Plus className="w-5 h-5" /> Add Task
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
