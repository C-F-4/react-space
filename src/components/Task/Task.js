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
  onEdit,
  onDelete,
  onToggle,
} = props) => {
  const handleEdit = () => {
    onEdit(id);
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
          <div>
            <Button
              classlist="btn-slim btn-secondary mr-5"
              text={'Edit'}
              onClick={handleEdit}
            />
            <Button
              classlist="btn-slim btn-delete"
              text={'Delete'}
              onClick={handleDelete}
            />
          </div>
        </Header>
        <p className={'hover m-0'} onDoubleClick={handleToggle}>
          Remind on: {date}
        </p>
      </FrameBorder>
    </>
  );
};

export default Task;
