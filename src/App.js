import React, { useState } from 'react';
import './style.scss';
import Tasks from './screens/Tasks/Tasks';
import { Tasklist } from './mock-data/tasks';

export default function App() {
  const [tasks, setTasks] = useState(Tasklist);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: `tid${tasks.length}`,
        ...task,
      },
    ]);
  };

  const toggleReminder = (id) => {
    console.debug('Tog');
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              reminder: !task.reminder,
            }
          : task
      )
    );
  };

  return (
    <div className="app">
      <Tasks
        tasklist={tasks}
        onAdd={addTask}
        onDelete={deleteTask}
        onToggle={toggleReminder}
      ></Tasks>
    </div>
  );
}
