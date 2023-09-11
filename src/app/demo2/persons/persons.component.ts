import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Subscription } from "rxjs";
import { Person } from "../person.model";
import { PersonService } from "../person.service";

@Component({
  selector: "app-persons",
  templateUrl: "./persons.component.html",
  styleUrls: ["./persons.component.css"],
})
export class PersonsComponent implements OnInit, OnDestroy {
  // On crée la structure du formulaire.
  // On assigne le formulaire et ses champs dans le HTML
  form = this.formBuilder.group({
    name: "",
  });

  persons: Person[] = [];

  private personsSubscription: Subscription;

  // Angular nous injecte les dépendances!
  constructor(
    private formBuilder: FormBuilder,
    private personService: PersonService
  ) {
    this.personsSubscription = this.personService
      .getPersons()
      .subscribe((persons) => (this.persons = persons));
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.personsSubscription) {
      this.personsSubscription.unsubscribe();
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (this.form.value.name) {
        this.personService.add(this.form.value.name);
      }
      this.form.reset();
    }
  }

  delete(id: number) {
    this.personService.delete(id);
  }
}
