import { NgFor } from '@angular/common';
import { Component, model, ModelSignal } from '@angular/core';

@Component({
  selector: 'app-select-input',
  standalone: true,
  imports: [NgFor],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.scss'
})
export class SelectInputComponent {
  // get this list from outside
  public list: Array<string> = [
    'USD',
    'BRL',
    'GBR',
    'EUR'
  ]
  public valueSelected: ModelSignal<string> = model.required<string>();

  onSelected(value: string) {
    console.log(value)
    this.valueSelected.update(() => value)
  }
}
