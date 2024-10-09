import React, { useEffect, useState } from 'react';
import './App.css';
import SelectInput from './components/select-input';
import ValueInput from './components/value-input';
import CalculateCurrency from './service/calculate-currency';
import { DataUpdate } from './model/data-update';

function App() {
  const title: string = 'Currency Changer';
  const list: Array<string> = [
    'USD',
    'BRL',
    'EUR'
  ]

  const [values, setValues] = useState<DataUpdate>({
    currencyTo: '',
    valueTo: '',
    currencyFrom: '',
    valueFrom: '',
    fieldUpdate: '',
    changeValue: ''
  })

  const updateValues = async (value: string, nameField: string) => {
    setValues(prev => ({ ...prev, [nameField]: value, fieldUpdate: nameField, changeValue: Math.random().toString() }))
  }

  useEffect(() => {
    const result: any = CalculateCurrency(values);
    if (result) {
      setValues(prev => ({ ...prev, [result.fieldName]: result.value }))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.changeValue])

  return (
    <div className="App">
      <h1 className="title">{title}</h1>
      <section className="changer-container">
        <div className="changer-content">
          <SelectInput value={values.currencyFrom} list={list} onChange={(value: string) => updateValues(value, "currencyFrom")}></SelectInput>
          <ValueInput value={values.valueFrom} onChange={(value: string) => updateValues(value, "valueFrom")}></ValueInput>
        </div >
        <div className="equal-signal"> == </div>
        <div className="changer-content">
          <SelectInput value={values.currencyTo} list={list} onChange={(value: string) => updateValues(value, "currencyTo")}></SelectInput>
          <ValueInput value={values.valueTo} onChange={(value: string) => updateValues(value, "valueTo")}></ValueInput>
        </div >
      </section >
    </div >

  );
}

export default App;
