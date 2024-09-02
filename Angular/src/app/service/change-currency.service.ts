import { Injectable } from '@angular/core';
import { DataUpdate } from '../model/data-update';
import { valueQuote } from '../model/value-quote';

@Injectable({
  providedIn: 'root'
})
export class ChangeCurrencyService {

  constructor() { }

  private currencyPrice: { [key: string]: valueQuote } = {
    'USDBRL': { typeStrong: true, value: 5.6224 },
    'BRLUSD': { typeStrong: false, value: 0.177841 },
    'EURBRL': { typeStrong: true, value: 6.2229 },
    'BRLEUR': { typeStrong: false, value: 0.1606968 },
    'USDEUR': { typeStrong: true, value: 0.9035056 },
    'EURUSD': { typeStrong: false, value: 1.1068 }
  }
  convertValue(valueObject: DataUpdate): void {

    if (!valueObject['currencyTo'] || !valueObject['currencyFrom']) return;

    const isValueToCurrencyFrom = (valueObject.fieldUpdate === 'valueTo' || valueObject.fieldUpdate === 'currencyFrom')
    const getPrice = isValueToCurrencyFrom ?
      `${valueObject['currencyTo']}${valueObject['currencyFrom']}` :
      `${valueObject['currencyFrom']}${valueObject['currencyTo']}`;

    const getValue = isValueToCurrencyFrom ? valueObject['valueTo'] : valueObject['valueFrom'];
    const typeCalculation: valueQuote = this.currencyPrice[getPrice];
    const result = this.multiply(Number(getValue), typeCalculation.value);
    isValueToCurrencyFrom ? valueObject['valueFrom'] = result : valueObject['valueTo'] = result
  }

  multiply(value: number, price: number) {
    return (value * price)
  }
}
