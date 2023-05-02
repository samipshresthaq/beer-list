import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from 'src/app/components/item-list/item-list.component';
import { EmptyListComponent } from 'src/app/components/empty-list/empty-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
@NgModule({
  imports: [CommonModule, NgbNavModule, RouterModule.forChild(routes)],
  declarations: [HomeComponent, ItemListComponent, EmptyListComponent],
})
export class HomeModule {}
