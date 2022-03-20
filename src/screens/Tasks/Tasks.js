import React, { useState } from 'react';
import './Tasks.scss';
import FrameBorder from './../../components/FrameBorder/FrameBorder';
import Header from './../../components/Header/Header';
import Button from './../../components/Button/Button';
import Task from './../../components/Task/Task';
import AddTask from './../../components/AddTask/AddTask';

const Tasks = ({ tasklist, onAdd, onDelete, onToggle } = props) => {
  // const [tasks, setTasks] = useState(tasklist);
  const tasks = tasklist;
  const [showAddForm, setShowAddForm] = useState(false);

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
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
        <div className={`mt-10 ${showAddForm ? '' : 'd-none'}`}>
          <AddTask onCreate={onAdd} />
        </div>
        <div className={`mt-10`}>
          {tasks?.length ? (
            tasks?.map((task) => (
              <Task
                id={task.id}
                title={task.title}
                date={task.date}
                reminder={task.reminder}
                key={task.id}
                classlist={'mt-10'}
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
