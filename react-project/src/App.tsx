import React, { useState } from 'react';
import './App.css';
import SelectInput from './components/select-input';
import ValueInput from './components/value-input';

function App() {
  const title: string = 'Currency Changer';
  const [valueFrom, setValueFrom] = useState('');
  const [valueTo, setValueTo] = useState('');
  const [currencyFrom, setCurrencyFrom] = useState('');
  const [currencyTo, setCurrencyTo] = useState('');


  const updateValues = (value: string, nameField: string) => {
    console.log("event => ", value, nameField)
    setValueFrom(value)
  }

  return (
    <div className="App">
      <h1 className="title">{title}</h1>
      <section className="changer-container">
        <div className="changer-content">
          <SelectInput value={currencyFrom} onChange={(value: string) => updateValues(value, "currencyFrom")}></SelectInput>
          <ValueInput value={valueFrom} onChange={(value: string) => updateValues(value, "valueFrom")}></ValueInput>
        </div >
        <div className="equal-signal"> == </div>
        <div className="changer-content">
          <SelectInput value={currencyTo} onChange={(value: string) => updateValues(value, "currencyTo")}></SelectInput>
          <ValueInput value={valueTo} onChange={(value: string) => updateValues(value, "valueTo")}></ValueInput>
        </div >
      </section >

      <div>
        <h1>TEST</h1>
        {currencyFrom} <br></br>
        {currencyTo}
      </div>
    </div >

  );
}

export default App;
