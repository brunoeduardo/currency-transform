import { Component, computed, signal, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectInputComponent } from "./components/select-input/select-input.component";
import { ValueInputComponent } from "./components/value-input/value-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectInputComponent, ValueInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title: string = 'Currency Changer';

  updateValuesFrom(event: string) {
    console.log('updateValuesFrom =>', event)
  }

  updateValuesTo(event: string) {
    console.log('updateValuesTo =>', event)
  }



}
