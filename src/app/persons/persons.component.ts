import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Person } from '../model/person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent implements OnInit, OnDestroy {
  // On crée la structure du formulaire.
  // On assigne le formulaire et ses champs dans le HTML
  form = this.formBuilder.group({
    name: '',
  });

  persons$: Observable<Person[]> = this.personService.getPersons();

  persons: Person[] = [];
  personSubscription: Subscription | undefined = undefined;

  // Angular nous injecte les dépendances!
  constructor(
    private personService: PersonService,
    private formBuilder: FormBuilder
  ) {
    this.personSubscription = this.personService
      .getPersons()
      .subscribe((persons) => (this.persons = persons));
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.personSubscription) {
      this.personSubscription.unsubscribe();
    }
  }

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
