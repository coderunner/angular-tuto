import { Component, OnDestroy, OnInit } from "@angular/core";
import { LocalStorageService } from "../local-storage.service";

/**
 * Identifie le composant et pointe vers les fichiers qui lui sont liés.
 *
 * Le 'selector' est le nom de l'élément a utiliser dans un fichier HTML
 * pour inclure ce composant.
 */
@Component({
  selector: "app-composant",
  templateUrl: "./composant.component.html",
  styleUrls: ["./composant.component.css"],
})
export class ComposantComponent implements OnInit, OnDestroy {
  private static STORAGE_KEY = "last_value_key";
  private static DEFAULT_VALUE = "inf5190";

  // Les variables publiques sont accessibles dans le template
  value: string = "";
  currentTimestamp = Date.now();

  constructor(private localStorageService: LocalStorageService) {
    console.log("construction");
  }

  // Accroche lors de l'initialisation du composant
  ngOnInit(): void {
    console.log("init");
    const stored = this.localStorageService.get(ComposantComponent.STORAGE_KEY);
    this.value = stored !== null ? stored : ComposantComponent.DEFAULT_VALUE;
  }

  // Accroche lors de la destruction du composant
  ngOnDestroy(): void {
    console.log("destruction");
  }

  // Lorsque la valeur change, on stock dans le LocalStorage
  onValueChange() {
    this.saveInLocalStorage();
  }

  // Sur un delete, on efface la variable et stock dans LocalStorage
  clear(event: MouseEvent) {
    this.value = "";
    this.saveInLocalStorage();
  }

  // Méthod publique pour convertir une chaîne de charactères en tableau de charactères
  toChar(s: string): string[] {
    return Array.from(s);
  }

  // Méthode privée pour centraliser la sauvegarde dans le LocalStorage
  private saveInLocalStorage() {
    this.localStorageService.set(ComposantComponent.STORAGE_KEY, this.value);
  }
}
