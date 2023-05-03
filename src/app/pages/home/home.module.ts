import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { IngredientsPipe } from '../../pipes/ingredients.pipe';

import { ItemListComponent } from '../../components/item-list/item-list.component';
import { EmptyListComponent } from '../../components/empty-list/empty-list.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    NgbNavModule,
    NgbTooltipModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HomeComponent,
    ItemListComponent,
    EmptyListComponent,
    IngredientsPipe,
  ],
})
export class HomeModule {}
