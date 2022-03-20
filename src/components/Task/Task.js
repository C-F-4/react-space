import React from 'react';
import './Task.scss';
import { FaTrash } from 'react-icons/fa';
import FrameBorder from './../FrameBorder/FrameBorder';
import Header from './../Header/Header';
import Button from './../Button/Button';

const Task = ({ id, title, date, classlist, onDelete } = props) => {
  const handleEdit = () => {
    console.log('title');
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <>
      <FrameBorder classlist={'mb-10 p-10 border-none bg-secondary'}>
        <Header title={title} classlist={`h6 ${classlist}`}>
          <Button
            classlist="btn-slim btn-delete"
            text={'Delete'}
            onClick={handleDelete}
          />
        </Header>
        <p className={'m-0'}>{date}</p>
      </FrameBorder>
    </>
  );
};

export default Task;
