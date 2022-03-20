import React, { useState, useEffect } from 'react';
import './style.scss';
import Tasks from './screens/Tasks/Tasks';
import { uuid } from './utils/lib';
// import { Tasklist } from './mock-data/tasks';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const apiBase = `https://my-json-server.typicode.com/C-F-4/react-space`;
  const tasksBase = `/tasks`;
  const isServerUp = true;

  useEffect(() => {
    const loadTasksFromServer = async () => {
      const tasklist = await fetchTasks();
      setTasks(tasklist);
    };
    loadTasksFromServer();
  }, []);

  const fetchTasks = async () => {
    if (!isServerUp) {
      return [];
    }
    const res = await fetch(`${apiBase}${tasksBase}`);
    const data = await res.json();
    return data;
  };

  const deleteTask = async (id) => {
    if (!isServerUp) {
      setTasks(tasks.filter((task) => task.id !== id));
      return;
    }
    const res = await fetch(`${apiBase}${tasksBase}/${id}`, {
      method: 'DELETE',
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = async (task) => {
    const newTask = {
      id: `tid-${uuid()}`,
      ...task,
    };
    if (!isServerUp) {
      setTasks([
        ...tasks,
        {
          ...newTask,
        },
      ]);
      return;
    }
    const res = await fetch(`${apiBase}${tasksBase}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });
    setTasks([
      ...tasks,
      {
        ...newTask,
      },
    ]);
  };

  const updateTask = async (newTask) => {
    if (!isServerUp) {
      setTasks(tasks.map((task) => (task.id === newTask.id ? newTask : task)));
      return;
    }
    const res = await fetch(`${apiBase}${tasksBase}/${newTask.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });
    setTasks(tasks.map((task) => (task.id === newTask.id ? newTask : task)));
  };

  const toggleReminder = async (id) => {
    if (!isServerUp) {
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
      return;
    }
    const task = tasks.find((task) => task.id === id);
    task.reminder = !task.reminder;
    await updateTask(task);
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
      <div
        className={`online-status hover ${
          isServerUp ? 'bg-success' : 'bg-error'
        }`}
        title={`Server is ${isServerUp ? 'Online' : 'Offline'}`}
      ></div>
    </div>
  );
}
