import { Component, Signal, computed } from "@angular/core";
import { FilterService } from "../filter.service";
import { Observable, map } from "rxjs";

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"],
})
export class PageComponent {
  vegetables = ["patate", "carotte", "navet"];
  fruits = ["pomme", "poire", "banane"];

  filteredVegetables: Observable<string[]>;
  filteredFruits: Signal<string[]>;

  constructor(private filterService: FilterService) {
    this.filteredVegetables = this.filterService.getFilterObservable().pipe(
      map((filter) => {
        if (filter) {
          return this.vegetables.filter((item) =>
            item.toLowerCase().includes(filter.toLowerCase())
          );
        }
        return this.vegetables;
      })
    );

    this.filteredFruits = computed(() => {
      const filter = this.filterService.getFilterSignal()();
      if (filter) {
        return this.fruits.filter((item) =>
          item.toLowerCase().includes(filter.toLowerCase())
        );
      }
      return this.fruits;
    });
  }
}
