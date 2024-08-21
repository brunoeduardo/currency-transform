import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-input',
  standalone: true,
  imports: [NgFor],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.scss'
})
export class SelectInputComponent {
  @Output() valueSelected = new EventEmitter<string>();

  // get this list from outside
  public list: Array<string> = [
    'USD',
    'BRL',
    'GBR',
    'EUR'
  ]

  onSelected(value: string) {
    this.valueSelected.emit(value)
  }
}
