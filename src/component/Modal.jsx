'use client';
import useKanban from '../hooks/kanban';
import useModal from '../hooks/modal';

const AlwaysOpenModal = ({ type = 'addColumn' }) => {
  const { columnName, setColumnName, createColumn } = useKanban();
  const { isOpen, closeModal } = useModal();

  if (!isOpen(type)) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-700 bg-opacity-50">
      <div className="relative p-4 w-full max-w-md">
        <div className="relative bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">
              Add New Column
            </h3>
          </div>
          <div className="p-4 md:p-5">
            <form className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Enter column name
                </label>
                <input
                  type="text"
                  value={columnName}
                  onChange={(e) => setColumnName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Column name"
                  required
                />
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
                  onClick={createColumn}
                  className="text-white bg-neutral-900 hover:bg-neutral-800 font-bold rounded-lg text-sm px-5 py-2.5"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlwaysOpenModal;
