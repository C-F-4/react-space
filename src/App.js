import React from 'react';
import './style.scss';
import Tasks from './screens/Tasks/Tasks';
import { Tasklist } from './mock-data/tasks';

export default function App() {
  const deleteTask = (id) => {
    console.debug(`Deleting Task ${id}`);
  };

  return (
    <div className="app">
      <Tasks tasklist={Tasklist} onDelete={deleteTask}></Tasks>
    </div>
  );
}
