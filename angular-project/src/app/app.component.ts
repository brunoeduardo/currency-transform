import { Component, computed, inject, signal, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectInputComponent } from "./components/select-input/select-input.component";
import { ValueInputComponent } from "./components/value-input/value-input.component";
import { ChangeCurrencyService } from './service/change-currency.service';
import { DataStructure } from './model/data-structure';
import { DataUpdate } from './model/data-update';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectInputComponent, ValueInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private changeCurrencyService = inject(ChangeCurrencyService)
  public title: string = 'Currency Changer';
  public dataObject: DataUpdate = {
    currencyFrom: '',
    valueFrom: 0,
    currencyTo: '',
    valueTo: 0,
    fieldUpdate: ''
  }

  async updateValues(event: DataStructure) {
    this.dataObject[event.name] = event.value;
    this.dataObject.fieldUpdate = event.name;
    this.changeCurrencyService.convertValue(this.dataObject);
  }
}
