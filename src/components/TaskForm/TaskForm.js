import React, { useState, useEffect } from 'react';
import './TaskForm.scss';
import Button from './../Button/Button';

const TaskForm = ({ task, onCreate, onUpdate } = props) => {
  const [id, setId] = useState(task?.id || '');
  const [text, setText] = useState(task?.title || '');
  const [date, setDate] = useState(task?.date || '');
  const [reminder, setReminder] = useState(task?.reminder ?? false);

  useEffect(() => {
    setId(task.id);
    setText(task.title);
    setDate(task.date);
    setReminder(task.reminder);
    console.log('Triggered effect');
  }, [task]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !date) {
      console.debug('Error');
      return;
    }
    const newTask = {
      title: text,
      date,
      reminder,
    };
    if (!id) {
      onCreate({ ...newTask });
    } else {
      onUpdate({
        id,
        ...newTask,
      });
    }
    clearForm();
  };

  const clearForm = () => {
    setText('');
    setDate('');
    setReminder(false);
  };

  return (
    <>
      <form className="form-container pt-10 pb-10">
        <div className="form-group">
          <label htmlFor="" className="form-label">
            Task
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="form-label">
            Day & Time
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="Add Day & Time"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="form-label">
            Set Reminder
          </label>
          <input
            type="checkbox"
            className="form-input"
            checked={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <div className="form-btn-group">
          <Button
            text={task.id ? 'Update' : 'Create'}
            classlist={'btn-primary btn-full'}
            onClick={onSubmit}
          ></Button>
        </div>
      </form>
    </>
  );
};

export default TaskForm;
