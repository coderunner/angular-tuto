import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  text: string = 'texte';

  ngOnInit(): void {}

  publicMethod(text: string) {
    this.text = text;
  }
}
