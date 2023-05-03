import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BeerInterface } from '../models/beer.interface';

const API = 'https://api.punkapi.com/v2/beers';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  getItems(page: number = 1, limit: number = 10) {
    const pagination = page && limit ? `?page=1&per_page=${page * limit}` : '';
    const requestURL = `${API}${pagination}`;
    return this.http.get<Array<BeerInterface>>(requestURL);
  }
}
