import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BeerForm } from 'src/app/models/beer.interface';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss'],
})
export class AddItemFormComponent {
  @Input() itemForm: FormGroup<BeerForm>;

  @Output() addItem: EventEmitter<FormGroup> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) {}

  onAddItem() {
    if (this.itemForm.invalid) {
      console.log(this.itemForm.value);
      return;
    }
    this.addItem.emit(this.itemForm);
  }

  onClear() {
    this.itemForm.reset();
  }
}
