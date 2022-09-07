import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

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
  variable: string;

  constructor(private localeStorageService: LocalStorageService) {
    console.log('construction');
    this.variable =
      this.localeStorageService.get(ComposantComponent.STORAGE_KEY) ||
      ComposantComponent.DEFAULT_NAME;
  }

  // Accroche lors de l'initialisation du composant
  ngOnInit(): void {
    console.log('init');
  }

  // Accroche lors de la destruction du composant
  ngOnDestroy(): void {
    console.log('destruction');
  }

  onChange() {
    this.localeStorageService.set(
      ComposantComponent.STORAGE_KEY,
      this.variable
    );
  }

  delete(event: MouseEvent) {
    this.variable = '';
  }

  toChar(s: string): string[] {
    return Array.from(s);
  }
}
