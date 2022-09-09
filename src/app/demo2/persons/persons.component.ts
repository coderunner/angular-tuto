import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Person } from '../person.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent implements OnInit {
  // On crée la structure du formulaire.
  // On assigne le formulaire et ses champs dans le HTML
  form = this.formBuilder.group({
    name: '',
  });

  @Input()
  persons: Person[] | null = null;

  @Output()
  addPerson = new EventEmitter<string>();

  @Output()
  deletePerson = new EventEmitter<number>();

  // Angular nous injecte les dépendances!
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.valid) {
      if (this.form.value.name) {
        this.addPerson.emit(this.form.value.name);
      }
      this.form.reset();
    }
  }

  delete(id: number) {
    this.deletePerson.emit(id);
  }
}
