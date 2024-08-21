import { Component, computed } from '@angular/core';
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
  public title: string = 'currency-transform';
  public currencyFieldFrom: string = '';
  public valueFieldFrom: string = '';
}
