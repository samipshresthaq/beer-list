import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  NgbActiveModal,
  NgbProgressbarConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { BeerForm } from 'src/app/models/beer.interface';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss'],
})
export class AddItemFormComponent {
  @Input() itemForm: FormGroup<BeerForm>;
  @Input() isSaving: boolean = false;

  @Output() addNewItem: EventEmitter<boolean> = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal,
    config: NgbProgressbarConfig
  ) {
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '5px';
  }

  onAddItem(): void {
    if (this.itemForm.invalid) {
      return;
    }
    this.addNewItem.emit(true);
  }

  onClear(): void {
    this.itemForm.reset();
  }
}
