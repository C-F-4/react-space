import React, { useState } from 'react';
import './Tasks.scss';
import FrameBorder from './../../components/FrameBorder/FrameBorder';
import Header from './../../components/Header/Header';
import Button from './../../components/Button/Button';
import Task from './../../components/Task/Task';

const Tasks = ({ tasklist, onDelete } = props) => {
  const [tasks, setTasks] = useState(tasklist);

  const handleAdd = () => {
    console.log('Add');
  };

  return (
    <>
      <FrameBorder classlist={'p-20'}>
        <Header title="Task Manager">
          <Button text="Add" classlist={'btn-primary'} onClick={handleAdd} />
        </Header>
        <p>Start adding tasks to see some magic happen :)</p>
        {tasks?.map((task) => (
          <Task
            id={task.id}
            title={task.title}
            date={task.date}
            key={task.id}
            classlist={'mb-10'}
            onDelete={onDelete}
          ></Task>
        ))}
      </FrameBorder>
    </>
  );
};

export default Tasks;
