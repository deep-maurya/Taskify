import { createSlice } from '@reduxjs/toolkit';
const initialColumns = [
  {
    id: 1,
    title: 'To Do',
    tasks: [
      {
        title: 'Fix login bug',
        tags: ['Bug', 'Test'],
        assignee: 'John',
        priority: 'High',
      },
      {
        title: 'Design homepage',
        tags: ['UI'],
        assignee: 'Alice',
        priority: 'Medium',
      },
      {
        title: 'Fix login bug',
        tags: ['Bug'],
        assignee: 'John',
        priority: 'High',
      },
      {
        title: 'Design homepage',
        tags: ['UI'],
        assignee: 'Alice',
        priority: 'Medium',
      },
      {
        title: 'Fix login bug',
        tags: ['Bug'],
        assignee: 'John',
        priority: 'High',
      },
      {
        title: 'Design homepage',
        tags: ['UI'],
        assignee: 'Alice',
        priority: 'Medium',
      },
      {
        title: 'Fix login bug',
        tags: ['Bug'],
        assignee: 'John',
        priority: 'High',
      },
      {
        title: 'Design homepage',
        tags: ['UI'],
        assignee: 'Alice',
        priority: 'Medium',
      },
    ],
  },
  {
    id: 2,
    title: 'In Progress',
    tasks: [
      {
        title: 'Develop API',
        tags: ['Backend'],
        assignee: 'Sarah',
        priority: 'Urgent',
      },
    ],
  },
  {
    id: 3,
    title: 'Review',
    tasks: [
      {
        title: 'Test user signup',
        tags: ['Testing'],
        assignee: 'Mike',
        priority: 'Low',
      },
    ],
  },
  { id: 4, title: 'Done', tasks: [] },
  { id: 5, title: 'Blocked', tasks: [] },
  { id: 6, title: 'Backlog', tasks: [] },
];

const initialState = {
  columns: initialColumns,
};

const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    addColumn: (state, action) => {
      state.columns.push({
        id: state.columns.length,
        title: action.payload,
        tasks: [],
      });
    },

    deleteColumn: (state, action) => {
      state.columns = state.columns.filter((col) => col.id !== action.payload);
    },

    addTask: (state, action) => {
      const { columnId, title, description, priority } = action.payload;
      const column = state.columns.find((col) => col.id === columnId);
      if (column) {
        column.tasks.push({
          id: Date.now(),
          title,
          description,
          priority,
        });
      }
    },

    deleteTask: (state, action) => {
      const { columnId, taskId } = action.payload;
      const column = state.columns.find((col) => col.id === columnId);
      if (column) {
        column.tasks = column.tasks.filter((task) => task.id !== taskId);
      }
    },

    moveTask: (state, action) => {
      const { fromColumnId, toColumnId, taskId } = action.payload;
      const fromColumn = state.columns.find((col) => col.id === fromColumnId);
      const toColumn = state.columns.find((col) => col.id === toColumnId);
      if (fromColumn && toColumn) {
        const taskIndex = fromColumn.tasks.findIndex(
          (task) => task.id === taskId
        );
        if (taskIndex !== -1) {
          const [task] = fromColumn.tasks.splice(taskIndex, 1);
          toColumn.tasks.push(task);
        }
      }
    },
  },
});

export const { addColumn, deleteColumn, addTask, deleteTask, moveTask } =
  kanbanSlice.actions;
export default kanbanSlice.reducer;
