import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  BeerInterface,
  UserBeerInterface,
} from 'src/app/models/beer.interface';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListComponent {
  @Input() items: Array<BeerInterface | UserBeerInterface> = [];

  trackByItems(index: number, item: BeerInterface | UserBeerInterface): number {
    return index;
  }
}
