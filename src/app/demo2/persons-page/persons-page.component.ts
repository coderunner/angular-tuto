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

  // Dans le constructeur, on appelle le service pour récupérer la liste de personnes et
  // on s'abonne aux modifications.
  constructor(private personService: PersonService) {
    this.personSubscription = this.personService
      .getPersons()
      // Lorsque l'on reçoit une nouvelle valeur pour la liste, on met à jour la variable 'persons'
      .subscribe((persons) => (this.persons = persons));
  }

  ngOnInit(): void {}

  // On s'assure de bien de désabonner avant de mourrir, sinon fuite de mémoire
  ngOnDestroy(): void {
    if (this.personSubscription) {
      this.personSubscription.unsubscribe();
    }
  }

  // On appelle le service en réaction aux événements de l'enfant
  onAddPerson(name: string): void {
    this.personService.add(name);
  }

  onDeletePerson(id: number) {
    this.personService.delete(id);
  }
}
