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

  return (
    <>
      <FrameBorder classlist={'p-20'}>
        <Header title="Task Manager" classlist={'mb-20'}>
          <Button text="Add" classlist={'btn-primary'} />
        </Header>
        <div className={'mb-20'}>
          <AddTask onCreate={onAdd} />
        </div>
        {tasks?.length ? (
          tasks?.map((task) => (
            <Task
              id={task.id}
              title={task.title}
              date={task.date}
              reminder={task.reminder}
              key={task.id}
              classlist={'mb-10'}
              onToggle={onToggle}
              onDelete={onDelete}
            ></Task>
          ))
        ) : (
          <p>Start adding tasks to see some magic happen :)</p>
        )}
      </FrameBorder>
    </>
  );
};

export default Tasks;
