import React, { useState } from 'react';
import './AddTask.scss';
import Button from './../Button/Button';

const AddTask = ({ onCreate } = props) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!text || !date) {
      console.debug('Error');
      return;
    }
    onCreate({
      title: text,
      date,
      reminder,
    });
    clearForm();
  };

  const clearForm = () => {
    setText('');
    setDate('');
    setReminder('');
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
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <div className="form-btn-group">
          <Button
            text="Create"
            classlist={'btn-primary btn-full'}
            onClick={handleAdd}
          ></Button>
        </div>
      </form>
    </>
  );
};

export default AddTask;
