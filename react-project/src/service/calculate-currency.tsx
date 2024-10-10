import { DataUpdate } from "../model/data-update";
import { valueQuote } from "../model/value-quote";

const currencyPrice: { [key: string]: valueQuote } = {
    'USDBRL': { typeStrong: true, value: 5.6224 },
    'BRLUSD': { typeStrong: false, value: 0.177841 },
    'EURBRL': { typeStrong: true, value: 6.2229 },
    'BRLEUR': { typeStrong: false, value: 0.1606968 },
    'USDEUR': { typeStrong: true, value: 0.9035056 },
    'EURUSD': { typeStrong: false, value: 1.1068 }
}

const multiply = (value: number, price: number): number => {
    return (value * price)
}

const CalculateCurrency = (valueObject: DataUpdate): { value: number, fieldName: string } | null => {
    if (
        (!valueObject.currencyTo || !valueObject.currencyFrom) ||
        (!valueObject.valueTo && !valueObject.valueFrom) ||
        (valueObject.currencyTo === valueObject.currencyFrom)
    ) return null;

    const isValueToCurrencyFrom = (valueObject.fieldUpdate === 'valueTo' || valueObject.fieldUpdate === 'currencyFrom')
    const getPrice = isValueToCurrencyFrom ?
        `${valueObject.currencyTo}${valueObject.currencyFrom}` :
        `${valueObject.currencyFrom}${valueObject.currencyTo}`;

    const getValue = isValueToCurrencyFrom ? valueObject.valueTo : valueObject.valueFrom;
    const typeCalculation: valueQuote = currencyPrice[getPrice];
    const result = multiply(Number(getValue), typeCalculation.value);

    return { value: result, fieldName: isValueToCurrencyFrom ? 'valueFrom' : 'valueTo' }
}

export default CalculateCurrency;