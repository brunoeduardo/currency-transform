import { Injectable } from '@angular/core';
import { DataUpdate } from '../model/data-update';
import { valueQuote } from '../model/value-quote';

@Injectable({
  providedIn: 'root'
})
export class ChangeCurrencyService {

  constructor() { }
  private currencyPrice: { [key: string]: valueQuote } = {
    'USDBRL': { typeStrong: true, value: 5.5257 },
    'BRLUSD': { typeStrong: false, value: 0.1809529 },
    'EURBRL': { typeStrong: true, value: 6.1762002 },
    'BRLEUR': { typeStrong: false, value: 0.1619119 },
    'USDEUR': { typeStrong: true, value: 0.8947745 },
    'EURUSD': { typeStrong: false, value: 1.1176 }
  }
  convertValue(valueObject: DataUpdate) {
    const getPrice = valueObject.fieldUpdate.includes('To') ?
      `${valueObject['currencyTo']}${valueObject['currencyFrom']}` :
      `${valueObject['currencyFrom']}${valueObject['currencyTo']}`;

    const getValue = valueObject.fieldUpdate.includes('To') ? valueObject['valueTo'] : valueObject['valueFrom'];
    const typeCalculation: valueQuote = this.currencyPrice[getPrice]
    const result = this.multiply(Number(getValue), typeCalculation.value)
    console.log('result multiply', result, valueObject.fieldUpdate)

    // update fields



  }

  multiply(value: number, price: number) {
    return (value * price)
  }

}
