import React from 'react';
import './style.scss';
import FrameBorder from './components/FrameBorder/FrameBorder.js';
import Header from './components/Header/Header.js';
import Button from './components/Button/Button.js';

export default function App() {
  // const name = 'Bingo';
  // const hasName = true;
  return (
    <div className="app">
      <FrameBorder>
        <Header title="Head">
          <Button text="Add" classlist={'btn-primary'} />
        </Header>
        <p>Start editing to see some magic happen :)</p>
      </FrameBorder>
      {/* <h1>
        {hasName ? (
          <>
            Hello {name} {1 + 1}!
          </>
        ) : (
          `Hello World!`
        )}
      </h1> */}
    </div>
  );
}
