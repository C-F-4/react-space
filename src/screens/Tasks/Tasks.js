import React, { useState } from 'react';
import './Tasks.scss';
import FrameBorder from './../../components/FrameBorder/FrameBorder';
import Header from './../../components/Header/Header';
import Button from './../../components/Button/Button';
import Task from './../../components/Task/Task';
import TaskForm from './../../components/TaskForm/TaskForm';

const Tasks = ({ tasklist, onAdd, onUpdate, onDelete, onToggle } = props) => {
  // const [tasks, setTasks] = useState(tasklist);
  const tasks = tasklist;
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});

  const toggleAddForm = () => {
    setSelectedTask({});
    setShowAddForm(!showAddForm);
  };

  const editTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      console.log(task);
      setSelectedTask({ ...task });
      if (!showAddForm) {
        setShowAddForm(true);
      }
    }
  };

  return (
    <>
      <FrameBorder classlist={'p-20'}>
        <Header title="Task Manager">
          <Button
            text={showAddForm ? 'Cancel' : 'Add'}
            classlist={'btn-primary'}
            onClick={toggleAddForm}
          />
        </Header>
        {showAddForm && (
          <div className={`mt-10`}>
            <TaskForm
              task={selectedTask}
              onCreate={onAdd}
              onUpdate={onUpdate}
            />
          </div>
        )}
        <div className={`mt-10`}>
          {tasks?.length ? (
            tasks?.map((task) => (
              <Task
                task={task}
                key={task.id}
                classlist={`mt-10 ${
                  selectedTask.id === task.id ? 'editing' : ''
                }`}
                onEdit={() => {
                  editTask(task.id);
                }}
                onToggle={onToggle}
                onDelete={onDelete}
              ></Task>
            ))
          ) : (
            <p>Start adding tasks to see some magic happen :)</p>
          )}
        </div>
      </FrameBorder>
    </>
  );
};

export default Tasks;
