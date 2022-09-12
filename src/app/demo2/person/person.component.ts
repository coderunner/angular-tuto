import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  // Input() permet au composant de prendre des paramètres lors de la création
  // Le nom de l'attribut est le nom de la propriété à utiliser dans le HTML
  @Input()
  id: number = 0;

  @Input()
  name: string = '';

  // Output() permet au composant d'envoyer des événements au parent
  // Le type de l'output est un EventEmitter
  // Le nom de l'attribut est le nom de la propriété à utiliser dans le HTML
  @Output()
  onDelete = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  // Sur un événement delete, on émet l'id de l'élément et laisse le receveur de l'événement gérer la logique.
  delete() {
    this.onDelete.emit(this.id);
  }
}
