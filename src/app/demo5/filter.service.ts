import { Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FilterService {
  private _filterSubject = new BehaviorSubject<string | null>("");
  private _filterSignal = signal<string | null>("");

  constructor() {}

  setFilter(value: string | null) {
    this._filterSubject.next(value);
    this._filterSignal.set(value);
  }

  getFilterObservable() {
    return this._filterSubject.asObservable();
  }

  getFilterSignal() {
    return this._filterSignal;
  }
}
