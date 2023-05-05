import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BeerInterface, UserBeerInterface } from '../models/beer.interface';
import { LoggerService } from './logger.service';
import { catchError } from 'rxjs';
import { LocalStorageService } from './localStorage.service';

import { v4 as uuidv4 } from 'uuid';

const API = 'https://api.punkapi.com/v2/beers';
export const STORE_KEY = 'myBeers';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private logger: LoggerService
  ) {}

  getItems(page: number = 1, limit: number = 10) {
    const pagination = page && limit ? `?page=1&per_page=${page * limit}` : '';
    const requestURL = `${API}${pagination}`;
    return this.http.get<Array<BeerInterface>>(requestURL).pipe(
      catchError((error) => {
        this.logger.warn(`Error while fetching items ${error}!`);
        return [];
      })
    );
  }

  getUserItems(): Array<UserBeerInterface> {
    return this.localStorage.get<UserBeerInterface>(STORE_KEY);
  }

  addUserItem(item: UserBeerInterface): void {
    item.id = uuidv4();
    item.created = new Date();
    this.localStorage.set<UserBeerInterface>(STORE_KEY, item);
  }

  removeUserItem(id: string): void {
    let existingItems = this.getUserItems();
    existingItems = existingItems.filter((item) => item.id !== id);
    this.localStorage.setBulk<UserBeerInterface>(STORE_KEY, existingItems);
  }

  cleanMyItems(): void {
    this.localStorage.remove(STORE_KEY);
  }
}
