import React from 'react';
import './Tasks.scss';
import FrameBorder from './../../components/FrameBorder/FrameBorder';
import Header from './../../components/Header/Header';
import Button from './../../components/Button/Button';
import Task from './../../components/Task/Task';
import { Tasklist } from './../../mock-data/tasks';

const Tasks = () => {
  const handleAdd = () => {
    console.log('Add');
  };

  console.log(Tasklist);

  return (
    <>
      <FrameBorder>
        <Header title="Task Manager">
          <Button text="Add" classlist={'btn-primary'} onClick={handleAdd} />
        </Header>
        <p>Start adding tasks to see some magic happen :)</p>
        {Tasklist?.map((task) => (
          <Task title={task.title} key={task.id} classlist={'mb-5'}></Task>
        ))}
      </FrameBorder>
    </>
  );
};

export default Tasks;
