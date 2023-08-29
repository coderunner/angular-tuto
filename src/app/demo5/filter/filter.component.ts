import { Component, OnDestroy } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FilterService } from "../filter.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"],
})
export class FilterComponent implements OnDestroy {
  filter = this.fb.control("");

  valueSubscription: Subscription;

  constructor(private fb: FormBuilder, private filterService: FilterService) {
    this.valueSubscription = this.filter.valueChanges.subscribe((value) => {
      this.filterService.setFilter(value);
    });
  }

  ngOnDestroy(): void {
    if (this.valueSubscription != null) {
      this.valueSubscription.unsubscribe();
    }
  }
}
