import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  EMPTY,
  catchError,
  distinctUntilChanged,
  of,
  retry,
  switchMap,
  tap,
} from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  BeerForm,
  BeerInterface,
  UserBeerInterface,
} from '../../models/beer.interface';
import { ItemService } from '../../services/item.service';
import { AddItemFormComponent } from '../../components/add-item-form/add-item-form.component';
import { LoggerService } from '../../services/logger.service';

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
        return of(this.itemService.getUserItems());
      })
    );
  }

  loadMoreBeers() {
    this.isloading = true;
    this.currentPage$.next(this.currentPage$.value + 1);
  }

  onAddItem() {
    const modalRef = this.modalService.open(AddItemFormComponent, {
      centered: true,
    });
    modalRef.componentInstance.itemForm = this.beerForm;
    modalRef.componentInstance.addNewItem.subscribe((add: boolean) => {
      if (!add) {
        return;
      }

      modalRef.componentInstance.isSaving = true;
      try {
        this.itemService.addUserItem(this.beerForm.value as UserBeerInterface);
        this.beerForm.reset();
        this.refreshUserPage$.next(true);
        modalRef.close();
        //Todo: Show added alert
      } catch (err) {
        this.logger.info(`Error while adding a new Beer! ${err}`);
        //Todo: Show error alert

        modalRef.componentInstance.isSaving = false;
      }
    });
  }

  private buildForm() {
    this.beerForm = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      tagline: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      image_url: ['../../../assets/beer.jpg', [Validators.required]],
    });
  }
}
