import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  //@ViewChild('childInTemplate')
  @ViewChild(ChildComponent)
  child: ChildComponent | undefined;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    if (this.child) {
      this.child.setText(Math.random().toString());
    }
  }
}
