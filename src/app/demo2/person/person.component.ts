import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  // Input() permet au composant de prendre des paramètres lors de la création
  @Input()
  id: number = 0;

  @Input()
  name: string = '';

  // Output() permet au composant d'envoyer des événements au parent
  @Output()
  onDelete = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  delete() {
    this.onDelete.emit(this.id);
  }
}
