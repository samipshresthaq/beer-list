import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BeerInterface } from '../models/beer.interface';

const API = 'https://api.punkapi.com/v2/beers';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  getItems(page?: number, limit?: number) {
    const pagination = page && limit ? `?page=${page}&per_page=${limit}` : '';
    const requestURL = `${API}${pagination}`;
    return this.http.get<BeerInterface>(requestURL);
  }
}
