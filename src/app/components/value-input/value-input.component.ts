import { Component, model, ModelSignal } from '@angular/core';

@Component({
  selector: 'app-value-input',
  standalone: true,
  imports: [],
  templateUrl: './value-input.component.html',
  styleUrl: './value-input.component.scss'
})
export class ValueInputComponent {
  public inputType: string = 'number'
  public valueInput: ModelSignal<string> = model.required<string>();


  onChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    console.log('input =>', newValue)
    this.valueInput.update(() => newValue)
  }
}
