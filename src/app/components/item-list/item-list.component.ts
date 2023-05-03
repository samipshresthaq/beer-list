import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BeerInterface } from 'src/app/models/beer.interface';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListComponent {
  @Input() items: BeerInterface[] = [];

  trackByItems(index: number, item: BeerInterface): number {
    return item.id;
  }
}
