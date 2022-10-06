import { Component, OnInit } from '@angular/core';
import { AsyncService } from '../async.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css'],
})
export class AsyncComponent implements OnInit {
  salutation: String = '...';

  constructor(private asyncService: AsyncService) {}

  ngOnInit(): void {}

  async onClick() {
    const n = await this.asyncService.getName();
    this.salutation = `Salut ${n}`;
  }
}
