import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-item',
  templateUrl: './alert-item.component.html',
})
export class AlertItemComponent {
  @Input() heading: string;
  @Input() message: string;

  @Output() confirm: EventEmitter<void> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) {}

  onConfirm(): void {
    this.confirm.emit();
  }
}
