import { Component, OnInit } from '@angular/core';
import { EMPTY, catchError, retry } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { ItemService } from 'src/app/services/item.service';

enum Tabs {
  ALL_BEERS = 1,
  MY_BEERS = 2,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public active = Tabs.ALL_BEERS;
  public items$: Observable<any>;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items$ = this.itemService.getItems().pipe(
      retry(2),
      catchError(() => EMPTY)
    );
  }
}
