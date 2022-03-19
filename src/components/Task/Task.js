import React from 'react';
import './Task.scss';
import FrameBorder from './../FrameBorder/FrameBorder';
import Header from './../Header/Header';
// import Button from './../Button/Button';

const Task = ({ title, classlist } = props) => {
  const handleEdit = () => {
    console.log('Edit');
  };

  return (
    <>
      <Header title={title} classlist={`h6 ${classlist}`}></Header>
    </>
  );
};

export default Task;
