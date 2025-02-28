'use client';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addColumn, addTask, deleteColumn } from '../redux/kanbanSlice';

const useKanban = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.kanban.columns);
  const [columnName, setColumnName] = useState('');

  const createColumn = () => {
    if (!columnName.trim()) return;
    dispatch(addColumn(columnName));
  };

  const taskAdd = (columnId, title, description, priority) => {
    dispatch(addTask({ columnId, title, description, priority }));
  };

  const removeColumn = (id) => {
    dispatch(deleteColumn(id));
  };

  return {
    columns,
    columnName,
    setColumnName,
    createColumn,
    removeColumn,
    taskAdd,
  };
};

export default useKanban;
