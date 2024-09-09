import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataStructure } from '../../model/data-structure';

@Component({
  selector: 'app-select-input',
  standalone: true,
  imports: [NgFor],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.scss'
})
export class SelectInputComponent {
  @Output() valueSelected = new EventEmitter<DataStructure>();
  @Input() nameField: string = '';
  @Input() value: string = '';

  // get this list from outside
  public list: Array<string> = [
    'USD',
    'BRL',
    'EUR'
  ]

  onSelected(value: string) {
    const data = {
      name: this.nameField,
      value
    }
    this.valueSelected.emit(data)
  }
}
