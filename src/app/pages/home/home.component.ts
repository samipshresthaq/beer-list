import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  EMPTY,
  catchError,
  distinctUntilChanged,
  map,
  of,
  retry,
  switchMap,
  tap,
} from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  BeerForm,
  BeerInterface,
  UserBeerInterface,
} from '../../models/beer.interface';
import { ItemService } from '../../services/item.service';
import { AddItemFormComponent } from '../../components/add-item-form/add-item-form.component';
import { LoggerService } from '../../services/logger.service';
import { AlertItemComponent } from 'src/app/components/alert-item/alert-item.component';

enum Tabs {
  ALL_BEERS = 1,
  MY_BEERS = 2,
}

type ToastType = 'primary' | 'success' | 'danger' | 'warning' | 'info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public active = Tabs.ALL_BEERS;
  public isloading = false;
  public autohideToast = true;
  public showToast = false;
  public toastType: ToastType = 'primary';
  public toastMessage: string;
  public beerForm: FormGroup<BeerForm>;
  public items$: Observable<Array<BeerInterface>>;
  public userItems$: Observable<Array<UserBeerInterface>>;
  private currentPage$: BehaviorSubject<number> = new BehaviorSubject(1);
  private refreshUserPage$: BehaviorSubject<boolean> = new BehaviorSubject(
    true
  );

  constructor(
    private itemService: ItemService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.buildForm();

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

    this.userItems$ = this.refreshUserPage$.pipe(
      switchMap((_) => {
        return of(this.itemService.getUserItems()).pipe(
          map((items) => (items.length > 0 ? items : null))
        );
      })
    );
  }

  loadMoreBeers(): void {
    this.isloading = true;
    this.currentPage$.next(this.currentPage$.value + 1);
  }

  onAddItem(): void {
    const modalRef = this.modalService.open(AddItemFormComponent, {
      centered: true,
    });
    modalRef.componentInstance.itemForm = this.beerForm;
    modalRef.componentInstance.addNewItem.subscribe((add: boolean) => {
      if (!add) {
        return;
      }

      this.handleNewItemAddtiion(modalRef);
    });
  }

  /**
   * Handles new item addition
   * @param modalRef Refrenece to bootstrap modal
   */
  handleNewItemAddtiion(modalRef: NgbModalRef): void {
    modalRef.componentInstance.isSaving = true;
    try {
      const newBeerName = this.beerForm.value.name;
      this.itemService.addUserItem(this.beerForm.value as UserBeerInterface);
      this.beerForm.reset();
      this.refreshUserPage$.next(true);
      modalRef.close();

      this.dislayToast(`${newBeerName} added successfully!`, 'success');
    } catch (err) {
      this.logger.info(`Error while adding a new Beer! ${err}`);

      this.dislayToast(`Adding ${this.beerForm.value.name} failed!`, 'danger');

      modalRef.componentInstance.isSaving = false;
    }
  }

  dislayToast(message: string, type: ToastType): void {
    this.toastMessage = message;
    this.showToast = true;
    this.toastType = type;
  }

  onRemoveItem(id: string): void {
    const modalRef = this.showAlert(
      'Delete item?',
      'Are you sure? This action cannot be undone.'
    );
    modalRef.componentInstance.confirm.subscribe(() => {
      this.itemService.removeUserItem(id);
      this.refreshUserPage$.next(true);
      modalRef.close();
      this.dislayToast(`Beer removed successfully!`, 'success');
    });
  }

  clearAllItems(): void {
    const modalRef = this.showAlert(
      'Clear all items?',
      'Are you sure? This action cannot be undone.'
    );
    modalRef.componentInstance.confirm.subscribe(() => {
      this.itemService.cleanMyItems();
      this.refreshUserPage$.next(true);
      modalRef.close();
      this.dislayToast(`All beer cleared successfully!`, 'success');
    });
  }

  showAlert(heading: string, message: string): NgbModalRef {
    const modalRef = this.modalService.open(AlertItemComponent, {
      centered: true,
    });

    modalRef.componentInstance.heading = heading;
    modalRef.componentInstance.message = message;

    return modalRef;
  }

  private buildForm(): void {
    this.beerForm = this.fb.nonNullable.group({
      name: ['', [Validators.required]],
      tagline: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image_url: ['../../../assets/beer.jpg', [Validators.required]],
    });
  }
}
