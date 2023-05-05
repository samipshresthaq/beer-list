import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-empty-list',
  templateUrl: './empty-list.component.html',
  styleUrls: ['./empty-list.component.scss'],
})
export class EmptyListComponent {
  @Output() public addItem = new EventEmitter<void>();

  onAdd(): void {
    this.addItem.emit();
  }
}
