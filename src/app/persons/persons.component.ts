import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Person } from '../model/person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent implements OnInit {
  // Angular nous injecte les dépendances!
  constructor(
    private personService: PersonService,
    private formBuilder: FormBuilder
  ) {}

  persons$: Observable<Person[]> = this.personService.getPersons();

  // On crée la structure du formulaire.
  // On assigne le formulaire et ses champs dans le HTML
  form = this.formBuilder.group({
    name: '',
  });

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.value.name) {
      this.personService.add(this.form.value.name);
    }
    this.form.reset();
  }

  delete(id: number) {
    this.personService.delete(id);
  }
}
