import { Component, EventEmitter, Input, model, ModelSignal, Output } from '@angular/core';
import { DataStructure } from '../../model/data-structure';

@Component({
  selector: 'app-value-input',
  standalone: true,
  imports: [],
  templateUrl: './value-input.component.html',
  styleUrl: './value-input.component.scss'
})
export class ValueInputComponent {
  @Output() valueInput = new EventEmitter<DataStructure>();
  @Input() nameField: string = '';
  @Input() value: string | number = 0;
  public inputType: string = 'number'

  onChange(event: Event) {
    const data = {
      name: this.nameField,
      value: (event.target as HTMLInputElement).value
    }
    this.valueInput.emit(data)
  }
}
