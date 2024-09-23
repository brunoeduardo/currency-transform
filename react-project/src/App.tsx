import React from 'react';
import './App.css';
import SelectInput from './components/select-input';

function App() {
  const title: string = 'Currency Changer';
  return (
    <div className="App">
      <h1 className="title">{title}</h1>
      <section className="changer-container">
        <div className="changer-content">
          <SelectInput></SelectInput>
        </div >
        <div className="equal-signal"> == </div>
        <div className="changer-content">
          <SelectInput></SelectInput>
        </div >
      </section >
    </div >
  );
}

export default App;
