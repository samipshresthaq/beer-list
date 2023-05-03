import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  EMPTY,
  catchError,
  distinctUntilChanged,
  retry,
  switchMap,
  tap,
} from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { BeerInterface } from 'src/app/models/beer.interface';

import { ItemService } from 'src/app/services/item.service';

enum Tabs {
  ALL_BEERS = 1,
  MY_BEERS = 2,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public active = Tabs.MY_BEERS;
  public isloading = false;
  public items$: Observable<Array<BeerInterface>>;
  private currentPage$: BehaviorSubject<number> = new BehaviorSubject(1);

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items$ = this.currentPage$.pipe(
      distinctUntilChanged(),
      switchMap((currentPage) => {
        return this.itemService.getItems(currentPage).pipe(
          tap(() => (this.isloading = false)),
          retry(2),
          catchError(() => EMPTY)
        );
      })
    );
  }

  loadMoreBeers() {
    this.isloading = true;
    this.currentPage$.next(this.currentPage$.value + 1);
  }

  onAddItem() {
    console.log('OPEN MODAL');
  }
}
