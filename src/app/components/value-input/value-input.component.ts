import { Component, EventEmitter, model, ModelSignal, Output } from '@angular/core';

@Component({
  selector: 'app-value-input',
  standalone: true,
  imports: [],
  templateUrl: './value-input.component.html',
  styleUrl: './value-input.component.scss'
})
export class ValueInputComponent {
  @Output() valueInput = new EventEmitter<string>();

  public inputType: string = 'number'

  onChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.valueInput.emit(newValue)
  }
}
