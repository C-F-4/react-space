import React from 'react';
import './Task.scss';
import FrameBorder from './../FrameBorder/FrameBorder';
import Header from './../Header/Header';
import Button from './../Button/Button';

const Task = ({
  id,
  title,
  date,
  reminder,
  classlist,
  onDelete,
  onToggle,
} = props) => {
  const handleEdit = () => {
    console.log('title');
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleToggle = () => {
    onToggle(id);
  };

  return (
    <>
      <FrameBorder
        classlist={`p-10 border-none br-none bg-secondary ${classlist} ${
          reminder ? 'border-left border-success' : ''
        }`}
      >
        <Header title={title} classlist={`h6 mb-5`}>
          <Button
            classlist="btn-slim btn-delete"
            text={'Delete'}
            onClick={handleDelete}
          />
        </Header>
        <p className={'hover m-0'} onDoubleClick={handleToggle}>
          {date}
        </p>
      </FrameBorder>
    </>
  );
};

export default Task;
