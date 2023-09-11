import { Component, Signal, computed } from "@angular/core";
import { FilterService } from "../filter.service";
import { Observable, map } from "rxjs";

const VEGETABLES = ["patate", "carotte", "navet"];
const FRUITS = ["pomme", "poire", "banane"];

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"],
})
export class PageComponent {
  filteredVegetables$: Observable<string[]>;
  filteredFruits: Signal<string[]>;

  constructor(private filterService: FilterService) {
    this.filteredVegetables$ = this.filterService.getFilterObservable().pipe(
      map((filter) => {
        if (filter) {
          return VEGETABLES.filter((item) =>
            item.toLowerCase().includes(filter.toLowerCase())
          );
        }
        return VEGETABLES;
      })
    );

    this.filteredFruits = computed(() => {
      const filter = this.filterService.getFilterSignal()();
      if (filter) {
        return FRUITS.filter((item) =>
          item.toLowerCase().includes(filter.toLowerCase())
        );
      }
      return FRUITS;
    });
  }
}
