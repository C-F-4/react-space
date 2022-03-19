import React from 'react';
import './style.scss';
import Header from './components/Header/Header.js';
import Button from './components/Button/Button.js';

export default function App() {
  const name = 'Bingo';
  const hasName = true;
  return (
    <div className="app">
      <Header />
      <Button text={'Add'} />
      <h1>
        {hasName ? (
          <>
            Hello {name} {1 + 1}!
          </>
        ) : (
          `Hello World!`
        )}
      </h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
