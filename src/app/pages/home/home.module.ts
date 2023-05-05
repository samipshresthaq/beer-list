import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import {
  NgbModalModule,
  NgbNavModule,
  NgbProgressbarModule,
  NgbToastModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { IngredientsPipe } from '../../pipes/ingredients.pipe';

import { ItemListComponent } from '../../components/item-list/item-list.component';
import { EmptyListComponent } from '../../components/empty-list/empty-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddItemFormComponent } from 'src/app/components/add-item-form/add-item-form.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    NgbModalModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbProgressbarModule,
    NgbToastModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HomeComponent,
    ItemListComponent,
    EmptyListComponent,
    IngredientsPipe,
    AddItemFormComponent,
  ],
})
export class HomeModule {}
