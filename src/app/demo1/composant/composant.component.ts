import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

/**
 * Identifie le composant et pointe vers les fichiers qui lui sont liés.
 *
 * Le 'selector' est le nom de l'élément a utiliser dans un fichier HTML
 * pour inclure ce composant.
 */
@Component({
  selector: 'app-composant',
  templateUrl: './composant.component.html',
  styleUrls: ['./composant.component.css'],
})
export class ComposantComponent implements OnInit, OnDestroy {
  private static STORAGE_KEY = 'last_name_key';
  private static DEFAULT_NAME = 'Anna';

  // Les variables publiques sont accessibles dans le template
  variable: string = '';

  constructor(private localStorageService: LocalStorageService) {
    console.log('construction');
  }

  // Accroche lors de l'initialisation du composant
  ngOnInit(): void {
    console.log('init');
    const stored = this.localStorageService.get(ComposantComponent.STORAGE_KEY);
    this.variable = stored !== null ? stored : ComposantComponent.DEFAULT_NAME;
  }

  // Accroche lors de la destruction du composant
  ngOnDestroy(): void {
    console.log('destruction');
  }

  // Lorsque la valeur change, on stock dans le LocalStorage
  onValueChange() {
    this.saveInLocalStorage();
  }

  // Sur un delete, on efface la variable et stock dans LocalStorage
  delete(event: MouseEvent) {
    this.variable = '';
    this.saveInLocalStorage();
  }

  // Méthod publique pour convertir une chaîne de charactères en tableau de charactères
  toChar(s: string): string[] {
    return Array.from(s);
  }

  // Méthode privée pour centraliser la sauvegarde dans le LocalStorage
  private saveInLocalStorage() {
    this.localStorageService.set(ComposantComponent.STORAGE_KEY, this.variable);
  }
}
