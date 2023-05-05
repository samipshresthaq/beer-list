import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
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
  @Input() allowDelete: boolean = false;
  @Output() deleteItem: EventEmitter<string> = new EventEmitter();

  trackByItems(index: number, item: BeerInterface | UserBeerInterface): number {
    return index;
  }

  onItemDelete(id: string | number): void {
    this.deleteItem.emit(id as string);
  }
}
