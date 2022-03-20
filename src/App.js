import React, { useState, useEffect } from 'react';
import './style.scss';
import Tasks from './screens/Tasks/Tasks';
import { uuid } from './utils/lib';
// import { Tasklist } from './mock-data/tasks';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const apiBase = `https://json-server-dwgyal--3000.local.webcontainer.io/TM-hxmxu9`;
  const tasksBase = `-tasks`;
  const isServerUp = true;

  useEffect(() => {
    // Test Loading Tasks
    const fetchTasks = async () => {
      const res = await fetch(`${apiBase}${tasksBase}`);
      const data = res.json();
      console.log(res, data);
    };
    if (isServerUp) {
      fetchTasks();
    }
  }, []);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: `tid-${uuid()}`,
        ...task,
      },
    ]);
  };

  const updateTask = (newTask) => {
    setTasks(tasks.map((task) => (task.id === newTask.id ? newTask : task)));
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
        onUpdate={updateTask}
        onDelete={deleteTask}
        onToggle={toggleReminder}
      ></Tasks>
    </div>
  );
}
