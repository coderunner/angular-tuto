import { Component, OnDestroy, OnInit } from '@angular/core';

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
  // Les variables publiques sont accessibles dans le template
  variable = 'abc';

  constructor() {
    console.log('construction');
  }

  // Accroche lors de l'initialisation du composant
  ngOnInit(): void {
    console.log('init');
  }

  // Accroche lors de la destruction du composant
  ngOnDestroy(): void {
    console.log('destruction');
  }

  delete(event: MouseEvent) {
    this.variable = '';
  }

  toChar(s: string): string[] {
    return Array.from(s);
  }
}
