import React from 'react';
import './style.scss';
import FrameBorder from './components/FrameBorder/FrameBorder.js';
import Header from './components/Header/Header.js';
import Button from './components/Button/Button.js';

export default function App() {
  const handleAdd = () => {
    console.log('Add');
  };

  return (
    <div className="app">
      <FrameBorder>
        <Header title="Head">
          <Button text="Add" classlist={'btn-primary'} onClick={handleAdd} />
        </Header>
        <p>Start editing to see some magic happen :)</p>
      </FrameBorder>
    </div>
  );
}
