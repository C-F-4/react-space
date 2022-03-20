import React, { useState } from 'react';
import './style.scss';
import Tasks from './screens/Tasks/Tasks';
import { Tasklist } from './mock-data/tasks';

export default function App() {
  const [tasks, setTasks] = useState(Tasklist);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: `tid${tasks.length}`,
        title: `Task 0${tasks.length + 1}`,
        date: 'Feb 19th at 12:30pm',
      },
    ]);
  };

  return (
    <div className="app">
      <Tasks tasklist={tasks} onAdd={addTask} onDelete={deleteTask}></Tasks>
    </div>
  );
}
