import React, { useState } from 'react';
import './App.css';
import SelectInput from './components/select-input';
import ValueInput from './components/value-input';
import CalculateCurrency from './service/calculate-currency';
import { DataUpdate } from './model/data-update';

function App() {
  const title: string = 'Currency Changer';
  const [values, setValues] = useState<DataUpdate>({
    currencyTo: '',
    valueTo: 0,
    currencyFrom: '',
    valueFrom: 0,
    fieldUpdate: ''
  })

  const updateValues = async (value: string, nameField: string) => {
    setValues({ ...values, nameField: value, fieldUpdate: nameField })
    values[nameField] = value;
    values.fieldUpdate = nameField;
    const result: DataUpdate = await CalculateCurrency(values);
    setValues(result);
  }

  return (
    <div className="App">
      <h1 className="title">{title}</h1>
      <section className="changer-container">
        <div className="changer-content">
          <SelectInput value={values.currencyFrom} onChange={(value: string) => updateValues(value, "currencyFrom")}></SelectInput>
          <ValueInput value={values.valueFrom} onChange={(value: string) => updateValues(value, "valueFrom")}></ValueInput>
        </div >
        <div className="equal-signal"> == </div>
        <div className="changer-content">
          <SelectInput value={values.currencyTo} onChange={(value: string) => updateValues(value, "currencyTo")}></SelectInput>
          <ValueInput value={values.valueTo} onChange={(value: string) => updateValues(value, "valueTo")}></ValueInput>
        </div >
      </section >
    </div >

  );
}

export default App;
