import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-persons-page',
  templateUrl: './persons-page.component.html',
  styleUrls: ['./persons-page.component.css'],
})
export class PersonsPageComponent implements OnInit, OnDestroy {
  personSubscription: Subscription;

  persons: Person[] = [];
  // async version
  // persons$ = this.personService.getPersons();

  constructor(private personService: PersonService) {
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

  onAddPerson(name: string) {
    this.personService.add(name);
  }

  onDeletePerson(id: number) {
    this.personService.delete(id);
  }
}
